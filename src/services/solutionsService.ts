const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'https://positive-actor-b87a792057.strapiapp.com';

export interface Solution {
  id: number;
  number: string;
  title: string;
  slug: string;
  subtitle: string;
  shortDescription: string;
  icon: string;
  order: number;
  pageTitle: string;
  pageDescription: string;
  capabilitiesTitle?: string;
  capabilities?: string[];
  additionalContent?: string;
  cardImage?: string;
  pageImage?: string;
}

export interface SolutionContent {
  id: number;
  documentId: string;
  solutions: Solution[];
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface SolutionResponse {
  data: SolutionContent;
  meta: Record<string, unknown>;
}

export interface SolutionsPageHero {
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

export interface SolutionsPageHeroResponse {
  data: SolutionsPageHero;
  meta: Record<string, unknown>;
}

export const fetchSolutions = async (): Promise<Solution[]> => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/solution?populate[solutions]=*`);
    
    if (!response.ok) {
      console.error('Failed to fetch solutions:', response.statusText);
      return [];
    }
    
    const data: SolutionResponse = await response.json();
    return data.data.solutions.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error fetching solutions:', error);
    return [];
  }
};

export const fetchSolutionBySlug = async (slug: string): Promise<Solution | null> => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/solution?populate[solutions]=*`);
    
    if (!response.ok) {
      console.error('Failed to fetch solution:', response.statusText);
      return null;
    }
    
    const data: SolutionResponse = await response.json();
    return data.data.solutions.find(s => s.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching solution:', error);
    return null;
  }
};

export const fetchSolutionsPageHero = async (): Promise<SolutionsPageHero | null> => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/solutions-page-hero?populate=*`);
    
    if (!response.ok) {
      console.error('Failed to fetch solutions page hero:', response.statusText);
      return null;
    }
    
    const data: SolutionsPageHeroResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching solutions page hero:', error);
    return null;
  }
};

// Helper function to get the full URL for Strapi images
export const getStrapiImageUrl = (url: string | undefined): string => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
};
