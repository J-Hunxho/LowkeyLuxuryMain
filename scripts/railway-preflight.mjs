#!/usr/bin/env node

const required = [
  'APP_URL',
  'ADMIN_API_KEY',
  'TELEGRAM_BOT_TOKEN',
  'TELEGRAM_BOT_USERNAME',
  'TELEGRAM_WEBHOOK_SECRET_TOKEN',
  'STRIPE_SECRET_KEY',
  'STRIPE_WEBHOOK_SECRET',
];

const optional = ['HEALTHCHECK_REQUIRE_DB', 'PRODUCT_CATALOG_JSON'];

const missing = required.filter((key) => !process.env[key] || !String(process.env[key]).trim());

if (missing.length > 0) {
  console.error('\n❌ Railway preflight failed. Missing required environment variables:');
  for (const key of missing) {
    console.error(`   - ${key}`);
  }
  console.error('\nAdd them in Railway → Project → Variables, then redeploy.\n');
  process.exit(1);
}

const appUrl = process.env.APP_URL;

try {
  const parsed = new URL(appUrl);
  if (parsed.protocol !== 'https:') {
    throw new Error('APP_URL must use HTTPS in production.');
  }
} catch (error) {
  console.error(`\n❌ Invalid APP_URL: ${appUrl}`);
  console.error(`   ${error instanceof Error ? error.message : 'APP_URL must be a valid https URL.'}\n`);
  process.exit(1);
}

const weakSecrets = ['ADMIN_API_KEY', 'TELEGRAM_WEBHOOK_SECRET_TOKEN'].filter(
  (key) => String(process.env[key]).trim().length < 24,
);

if (weakSecrets.length) {
  console.error('\n❌ Railway preflight failed. The following secrets are too short (min 24 chars):');
  for (const key of weakSecrets) {
    console.error(`   - ${key}`);
  }
  console.error('\nUse long random values before deploying.\n');
  process.exit(1);
}

console.log('✅ Railway preflight passed. Required production variables are configured.');

for (const key of optional) {
  if (!process.env[key]) {
    console.log(`ℹ️ Optional variable not set: ${key}`);
  }
}
