import { StackingCardData } from '@/components/StackingCards';
import { LucideIcon } from 'lucide-react';
import {
  Ticket,
  Heart,
  Dumbbell,
  Key,
  Building2,
  Utensils,
  Settings,
  Users,
  Sparkles,
  Shield,
  Wifi,
  Camera,
  Bell,
  Phone,
  CreditCard,
  BarChart3,
  Fingerprint,
  Gauge,
  Home,
  Lock,
  Zap,
  Star,
} from 'lucide-react';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'https://positive-actor-b87a792057.strapiapp.com';

// Icon map for resolving string icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Ticket,
  Heart,
  Dumbbell,
  Key,
  Building2,
  Utensils,
  Settings,
  Users,
  Sparkles,
  Shield,
  Wifi,
  Camera,
  Bell,
  Phone,
  CreditCard,
  BarChart3,
  Fingerprint,
  Gauge,
  Home,
  Lock,
  Zap,
  Star,
};

export interface HotelsEntertainmentWellnessData {
  badge: string;
  title: string;
  description: string;
  cards: StackingCardData[];
}

const getStrapiImageUrl = (url?: string): string => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
};

interface StrapiCard {
  label: string;
  icon: string;
  title: string;
  description: string;
  image?: { url: string };
  order: number;
}

export const fetchHotelsEntertainmentWellness = async (): Promise<HotelsEntertainmentWellnessData | null> => {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/hotels-entertainment-wellness?populate[cards][populate]=image`
    );

    if (!response.ok) {
      console.error('Failed to fetch hotels entertainment wellness:', response.statusText);
      return null;
    }

    const data = await response.json();

    if (!data.data) return null;

    const cards: StackingCardData[] = (data.data.cards || [])
      .sort((a: StrapiCard, b: StrapiCard) => a.order - b.order)
      .map((card: StrapiCard) => ({
        label: card.label || '',
        icon: iconMap[card.icon] || Ticket,
        title: card.title || '',
        description: card.description || '',
        color: 'hsl(var(--primary))',
        image: getStrapiImageUrl(card.image?.url),
      }));

    return {
      badge: data.data.badge || 'Entertainment & Wellness Segment',
      title: data.data.title || 'Entertainment & Wellness Segment',
      description: data.data.description || '',
      cards,
    };
  } catch (error) {
    console.error('Error fetching hotels entertainment wellness:', error);
    return null;
  }
};
