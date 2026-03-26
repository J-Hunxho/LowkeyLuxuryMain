import { Product } from '@/lib/types';

function parseBoolean(value: string | undefined, fallback: boolean): boolean {
  if (value === undefined) return fallback;
  return value.toLowerCase() === 'true';
}

function parseCatalog(raw: string | undefined): Product[] {
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw) as Product[];
    return parsed.filter((product) => Boolean(product.id && product.stripePriceId));
  } catch {
    return [];
  }
}

export const config = {
  appUrl: process.env.APP_URL ?? 'http://localhost:3000',
  nodeEnv: process.env.NODE_ENV ?? 'development',
  adminApiKey: process.env.ADMIN_API_KEY,
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
  telegramBotUsername: process.env.TELEGRAM_BOT_USERNAME,
  telegramWebhookSecretToken: process.env.TELEGRAM_WEBHOOK_SECRET_TOKEN,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  databaseUrl: process.env.DATABASE_URL,
  healthcheckRequireDb: parseBoolean(process.env.HEALTHCHECK_REQUIRE_DB, false),
  catalogFallback: parseCatalog(process.env.PRODUCT_CATALOG_JSON),
};

export const requiredEnvVars = [
  'TELEGRAM_BOT_TOKEN',
  'TELEGRAM_WEBHOOK_SECRET_TOKEN',
  'STRIPE_SECRET_KEY',
  'STRIPE_WEBHOOK_SECRET',
  'APP_URL',
  'ADMIN_API_KEY',
];

export function getMissingRequiredEnvVars(): string[] {
  return requiredEnvVars.filter((key) => !process.env[key]);
}
