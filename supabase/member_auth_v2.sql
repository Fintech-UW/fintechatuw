-- member_auth_v2.sql
--
-- Member-approval layer. Run AFTER member_auth_v1.sql (this depends on
-- public.profiles and its row-level security already existing).
--
-- Adds admin-gated RPCs, callable from the browser client via supabase.rpc():
--   * public.admin_list_pending()
--       -> pending members an officer needs to review (admin only)
--   * public.admin_set_membership_status(target_user_id uuid, new_status text)
--       -> approve / reject / reset one member (admin only)
--
-- There is deliberately NO in-app way to grant the 'admin' role. It can only
-- be set directly in the database.
--
-- =====================================================================
-- ADMIN BOOTSTRAP  (manual, one-time -- required, no other path exists)
-- =====================================================================
-- The first admin has to be created by hand, because approving members
-- requires an admin and initially there are none. Steps:
--
--   1. Have that person sign up through the normal login flow at
--      https://fintechuw.com/#/login so their row in public.profiles exists.
--   2. In the Supabase SQL editor, run ONCE, substituting their address:
--
--        update public.profiles
--        set role = 'admin'
--        where email = 'youremail@wisc.edu';
--
-- After that, this person can approve everyone else from the /admin page.
-- To add more admins later, repeat step 2 for each -- there is no UI for it.
-- =====================================================================


-- ---------------------------------------------------------------------
-- assert_caller_is_admin()
--
-- Shared admin check used by every RPC below, so "who counts as an admin"
-- has exactly one definition and cannot drift between functions.
--
-- SECURITY DEFINER: runs as the function owner, so it can read
-- profiles.role independent of the caller's RLS.
-- SET search_path: pinned to prevent the standard SECURITY DEFINER
-- search-path hijack (an attacker creating public objects that shadow
-- built-ins). Required, not optional.
--
-- auth.uid() still returns the *caller's* id inside a SECURITY DEFINER
-- function -- it reads the request JWT claims, not the executing role.
--
-- Raises on failure so the calling RPC's transaction aborts and the
-- client receives the error message. A null role, a missing profile
-- row, or any non-'admin' value all fail here.
-- ---------------------------------------------------------------------
create or replace function public.assert_caller_is_admin()
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  caller_id uuid := auth.uid();
  caller_role text;
begin
  if caller_id is null then
    raise exception 'Not authenticated' using errcode = '28000';
  end if;

  select role into caller_role
  from public.profiles
  where user_id = caller_id;

  if caller_role is distinct from 'admin' then
    raise exception 'Admin privileges required' using errcode = '42501';
  end if;
end;
$$;

-- Only callable internally by the SECURITY DEFINER RPCs below (they run as
-- the owner, so they keep execute access). Not exposed to clients directly.
revoke all on function public.assert_caller_is_admin() from public;
revoke all on function public.assert_caller_is_admin() from anon;
revoke all on function public.assert_caller_is_admin() from authenticated;


-- ---------------------------------------------------------------------
-- admin_list_pending()
--
-- The rows an officer needs to review. Admin only. Returns only
-- user_id / email / created_at -- never role, never membership_status,
-- never anyone who isn't 'pending'.
-- ---------------------------------------------------------------------
create or replace function public.admin_list_pending()
returns table (user_id uuid, email text, created_at timestamptz)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  perform public.assert_caller_is_admin();

  return query
  select p.user_id, p.email, p.created_at
  from public.profiles p
  where p.membership_status = 'pending'
  order by p.created_at asc;
end;
$$;

revoke all on function public.admin_list_pending() from public;
revoke all on function public.admin_list_pending() from anon;
grant execute on function public.admin_list_pending() to authenticated;


-- ---------------------------------------------------------------------
-- admin_set_membership_status(target_user_id uuid, new_status text)
--
-- Approve / reject / reset one member. Admin only.
--
--   * new_status must be exactly 'approved', 'rejected', or 'pending'
--   * the caller may not target their own row
--   * writes ONLY membership_status; approved_at is derived from it
--     ('approved' -> now(), anything else -> null)
--   * touches no other column, ever
--   * errors if the target profile does not exist
-- ---------------------------------------------------------------------
create or replace function public.admin_set_membership_status(
  target_user_id uuid,
  new_status text
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  perform public.assert_caller_is_admin();

  if new_status not in ('approved', 'rejected', 'pending') then
    raise exception 'Invalid membership status: %', new_status
      using errcode = '22023';
  end if;

  if target_user_id = auth.uid() then
    raise exception 'Cannot change your own membership status'
      using errcode = '42501';
  end if;

  update public.profiles
  set membership_status = new_status,
      approved_at = case when new_status = 'approved' then now() else null end
  where user_id = target_user_id;

  if not found then
    raise exception 'No profile found for user %', target_user_id
      using errcode = 'P0002';
  end if;
end;
$$;

revoke all on function public.admin_set_membership_status(uuid, text) from public;
revoke all on function public.admin_set_membership_status(uuid, text) from anon;
grant execute on function public.admin_set_membership_status(uuid, text) to authenticated;
