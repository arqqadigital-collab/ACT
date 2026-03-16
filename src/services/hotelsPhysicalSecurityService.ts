import { LucideIcon } from "lucide-react";
import {
  Camera,
  Bell,
  Volume2,
  Tv,
  Phone,
  Car,
  Shield,
  Wifi,
  Lock,
  Key,
} from "lucide-react";

const API_URL = import.meta.env.VITE_STRAPI_URL || "/api/strapi";

// Icon mapping for security systems
const securityIconMap: Record<string, LucideIcon> = {
  Camera,
  Bell,
  Volume2,
  Tv,
  Phone,
  Car,
  Shield,
  Wifi,
  Lock,
  Key,
};

interface StrapiSecuritySystem {
  icon: string;
  title: string;
  image: {
    url: string;
    alternativeText?: string;
  } | null;
  items: string[] | null;
  order: number;
}

export interface SecuritySystemItem {
  icon: LucideIcon;
  title: string;
  image: string;
  items: string[];
  order: number;
}

export interface HotelsPhysicalSecurityData {
  sectionTitle: string;
  sectionDescription?: string;
  systems: SecuritySystemItem[];
}

export async function fetchHotelsPhysicalSecurity(): Promise<HotelsPhysicalSecurityData | null> {
  try {
    const response = await fetch(
      `${API_URL}/api/hotels-physical-security?populate[systems][populate]=image`
    );

    if (!response.ok) {
      console.error("Failed to fetch hotels physical security data");
      return null;
    }

    const json = await response.json();
    const data = json.data;

    if (!data) {
      return null;
    }

    const systems = (data.systems || [])
      .map((system: StrapiSecuritySystem) => ({
        icon: securityIconMap[system.icon] || Camera,
        title: system.title,
        image: system.image?.url ? `${API_URL}${system.image.url}` : "",
        items: Array.isArray(system.items) ? system.items : [],
        order: system.order || 0,
      }))
      .sort((a: SecuritySystemItem, b: SecuritySystemItem) => a.order - b.order);

    return {
      sectionTitle: data.sectionTitle || "Physical Security & Smart Solutions",
      sectionDescription: data.sectionDescription,
      systems,
    };
  } catch (error) {
    console.error("Error fetching hotels physical security:", error);
    return null;
  }
}
