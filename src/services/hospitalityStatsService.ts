const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'https://positive-actor-b87a792057.strapiapp.com';

export interface HospitalityStat {
  id: number;
  value: number;
  suffix: string;
  label: string;
  order: number;
}

export interface HospitalityStats {
  id: number;
  documentId: string;
  stats: HospitalityStat[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface HospitalityStatsResponse {
  data: HospitalityStats;
  meta: Record<string, unknown>;
}

export const fetchHospitalityStats = async (): Promise<HospitalityStat[]> => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/hospitality-stats?populate=*`);
    
    if (!response.ok) {
      console.error('Failed to fetch hospitality stats:', response.statusText);
      return [];
    }
    
    const data: HospitalityStatsResponse = await response.json();
    
    // Sort stats by order field
    const stats = data.data?.stats || [];
    return stats.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error fetching hospitality stats:', error);
    return [];
  }
};
