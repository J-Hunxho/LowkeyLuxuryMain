import { NextResponse } from 'next/server';
import { config, getMissingRequiredEnvVars } from '@/lib/config';
import { pingDb } from '@/lib/db';

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
