import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Building2,
  Network,
  Shield,
  Database,
  Cloud,
  Server,
  Cpu,
  Users,
  Wifi,
  Lock,
  Award,
  CheckCircle,
  Clock,
  FileCheck,
  Headphones,
  MessageSquare,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/useInView";

// Import assets
import publicSectorHero from "@/assets/industries/public-sector.jpg";

// Success stories
import redseaBg from "@/assets/success-stories/redsea-bg.jpg";
import redseaLogo from "@/assets/success-stories/redsea-logo.jpg";

// Partner logos
import partnerCisco from "@/assets/partners/cisco.png";
import partnerHpe from "@/assets/partners/hpe.png";
import partnerCommvault from "@/assets/partners/commvault.png";
import partnerVmware from "@/assets/partners/vmware.png";
import partnerRittal from "@/assets/partners/rittal.png";
import partnerFortinet from "@/assets/partners/fortinet.png";
import partnerF5 from "@/assets/partners/f5.png";
import partnerPaloalto from "@/assets/partners/paloalto-new.png";

const strategicPillars = [
  {
    icon: Cpu,
    title: "Digital Transformation & Citizen-Centric Services",
    description:
      "Prioritizing digital-first delivery of public services designed with citizens, businesses, and public servants at the core.",
  },
  {
    icon: Server,
    title: "Operational Efficiency and Cost Reduction",
    description:
      "Shared ICT services, automation, and process optimization to eliminate duplication and free resources for higher-value work.",
  },
  {
    icon: Cloud,
    title: "Innovation and Future-Readiness with AI and Cloud",
    description:
      "Leveraging AI, cloud, and adaptive strategies to ensure resilient, modernized, and scalable services.",
  },
  {
    icon: Users,
    title: "Workforce and Organizational Modernization",
    description: "Building digital skills, enabling collaboration, and fostering a culture of continuous improvement.",
  },
  {
    icon: Shield,
    title: "Robust Governance & Security",
    description:
      "Strong frameworks for data privacy, risk management, cross-agency coordination, and cyber resilience.",
  },
];

const coreSolutions = [
  {
    icon: Cloud,
    title: "Cloud Computing and Storage",
    description:
      "Cloud-powered infrastructure with high-performance computing, encrypted storage, disaster recovery, and AI-driven analytics.",
  },
  {
    icon: Wifi,
    title: "Industrial Wi-Fi and Smart City Solutions",
    description: "Secure, scalable municipal Wi-Fi and IoT networks enabling connected government and public access.",
  },
  {
    icon: Database,
    title: "Virtualization Solutions",
    description: "Data protection, rapid recovery, and zero-trust security for hybrid and complex environments.",
  },
  {
    icon: Lock,
    title: "Cybersecurity Solutions",
    description:
      "GRC, IAM, network and endpoint security, threat intelligence, incident response, and compliance-driven architectures.",
  },
  {
    icon: Network,
    title: "Networking Solutions",
    description:
      "Modernized networks with IoT integration, segmentation, analytics, and zero-trust frameworks for smarter public services.",
  },
  {
    icon: Server,
    title: "Data Center Solutions",
    description:
      "Secure, scalable, and regulation-compliant facilities with full disaster recovery and infrastructure optimization.",
  },
];

const serviceAssurance = [
  {
    icon: FileCheck,
    title: "Service Level Agreements (SLAs)",
    description:
      "Clear performance metrics, availability targets, escalation procedures, and reporting to align IT with government goals.",
  },
  {
    icon: Headphones,
    title: "Managed Services",
    description:
      "Proactive IT infrastructure management, remote support, monitoring, and cybersecurity to improve efficiency and reduce costs.",
  },
  {
    icon: MessageSquare,
    title: "Consultation Services",
    description:
      "Tailored consulting in e-governance, digital transformation, IT strategy, cybersecurity, and infrastructure modernization.",
  },
];

