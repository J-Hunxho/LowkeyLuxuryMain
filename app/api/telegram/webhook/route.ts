import { NextRequest, NextResponse } from 'next/server';
import { config } from '@/lib/config';
import { upsertTelegramUser } from '@/lib/db';
import { sendTelegramMessage, setTelegramWebhook } from '@/lib/telegram';

type TelegramUpdate = {
  message?: {
    text?: string;
    chat: { id: number };
    from?: {
      id: number;
      username?: string;
      first_name?: string;
      last_name?: string;
    };
  };
};

/**
 * Registers the Telegram webhook URL derived from the configured application URL.
 *
 * @returns A JSON response with `{ ok: true, webhookUrl }` on success; if `config.appUrl` is missing returns a 500 JSON error `{ error: 'APP_URL is not configured' }`.
 */
export async function GET() {
  if (!config.appUrl) {
    return NextResponse.json({ error: 'APP_URL is not configured' }, { status: 500 });
  }

  const webhookUrl = `${config.appUrl}/api/telegram/webhook`;
  await setTelegramWebhook(webhookUrl);
  return NextResponse.json({ ok: true, webhookUrl });
}

/**
 * Handle Telegram webhook POST requests by validating the secret and processing incoming updates.
 *
 * If the `x-telegram-bot-api-secret-token` header is missing or does not match configuration, the request is rejected.
 * For updates that include a `message`, the sender's profile is created or updated with the latest metadata and last-seen timestamp.
 * If the message text starts with `/start`, a welcome message containing a link to the app is sent to the chat.
 *
 * @returns `401` JSON `{ error: 'Unauthorized' }` when the webhook secret is missing or invalid; otherwise JSON `{ ok: true }`.
 */
export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-telegram-bot-api-secret-token');
  if (!secret || secret !== config.telegramWebhookSecretToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const update = (await request.json()) as TelegramUpdate;
  if (!update.message) {
    return NextResponse.json({ ok: true });
  }

  const { message } = update;
  const text = message.text ?? '';

  if (message.from) {
    await upsertTelegramUser({
      telegramUserId: message.from.id,
      username: message.from.username ?? null,
      firstName: message.from.first_name ?? null,
      lastName: message.from.last_name ?? null,
      lastSeenAt: new Date().toISOString(),
    });
  }

  if (text.startsWith('/start')) {
    const appLink = `${config.appUrl}/miniapp`;
    await sendTelegramMessage(
      message.chat.id,
      `Welcome to Lowkey Luxury. Open the app: ${appLink}`
    );
  }

  return NextResponse.json({ ok: true });
}
