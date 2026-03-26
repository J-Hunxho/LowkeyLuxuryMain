import { config } from '@/lib/config';

const telegramApiBase = config.telegramBotToken
  ? `https://api.telegram.org/bot${config.telegramBotToken}`
  : null;

/**
 * Sends a text message to a Telegram chat using the configured bot.
 *
 * If the Telegram bot token is not configured, the function does nothing.
 *
 * @param chatId - Telegram chat identifier to send the message to
 * @param text - Message text to send
 */
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

/**
 * Configures the Telegram bot webhook to the specified endpoint.
 *
 * If the bot token or webhook secret token is not configured, the function returns without making a request. When configured, it registers `webhookUrl` with Telegram using the configured secret token and a predefined set of allowed update types.
 *
 * @param webhookUrl - The public HTTPS URL that Telegram should call for webhook updates
 */
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
