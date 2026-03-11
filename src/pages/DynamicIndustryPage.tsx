import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  Award,
  // Import all possible icons for mapping
  Server,
  Cpu,
  Database,
  Settings,
  Shield,
  Monitor,
  Users,
  CloudCog,
  Layers,
  Lock,
  Eye,
  Mail,
  AlertTriangle,
  Radar,
  Globe,
  Zap,
  Cable,
  Flame,
  Fingerprint,
  Wind,
  Headset,
  UserPlus,
  Briefcase,
  ShieldCheck,
  Network,
  Gauge,
  Activity,
  Search,
  Wrench,
  FileText,
  Rocket,
  BarChart3,
  Phone,
  MapPin,
  Calendar,
  Bell,
  Upload,
  GraduationCap,
  MessageCircle,
  Lightbulb,
  BrainCircuit,
  Bot,
  Clock,
  CheckCircle2,
  CheckCircle,
  Building2,
  Radio,
  Signal,
  Wifi,
  Fuel,
  Camera,
  Cloud,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/useInView";
import {
  fetchIndustryBySlug,
  getStrapiImageUrl,
  type Industry,
} from "@/services/industryService";

// Fallback hero image
import defaultHeroImg from "@/assets/industries/oil-gas-hero-2.jpg";

// Icon mapping function
const getIconComponent = (iconName?: string) => {
  const iconMap: Record<string, typeof Server> = {
    Server,
    Cpu,
    Database,
    Settings,
    Shield,
    Monitor,
    Users,
    CloudCog,
    Layers,
    Lock,
    Eye,
    Mail,
    AlertTriangle,
    Radar,
    Globe,
    Zap,
    Cable,
    Flame,
    Fingerprint,
    Wind,
    Headset,
    UserPlus,
    Briefcase,
    ShieldCheck,
    Network,
    Gauge,
    Activity,
    Search,
    Wrench,
    FileText,
    Rocket,
    BarChart3,
    Phone,
    MapPin,
    Calendar,
    Bell,
    Upload,
    GraduationCap,
    MessageCircle,
    Lightbulb,
    BrainCircuit,
    Bot,
    Clock,
    CheckCircle2,
    CheckCircle,
    Building2,
    Radio,
    Signal,
    Wifi,
    Fuel,
    Camera,
    Cloud,
    Award,
  };

  return iconMap[iconName || "CheckCircle"] || CheckCircle;
};

const DynamicIndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [industry, setIndustry] = useState<Industry | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [heroRef, isHeroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [expertiseRef, isExpertiseInView] = useInView<HTMLDivElement>({
    threshold: 0.1,
  });
  const [solutionsRef, isSolutionsInView] = useInView<HTMLDivElement>({
    threshold: 0.1,
  });
  const [whyRef, isWhyInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [partnersRef, isPartnersInView] = useInView<HTMLDivElement>({
    threshold: 0.1,
  });

  useEffect(() => {
    const loadIndustry = async () => {
      if (!slug) {
        setError(true);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const data = await fetchIndustryBySlug(slug);
        if (data) {
          setIndustry(data);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error loading industry:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadIndustry();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading industry information...</p>
        </div>
      </div>
    );
  }

  if (error || !industry) {
    return <Navigate to="/404" replace />;
  }

  const heroImage = industry.heroSection?.backgroundImage?.url
    ? getStrapiImageUrl(industry.heroSection.backgroundImage.url)
    : defaultHeroImg;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      {industry.heroSection && (
        <section
          ref={heroRef}
          className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[70vh] flex items-center"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt={industry.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          </div>

          <div className="container-width px-4 md:px-8 relative z-10">
            <div
              className={`max-w-3xl text-left transition-all duration-700 ${
                isHeroInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-10"
              }`}
            >
              {industry.heroSection.badge && (
                <Badge
                  variant="outline"
                  className="mb-6 border-primary/50 text-primary"
                >
                  {industry.heroSection.badge}
                </Badge>
              )}
              <h1
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                dangerouslySetInnerHTML={{ __html: industry.heroSection.title }}
              />
              {industry.heroSection.subtitle && (
                <p className="text-xl md:text-2xl text-primary/90 mb-6">
                  {industry.heroSection.subtitle}
                </p>
              )}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {industry.heroSection.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">
                    Let's Talk
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Our Expertise Section */}
      {industry.ourExpertise && industry.ourExpertise.length > 0 && (
        <section ref={expertiseRef} className="py-20 md:py-28">
          <div className="container-width px-4 md:px-8">
            <div
              className={`text-center mb-16 transition-all duration-700 ${
                isExpertiseInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-1 translate-y-10"
              }`}
            >
              <Badge
                variant="outline"
                className="mb-4 border-primary/50 text-primary"
              >
                Our Expertise
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-primary">{industry.title}</span>{" "}
                Expertise
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.ourExpertise.map((item, idx) => {
                const IconComponent = getIconComponent(item.iconName);
                return (
                  <Card
                    key={item.id}
                    className={`group border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-500 ${
                      isExpertiseInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-1 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      {item.icon ? (
                        <div className="w-14 h-14 rounded-xl mb-4 overflow-hidden">
                          <img
                            src={getStrapiImageUrl(item.icon.url)}
                            alt={item.icon.alternativeText || item.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <IconComponent size={28} />
                        </div>
                      )}
                      <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Technology Solutions Section */}
      {industry.technologySolutions && industry.technologySolutions.length > 0 && (
        <section ref={solutionsRef} className="py-20 md:py-28 bg-card/30">
          <div className="container-width px-4 md:px-8">
            <div
              className={`text-center mb-16 transition-all duration-700 ${
                isSolutionsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-1 translate-y-10"
              }`}
            >
              <Badge
                variant="outline"
                className="mb-4 border-primary/50 text-primary"
              >
                Technology Solutions
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {industry.title}{" "}
                <span className="text-primary">Technology Solutions</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {industry.technologySolutions.map((solution, idx) => {
                const IconComponent = getIconComponent(solution.iconName);
                return (
                  <Card
                    key={solution.id}
                    className={`group border-border/50 bg-background/50 hover:border-primary/50 transition-all duration-500 ${
                      isSolutionsInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-1 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <CardContent className="p-6 flex gap-4">
                      {solution.icon ? (
                        <div className="w-12 h-12 rounded-lg flex-shrink-0 overflow-hidden">
                          <img
                            src={getStrapiImageUrl(solution.icon.url)}
                            alt={solution.icon.alternativeText || solution.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <IconComponent size={24} />
                        </div>
                      )}
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {solution.title}
                        </h3>
                        {solution.description && (
                          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                            {solution.description}
                          </p>
                        )}
                        {solution.features && (
                          <div
                            className="prose prose-sm prose-neutral dark:prose-invert max-w-none"
                            dangerouslySetInnerHTML={{
                              __html: solution.features,
                            }}
                          />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Success Stories Text Section */}
      {industry.successStoriesText && (
        <section className="py-20 md:py-28">
          <div className="container-width px-4 md:px-8">
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 border-primary/50 text-primary"
              >
                <Award className="w-3 h-3 mr-1" />
                Success Stories
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {industry.title} <span className="text-primary">Success Stories</span>
              </h2>
            </div>
            <div
              className="prose prose-lg prose-neutral dark:prose-invert mx-auto max-w-4xl"
              dangerouslySetInnerHTML={{ __html: industry.successStoriesText }}
            />
          </div>
        </section>
      )}

      {/* Partners Section */}
      {industry.partners && industry.partners.length > 0 && (
        <section
          ref={partnersRef}
          className="py-16 bg-card/30 border-y border-border/50"
        >
          <div className="container-width px-4 md:px-8">
            <h3 className="text-center font-display text-lg font-semibold text-muted-foreground mb-8">
              Our Strategic Partners in {industry.title}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {industry.partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex items-center justify-center hover:scale-105 transition-transform duration-300 opacity-70 hover:opacity-100"
                >
                  <img
                    src={getStrapiImageUrl(partner.logo.url)}
                    alt={partner.logo.alternativeText || partner.name}
                    className="h-10 md:h-14 lg:h-16 w-auto object-contain max-w-[140px] md:max-w-[180px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose ACT Section */}
      {industry.whyChooseUs && industry.whyChooseUs.length > 0 && (
        <section ref={whyRef} className="py-20 md:py-28">
          <div className="container-width px-4 md:px-8">
            <div
              className={`text-center mb-16 transition-all duration-700 ${
                isWhyInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-10"
              }`}
            >
              <Badge
                variant="outline"
                className="mb-4 border-primary/50 text-primary"
              >
                Why ACT
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Why Choose ACT for{" "}
                <span className="text-primary">{industry.title}</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {industry.whyChooseUs.map((item, idx) => {
                const IconComponent = getIconComponent(item.iconName);
                return (
                  <div
                    key={item.id}
                    className={`text-center p-6 transition-all duration-500 ${
                      isWhyInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-1 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    {item.icon ? (
                      <div className="w-16 h-16 rounded-2xl mx-auto mb-4 overflow-hidden">
                        <img
                          src={getStrapiImageUrl(item.icon.url)}
                          alt={item.icon.alternativeText || item.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                        <IconComponent size={32} />
                      </div>
                    )}
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container-width px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Start Your Transformation Journey with{" "}
              <span className="text-primary">ACT</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let ACT be your trusted IT partner to drive efficiency, security,
              and innovation across your {industry.title} enterprise.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DynamicIndustryPage;