const successStories = [
  {
    id: "dpa-infrastructure",
    title: "Modernized IT Infrastructure for Damietta Port Authority",
    subtitle: "How ACT Modernized the IT Infrastructure for Damietta Port Authority (DPA)",
    company: "Damietta Port Authority",
    backgroundImage: publicSectorHero,
    logo: null,
  },
  {
    id: "redsea-voip",
    title: "Cloud VOIP Solution for Red Sea Container Terminal",
    subtitle: "How ACT Delivered a Cloud VOIP Solution for Red Sea Container Terminal S.A.E",
    company: "Red Sea Container Terminal",
    backgroundImage: redseaBg,
    logo: redseaLogo,
  },
];

const whyChooseACT = [
  {
    icon: Award,
    title: "35+ Years of Leadership",
    description: "Delivering trusted ICT solutions across Egypt and MENA.",
  },
  {
    icon: Building2,
    title: "Government & Public Sector Expertise",
    description: "Empowering institutions with secure, citizen-focused technologies.",
  },
  {
    icon: Clock,
    title: "Nationwide SLA Coverage",
    description: "Reliable, on-time support wherever you operate.",
  },
  {
    icon: Users,
    title: "Certified Engineering Team",
    description: "Expert partners with global technology leaders.",
  },
  {
    icon: CheckCircle,
    title: "Compliance & Trust-Driven Solutions",
    description: "Built to meet public sector standards for security and transparency.",
  },
];

const partners = [
  { name: "Cisco", logo: partnerCisco },
  { name: "HPE", logo: partnerHpe },
  { name: "Commvault", logo: partnerCommvault },
  { name: "VMware", logo: partnerVmware },
  { name: "Rittal", logo: partnerRittal },
  { name: "Fortinet", logo: partnerFortinet },
  { name: "F5", logo: partnerF5 },
  { name: "Palo Alto", logo: partnerPaloalto },
];

