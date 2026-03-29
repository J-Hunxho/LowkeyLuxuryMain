/**
 * Tests for .env.example configuration template.
 *
 * This PR replaced the old Next.js-era environment variable set with a single
 * Vite-prefixed key (VITE_GEMINI_API_KEY) for the Gemini AI integration.
 * These tests verify the template documents exactly the required variables
 * and that legacy keys have been removed.
 */

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const ENV_EXAMPLE_PATH = resolve(__dirname, '../.env.example');

function parseEnvFile(content: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIndex = trimmed.indexOf('=');
    if (eqIndex === -1) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    const value = trimmed.slice(eqIndex + 1).trim();
    result[key] = value;
  }
  return result;
}

describe('.env.example', () => {
  let rawContent: string;
  let envVars: Record<string, string>;

  beforeEach(() => {
    rawContent = readFileSync(ENV_EXAMPLE_PATH, 'utf-8');
    envVars = parseEnvFile(rawContent);
  });

  // ── File existence & readability ────────────────────────────────────────────

  it('is readable as a UTF-8 text file', () => {
    expect(() => readFileSync(ENV_EXAMPLE_PATH, 'utf-8')).not.toThrow();
  });

  // ── Required variable presence ───────────────────────────────────────────────

  it('contains the VITE_GEMINI_API_KEY variable', () => {
    expect(envVars).toHaveProperty('VITE_GEMINI_API_KEY');
  });

  it('VITE_GEMINI_API_KEY has a non-empty placeholder value', () => {
    expect(envVars['VITE_GEMINI_API_KEY']).toBeTruthy();
    expect(envVars['VITE_GEMINI_API_KEY'].length).toBeGreaterThan(0);
  });

  it('VITE_GEMINI_API_KEY placeholder is not a real API key (still a template value)', () => {
    const value = envVars['VITE_GEMINI_API_KEY'];
    // A real Google AI Studio API key starts with "AIza" and is 39 chars;
    // the placeholder must NOT look like an actual key.
    expect(value).not.toMatch(/^AIza[0-9A-Za-z_-]{35}$/);
    // The placeholder string must be descriptive (contains letters/underscores)
    expect(value).toMatch(/^[a-z_]+$/i);
  });

  it('uses the Vite-standard VITE_ prefix for the API key', () => {
    expect('VITE_GEMINI_API_KEY').toMatch(/^VITE_/);
    expect(envVars).toHaveProperty('VITE_GEMINI_API_KEY');
  });

  // ── Minimal surface area (only one variable) ────────────────────────────────

  it('defines exactly one environment variable', () => {
    expect(Object.keys(envVars)).toHaveLength(1);
  });

  // ── Legacy Next.js / old-stack variables removed ────────────────────────────

  it('does not contain the legacy APP_URL variable', () => {
    expect(envVars).not.toHaveProperty('APP_URL');
  });

  it('does not contain the legacy ADMIN_API_KEY variable', () => {
    expect(envVars).not.toHaveProperty('ADMIN_API_KEY');
  });

  it('does not contain the legacy TELEGRAM_BOT_TOKEN variable', () => {
    expect(envVars).not.toHaveProperty('TELEGRAM_BOT_TOKEN');
  });

  it('does not contain the legacy TELEGRAM_BOT_USERNAME variable', () => {
    expect(envVars).not.toHaveProperty('TELEGRAM_BOT_USERNAME');
  });

  it('does not contain the legacy TELEGRAM_WEBHOOK_SECRET_TOKEN variable', () => {
    expect(envVars).not.toHaveProperty('TELEGRAM_WEBHOOK_SECRET_TOKEN');
  });

  it('does not contain the legacy STRIPE_SECRET_KEY variable', () => {
    expect(envVars).not.toHaveProperty('STRIPE_SECRET_KEY');
  });

  it('does not contain the legacy STRIPE_WEBHOOK_SECRET variable', () => {
    expect(envVars).not.toHaveProperty('STRIPE_WEBHOOK_SECRET');
  });

  it('does not contain the legacy HEALTHCHECK_REQUIRE_DB variable', () => {
    expect(envVars).not.toHaveProperty('HEALTHCHECK_REQUIRE_DB');
  });

  it('does not contain the legacy PRODUCT_CATALOG_JSON variable', () => {
    expect(envVars).not.toHaveProperty('PRODUCT_CATALOG_JSON');
  });

  // ── Format correctness ───────────────────────────────────────────────────────

  it('every non-blank, non-comment line follows KEY=VALUE format', () => {
    const lines = rawContent.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      expect(trimmed).toMatch(/^[A-Z_][A-Z0-9_]*=.+$/);
    }
  });

  it('contains no lines with unquoted spaces around the equals sign', () => {
    const lines = rawContent.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      // KEY = VALUE (with spaces around =) is technically valid in some shells
      // but breaks Vite's env loading; the template must use KEY=VALUE strictly.
      expect(trimmed).not.toMatch(/\s=\s/);
    }
  });
});