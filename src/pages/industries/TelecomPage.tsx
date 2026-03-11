import { Link } from "react-router-dom";
import {
  ArrowRight,
  Radio,
  Network,
  Shield,
  Server,
  Cloud,
  Cpu,
  Wifi,
  Signal,
  Award,
  CheckCircle,
  Users,
  Clock,
  Building2,
  Globe,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/useInView";

// Import assets
import telecomHero from "@/assets/industries/telecom-hero.jpg";
import telecomBg from "@/assets/success-stories/telecom-bg.jpg";
import telecomLogo from "@/assets/success-stories/telecom-logo.png";

// Partner logos (white versions for dark background)
import partnerCisco from "@/assets/industries/partner-cisco-white.png";
import partnerHpe from "@/assets/industries/partner-hpe-white.png";
import partnerCommvault from "@/assets/industries/partner-commvault-white.png";

const strategicPillars = [
  {
    icon: Signal,
    title: "Next-Generation Architectures with Open RAN",
    description:
      "Break free from vendor lock-in with flexible, open, and intelligent RAN solutions. ACT ensures seamless interoperability between RUs, DUs, and CUs, helping operators reduce Total Cost of Ownership (TCO) and accelerate innovation.",
  },
  {
    icon: Network,
    title: "Data-Driven Intelligence with DPI",
    description:
      "Our Deep Packet Inspection solutions go beyond traffic management. Gain granular, real-time insights to optimize Quality of Service (QoS), monetize user behavior, enable network slicing, and strengthen your customer experience.",
  },
  {
    icon: Wifi,
    title: "Enterprise 5G and Edge Computing",
    description:
      "ACT delivers private 5G networks for factories, logistics hubs, campuses, and smart cities — integrating edge computing to enable IoT, automation, and mission-critical operations with ultra-low latency.",
  },
  {
    icon: Zap,
    title: "Accelerated Time-to-Market",
    description:
      "With our CI/CD expertise and automated orchestration, ACT deploys advanced telecom solutions faster, reducing complexity and enabling you to monetize new services sooner.",
  },
  {
    icon: Shield,
    title: "Risk Mitigation in Multi-Vendor Environments",
    description:
      "Multi-vendor ecosystems are powerful but complex. ACT's skilled engineering teams and security-first approach ensure seamless integration, performance, and resilience.",
  },
];

const coreSolutions = [
  {
    icon: Signal,
    title: "Next-Generation Network Solutions (5G in Egypt & MENA)",
    features: [
      "5G Core Network Design & Deployment (Cisco): Build robust, scalable,and secure 5G networks from RAN to core.",
      "Private 5G for Enterprises: Custom-designed 5G for smart cities,manufacturing, and logistics hubs.",
      "Network Slicing & Edge Computing: Enable application-specific virtualnetworks and new revenue streams.",
    ],
  },
  {
    icon: Network,
    title: "Network Intelligence & Service Assurance",
    features: [
      "DPI with Enea: Real-time insights into network usage and customerbehavior.",
      "Service Assurance with Netscout & AXON: Proactive visibility and qualityassurance for multi-vendor environments.",
      "Automated Network Analytics: Closed-loop management to detect andfix issues, reducing OPEX.",
    ],
  },
  {
    icon: Server,
    title: "Operational & Business Support Systems (OSS/BSS)",
    features: [
      "OSS (Operations Support Systems): Inventory, fault management, andservice fulfillment to streamline operations.",
      "BSS (Business Support Systems): Billing, CRM, and product catalogmanagement to improve customer experience.",
      "Revenue Assurance: Prevent fraud and revenue leakage with AI-poweredauditing and reconciliation.",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity for Telecom",
    features: [
      "End-to-End Security Architectures: Protect hardware, applications, andcritical infrastructure.",
      "Fraud Management: Defend against SIM boxing, bypass fraud, andcyberattacks with AI/ML solutions.",
      "SIM boxing & bypass fraud defense",
    ],
  },
  {
    icon: Cpu,
    title: "Legacy & IT Infrastructure",
    features: [
      "Legacy System Integration: Maintain and upgrade existing investmentswith HP, Dell, Aruba, and Cisco technologies.",
      "24/7 network management",
      "Managed Services for Telecom: 24/7 network management, hardwaremaintenance, software updates, and support.",
    ],
  },
];

const whyChooseACT = [
  {
    icon: Award,
    title: "35+ Years of ICT Leadership",
    description:
      "Decades of experience delivering transformative telecom and enterprise IT solutions across the region.",
  },
  {
    icon: Building2,
    title: "Proven Track Record",
    description:
      "Trusted by leading telecom operators and enterprises to build reliable, future-ready infrastructures.",
  },
  {
    icon: Users,
    title: "Vendor-Certified Expertise",
    description: "A highly skilled team certified by top global technology providers ensures best-in-class delivery.",
  },
  {
    icon: Signal,
    title: "5G, Open RAN & DPI Integration",
    description:
      "Specialized in next-generation network technologies that power faster, smarter, and more connected experiences.",
  },
  {
    icon: Globe,
    title: "Local Presence, Global Reach",
    description:
      "Strong on-ground operations backed by international partnerships for seamless regional and global support.",
  },
];

const successStories = [
  {
    id: "telecom-egypt-data",
    title: "Telecom Egypt Data Activation",
    subtitle: "How ACT Enabled Telecom Egypt to Activate Data Beyond Backup",
    company: "Telecom Egypt",
    backgroundImage: telecomBg,
    logo: telecomLogo,
  },
  {
    id: "vodafone-it-infrastructure",
    title: "Vodafone Egypt IT Infrastructure",
    subtitle: "End-to-End IT Infrastructure for Four New Buildings",
    company: "Vodafone Egypt",
    backgroundImage: telecomHero,
    logo: telecomLogo,
  },
];

const partners = [
  { name: "Cisco", logo: partnerCisco },
  { name: "HPE", logo: partnerHpe },
  { name: "Commvault", logo: partnerCommvault },
];

const TelecomPage = () => {
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [pillarsRef, isPillarsInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [solutionsRef, isSolutionsInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [whyRef, isWhyInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [storiesRef, isStoriesInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

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
            src={telecomHero}
            alt="Telecom Industry"
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
              <Radio className="w-3 h-3 mr-1" />
              Telecom Industry
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Telecom Solutions for{" "}
              <span className="text-primary">
                Next-Generation Connectivity in Egypt & MENA
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              In today's digital-first landscape where connectivity is
              everything, ACT is more than an IT and telecom integrator — we are
              your strategic partner in next-generation network evolution. We
              design, build, and manage future-ready telecom solutions , from
              the disaggregated power of Open RAN to the data-driven
              intelligence of Deep Packet Inspection (DPI) and the
              transformative speed of 5G in Egypt and MENA. With ACT, you don’t
              just connect; you unlock new revenue streams, optimize operations,
              improve resilience, and secure your competitive edge.
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
              <span className="text-primary">Telecom Expertise</span>
            </h2>
            {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From Open RAN and 5G to Deep Packet Inspection and edge computing solutions.
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
              Core Solutions
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Telecom <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solutions for every kind of your business needs.
            </p>
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
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <solution.icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section ref={storiesRef} className="py-20 md:py-28">
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
              Telecom <span className="text-primary">Success Stories</span> with
              ACT
            </h2>
          </div>

          {/* Homepage-style cards */}
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

                  {/* Logo Top Right */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl p-2 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <img
                        src={story.logo}
                        alt={`${story.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <div className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center">
                      <Radio className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-white/90 uppercase tracking-wider bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                      Telecom
                    </span>
                  </div>

                  {/* Content at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">
                      {story.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {story.subtitle}
                    </p>

                    {/* Arrow */}
                    <div className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
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

      {/* Partners Section */}
      <section className="py-16 bg-card/30 border-y border-border/50">
        <div className="container-width px-4 md:px-8">
          <h3 className="text-center font-display text-lg font-semibold text-muted-foreground mb-8">
            Our Strategic Partners in Telecom
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center hover:scale-105 transition-transform duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 md:h-14 lg:h-16 w-auto object-contain max-w-[140px] md:max-w-[180px]"
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Why Choose ACT for{" "}
              <span className="text-primary">Telecom Solutions</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseACT.map((item, idx) => (
              <div
                key={item.title}
                className={`text-center p-6 transition-all duration-500 ${
                  isWhyInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-1 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <item.icon size={32} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container-width px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Unlock Next-Generation Connectivity with{" "}
              <span className="text-primary">ACT</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With ACT, you don't just connect — you unlock new revenue streams,
              optimize operations, improve resilience, and secure your
              competitive edge.
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

export default TelecomPage;
