const STRAPI_URL =
  import.meta.env.VITE_STRAPI_URL ||
  '/api/strapi';

export interface HeroSection {
  id: number;
  documentId: string;
  headline: string;
  description: string;
  videoUrl: string;
  backgroundVideo?: {
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

export interface HeroSectionResponse {
  data: HeroSection;
  meta: Record<string, unknown>;
}

export const fetchHeroSection = async (): Promise<HeroSection | null> => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/hero-section?populate=*`);
    
    if (!response.ok) {
      console.error('Failed to fetch hero section:', response.statusText);
      return null;
    }
    
    const data: HeroSectionResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching hero section:', error);
    return null;
  }
};
