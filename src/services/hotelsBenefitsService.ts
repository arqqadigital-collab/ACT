import { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Zap,
  BarChart3,
  Settings,
  Lock,
  Shield,
  Users,
  CheckCircle2,
  TrendingUp,
  Clock,
  DollarSign,
  Award,
} from "lucide-react";

const API_URL = import.meta.env.VITE_STRAPI_URL || "/api/strapi";

// Icon mapping for benefits
const benefitIconMap: Record<string, LucideIcon> = {
  Sparkles,
  Zap,
  BarChart3,
  Settings,
  Lock,
  Shield,
  Users,
  CheckCircle2,
  TrendingUp,
  Clock,
  DollarSign,
  Award,
};

export interface BenefitItem {
  icon: LucideIcon;
  text: string;
  order: number;
}

export interface HotelsBenefitsData {
  sectionTitle: string;
  benefits: BenefitItem[];
}

interface StrapiBenefit {
  icon: string;
  text: string;
  order: number;
}

export async function fetchHotelsBenefits(): Promise<HotelsBenefitsData | null> {
  try {
    const response = await fetch(
      `${API_URL}/api/hotels-benefits?populate=benefits`
    );

    if (!response.ok) {
      console.error("Failed to fetch hotels benefits data");
      return null;
    }

    const json = await response.json();
    const data = json.data;

    if (!data) {
      return null;
    }

    const benefits = (data.benefits || [])
      .map((benefit: StrapiBenefit) => ({
        icon: benefitIconMap[benefit.icon] || Sparkles,
        text: benefit.text,
        order: benefit.order || 0,
      }))
      .sort((a: BenefitItem, b: BenefitItem) => a.order - b.order);

    return {
      sectionTitle: data.sectionTitle || "Benefits for Hotels & Resorts",
      benefits,
    };
  } catch (error) {
    console.error("Error fetching hotels benefits:", error);
    return null;
  }
}
