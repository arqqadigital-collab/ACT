const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || '/api/strapi';

export interface HardwareFeatureItem {
  icon: string;
  title: string;
  desc: string;
  order: number;
}

export interface FnBHardwareSolutionsData {
  sectionTitle: string;
  sectionDescription: string;
  hardwareFeatures: HardwareFeatureItem[];
}

interface StrapiHardwareFeatureItem {
  icon: string;
  title: string;
  desc: string;
  order: number;
}

export const fetchFnBHardwareSolutions = async (): Promise<FnBHardwareSolutionsData | null> => {
  try {
    console.log('📡 API Call:', `${STRAPI_URL}/api/fnb-hardware-solution?populate=hardwareFeatures`);
    
    const response = await fetch(
      `${STRAPI_URL}/api/fnb-hardware-solution?populate=hardwareFeatures`
    );

    if (!response.ok) {
      console.error('❌ Failed to fetch FnB hardware solutions:', response.status, response.statusText);
      return null;
    }

    const data = await response.json();
    console.log('📥 Raw API Response:', data);

    return data
  } catch (error) {
    console.error('Error fetching FnB hardware solutions:', error);
    return null;
  }
};
