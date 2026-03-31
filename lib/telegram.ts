import { config } from '@/lib/config';

const telegramApiBase = config.telegramBotToken
  ? `https://api.telegram.org/bot${config.telegramBotToken}`
  : null;

export async function sendTelegramMessage(chatId: number, text: string): Promise<void> {
  if (!telegramApiBase) return;

  await fetch(`${telegramApiBase}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });
}

export async function setTelegramWebhook(webhookUrl: string): Promise<void> {
  if (!telegramApiBase || !config.telegramWebhookSecretToken) return;

  await fetch(`${telegramApiBase}/setWebhook`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      url: webhookUrl,
      secret_token: config.telegramWebhookSecretToken,
      allowed_updates: ['message', 'callback_query', 'pre_checkout_query'],
      drop_pending_updates: false,
    }),
  });
}
