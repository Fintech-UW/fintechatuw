# Fintech@UW Website 🌐

Welcome to the official website for **Fintech@UW**, the University of Wisconsin–Madison's student organization dedicated to exploring the intersection of finance and technology.

## 💡 Overview

This website serves as the hub for Fintech@UW — sharing information about our mission, upcoming events, and member engagement opportunities. Built with a modern tech stack, the site is designed for scalability, accessibility, and ease of use for both members and club leadership.

## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **Auth / Database:** Supabase (member login + approval workflow)
- **Hosting:** GitHub Pages, via the `gh-pages` package, on the custom domain `fintechuw.com`

## 🚀 Features

- Responsive design for desktop and mobile
- Dynamic homepage with upcoming events and club information
- Event signup functionality (can integrate with third-party tools)
- Member login with @wisc.edu email + officer-approved member portal
- Simple architecture for easy updates and content changes

## 🔧 Getting Started

To run the project locally:

```bash
git clone https://github.com/Fintech-UW/fintechatuw.git
cd fintechatuw
npm install
npm run dev
```

The public site (Home, About, Events, Resources, Team) works with no further setup.

## 🔐 Member Login Setup (optional)

The Login / Member Portal pages need a Supabase project to function. Without it, the site still runs — the Login page just shows an "Auth is not configured yet" message.

1. Create a Supabase project.
2. Run the SQL in [`supabase/member_auth_v1.sql`](supabase/member_auth_v1.sql) against it (Supabase SQL editor) to create the `profiles` table, the auto-profile trigger, and row-level security policy.
3. Copy `.env.example` to `.env` and fill in your project's values:
   ```bash
   cp .env.example .env
   ```
   ```
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-public-anon-key
   ```
4. Restart `npm run dev`.

New sign-ups land with `membership_status = 'pending'` and currently need to be approved manually by an officer in the Supabase Table Editor (there is no in-app approval screen yet).

## 📦 Deploying

```bash
npm run build
npm run deploy
```

`npm run deploy` publishes the contents of `dist/` to the `gh-pages` branch via the `gh-pages` package, which GitHub Pages serves at `fintechuw.com` (see `public/CNAME`).

## 🧹 Linting

```bash
npm run lint
```
