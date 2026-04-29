import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
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
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useTypewriter } from "@/hooks/useTypewriter";
import {
  fetchServicesPageHero,
  fetchServices,
  getStrapiImageUrl,
  type ServicesPageHero,
  type Service,
} from "@/services/servicesService";
import servicesHeaderBg from "@/assets/services/services-hero-bg.png";
import HowItWorksTimeline from "@/components/services/HowItWorksTimeline";

// Import service images dynamically
const serviceImages: Record<string, string> = {
  infrastructure: new URL("@/assets/services/infrastructure.jpg", import.meta.url).href,
  "digital-transformation": new URL("@/assets/services/digital-transformation.jpg", import.meta.url).href,
  security: new URL("@/assets/services/security.jpg", import.meta.url).href,
  "data-center": new URL("@/assets/services/data-center.jpg", import.meta.url).href,
  "managed-operations": new URL("@/assets/services/managed-operations.jpg", import.meta.url).href,
};

// Icon mapping function
const getIconComponent = (iconName: string) => {
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
  };
  return iconMap[iconName] || Server;
};

const ServicesPage = () => {
  const location = useLocation();
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [scrollY, setScrollY] = useState(0);
  const [heroData, setHeroData] = useState<ServicesPageHero | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  // Section refs for scroll animations
  const [tiersRef, isTiersInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [howItWorksRef, isHowItWorksInView] = useInView<HTMLElement>({ threshold: 0.1 });

  const { displayedText, isComplete } = useTypewriter({
    text:
      heroData?.headline ||
      "Building Smarter, Safer, and Scalable IT with ACT",
    speed: 40,
    delay: 500,
    enabled: isHeroInView && !!heroData,
  });

  useEffect(() => {
    const loadData = async () => {
      const [heroContent, servicesData] = await Promise.all([
        fetchServicesPageHero(),
        fetchServices(),
      ]);
      setHeroData(heroContent);
      setServices(servicesData);
      setLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  const supportTiers = [
    {
      tier: "01.",
      title: "Critical Support",
      features: [
        "24/7 coverage with rapid response for mission-critical systems",
        "Guaranteed priority incident resolution",
        "Continuous monitoring and real-time alerts",
      ],
    },
    {
      tier: "02.",
      title: "Premium Support",
      features: [
        "Dedicated support during business hours",
        "Includes troubleshooting, optimization, and updates",
        "Advisory on digital transformation and IT efficiency improvements",
      ],
    },
    {
      tier: "03.",
      title: "Standard Support",
      features: [
        "8x5 Next Business Day (NBD) assistance",
        "Reliable assistance for routine issues",
        "Cost-efficient model for smaller or less complex operations",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        {loading ? (
          <section className="relative min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </section>
        ) : (
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
            {/* Background Image with Parallax and Animation */}
            <div className="absolute inset-0 z-0" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
              <img
                src={
                  heroData?.backgroundImage?.url
                    ? getStrapiImageUrl(heroData.backgroundImage.url)
                    : servicesHeaderBg
                }
                alt="Services Background"
                className="w-full h-[120%] object-cover object-center animate-float-slow"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-background" />
            </div>

            {/* Content */}
            <div
              ref={heroRef}
              className={`relative z-10 container-width px-4 md:px-8 text-center transition-all duration-1000 ${
                isHeroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-6">
                {heroData?.badge || "Our Services"}
              </span>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 max-w-5xl mx-auto min-h-[1.2em]">
                {heroData?.highlightText
                  ? displayedText
                      .split(heroData.highlightText)
                      .map((part, i) =>
                        i === 0 ? (
                          <span key={i}>
                            {part}
                            {displayedText.includes(
                              heroData.highlightText!,
                            ) && (
                              <span className="text-gradient">
                                {heroData.highlightText}
                              </span>
                            )}
                          </span>
                        ) : (
                          <span key={i}>{part}</span>
                        ),
                      )
                  : displayedText}
                {!isComplete && <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse" />}
              </h1>

              <p
                className={`text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${
                  isComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {heroData?.description}
                {heroData?.subDescription && (
                  <>
                    <br />
                    <br />
                    {heroData.subDescription}
                  </>
                )}
              </p>

              <div
                className={`mt-8 transition-all duration-700 delay-700 ${
                  isComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Button variant="accent" size="lg" asChild>
                  <Link to={heroData?.ctaLink || "/contact"}>
                    {heroData?.ctaText || "Let's Talk"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Parallax Transition to Next Section */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-10"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            />
          </section>
        )}

        {/* Dynamic Service Sections */}
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const ServiceIcon = getIconComponent(service.icon);
          const serviceImage = serviceImages[service.slug] || serviceImages.infrastructure;

          return (
            <section
              key={service.id}
              id={service.slug}
              className={`py-20 ${!isEven ? "bg-card/30" : ""} scroll-mt-24`}
            >
              <div className="container-width px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Image Column */}
                  <div
                    className={`relative ${isEven ? "order-2" : "order-2 lg:order-1"} transition-all duration-700 delay-200 opacity-100 translate-x-0`}
                  >
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img
                        src={serviceImage}
                        alt={`${service.label}.`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className={`absolute -bottom-4 ${isEven ? "-left-4" : "-right-4"} w-24 h-24 ${isEven ? "bg-primary/20" : "bg-accent/20"} rounded-2xl -z-10`} />
                    <div className={`absolute -top-4 ${isEven ? "-right-4" : "-left-4"} w-32 h-32 ${isEven ? "bg-accent/10" : "bg-primary/10"} rounded-full -z-10`} />
                  </div>

                  {/* Text Column */}
                  <div
                    className={`${isEven ? "order-1" : "order-1 lg:order-2"} transition-all duration-700 opacity-100 translate-x-0`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <ServiceIcon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-primary font-semibold">{service.label}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {service.pageTitle || service.label}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.pageDescription || service.description}
                    </p>
                    <ul className="space-y-4">
                      {service.items?.map((item, idx) => {
                        const ItemIcon = getIconComponent(item.icon);
                        return (
                          <li key={idx} className="flex items-start gap-3">
                            <ItemIcon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-semibold text-foreground">{item.title}</span>
                              <span className="text-muted-foreground"> – {item.description}</span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="mt-8">
                      <Button variant="outline" asChild>
                        <Link to="/contact">
                          Book a Consultation
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Support Tiers - Interactive with Orange Hover */}
        <section ref={tiersRef} className="py-20 bg-card/30">
          <div className="container-width px-4 md:px-8">
            <div
              className={`text-center mb-12 transition-all duration-700 ${
                isTiersInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-10"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Support Tiers</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We understand every business has unique requirements. That's why ACT offers three tailored support
                levels:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {supportTiers.map((tier, idx) => (
                <Card
                  key={idx}
                  className={`group relative overflow-hidden transition-all duration-500 bg-card border-border/50 hover:bg-primary hover:border-primary cursor-pointer ${
                    isTiersInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="text-5xl font-bold mb-4 text-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {tier.tier}
                    </div>
                    <h3 className="text-xl font-bold mb-6 text-foreground group-hover:text-primary-foreground transition-colors duration-300">
                      {tier.title}
                    </h3>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary group-hover:text-primary-foreground mt-0.5 flex-shrink-0 transition-colors duration-300" />
                          <span className="text-sm text-muted-foreground group-hover:text-primary-foreground/90 transition-colors duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {/* <div className="mt-8">
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-white group-hover:text-primary group-hover:border-white transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div> */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How ACT Support Works - Two Column with Timeline */}
        <section ref={howItWorksRef} className="py-20 relative">
          <div className="container-width px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Column - Fixed Title & Description */}
              <div className="lg:h-[600px] lg:flex lg:items-center">
                <div
                  className={`lg:sticky lg:top-1/3 transition-all duration-700 ${
                    isHowItWorksInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                >
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                    Our Process
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    How ACT Support Works
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Our support is based on a structured, transparent process designed to deliver maximum value at every
                    stage of your IT journey.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    With ACT watching over your systems, you gain peace of mind and more time to focus on business
                    growth.
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column - Timeline Steps with Sequential Animation */}
              <HowItWorksTimeline />
            </div>
          </div>
        </section>

        {/* Our Service Models */}
        <section className="py-20">
          <div className="container-width px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Service Models</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Covering the entire IT lifecycle, ACT provides comprehensive support
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Wrench, title: "Installation", description: "Smooth deployment with minimal disruption" },
                {
                  icon: Settings,
                  title: "Configuration",
                  description: "Optimized setups aligned with enterprise needs",
                },
                {
                  icon: AlertTriangle,
                  title: "Troubleshooting",
                  description: "Rapid, expert resolution for technical issues",
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="group bg-background border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
                      <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Extras - Three Columns like Tiers */}
        <section className="py-20 bg-card/30">
          <div className="container-width px-4 md:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Assistance Modes Card */}
              <Card className="relative overflow-hidden bg-card border-border/50">
                <CardContent className="p-8">
                  {/* <div className="text-5xl font-bold mb-4 text-primary">02</div> */}
                  <h3 className="text-xl font-bold mb-6 text-foreground">Assistance Modes</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground">Remote Support</span>
                        <p className="text-sm text-muted-foreground">Fast, certified expert help</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground">Onsite Support</span>
                        <p className="text-sm text-muted-foreground">Hands-on assistance when needed</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Proactive Services Card */}
              <Card className="relative overflow-hidden bg-card border-border/50">
                <CardContent className="p-8">
                  {/* <div className="text-5xl font-bold mb-4 text-primary">03</div> */}
                  <h3 className="text-xl font-bold mb-6 text-foreground">Proactive Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground">Scheduled Health Checks</span>
                        <p className="text-sm text-muted-foreground">Regular assessments for optimal performance</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Bell className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground">Automated Monitoring & Alerts</span>
                        <p className="text-sm text-muted-foreground">24/7 surveillance with instant notifications</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Upload className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground">Firmware & Patch Upgrades</span>
                        <p className="text-sm text-muted-foreground">Keep systems secure and up-to-date</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Value-Added Services Card */}
              <Card className="relative overflow-hidden bg-card border-border/50">
                <CardContent className="p-8">
                  {/* <div className="text-5xl font-bold mb-4 text-primary">02</div> */}
                  <h3 className="text-xl font-bold mb-6 text-foreground">Value-Added Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground">Admin Training</span>
                        <p className="text-sm text-muted-foreground">Empower your IT team with expert knowledge</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MessageCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground">Consultation & Advisory</span>
                        <p className="text-sm text-muted-foreground">Strategic IT guidance for business growth</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container-width px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Start Your Business Transformation Journey Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let ACT be your trusted partner in IT support, security, and innovation.
            </p>
            <Button variant="outline" asChild>
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
