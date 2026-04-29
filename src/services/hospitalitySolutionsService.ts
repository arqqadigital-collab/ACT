import {
  Hotel,
  Utensils,
  Laptop,
  LineChart,
  Ticket,
  Server,
  Cpu,
  Database,
  Settings,
  Shield,
  Monitor,
  Users,
  Globe,
  Lock,
  Eye,
  Zap,
  Headset,
  Briefcase,
  Network,
  Gauge,
  Activity,
  Wrench,
  Rocket,
  BarChart3,
  Phone,
  Calendar,
  Bell,
  Cloud,
  Award,
  Clock,
  CheckCircle,
  Building2,
  Wifi,
  CreditCard,
  Dumbbell,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || '/api/strapi';

// --- Icon mapping ---
const iconMap: Record<string, LucideIcon> = {
  Hotel,
  Utensils,
  Laptop,
  LineChart,
  Ticket,
  Server,
  Cpu,
  Database,
  Settings,
  Shield,
  Monitor,
  Users,
  Globe,
  Lock,
  Eye,
  Zap,
  Headset,
  Briefcase,
  Network,
  Gauge,
  Activity,
  Wrench,
  Rocket,
  BarChart3,
  Phone,
  Calendar,
  Bell,
  Cloud,
  Award,
  Clock,
  CheckCircle,
  Building2,
  Wifi,
  CreditCard,
  Dumbbell,
  Sparkles,
};

const getIconComponent = (name?: string): LucideIcon => {
  if (!name) return Hotel;
  return iconMap[name] || Hotel;
};

// --- Strapi raw types ---
interface StrapiSolutionItem {
  id: number;
  label: string;
  title: string;
  description: string;
  icon: string | null;
  order: number;
  image: {
    url: string;
  };
}

interface StrapiHospitalitySolution {
  id: number;
  documentId: string;
  badge: string | null;
  title: string | null;
  titleHighlight: string | null;
  description: string | null;
  supportingText: string | null;
  solutions: StrapiSolutionItem[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiHospitalitySolutionResponse {
  data: StrapiHospitalitySolution;
  meta: Record<string, unknown>;
}

// --- Clean output types ---
export interface HospitalitySolutionCard {
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  color: string;
}

export interface HospitalitySolutionsData {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  supportingText: string;
  cards: HospitalitySolutionCard[];
}

// --- Helpers ---
const getStrapiImageUrl = (url?: string): string => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
};

// --- Fetch function ---
export const fetchHospitalitySolutions = async (): Promise<HospitalitySolutionsData | null> => {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/hospitality-solution?populate[solutions][populate]=image`
    );

    if (!response.ok) {
      console.error('Failed to fetch hospitality solutions:', response.statusText);
      return null;
    }

    const data: StrapiHospitalitySolutionResponse = await response.json();

    if (!data.data) return null;

    const cards = (data.data.solutions || [])
      .sort((a, b) => a.order - b.order)
      .map((item) => ({
        label: item.label,
        title: item.title,
        description: item.description,
        icon: getIconComponent(item.icon ?? undefined),
        image: getStrapiImageUrl(item.image?.url),
        color: 'hsl(var(--primary))',
      }));

    return {
      badge: data.data.badge || 'Next-Gen Hospitality',
      title: data.data.title || 'Solutions for Hotels & Resorts',
      titleHighlight: data.data.titleHighlight || 'Hotels & Resorts',
      description: data.data.description || 'Smart technology to streamline operations and redefine guest satisfaction.',
      supportingText: data.data.supportingText || 'Supporting 500+ Properties Globally',
      cards,
    };
  } catch (error) {
    console.error('Error fetching hospitality solutions:', error);
    return null;
  }
};
