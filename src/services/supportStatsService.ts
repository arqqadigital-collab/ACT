import { Users, ThumbsUp, Headphones, Clock, LucideIcon } from 'lucide-react';

const API_URL = import.meta.env.VITE_STRAPI_URL || 'https://positive-actor-b87a792057.strapiapp.com';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Users,
  ThumbsUp,
  Headphones,
  Clock,
};

export interface SupportStat {
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface SupportStatsData {
  sectionTitle: string;
  sectionDescription: string;
  stats: SupportStat[];
}

interface StatItem {
  icon: string;
  value: string;
  label: string;
  order?: number;
}

export const getSupportStats = async (): Promise<SupportStatsData | null> => {
  try {
    const response = await fetch(`${API_URL}/api/support-stats?populate=stats`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch support stats');
    }

    const result = await response.json();
    const data = result.data;

    if (!data || !data.stats) {
      return null;
    }

    // Sort stats by order and map icons
    const stats = data.stats
      .sort((a: StatItem, b: StatItem) => (a.order || 0) - (b.order || 0))
      .map((stat: StatItem) => ({
        icon: iconMap[stat.icon] || Users,
        value: stat.value,
        label: stat.label,
      }));

    return {
      sectionTitle: data.sectionTitle || 'Our Support in Numbers',
      sectionDescription: data.sectionDescription || 'Delivering excellence across regions with measurable impact.',
      stats,
    };
  } catch (error) {
    console.error('Error fetching support stats:', error);
    return null;
  }
};