const PublicSectorPage = () => {
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [pillarsRef, isPillarsInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [solutionsRef, isSolutionsInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [serviceRef, isServiceInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [storiesRef, isStoriesInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [whyRef, isWhyInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate partners for infinite scroll effect
  const duplicatedPartners = [...partners, ...partners];

  // Auto-scroll effect for partners
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[70vh] flex items-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={publicSectorHero}
            alt="Public Sector"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container-width px-4 md:px-8 relative z-10">
          <div
            className={`max-w-3xl text-left transition-all duration-700 ${
              isHeroInView
                ? "opacity-100 translate-y-0"
                : "opacity-1 translate-y-10"
            }`}
          >
            <Badge
              variant="outline"
              className="mb-6 border-primary/50 text-primary"
            >
              <Building2 className="w-3 h-3 mr-1" />
              Public Sector
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Driving Egypt's{" "}
              <span className="text-primary">Public Sector</span> with
              Citizen-Centric Digital Transformation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              At ACT, we understand the mission-critical role of IT in the
              public sector, where success is measured not by profit, but by
              public value, trust, and accessibility. For over 35 years, we've
              partnered with government and public organizations to deliver
              end-to-end ICT solutions that enhance services, improve
              efficiency, and ensure compliance while enabling secure, equitable
              digital access for all. From cloud computing and cybersecurity to
              data protection, smart city networking, and modern data centers,
              ACT empowers government entities to meet today’s needs while
              future-proofing for tomorrow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Let's Talk
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              {/* <Button asChild variant="outline" size="lg">
                <Link to="/case-studies">
                  View Case Studies
                </Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section ref={pillarsRef} className="py-20 md:py-28">
        <div className="container-width px-4 md:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isPillarsInView
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
              The Strategic Pillars of ACT's{" "}
              <span className="text-primary">Public Sector Expertise</span>
            </h2>
            {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From digital transformation and citizen services to governance, security, and organizational modernization.
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicPillars.map((pillar, idx) => (
              <Card
                key={pillar.title}
                className={`group border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-500 ${
                  isPillarsInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-1 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <pillar.icon size={28} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
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
              IT Solutions
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core IT Solutions for the{" "}
              <span className="text-primary">Public Sector</span>
            </h2>
            {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions enabling secure, equitable digital access for all citizens.
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSolutions.map((solution, idx) => (
              <Card
                key={solution.title}
                className={`group border-border/50 bg-background/50 hover:border-primary/50 transition-all duration-500 ${
                  isSolutionsInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-1 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <solution.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Assurance Section */}
      <section ref={serviceRef} className="py-20 md:py-28">
        <div className="container-width px-4 md:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isServiceInView
                ? "opacity-100 translate-y-0"
                : "opacity-1 translate-y-10"
            }`}
          >
            <Badge
              variant="outline"
              className="mb-4 border-primary/50 text-primary"
            >
              Service Assurance
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Service Assurance for{" "}
              <span className="text-primary">Public Sector</span>
            </h2>
            {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reliable support and consultation services to ensure your IT infrastructure meets government objectives.
            </p> */}
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceAssurance.map((service, idx) => (
              <Card
                key={service.title}
                className={`group border-border/50 bg-card/50 hover:bg-primary hover:border-primary transition-all duration-500 ${
                  isServiceInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-1 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto group-hover:bg-primary-foreground/20 group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon size={32} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4 group-hover:text-primary-foreground transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-primary-foreground/80 transition-colors">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section ref={storiesRef} className="py-20 md:py-28 bg-card/30">
        <div className="container-width px-4 md:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isStoriesInView
                ? "opacity-100 translate-y-0"
                : "opacity-1 translate-y-10"
            }`}
          >
            <Badge
              variant="outline"
              className="mb-4 border-primary/50 text-primary"
            >
              <Award className="w-3 h-3 mr-1" />
              Success Stories
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              ACT Public Sector{" "}
              <span className="text-primary">Success Stories</span>
            </h2>
          </div>

          {/* Success Stories Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {successStories.map((story, idx) => (
              <Link
                key={story.id}
                to={`/case-study/${story.id}`}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:scale-[1.02] ${
                  isStoriesInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-1 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Card with Background Image */}
                <div className="aspect-[4/5] relative overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={story.backgroundImage}
                    alt={story.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

                  {/* Logo Top Right (if available) */}
                  {story.logo && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl p-2 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <img
                          src={story.logo}
                          alt={`${story.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <div className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-white/90 uppercase tracking-wider bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                      Public Sector
                    </span>
                  </div>

                  {/* Content at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">
                      {story.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      {story.subtitle}
                    </p>

                    {/* Read Case Study Button */}
                    <Button variant="hero" size="sm" className="group/btn">
                      Read the Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div
            className={`text-center mt-12 transition-all duration-700 delay-300 ${
              isStoriesInView
                ? "opacity-100 translate-y-0"
                : "opacity-1 translate-y-8"
            }`}
          >
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section - Auto-scrolling */}
      <section className="py-16 border-y border-border/50 overflow-hidden">
        <div className="container-width px-4 md:px-8">
          <h3 className="text-center font-display text-xl font-semibold text-foreground mb-10">
            Our Strategic Partners in{" "}
            <span className="text-primary">Public Sector IT</span>
          </h3>
        </div>

        {/* Full-width Scrolling Slider */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto"
          style={{
            scrollBehavior: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex items-center gap-12 px-8 py-6 w-max">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="group flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ACT Section */}
      <section ref={whyRef} className="py-20 md:py-28">
        <div className="container-width px-4 md:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isWhyInView
                ? "opacity-100 translate-y-0"
                : "opacity-1 translate-y-10"
            }`}
          >
            <Badge
              variant="outline"
              className="mb-4 border-primary/50 text-primary"
            >
              Why ACT
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose ACT for{" "}
              <span className="text-primary">Public Sector IT</span>
            </h2>
            {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ACT empowers government entities to meet today's needs while future-proofing for tomorrow.
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseACT.map((item, idx) => (
              <div
                key={item.title}
                className={`flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 transition-all duration-500 ${
                  isWhyInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-1 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-card/50">
        <div className="container-width px-4 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your{" "}
            <span className="text-primary">Public Services</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Partner with ACT to deliver secure, citizen-centric digital
            transformation for your government organization.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PublicSectorPage;
