const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || '/api/strapi';

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon?: {
    url: string;
    alternativeText?: string;
  };
  iconName?: string;
}

export interface SolutionItem {
  id: number;
  title: string;
  description?: string;
  features?: string;
  icon?: {
    url: string;
    alternativeText?: string;
  };
  iconName?: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: {
    url: string;
    alternativeText?: string;
  };
}

export interface HeroSection {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage?: {
    url: string;
    alternativeText?: string;
  };
  badge?: string;
}

export interface Industry {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  cardImage?: {
    url: string;
    alternativeText?: string;
  };
  heroSection?: HeroSection;
  ourExpertise?: FeatureItem[];
  technologySolutions?: SolutionItem[];
  whyChooseUs?: FeatureItem[];
  partners?: Partner[];
  successStoriesText?: string;
  order: number;
}

export const getStrapiImageUrl = (path?: string): string => {
  if (!path) return "";
  if (path.startsWith("http")) {
    return path;
  }
  return `${STRAPI_URL}${path}`;
};

export const fetchIndustries = async (): Promise<Industry[]> => {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/industry`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    // Single type returns data.industries array
    const industries = result.data?.industries || [];
    // Sort by order field
    return industries.sort((a: Industry, b: Industry) => a.order - b.order);
  } catch (error) {
    console.error("Error fetching industries:", error);
    return [];
  }
};

export const fetchIndustryBySlug = async (
  slug: string
): Promise<Industry | null> => {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/industry`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    const industries = result.data?.industries || [];
    
    // Find the industry by slug
    const industry = industries.find((ind: Industry) => ind.slug === slug);
    return industry || null;
  } catch (error) {
    console.error(`Error fetching industry with slug ${slug}:`, error);
    return null;
  }
};
