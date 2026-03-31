import { config } from '@/lib/config';
import { OrderRecord, Product, TelegramUserRecord } from '@/lib/types';

const memory = {
  products: config.catalogFallback,
  users: new Map<number, TelegramUserRecord>(),
  orders: new Map<string, OrderRecord>(),
};

export async function pingDb(): Promise<boolean> {
  return Boolean(config.databaseUrl) ? false : true;
}

export async function upsertTelegramUser(input: TelegramUserRecord): Promise<void> {
  memory.users.set(input.telegramUserId, input);
}

export async function listProducts(): Promise<Product[]> {
  return memory.products;
}

export async function replaceProducts(products: Product[]): Promise<void> {
  memory.products = products;
}

export async function insertOrder(order: OrderRecord): Promise<void> {
  memory.orders.set(order.stripeSessionId, order);
}
