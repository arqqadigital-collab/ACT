const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'https://positive-actor-b87a792057.strapiapp.com';

export interface IntelligenceFeatureItem {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
    alternativeText?: string;
  }
  order: number;
}

export interface FnBBusinessIntelligenceData {
  sectionTitle: string;
  sectionDescription: string;
  intelligenceFeatures: IntelligenceFeatureItem[];
}

interface StrapiIntelligenceFeatureItem {
  featureId: string;
  title: string;
  description: string;
  image: {
    url: string;
    alternativeText?: string;
  } | null;
  order: number;
}

export const fetchFnBBusinessIntelligence = async (): Promise<FnBBusinessIntelligenceData | null> => {
  try {
    console.log('📡 API Call:', `${STRAPI_URL}/api/fnb-business-intelligence?populate[intelligenceFeatures][populate]=image`);
    
    const response = await fetch(
      `${STRAPI_URL}/api/fnb-business-intelligence?populate[intelligenceFeatures][populate]=image`
    );

    if (!response.ok) {
      console.error('❌ Failed to fetch FnB business intelligence:', response.status, response.statusText);
      return null;
    }

    const data = await response.json();
    console.log('📥 Raw API Response:', data);


    return data
  } catch (error) {
    console.error('Error fetching FnB business intelligence:', error);
    return null;
  }
};
