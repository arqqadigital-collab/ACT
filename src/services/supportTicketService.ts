const API_URL = import.meta.env.VITE_STRAPI_URL || 'https://positive-actor-b87a792057.strapiapp.com';

export interface SupportTicketData {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  location?: string;
  actId?: string;
  selectedSystems: string[];
  otherSystem?: string;
  subject: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  responseMethod: 'email' | 'phone' | 'whatsapp';
  submittedAt: string;
}

export const submitSupportTicket = async (data: SupportTicketData): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await fetch(`${API_URL}/api/support-tickets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit support ticket');
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting support ticket:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit support ticket',
    };
  }
};
