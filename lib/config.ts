import { Product } from '@/lib/types';

/**
 * Convert an optional environment-like string into a boolean.
 *
 * @param value - The input string to interpret; comparison is case-insensitive. If `undefined`, `fallback` is used.
 * @param fallback - Value to return when `value` is `undefined`.
 * @returns `true` if `value` (when defined) equals `'true'` case-insensitively, `fallback` if `value` is `undefined`, `false` otherwise.
 */
function parseBoolean(value: string | undefined, fallback: boolean): boolean {
  if (value === undefined) return fallback;
  return value.toLowerCase() === 'true';
}

/**
 * Parse a JSON string into an array of Product objects, keeping only entries that include both `id` and `stripePriceId`.
 *
 * @param raw - A JSON string representing an array of products; may be undefined or empty.
 * @returns `Product[]` containing products that have both `id` and `stripePriceId`. Returns an empty array if `raw` is falsy or cannot be parsed.
 */
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

/**
 * List required environment variable names that are not set.
 *
 * @returns An array of names from `requiredEnvVars` whose corresponding `process.env` value is falsy or undefined
 */
export function getMissingRequiredEnvVars(): string[] {
  return requiredEnvVars.filter((key) => !process.env[key]);
}
