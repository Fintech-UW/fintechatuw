# Changelog

All notable changes to the Fintech@UW website are logged here, with rationale, so there's a record of what was done and why.

**Status key:** ✅ merged to `main` and deployed to fintechuw.com. Denied items are reverted and removed from this file entirely, not listed here.

## 2026-09-09 — Merged and deployed (PR #3)

All items below were approved individually, merged to `main` via [PR #3](https://github.com/Fintech-UW/fintechatuw/pull/3) (merge commit `b2520b2`), and deployed live via `npm run deploy`. Commit SHAs are their final form on `main` (rewritten once during a rebase onto `origin/main` after Sarah Crowe was added — see below).

- ✅ **Extract shared Navbar/Footer components; fix unreachable mobile nav.** Commit `b535d83`. Verified live: hamburger menu opens and reaches all 5 links (About, Events, Resources, The Team, Login) at mobile width.
- ✅ **Clean up Join link: remove stale Facebook tracking parameter.** Commit `3eb1a69`. (Modified from the original proposal — the `target="_blank"`/`rel` addition was dropped per feedback; Join still opens in the same tab as before.)
- ✅ **Make Team page member bios keyboard- and screen-reader-accessible.** Commit `0ceb874`. Reconciled by hand during the rebase to include Sarah Crowe's card (added to `main` independently via `80e3460`/`b16e207` while this branch was in progress) — her entry was manually merged into the `COMMITTEES` array and verified field-by-field against her original card. Verified live: both Sarah Crowe and Siddhant Choudhary show correctly in Operations Committee.
- ✅ **Center/span the odd-one-out card in committee grids.** Commit `2135ae1`. Added after Sarah's addition made Operations Committee 3-wide, which left the third card alone with dead space. Count-driven fix, not hardcoded to Operations/Siddhant. Verified live: Siddhant's card is centered with no dead space at mobile, ~700px, and desktop widths.
- ✅ **Optimize oversized hero image and team headshots.** Commit `dac0df6`. Visually reviewed and approved.
- ✅ **Remove dead code and orphaned asset files.** Commit `ec7cb8e`.
- ✅ **Fix GitHub Pages 404 on direct links to client-side routes.** Commit `e310ccf`. Verified live: `fintechuw.com/about` redirects to `/#/about` and renders the real page, not GitHub's 404.
- ✅ **Add per-page browser titles and meta descriptions.** Commit `15d6575`. Verified live: browser tab title changes per page (e.g. "About | Fintech@UW", "The Team | Fintech@UW").
- ✅ **Add robots.txt and a minimal sitemap.xml.** Commit `f97b807`.
- ✅ **Improve sponsor-logo alt text on the homepage.** Commit `a62fd84`.
- ✅ **Fix README: correct clone URL, close dangling fence, document setup.** Commit `abb0183`.

### Denied, not implemented
- **Fix duplicate `<h1>` per page (nav brand as `<span>`).** This was flagged as my own opinion in the Phase 1 audit and got implemented without asking — denied on that basis. Not in history. Open to a fresh proposal if still wanted.

### Not implemented (flagged for your input, still open)
- Whether/how officers should approve pending members — `supabase/member_auth_v1.sql` only has a read policy; there's no in-app or SQL path to flip `membership_status` to `approved`.
- Subjective design opinions from the Phase 1 audit (marquee scroll speed, PDF iframe reliability, "click to learn more" affordance styling).
- Dependency version bumps / `npm audit fix`.
- Adding CI (`.github/workflows`).

Branch `claude/club-website-audit-7811f9` is left in place per instruction (no branch cleanup done as part of this deploy).
