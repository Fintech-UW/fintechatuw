create table public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique check (lower(email) like '%@wisc.edu'),
  role text not null default 'member' check (role in ('member', 'admin')),
  membership_status text not null default 'pending' check (membership_status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  approved_at timestamptz
);

alter table public.profiles enable row level security;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
as $$
begin
  insert into public.profiles (user_id, email)
  values (new.id, lower(new.email));
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

create policy "Users read own profile"
on public.profiles
for select
to authenticated
using (auth.uid() = user_id);
