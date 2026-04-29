const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || '/api/strapi';

export interface ApplicationField {
  id?: number;
  fieldName: string;
  fieldLabel: string;
  fieldType: 'text' | 'email' | 'number' | 'textarea' | 'select' | 'file';
  placeholder?: string;
  isRequired: boolean;
  options?: string[];
  validationRules?: any;
}

export interface JobOpening {
  id: number;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: string;
  experienceLevel: string;
  description: string;
  responsibilities: string;
  requirements: string;
  qualifications?: string;
  benefits?: string;
  salaryRange?: string;
  isActive: boolean;
  applicationDeadline?: string;
  applicationFormFields?: ApplicationField[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface EmployeeReview {
  id: number;
  name: string;
  jobTitle: string;
  yearsAtCompany: string;
  quote: string;
  rating: number;
  displayOrder: number;
}

export interface JobApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  yearsOfExperience: number;
  expectedSalary?: string;
  cv?: File;
  coverLetter?: string;
  jobOpening: number;
  additionalFields?: Record<string, any>;
}

/**
 * Fetch all active job openings
 */
export const fetchJobOpenings = async (filters?: {
  department?: string;
  location?: string;
  employmentType?: string;
}): Promise<JobOpening[]> => {
  try {
    let url = `${STRAPI_URL}/api/careers?populate=applicationFormFields&filters[isActive][$eq]=true&sort=createdAt:desc`;
    
    if (filters?.department) {
      url += `&filters[department][$eq]=${encodeURIComponent(filters.department)}`;
    }
    if (filters?.location) {
      url += `&filters[location][$eq]=${encodeURIComponent(filters.location)}`;
    }
    if (filters?.employmentType) {
      url += `&filters[type][$eq]=${encodeURIComponent(filters.employmentType)}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch job openings');
    }
    const data = await response.json();
    // Transform Strapi format to flattened format
    return (data.data || []).map((item: any) => ({
      id: item.id,
      ...item,
      applicationFormFields: item.applicationFormFields || [],
    }));
  } catch (error) {
    console.error('Error fetching job openings:', error);
    return [];
  }
};

/**
 * Fetch a single job opening by slug
 */
export const fetchJobBySlug = async (slug: string): Promise<JobOpening | null> => {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/careers?filters[slug][$eq]=${slug}&populate=applicationFormFields`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch job opening');
    }
    const data = await response.json();
    return data.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching job opening:', error);
    return null;
  }
};

/**
 * Submit a job application
 */
export const submitJobApplication = async (
  applicationData: JobApplicationData
): Promise<{ success: boolean; data?: any; error?: string }> => {
  try {
    const formData = new FormData();
    
    // When uploading files, Strapi expects data fields to be sent individually
    formData.append('data[firstName]', applicationData.firstName);
    formData.append('data[lastName]', applicationData.lastName);
    formData.append('data[email]', applicationData.email);
    
    if (applicationData.phone) {
      formData.append('data[phone]', applicationData.phone);
    }
    
    formData.append('data[yearsOfExperience]', applicationData.yearsOfExperience.toString());
    
    if (applicationData.expectedSalary) {
      formData.append('data[expectedSalary]', applicationData.expectedSalary);
    }
    
    if (applicationData.coverLetter) {
      formData.append('data[coverLetter]', applicationData.coverLetter);
    }
    
    formData.append('data[jobOpening]', applicationData.jobOpening.toString());
    
    if (applicationData.additionalFields && Object.keys(applicationData.additionalFields).length > 0) {
      formData.append('data[additionalFields]', JSON.stringify(applicationData.additionalFields));
    }
    
    formData.append('data[status]', 'New');

    // Add CV file if provided
    if (applicationData.cv) {
      console.log('📎 Uploading CV:', {
        name: applicationData.cv.name,
        size: applicationData.cv.size,
        type: applicationData.cv.type
      });
      formData.append('files.cv', applicationData.cv);
    } else {
      console.warn('⚠️ No CV file provided');
    }

    // Log what we're sending
    console.log('📤 Submitting application to:', `${STRAPI_URL}/api/job-applications`);

    const response = await fetch(`${STRAPI_URL}/api/job-applications`, {
      method: 'POST',
      body: formData,
    });

    console.log('📥 Response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ Strapi error:', errorData);
      throw new Error(errorData.error?.message || 'Failed to submit application');
    }

    const data = await response.json();
    console.log('✅ Response data:', data);
    
    // Check if CV was saved
    if (data.data?.attributes?.cv) {
      console.log('✅ CV uploaded successfully:', data.data.attributes.cv);
    } else {
      console.warn('⚠️ CV not in response - might not have uploaded');
    }
    return {
      success: true,
      data: data.data,
    };
  } catch (error) {
    console.error('Error submitting job application:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit application',
    };
  }
};

/**
 * Get unique departments from job openings
 */
export const fetchDepartments = async (): Promise<string[]> => {
  try {
    const jobs = await fetchJobOpenings();
    const departments = [...new Set(jobs.map(job => job.department))];
    return departments.sort();
  } catch (error) {
    console.error('Error fetching departments:', error);
    return [];
  }
};

/**
 * Fetch employee reviews
 */
export const fetchEmployeeReviews = async (): Promise<EmployeeReview[]> => {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/employee-reviews?sort=displayOrder:asc`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch employee reviews');
    }
    
    const data = await response.json();
    
    return data.data.map((item: any) => ({
      id: item.id,
      ...item.attributes,
    }));
  } catch (error) {
    console.error('Error fetching employee reviews:', error);
    return [];
  }
};
