const API_URL = import.meta.env.VITE_STRAPI_URL || '/api/strapi';

export interface Office {
  id?: number;
  name: string;
  address: string;
  fax: string;
}

export interface ContactInfo {
  hotline: string;
  hotlineDescription: string;
  email: string;
  emailDescription: string;
  offices: Office[];
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  jobTitle?: string;
  company?: string;
  message: string;
}

export interface ContactFormResponse {
  id: number;
  attributes: ContactFormData & {
    createdAt: string;
    updatedAt: string;
  };
}

/**
 * Fetch contact information including hotline, email, and offices
 */
export const fetchContactInfo = async (): Promise<ContactInfo | null> => {
  try {
    const response = await fetch(`${API_URL}/api/contact-info?populate=*`);
    if (!response.ok) {
      throw new Error('Failed to fetch contact info');
    }
    const data = await response.json();
    console.log(data)
    return {
      hotline: data?.data?.hotline || '19488',
      hotlineDescription: data?.data?.hotlineDescription || '24/7 Support Available',
      email: data?.data?.email || 'customer.experience@act.eg',
      emailDescription: data?.data?.emailDescription || 'Get response within 24 hours',
      offices: data?.data?.offices || [],
    };
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return null;
  }
};

/**
 * Submit contact form to Strapi
 */
export const submitContactForm = async (
  formData: ContactFormData
): Promise<{ success: boolean; data?: ContactFormResponse; error?: string }> => {
  try {
    const response = await fetch(`${API_URL}/api/contact-forms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: formData }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to submit form');
    }

    const data = await response.json();
    return {
      success: true,
      data: data.data,
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit form',
    };
  }
};
