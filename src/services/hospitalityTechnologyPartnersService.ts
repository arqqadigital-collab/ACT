const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || '/api/strapi';

export interface TechnologyPartner {
  name: string;
  logoUrl: string;
  order: number;
}

export interface HospitalityTechnologyPartnersData {
  title: string;
  description: string;
  footerText: string;
  partners: TechnologyPartner[];
}

const getStrapiImageUrl = (url?: string): string => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
};

interface StrapiPartnerBadge {
  alt: string;
  order: number;
  logo?: { url: string };
}

export const fetchHospitalityTechnologyPartners = async (): Promise<HospitalityTechnologyPartnersData | null> => {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/hospitality-technology-partners?populate[partners][populate]=logo`
    );

    if (!response.ok) {
      console.error('Failed to fetch hospitality technology partners:', response.statusText);
      return null;
    }

    const data = await response.json();

    if (!data.data) return null;

    const partners = (data.data.partners || [])
      .sort((a: StrapiPartnerBadge, b: StrapiPartnerBadge) => a.order - b.order)
      .map((p: StrapiPartnerBadge) => ({
        name: p.alt,
        logoUrl: getStrapiImageUrl(p.logo?.url),
        order: p.order,
      }));

    return {
      title: data.data.title || '',
      description: data.data.description || '',
      footerText: data.data.footerText || '',
      partners,
    };
  } catch (error) {
    console.error('Error fetching hospitality technology partners:', error);
    return null;
  }
};
