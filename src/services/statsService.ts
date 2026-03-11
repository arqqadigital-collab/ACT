const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'https://positive-actor-b87a792057.strapiapp.com';

export interface Stat {
  id: number;
  end: number;
  suffix: string;
  label: string;
  icon: string;
  iconSize: number;
  order: number;
}

export interface StatsSection {
  id: number;
  documentId: string;
  stats: Stat[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StatsResponse {
  data: StatsSection;
  meta: Record<string, unknown>;
}

export const fetchStats = async (): Promise<Stat[]> => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/stats-section?populate=*`);
    
    if (!response.ok) {
      console.error('Failed to fetch stats section:', response.statusText);
      return [];
    }
    
    const data: StatsResponse = await response.json();
    
    // Sort stats by order field
    const stats = data.data?.stats || [];
    return stats.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error fetching stats section:', error);
    return [];
  }
};
