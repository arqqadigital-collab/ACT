const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || '/api/strapi';

export interface CoreSolutionItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
  order: number;
}

export interface HotelsCoreSolutionsData {
  sectionTitle: string;
  sectionDescription: string;
  solutions: CoreSolutionItem[];
}

interface StrapiCoreSolutionItem {
  icon: string;
  title: string;
  description: string;
  features: string[] | null;
  order: number;
}

export const fetchHotelsCoreSolutions = async (): Promise<HotelsCoreSolutionsData | null> => {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/hotels-core-solution?populate=solutions`
    );

    if (!response.ok) {
      console.error('Failed to fetch hotels core solutions:', response.statusText);
      return null;
    }

    const data = await response.json();

    if (!data.data) return null;

    const solutions = (data.data.solutions || [])
      .sort((a: StrapiCoreSolutionItem, b: StrapiCoreSolutionItem) => a.order - b.order)
      .map((item: StrapiCoreSolutionItem) => ({
        icon: item.icon || 'Building2',
        title: item.title || '',
        description: item.description || '',
        features: Array.isArray(item.features) ? item.features : [],
        order: item.order || 0,
      }));

    return {
      sectionTitle: data.data.sectionTitle || 'Core Solutions',
      sectionDescription: data.data.sectionDescription || '',
      solutions,
    };
  } catch (error) {
    console.error('Error fetching hotels core solutions:', error);
    return null;
  }
};
