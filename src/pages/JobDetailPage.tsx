import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useInView } from '@/hooks/useInView';
import {
  ArrowLeft,
  MapPin,
  Clock,
  Briefcase,
  TrendingUp,
  Calendar,
  DollarSign,
  Loader2,
  Upload,
  CheckCircle2,
} from 'lucide-react';
import {
  fetchJobBySlug,
  submitJobApplication,
  type JobOpening,
  type ApplicationField,
} from '@/services/careersService';

// Create dynamic schema based on form fields
const createApplicationSchema = (formFields: ApplicationField[] = []) => {
  const schemaFields: any = {
    firstName: z.string().trim().min(1, 'First name is required').max(50),
    lastName: z.string().trim().min(1, 'Last name is required').max(50),
    email: z.string().trim().email('Invalid email address'),
    phone: z.string().trim().optional(),
    yearsOfExperience: z.coerce
      .number()
      .min(0, 'Must be 0 or greater')
      .max(50, 'Must be less than 50'),
    expectedSalary: z.string().trim().optional(),
    coverLetter: z.string().trim().optional(),
    cv: z.any().optional(),
  };

  // Add dynamic fields
  formFields.forEach((field) => {
    let fieldSchema: any;

    switch (field.fieldType) {
      case 'email':
        fieldSchema = z.string().email('Invalid email');
        break;
      case 'number':
        fieldSchema = z.coerce.number();
        break;
      case 'textarea':
      case 'text':
      default:
        fieldSchema = z.string();
        break;
    }

    if (field.isRequired) {
      fieldSchema = fieldSchema.min(1, `${field.fieldLabel} is required`);
    } else {
      fieldSchema = fieldSchema.optional();
    }

    schemaFields[field.fieldName] = fieldSchema;
  });

  return z.object(schemaFields);
};

const JobDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [job, setJob] = useState<JobOpening | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cvFile, setCvFile] = useState<File | null>(null);

  const [headerRef, isHeaderInView] = useInView<HTMLElement>();
  const [detailsRef, isDetailsInView] = useInView<HTMLElement>();
  const [formRef, isFormInView] = useInView<HTMLElement>();

  useEffect(() => {
    const loadJob = async () => {
      if (!slug) return;
      setIsLoading(true);
      const data = await fetchJobBySlug(slug);
      setJob(data);
      setIsLoading(false);
    };
    loadJob();
  }, [slug]);

  // Create schema dynamically based on job's form fields
  const applicationSchema = job?.applicationFormFields
    ? createApplicationSchema(job.applicationFormFields)
    : createApplicationSchema();

  type ApplicationFormData = z.infer<typeof applicationSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: 'Invalid File',
          description: 'Please upload a PDF or Word document',
          variant: 'destructive',
        });
        return;
      }
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: 'File Too Large',
          description: 'CV must be less than 5MB',
          variant: 'destructive',
        });
        return;
      }
      setCvFile(file);
    }
  };

  const onSubmit = async (data: ApplicationFormData) => {
    if (!job) return;

    // Separate standard fields from dynamic fields
    const {
      firstName,
      lastName,
      email,
      phone,
      yearsOfExperience,
      expectedSalary,
      coverLetter,
      cv,
      ...additionalFields
    } = data;

    const result = await submitJobApplication({
      firstName,
      lastName,
      email,
      phone,
      yearsOfExperience,
      expectedSalary,
      coverLetter,
      cv: cvFile || undefined,
      jobOpening: job.id,
      additionalFields,
    });

    if (result.success) {
      toast({
        title: 'Application Submitted!',
        description: 'We will review your application and get back to you soon.',
      });
      reset();
      setCvFile(null);
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      toast({
        title: 'Submission Failed',
        description: result.error || 'Please try again later.',
        variant: 'destructive',
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-width px-4 md:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Job Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The job opening you're looking for doesn't exist or has been closed.
          </p>
          <Button onClick={() => navigate('/careers')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Careers
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const jobAttrs = job;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Header Section */}
        <section
          ref={headerRef}
          className="relative py-16 md:py-20 bg-gradient-to-b from-primary/5 to-transparent"
        >
          <div
            className={`container-width px-4 md:px-8 transition-all duration-700 ${
              isHeaderInView
                ? 'opacity-100 translate-y-0'
                : ' translate-y-10'
            }`}
          >
            <Button
              variant="ghost"
              className="mb-6"
              onClick={() => navigate('/careers')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Button>

            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {jobAttrs.department}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {jobAttrs.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {jobAttrs.location}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {jobAttrs.type}
                </span>
                <span className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  {jobAttrs.experienceLevel}
                </span>
                {jobAttrs.salaryRange && (
                  <span className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    {jobAttrs.salaryRange}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Job Details Section */}
        <section ref={detailsRef} className="py-12 md:py-16">
          <div className="container-width px-4 md:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div
                className={`lg:col-span-2 space-y-8 transition-all duration-700 ${
                  isDetailsInView
                    ? 'opacity-100 translate-x-0'
                    : ' -translate-x-10'
                }`}
              >
                {/* Description */}
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Job Description
                    </h2>
                    <div
                      className="prose prose-sm md:prose-base max-w-none text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: jobAttrs.description }}
                    />
                  </CardContent>
                </Card>

                {/* Responsibilities */}
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Key Responsibilities
                    </h2>
                    <div
                      className="prose prose-sm md:prose-base max-w-none text-muted-foreground"
                      dangerouslySetInnerHTML={{
                        __html: jobAttrs.responsibilities,
                      }}
                    />
                  </CardContent>
                </Card>

                {/* Requirements */}
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Requirements
                    </h2>
                    <div
                      className="prose prose-sm md:prose-base max-w-none text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: jobAttrs.requirements }}
                    />
                  </CardContent>
                </Card>

                {/* Qualifications */}
                {jobAttrs.qualifications && (
                  <Card>
                    <CardContent className="p-6 md:p-8">
                      <h2 className="text-2xl font-bold text-foreground mb-4">
                        Preferred Qualifications
                      </h2>
                      <div
                        className="prose prose-sm md:prose-base max-w-none text-muted-foreground"
                        dangerouslySetInnerHTML={{
                          __html: jobAttrs.qualifications,
                        }}
                      />
                    </CardContent>
                  </Card>
                )}

                {/* Benefits */}
                {jobAttrs.benefits && (
                  <Card>
                    <CardContent className="p-6 md:p-8">
                      <h2 className="text-2xl font-bold text-foreground mb-4">
                        What We Offer
                      </h2>
                      <div
                        className="prose prose-sm md:prose-base max-w-none text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: jobAttrs.benefits }}
                      />
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar - Application Form */}
              <div
                className={`lg:col-span-1 transition-all duration-700 delay-200 ${
                  isDetailsInView
                    ? 'opacity-100 translate-x-0'
                    : 'translate-x-10'
                }`}
              >
                <div className="sticky top-24">
                  <Card className="border-primary/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        Apply for this position
                      </h3>

                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                      >
                        {/* First Name */}
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            {...register('firstName')}
                            className="mt-1"
                          />
                          {errors.firstName && (
                            <p className="text-sm text-destructive mt-1">
                              {String(errors.firstName.message)}
                            </p>
                          )}
                        </div>

                        {/* Last Name */}
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            {...register('lastName')}
                            className="mt-1"
                          />
                          {errors.lastName && (
                            <p className="text-sm text-destructive mt-1">
                              {String(errors.lastName.message)}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            {...register('email')}
                            className="mt-1"
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive mt-1">
                              {String(errors.email.message)}
                            </p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            {...register('phone')}
                            className="mt-1"
                          />
                        </div>

                        {/* Years of Experience */}
                        <div>
                          <Label htmlFor="yearsOfExperience">
                            Years of Experience *
                          </Label>
                          <Input
                            id="yearsOfExperience"
                            type="number"
                            min="0"
                            {...register('yearsOfExperience')}
                            className="mt-1"
                          />
                          {errors.yearsOfExperience && (
                            <p className="text-sm text-destructive mt-1">
                              {String(errors.yearsOfExperience.message)}
                            </p>
                          )}
                        </div>

                        {/* Expected Salary */}
                        <div>
                          <Label htmlFor="expectedSalary">
                            Expected Salary (Optional)
                          </Label>
                          <Input
                            id="expectedSalary"
                            placeholder="e.g., 15,000 - 20,000 EGP"
                            {...register('expectedSalary')}
                            className="mt-1"
                          />
                        </div>

                        {/* CV Upload */}
                        <div>
                          <Label htmlFor="cv">Upload CV</Label>
                          <div className="mt-1">
                            <label
                              htmlFor="cv"
                              className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
                            >
                              <Upload className="h-5 w-5 text-muted-foreground mr-2" />
                              <span className="text-sm text-muted-foreground">
                                {cvFile ? cvFile.name : 'Choose file (PDF, DOC)'}
                              </span>
                            </label>
                            <input
                              id="cv"
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            Max size: 5MB
                          </p>
                        </div>

                        {/* Cover Letter */}
                        <div>
                          <Label htmlFor="coverLetter">
                            Cover Letter (Optional)
                          </Label>
                          <Textarea
                            id="coverLetter"
                            {...register('coverLetter')}
                            rows={4}
                            className="mt-1"
                            placeholder="Tell us why you're a great fit..."
                          />
                        </div>

                        {/* Dynamic Form Fields */}
                        {job.applicationFormFields &&
                          job.applicationFormFields.length > 0 && (
                            <>
                              <div className="border-t border-border/50 my-4 pt-4">
                                <h3 className="text-sm font-semibold text-foreground mb-3">
                                  Additional Information
                                </h3>
                              </div>
                              {job.applicationFormFields.map((field, idx) => (
                                <div key={idx}>
                                  <Label htmlFor={field.fieldName}>
                                    {field.fieldLabel}
                                    {field.isRequired && (
                                      <span className="text-destructive"> *</span>
                                    )}
                                  </Label>
                                  {field.fieldType === 'textarea' ? (
                                    <Textarea
                                      id={field.fieldName}
                                      {...register(field.fieldName as any)}
                                      placeholder={field.placeholder}
                                      rows={3}
                                      className="mt-1"
                                    />
                                  ) : field.fieldType === 'select' && field.options ? (
                                    <select
                                      id={field.fieldName}
                                      {...register(field.fieldName as any)}
                                      className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary mt-1"
                                    >
                                      <option value="">Select...</option>
                                      {field.options.map((option, optIdx) => (
                                        <option key={optIdx} value={option}>
                                          {option}
                                        </option>
                                      ))}
                                    </select>
                                  ) : (
                                    <Input
                                      id={field.fieldName}
                                      type={field.fieldType}
                                      {...register(field.fieldName as any)}
                                      placeholder={field.placeholder}
                                      className="mt-1"
                                    />
                                  )}
                                  {errors[field.fieldName] && (
                                    <p className="text-sm text-destructive mt-1">
                                      {String((errors as any)[field.fieldName]?.message)}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </>
                          )}

                        <Button
                          type="submit"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="mr-2 h-4 w-4" />
                              Submit Application
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  {jobAttrs.applicationDeadline && (
                    <div className="mt-4 p-4 rounded-lg bg-accent/10 border border-accent/20">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            Application Deadline
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(
                              jobAttrs.applicationDeadline
                            ).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetailPage;
