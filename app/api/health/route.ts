import { NextResponse } from 'next/server';
import { config, getMissingRequiredEnvVars } from '@/lib/config';
import { pingDb } from '@/lib/db';

/**
 * Responds with a JSON healthcheck summary for the application.
 *
 * Performs environment-variable presence checks and an optional database ping, then returns
 * the overall health status together with a timestamp, per-check results, and any missing env vars.
 *
 * @returns A JSON object containing:
 * - `ok`: `true` if no required environment variables are missing and the database check passed, `false` otherwise.
 * - `now`: Current timestamp as an ISO string.
 * - `checks`: An object with `env` (`true` when no required env vars are missing) and `db` (database health boolean).
 * - `missingEnv`: Array of names of missing required environment variables.
 */
export async function GET() {
  const missingEnv = getMissingRequiredEnvVars();
  let dbOk = true;

  if (config.databaseUrl) {
    try {
      dbOk = await pingDb();
    } catch {
      dbOk = false;
    }
  } else {
    dbOk = !config.healthcheckRequireDb;
  }

  const ok = missingEnv.length === 0 && dbOk;

  return NextResponse.json(
    {
      ok,
      now: new Date().toISOString(),
      checks: {
        env: missingEnv.length === 0,
        db: dbOk,
      },
      missingEnv,
    },
    { status: ok ? 200 : 503 }
  );
}
