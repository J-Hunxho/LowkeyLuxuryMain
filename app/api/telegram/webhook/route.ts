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

export async function GET() {
  if (!config.appUrl) {
    return NextResponse.json({ error: 'APP_URL is not configured' }, { status: 500 });
  }

  const webhookUrl = `${config.appUrl}/api/telegram/webhook`;
  await setTelegramWebhook(webhookUrl);
  return NextResponse.json({ ok: true, webhookUrl });
}

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
