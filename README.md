# vMc Form Builder — Module 1: Foundation, Auth & Landing Page

This is the first working slice of the vMc Form Builder SaaS app. It's a real,
runnable Next.js project — not a mockup. Later modules will build the
drag-and-drop form builder, response management, analytics, templates,
integrations, and admin panel on top of this foundation.

## What's included in this module

- Next.js 15 + TypeScript + Tailwind CSS project structure
- Firebase Authentication: email/password + Google sign-in, password reset,
  email verification
- Firestore + Storage security rules (`firestore.rules`, `storage.rules`)
- A full landing page: hero, features, animated stats, testimonials, pricing,
  FAQ, footer — dark/light mode, glassmorphism, Framer Motion animation
- Protected dashboard shell with the full sidebar navigation

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create a Firebase project

1. Go to the [Firebase console](https://console.firebase.google.com) → **Add project**.
2. **Build → Authentication** → enable **Email/Password** and **Google** providers.
3. **Build → Firestore Database** → create in production mode.
4. **Build → Storage** → set up in production mode.
5. **Project settings → General → Your apps → Web app** → register an app and
   copy the config values.
6. **Project settings → Service accounts → Generate new private key** → save
   the JSON somewhere safe (not in this repo).

### 3. Configure environment variables

```bash
cp .env.local.example .env.local
```

Fill in the `NEXT_PUBLIC_FIREBASE_*` values from step 5, and the
`FIREBASE_ADMIN_*` values from the service account JSON in step 6 (the
private key needs its `\n` sequences kept literal — most hosting providers
handle this automatically when you paste the key as one line).

### 4. Deploy Firestore & Storage rules

```bash
npm install -g firebase-tools   # if you don't have the CLI yet
firebase login
firebase use --add               # select your project
firebase deploy --only firestore:rules,storage:rules
```

### 5. Run locally

```bash
npm run dev
```

Visit `http://localhost:3000` for the landing page, `/signup` to create an
account, and `/dashboard` once logged in.

## Testing this module

- Sign up with email — confirm you receive a verification email and the
  `/users/{uid}` doc appears in Firestore.
- Log in with Google — confirm a user doc is created/merged correctly.
- Try `/reset-password` — confirm the reset email arrives.
- Visit `/dashboard` while logged out — confirm you're redirected to `/login`.
- Toggle dark mode — confirm it persists across a page reload.

## Deployment

```bash
npm run build
firebase deploy --only hosting
```

(Hosting config in `firebase.json` assumes a static export; if you use
server-rendered routes/API routes in later modules, deploy to a Node-capable
host — e.g. Vercel or Cloud Run — instead of static Firebase Hosting.)

## Roadmap (next modules)

2. Dashboard data layer + drag-and-drop form builder (core field types,
   undo/redo, autosave, live preview)
3. Response management (search, filter, export to CSV/Excel/PDF/JSON)
4. Analytics dashboard (completion rate, device/browser breakdowns, charts)
5. Templates library (starting with ~15-20 real templates)
6. Integrations (Stripe/PayPal, Google Sheets, Slack, webhooks)
7. Admin panel (user/form management, roles, CMS)
8. White-label branding + custom domains + remaining polish
