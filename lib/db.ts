import { config } from '@/lib/config';
import { OrderRecord, Product, TelegramUserRecord } from '@/lib/types';

const memory = {
  products: config.catalogFallback,
  users: new Map<number, TelegramUserRecord>(),
  orders: new Map<string, OrderRecord>(),
};

/**
 * Indicates whether a database connection is not configured.
 *
 * @returns `true` if no database URL is configured, `false` otherwise.
 */
export async function pingDb(): Promise<boolean> {
  return Boolean(config.databaseUrl) ? false : true;
}

/**
 * Insert or update a Telegram user record in the in-memory users store.
 *
 * @param input - The Telegram user record to store; keyed by `input.telegramUserId`
 */
export async function upsertTelegramUser(input: TelegramUserRecord): Promise<void> {
  memory.users.set(input.telegramUserId, input);
}

/**
 * Retrieve the current in-memory product catalog.
 *
 * @returns The array of products currently stored in memory.
 */
export async function listProducts(): Promise<Product[]> {
  return memory.products;
}

/**
 * Replace the in-memory product catalog with the provided array.
 *
 * @param products - New array of products to set as the current in-memory catalog; this change is not persisted externally
 */
export async function replaceProducts(products: Product[]): Promise<void> {
  memory.products = products;
}

/**
 * Stores an order in the in-memory orders collection keyed by its Stripe session ID.
 *
 * @param order - The order to store; an existing entry with the same `stripeSessionId` will be replaced
 */
export async function insertOrder(order: OrderRecord): Promise<void> {
  memory.orders.set(order.stripeSessionId, order);
}
