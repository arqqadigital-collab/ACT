const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || '/api/strapi';

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  id: number;
  label: string;
  slug: string;
  description: string;
  href: string;
  icon: string;
  order: number;
  pageTitle?: string;
  pageDescription?: string;
  pageImage?: string;
  items?: ServiceItem[];
}

export interface ServiceContent {
  id: number;
  documentId: string;
  services: Service[];
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceResponse {
  data: ServiceContent;
  meta: Record<string, unknown>;
}

export interface ServicesPageHero {
  id: number;
  documentId: string;
  badge: string;
  headline: string;
  highlightText?: string;
  description: string;
  subDescription?: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: {
    id: number;
    url: string;
    name: string;
    ext: string;
    mime: string;
  };
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface ServicesPageHeroResponse {
  data: ServicesPageHero;
  meta: Record<string, unknown>;
}

export const fetchServices = async (): Promise<Service[]> => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/service?populate[services]=*`);
    
    if (!response.ok) {
      console.error('Failed to fetch services:', response.statusText);
      return [];
    }
    
    const data: ServiceResponse = await response.json();
    return data.data.services.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
};

export const fetchServiceBySlug = async (slug: string): Promise<Service | null> => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/service?populate[services]=*`);
    
    if (!response.ok) {
      console.error('Failed to fetch service:', response.statusText);
      return null;
    }
    
    const data: ServiceResponse = await response.json();
    return data.data.services.find(s => s.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
};

export const fetchServicesPageHero = async (): Promise<ServicesPageHero | null> => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/services-page-hero?populate=*`);
    
    if (!response.ok) {
      console.error('Failed to fetch services page hero:', response.statusText);
      return null;
    }
    
    const data: ServicesPageHeroResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching services page hero:', error);
    return null;
  }
};

// Helper function to get the full URL for Strapi images
export const getStrapiImageUrl = (url: string | undefined): string => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
};
