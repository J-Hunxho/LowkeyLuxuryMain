# Railway Deployment Playbook (Lowkey Luxury)

This guide is optimized for a near-zero friction deployment.

## 1) One-time setup

1. Create a new project in Railway.
2. Connect this GitHub repository.
3. Ensure **Node 20+** runtime is available (Nixpacks handles this automatically).

## 2) Configure variables

In Railway → **Project** → **Variables**, add everything from `.env.railway.example`.

> The build runs a preflight validator (`npm run railway:preflight`) and fails fast if required values are missing or weak.

## 3) Deploy

Railway reads `railway.toml` automatically:

- Build: `npm ci --include=dev && npm run railway:preflight && npm run build`
- Start: `next start -H 0.0.0.0 -p ${PORT:-3000}`
- Health check: `/api/health`

Once deployment completes, confirm health endpoint:

```bash
curl -i https://<your-domain>/api/health
```

## 4) Post-deploy integrations

### Telegram webhook

```bash
curl "https://<your-domain>/api/telegram/webhook"
```

### Stripe webhook

Set endpoint in Stripe dashboard:

- URL: `https://<your-domain>/api/stripe/webhook`
- Event: `checkout.session.completed`

Then copy the signing secret into `STRIPE_WEBHOOK_SECRET`.

## 5) Fast rollback strategy

- Keep deploys tied to Git commits.
- Use Railway deployment history to redeploy the last healthy commit if needed.

## 6) Pre-release local check

Before merging:

```bash
cp .env.railway.example .env.local
npm run deploy:railway:check
```

This verifies your production preflight and build path before Railway executes it.
