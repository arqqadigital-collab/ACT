const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || '/api/strapi';

export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
  order: number;
}

export interface HospitalityWhyChooseData {
  badge: string;
  heading: string;
  headingHighlight: string;
  description: string;
  items: WhyChooseItem[];
}

interface StrapiWhyChooseItem {
  icon: string;
  title: string;
  description: string;
  order: number;
}

export const fetchHospitalityWhyChoose = async (): Promise<HospitalityWhyChooseData | null> => {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/hospitality-why-choose?populate=items`
    );

    if (!response.ok) {
      console.error('Failed to fetch hospitality why choose:', response.statusText);
      return null;
    }

    const data = await response.json();

    if (!data.data) return null;

    const items = (data.data.items || [])
      .sort((a: StrapiWhyChooseItem, b: StrapiWhyChooseItem) => a.order - b.order)
      .map((item: StrapiWhyChooseItem) => ({
        icon: item.icon || 'Award',
        title: item.title || '',
        description: item.description || '',
        order: item.order || 0,
      }));

    return {
      badge: data.data.badge || 'Why ACT',
      heading: data.data.heading || 'Why Choose ACT for',
      headingHighlight: data.data.headingHighlight || 'Hospitality Technology',
      description: data.data.description || '',
      items,
    };
  } catch (error) {
    console.error('Error fetching hospitality why choose:', error);
    return null;
  }
};
