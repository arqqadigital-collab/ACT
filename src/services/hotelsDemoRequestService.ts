const API_URL = import.meta.env.VITE_API_URL || "https://positive-actor-b87a792057.strapiapp.com";

export interface HotelsDemoRequestData {
  businessType?: string;
  roomCount?: string;
  services?: string[];
  businessName: string;
  contactName?: string;
  mobile?: string;
  email?: string;
}

export async function submitHotelsDemoRequest(
  data: HotelsDemoRequestData
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(`${API_URL}/api/hotels-demo-requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          ...data,
          submittedAt: new Date().toISOString(),
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to submit demo request:", errorData);
      return {
        success: false,
        error: errorData.error?.message || "Failed to submit request",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting demo request:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Network error",
    };
  }
}
