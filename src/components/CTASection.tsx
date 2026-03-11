import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const CTASection = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Glow - constrained for mobile */}
      <div className="absolute top-0 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 rounded-full bg-accent/10 blur-[120px]" />

      <div className="container-width relative z-10">
        <div
          className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"
          }`}
        >
          {/* Glass Background */}
          <div className="absolute inset-0 glass-card" />
          <div className="absolute inset-0 glow-border rounded-3xl" />

          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Start Your{" "}
                  <span className="text-gradient">Digital Transformation</span>{" "}
                  with ACT!
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Ready to transform your business with innovative technology
                  solutions? Let's discuss how ACT can help you achieve your
                  goals.
                </p>
                <Button variant="hero" size="xl" className="group" asChild>
                  <Link to="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Right Content - Contact Info */}
              <div className="space-y-6">
                {/* Headquarters */}
                <div className="p-6 rounded-2xl glass-card hover:bg-card/80 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl accent-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">
                        ACT Headquarters
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Smart Villages Company, Building B92 - A13
                        <br />
                        Al Giza Desert, Giza Governorate
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Desk */}
                <div className="p-6 rounded-2xl glass-card hover:bg-card/80 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl orange-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">
                        Service Desk 24/7
                      </h3>
                      <p className="text-2xl font-display font-bold text-accent">
                        19488
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-6 rounded-2xl glass-card hover:bg-card/80 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl accent-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:CX@act.eg"
                        className="text-lg text-primary hover:text-primary/80 transition-colors"
                      >
                        CX@act.eg
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
