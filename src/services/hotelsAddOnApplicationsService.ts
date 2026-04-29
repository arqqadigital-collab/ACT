import { LucideIcon } from "lucide-react";
import {
  Users,
  Wifi,
  Fingerprint,
  Gauge,
  Home,
  Shield,
  Building2,
  Settings,
  FileText,
  Sparkles,
  Dumbbell,
  Ticket,
  Heart,
  Camera,
  Bell,
  Volume2,
  Tv,
  Phone,
  Car,
  CheckCircle2,
  CreditCard,
  BarChart3,
  Key,
  Lock,
  Zap,
} from "lucide-react";

const API_URL = import.meta.env.VITE_STRAPI_URL || "/api/strapi";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Wifi,
  Fingerprint,
  Gauge,
  Home,
  Shield,
  Building2,
  Settings,
  FileText,
  Sparkles,
  Dumbbell,
  Ticket,
  Heart,
  Camera,
  Bell,
  Volume2,
  Tv,
  Phone,
  Car,
  CheckCircle2,
  CreditCard,
  BarChart3,
  Key,
  Lock,
  Zap,
};

export interface AddOnAppItem {
  icon: LucideIcon;
  title: string;
  description: string;
  subItems?: string[];
}

export interface HotelsAddOnApplicationsData {
  sectionTitle: string;
  sectionDescription: string;
  applications: AddOnAppItem[];
}

export async function fetchHotelsAddOnApplications(): Promise<HotelsAddOnApplicationsData | null> {
  try {
    const res = await fetch(
      `${API_URL}/api/hotels-add-on-application?populate=applications`
    );
    if (!res.ok) return null;
    const json = await res.json();
    const attrs = json.data;
    if (!attrs) return null;

    interface RawAddOnApp {
      icon: string;
      title: string;
      description: string;
      subItems?: string[];
      order?: number;
    }

    const rawApps: RawAddOnApp[] = attrs.applications || [];

    const applications: AddOnAppItem[] = rawApps
      .sort((a: RawAddOnApp, b: RawAddOnApp) => (a.order ?? 0) - (b.order ?? 0))
      .map((item: RawAddOnApp) => ({
        icon: iconMap[item.icon] || Users,
        title: item.title,
        description: item.description,
        subItems:
          item.subItems && Array.isArray(item.subItems)
            ? item.subItems
            : undefined,
      }));

    return {
      sectionTitle: attrs.sectionTitle || "Add-On Applications",
      sectionDescription:
        attrs.sectionDescription ||
        "Extend your hospitality ecosystem with powerful integrations",
      applications,
    };
  } catch (error) {
    console.error("Error fetching hotels add-on applications:", error);
    return null;
  }
}
