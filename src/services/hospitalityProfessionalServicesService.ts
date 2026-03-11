const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'https://positive-actor-b87a792057.strapiapp.com';

export interface ProfessionalServiceItem {
  id: number;
  title: string;
  description: string;
  order: number;
  image: {
    url: string;
  };
}

export interface HospitalityProfessionalServices {
  id: number;
  documentId: string;
  badge: string | null;
  heading: string | null;
  headingHighlight: string | null;
  services: ProfessionalServiceItem[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface HospitalityProfessionalServicesResponse {
  data: HospitalityProfessionalServices;
  meta: Record<string, unknown>;
}

const getStrapiImageUrl = (url?: string): string => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
};

export interface ProfessionalServiceData {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ProfessionalServicesData {
  badge: string;
  heading: string;
  headingHighlight: string;
  services: ProfessionalServiceData[];
}

export const fetchHospitalityProfessionalServices = async (): Promise<ProfessionalServicesData | null> => {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/hospitality-professional-service?populate[services][populate]=image`
    );

    if (!response.ok) {
      console.error('Failed to fetch hospitality professional services:', response.statusText);
      return null;
    }

    const data: HospitalityProfessionalServicesResponse = await response.json();

    if (!data.data) return null;

    const services = (data.data.services || [])
      .sort((a, b) => a.order - b.order)
      .map((service, index) => ({
        id: index + 1,
        title: service.title,
        description: service.description,
        image: getStrapiImageUrl(service.image?.url),
      }));

    return {
      badge: data.data.badge || 'Professional Services',
      heading: data.data.heading || "We don't just implement technology,",
      headingHighlight: data.data.headingHighlight || 'we ensure it performs to perfection.',
      services,
    };
  } catch (error) {
    console.error('Error fetching hospitality professional services:', error);
    return null;
  }
};
