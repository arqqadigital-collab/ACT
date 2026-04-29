import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useInView } from '@/hooks/useInView';

const contactSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(50),
  lastName: z.string().trim().min(1, 'Last name is required').max(50),
  email: z.string().trim().email('Invalid email address').max(255),
  country: z.string().trim().min(1, 'Country is required').max(100),
  jobTitle: z.string().trim().max(100).optional(),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, 'Message is required').max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactUsPage = () => {
  const { toast } = useToast();
  
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>();
  const [formRef, isFormInView] = useInView<HTMLDivElement>();
  const [officesRef, isOfficesInView] = useInView<HTMLDivElement>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // EmailJS configuration - these should be set in your environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Prepare template parameters matching your EmailJS template variables
      const templateParams = {
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        country: data.country,
        job_title: data.jobTitle || 'Not provided',
        company: data.company || 'Not provided',
        message: data.message,
        to_email: 'customer.experience@act.eg',
      };

      // Send email via EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      console.log('Email sent successfully:', result);
      toast({
        title: 'Message Sent!',
        description: 'Our team will respond within 24 hours.',
      });
      reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again or contact us directly.',
        variant: 'destructive',
      });
    }
  };

  const offices = [
    {
      name: 'ACT Headquarters – Cairo, Egypt',
      address: 'Smart Villages Company, Building B92 A13, Al Giza Desert, Giza Governorate',
      fax: '+20 2 33440230',
    },
    {
      name: 'ACT International – Ismailia, Egypt',
      address: 'Ismailia Public Free Zone, Ismailia Governorate, Egypt',
      fax: '+20 33440230',
    },
    {
      name: 'ACT Middle East – Dubai, UAE',
      address: 'Al Thuraya Tower 1, Office 1608, Media City, Dubai, UAE',
      fax: '+971 4 5726398',
    },
    {
      name: 'ACT Technology – Riyadh, Saudi Arabia',
      address: "Al Imam Saud Ibn Faisal Rd., Al Malqa, Riyadh 13522, Saudi Arabia",
      fax: '+966 11445 5883',
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Hotline',
      value: '19488',
      description: '24/7 Support Available',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'customer.experience@act.eg',
      description: 'Get response within 24 hours',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div 
            ref={heroRef}
            className={`container-width px-4 md:px-8 relative z-10 transition-all duration-1000 ${
              isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Get In Touch
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                At ACT, we combine 24/7 availability with local expertise to ensure your business 
                receives the support it needs, whenever and wherever you need it.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 border-y border-border/50">
          <div className="container-width px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {contactInfo.map((info, idx) => (
                <Card 
                  key={idx}
                  className={`group border-border/50 bg-card/50 hover:bg-primary hover:border-primary transition-all duration-500 ${
                    isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                      <info.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm font-medium text-muted-foreground group-hover:text-white/80 transition-colors mb-1">
                      {info.title}
                    </h3>
                    <p className="text-lg font-semibold text-foreground group-hover:text-white transition-colors mb-1">
                      {info.value}
                    </p>
                    <p className="text-sm text-muted-foreground group-hover:text-white/70 transition-colors">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-24">
          <div 
            ref={formRef}
            className={`container-width px-4 md:px-8 transition-all duration-1000 ${
              isFormInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Form */}
              <div className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  For inquiries regarding sales, IT support, or partnerships, please fill out our contact form. 
                  Our experts will respond within 24 hours to assist you.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        {...register('firstName')}
                        className="bg-card/50 border-border/50 focus:border-primary"
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        {...register('lastName')}
                        className="bg-card/50 border-border/50 focus:border-primary"
                      />
                      {errors.lastName && (
                        <p className="text-sm text-destructive">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        {...register('email')}
                        className="bg-card/50 border-border/50 focus:border-primary"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        placeholder="Egypt"
                        {...register('country')}
                        className="bg-card/50 border-border/50 focus:border-primary"
                      />
                      {errors.country && (
                        <p className="text-sm text-destructive">{errors.country.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        placeholder="IT Manager"
                        {...register('jobTitle')}
                        className="bg-card/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        {...register('company')}
                        className="bg-card/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      {...register('message')}
                      className="bg-card/50 border-border/50 focus:border-primary resize-none"
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    variant="accent" 
                    size="lg" 
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>

              {/* Map Placeholder */}
              <div className="relative">
                <div className="sticky top-24">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Our Location
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Visit our headquarters in Smart Villages, Cairo
                  </p>
                  <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 bg-card/50">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.5!2d30.9769!3d30.0714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSmart+Village!5e0!3m2!1sen!2seg!4v1600000000000!5m2!1sen!2seg"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ACT Headquarters Location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offices Section */}
        <section className="py-16 md:py-24 bg-card/30 border-t border-border/50">
          <div 
            ref={officesRef}
            className={`container-width px-4 md:px-8 transition-all duration-1000 ${
              isOfficesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Global Presence
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                ACT Offices Location
              </h2>
              <p className="text-muted-foreground">
                With offices across the Middle East, we're always close to where you need us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offices.map((office, idx) => (
                <Card 
                  key={idx}
                  className={`group border-border/50 bg-card/50 hover:border-primary/50 transition-all duration-500 ${
                    isOfficesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{office.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{office.address}</p>
                        <p className="text-sm text-muted-foreground">
                          <span className="text-foreground/70">Fax:</span> {office.fax}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
