# Lowkey Luxury

Lowkey Luxury is a Next.js 14 App Router website with integrated Telegram webhook surfaces, Stripe checkout workflows, and a Mini App storefront.

## Runtime stack

- Next.js App Router (Node.js runtime)
- React 18 + TypeScript
- Tailwind CSS + Framer Motion
- API routes for health, Telegram webhook, Stripe checkout, and Stripe webhook

## Entrypoints

- Web app: `/` and static pages under `app/*`
- Mini App storefront: `/miniapp`
- Health check: `/api/health`
- Telegram webhook: `/api/telegram/webhook`
- Stripe session creation: `/api/stripe/create-checkout-session`
- Stripe webhook: `/api/stripe/webhook`
- Admin settings API: `/api/admin/settings`

## Required environment variables

```bash
APP_URL=https://your-domain.com
ADMIN_API_KEY=replace-with-long-random-secret
TELEGRAM_BOT_TOKEN=...
TELEGRAM_BOT_USERNAME=Lowkeyluxurybot
TELEGRAM_WEBHOOK_SECRET_TOKEN=...
STRIPE_SECRET_KEY=...
STRIPE_WEBHOOK_SECRET=...
```

Optional:

```bash
HEALTHCHECK_REQUIRE_DB=false
PRODUCT_CATALOG_JSON=[{"id":"vip-membership","name":"VIP Membership","description":"Access to premium systems","stripePriceId":"price_123","amountUsdCents":9900,"active":true}]
```

## Local development

```bash
npm install
npm run dev
```

## Railway deployment (effortless path)

This repo is deployment-ready for Railway out of the box:

- `railway.toml` defines build/start/health checks.
- `scripts/railway-preflight.mjs` validates production env vars before build.
- `.env.railway.example` is a copy-ready template.

Quick path:

1. Connect repo to Railway.
2. Paste variables from `.env.railway.example` into Railway Variables.
3. Deploy.

The build command will auto-run:

```bash
npm ci --include=dev && npm run railway:preflight && npm run build
```

Detailed playbook: `docs/railway-deploy.md`.

## Telegram setup

1. Set all Telegram env vars.
2. Deploy app so `APP_URL` is publicly reachable via HTTPS.
3. Call `GET /api/telegram/webhook` once to register webhook.
4. In BotFather, set Mini App / WebApp URL to `https://your-domain.com/miniapp`.

## Stripe setup

1. Create Stripe Prices in your Stripe account.
2. Put those IDs in `PRODUCT_CATALOG_JSON` or update via admin API.
3. Configure Stripe webhook endpoint:
   - URL: `https://your-domain.com/api/stripe/webhook`
   - Event: `checkout.session.completed`
4. Use your Stripe signing secret in `STRIPE_WEBHOOK_SECRET`.

## Admin API

- `GET /api/admin/settings` with `Authorization: Bearer $ADMIN_API_KEY` returns product settings.
- `PUT /api/admin/settings` with the same auth and `{ "products": [...] }` updates live in-memory product settings.
