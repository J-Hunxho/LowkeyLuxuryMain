# Lowkey Luxury

Lowkey Luxury is a Vite + React + TypeScript experience that combines:
- a luxury-themed front-end,
- an AI consultant chat powered by Gemini,
- simple auth simulation,
- service booking and payment UI flows.

This repository is now configured to deploy cleanly on **Railway** with minimal setup.

## 1) Deployment Readiness Checklist

- ✅ Node engine pinned to `>=20`
- ✅ Railway build and start commands defined (`railway.toml`)
- ✅ Production start script binds to `0.0.0.0:$PORT`
- ✅ Gemini client package switched to a supported SDK (`@google/generative-ai`)
- ✅ Vite-safe environment variables (`import.meta.env.VITE_*`)

## 2) Quick Deploy on Railway

### Option A — One-click from GitHub

1. Push this repository to GitHub.
2. In Railway: **New Project** → **Deploy from GitHub repo**.
3. Select this repository.
4. Add environment variable:
   - `VITE_GEMINI_API_KEY=your_google_ai_studio_key`
5. Deploy.

Railway will use:
- `npm ci && npm run build` for build
- `npm run start` for runtime

(from `railway.toml`).

### Option B — Manual Railway service settings

If you prefer to set commands in the Railway dashboard:
- **Install Command:** `npm ci`
- **Build Command:** `npm run build`
- **Start Command:** `npm run start`

## 3) Local Development

### Prerequisites
- Node.js 20+
- npm 10+

### Setup

```bash
npm install
cp .env.example .env.local
```

Then edit `.env.local`:

```bash
VITE_GEMINI_API_KEY=your_google_ai_studio_key
```

Run locally:

```bash
npm run dev
```

Build check:

```bash
npm run build
npm run preview
```

## 4) Environment Variables

| Variable | Required | Description |
|---|---:|---|
| `VITE_GEMINI_API_KEY` | Yes (for AI chat) | Google AI Studio API key used by the Gemini client in browser runtime. |

> Important: This is a client-side Vite variable (`VITE_` prefix). Do not use server-only secret naming for front-end access.

## 5) Feature Integration Notes

### Gemini Chat
- File: `services/geminiService.ts`
- Uses `gemini-1.5-flash` with a system prompt tuned for executive consulting tone.
- If `VITE_GEMINI_API_KEY` is missing, the app degrades gracefully and returns a configuration message instead of crashing.

### Auth / Booking / Payment Components
- Current auth + booking + payment paths are UI and mock-workflow oriented.
- Backend integration points are straightforward:
  - Replace mock functions in `services/mockBackend.ts`
  - Wire `AuthContext` methods to your real auth provider
  - Attach `PaymentForm` to Stripe/Checkout service

## 6) Production Hardening (Recommended Next)

If you want enterprise-grade production:
1. Move Gemini calls behind a backend API (to avoid exposing API keys in browser code).
2. Add request throttling and abuse prevention on AI endpoints.
3. Add structured logging and monitoring (Sentry + Railway logs).
4. Add tests:
   - unit tests for service modules
   - Playwright smoke test for `/` render and chat fallback state

## 7) Project Scripts

```bash
npm run dev      # local dev server
npm run build    # production build
npm run start    # railway/prod preview server bound to PORT
npm run preview  # local preview server
```

---

If you'd like, I can also add a minimal secure Node/Express API proxy in this repo so the Gemini key never touches the browser.
