# Lowkey Luxury

Lowkey Luxury is a Next.js 14 App Router website with an integrated Telegram bot webhook surface, Stripe checkout flow, and a Mini App storefront.

## Runtime stack

- Next.js App Router (Node.js runtime)
- React 18 + TypeScript
- Tailwind CSS + Framer Motion
- API routes for health, Telegram webhook, Stripe checkout and Stripe webhook

## Entrypoints

- Web app: `/` and static marketing pages under `app/*`
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
# If true, /api/health requires database availability.
HEALTHCHECK_REQUIRE_DB=false

# Dynamic product fallback catalog (JSON array)
PRODUCT_CATALOG_JSON=[{"id":"vip-membership","name":"VIP Membership","description":"Access to premium systems","stripePriceId":"price_123","amountUsdCents":9900,"active":true}]
```

## Local development

```bash
npm install
npm run dev
```

## Production (Railway)

`railway.toml` is configured to use Nixpacks and start with `npm run start`.

```bash
npm run build
npm run start
```

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

