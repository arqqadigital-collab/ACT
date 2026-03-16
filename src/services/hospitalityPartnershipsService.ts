const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || '/api/strapi';

export interface PartnerBadge {
  id: number;
  alt: string;
  order: number;
  logo: {
    url: string;
  };
}

export interface HospitalityPartnership {
  id: number;
  documentId: string;
  title: string;
  description: string | null;
  badges: PartnerBadge[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface HospitalityPartnershipResponse {
  data: HospitalityPartnership;
  meta: Record<string, unknown>;
}

const getStrapiImageUrl = (url?: string): string => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
};

export const fetchHospitalityPartnerships = async (): Promise<{
  title: string;
  description: string;
  badges: { alt: string; logoUrl: string; order: number }[];
} | null> => {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/hospitality-partnership?populate[badges][populate]=logo`
    );

    if (!response.ok) {
      console.error('Failed to fetch hospitality partnerships:', response.statusText);
      return null;
    }

    const data: HospitalityPartnershipResponse = await response.json();

    if (!data.data) return null;

    const badges = (data.data.badges || [])
      .sort((a, b) => a.order - b.order)
      .map((badge) => ({
        alt: badge.alt,
        logoUrl: getStrapiImageUrl(badge.logo?.url),
        order: badge.order,
      }));

    return {
      title: data.data.title,
      description: data.data.description || '',
      badges,
    };
  } catch (error) {
    console.error('Error fetching hospitality partnerships:', error);
    return null;
  }
};
