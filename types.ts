export interface Review {
  id: number;
  clientName: string;
  role: string;
  rating: number;
  content: string;
  resolution: string;
  imageUrl?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ServiceTier {
  id: string;
  name: string;
  price: number;
  period: string; // e.g. "One-time", "/mo", "/yr"
  features: string[];
  description?: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  tiers?: ServiceTier[];
}

export interface BookingDetails {
  serviceId: string;
  date: string;
  time: string;
}