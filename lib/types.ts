export type Product = {
  id: string;
  name: string;
  description: string;
  stripePriceId: string;
  amountUsdCents: number;
  active: boolean;
};

export type TelegramUserRecord = {
  telegramUserId: number;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  lastSeenAt: string;
};

export type OrderRecord = {
  id: string;
  stripeSessionId: string;
  stripePaymentIntentId: string | null;
  stripeCustomerEmail: string | null;
  amountTotalCents: number;
  currency: string;
  status: string;
  telegramUserId: number | null;
  productId: string | null;
  createdAt: string;
};
