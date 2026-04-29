import { Link } from "react-router-dom";
import {
  ArrowRight,
  Fuel,
  Network,
  Shield,
  Database,
  Camera,
  Server,
  Cpu,
  Cloud,
  Wrench,
  Award,
  CheckCircle,
  Users,
  Clock,
  Building2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/useInView";

// Import assets
import oilGasHero from "@/assets/industries/oil-gas-hero-2.jpg";
import agibaBg from "@/assets/success-stories/agiba-bg.jpg";
import agibaLogo from "@/assets/success-stories/agiba-logo.png";
import sopcBg from "@/assets/success-stories/sopc-bg.png";
import sopcLogo from "@/assets/success-stories/sopc-logo.png";

// Partner logos (white versions for dark background)
import partnerRittal from "@/assets/industries/partner-rittal-white.png";
import partnerCommvault from "@/assets/industries/partner-commvault-white.png";
import partnerHpe from "@/assets/industries/partner-hpe-white.png";
import partnerCisco from "@/assets/industries/partner-cisco-white.png";
import partnerVmware from "@/assets/industries/partner-vmware-white.png";

const strategicPillars = [
  {
    icon: Network,
    title: "Enterprise Networking for Remote Sites",
    description:
      "Robust LAN, WAN, and wireless networks ensuring secure, high-performance connectivity between field sites, refineries, and HQ.",
  },
  {
    icon: Shield,
    title: "End-to-End Cybersecurity",
    description:
      "From firewalls to 24/7 SOC services, ACT safeguards sensitive operational and exploration data against evolving threats.",
  },
  {
    icon: Database,
    title: "Data Protection and Business Continuity",
    description:
      "Backup, disaster recovery, and business continuity solutions that ensure zero data loss and uninterrupted operations.",
  },
  {
    icon: Camera,
    title: "IP Video Surveillance and Access Control",
    description:
      "Integrated monitoring systems to secure critical infrastructure, assets, and personnel across multiple sites.",
  },
  {
    icon: Server,
    title: "Data Center Infrastructure",
    description:
      "Civil works, power systems, fire safety, cooling, and IT migration designed to build secure, scalable, and compliant facilities.",
  },
];

const digitalSolutions = [
  {
    icon: Cpu,
    title: "SCADA and IoT Integration",
    description:
      "Seamlessly connect field sensors, equipment, and control systems to enable real-time monitoring, data collection, and automated decision-making.",
  },
  {
    icon: Wrench,
    title: "Predictive Maintenance with AI",
    description:
      "Leverage machine learning to anticipate equipment failures, minimize downtime, and optimize maintenance schedules for maximum efficiency.",
  },
  {
    icon: Cloud,
    title: "Cloud and Hybrid IT",
    description:
      "Empower collaboration and scalability with secure cloud and hybrid infrastructures tailored for data-intensive Oil & Gas environments.",
  },
  {
    icon: Network,
    title: "Secure Networking for Refineries",
    description:
      "Ensure reliable, high-speed, and protected connectivity between remote sites, headquarters, and data centers to maintain business continuity.",
  },
];

const whyChooseACT = [
  {
    icon: Award,
    title: "35+ Years of ICT Excellence",
    description: "Delivering trusted technology solutions across Egypt and MENA.",
  },
  {
    icon: Building2,
    title: "Proven Industry Expertise",
    description: "Supporting leading Oil & Gas enterprises with tailored IT strategies.",
  },
  {
    icon: Clock,
    title: "Nationwide SLA Coverage",
    description: "Ensuring uninterrupted operations with responsive local support.",
  },
  {
    icon: Users,
    title: "Certified Engineering Team",
    description: "Partnered with top global OEMs for reliable implementation.",
  },
  {
    icon: CheckCircle,
    title: "Integrated IT Approach",
    description: "Combining network, security, data, and facilities into one seamless solution.",
  },
];

const successStories = [
  {
    id: "agiba-data-center",
    title: "AGIBA Data Center Renovation",
    subtitle: "IT Migration and Business Continuity Without Downtime",
    company: "AGIBA Petroleum",
    backgroundImage: agibaBg,
    logo: agibaLogo,
  },
  {
    id: "sopc-data-center",
    title: "SOPC Data Center Transformation",
    subtitle: "Unlocking Performance, Scalability & Future Growth",
    company: "SOPC",
    backgroundImage: sopcBg,
    logo: sopcLogo,
  },
];

const partners = [
  { name: "Rittal", logo: partnerRittal },
  { name: "Commvault", logo: partnerCommvault },
  { name: "HPE", logo: partnerHpe },
];

const OilGasPage = () => {
  const [heroRef, isHeroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [pillarsRef, isPillarsInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [solutionsRef, isSolutionsInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [whyRef, isWhyInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [storiesRef, isStoriesInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - More visible image */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[70vh] flex items-center"
      >
        {/* Background Image - More visible */}
        <div className="absolute inset-0">
          <img src={oilGasHero} alt="Oil & Gas Industry" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container-width px-4 md:px-8 relative z-10">
          <div
            className={`max-w-3xl text-left transition-all duration-700 ${
              isHeroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <Fuel className="w-3 h-3 mr-1" />
              Oil & Gas Industry
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Empowering Egypt's <span className="text-primary">Oil & Gas Sector</span> with Integrated IT Excellence
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              At ACT, we understand the critical demands of the Oil & Gas industry, from exploration sites to
              headquarters. For over 35 years, we've delivered end-to-end, on-premises IT solutions that transform
              manual operations into dynamic, automated ecosystems From enterprise networking and cybersecurity to data
              protection, IP video surveillance, and data center infrastructure, ACT ensures your operations are
              connected, resilient, and secure. With a nationwide presence and SLA-driven service teams, we guarantee
              seamless connectivity across branches, centralized monitoring through a single pane of glass, and
              uncompromised data security.
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
              isPillarsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              Our Expertise
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Strategic Pillars of ACT's <span className="text-primary">Oil & Gas Expertise</span>
            </h2>
            {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From enterprise networking and cybersecurity to data protection, IP video surveillance, and data center infrastructure.
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicPillars.map((pillar, idx) => (
              <Card
                key={pillar.title}
                className={`group border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-500 ${
                  isPillarsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                  <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Solutions Section */}
      <section ref={solutionsRef} className="py-20 md:py-28 bg-card/30">
        <div className="container-width px-4 md:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isSolutionsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              Digital Innovation
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Oil & Gas <span className="text-primary">Digital Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Driving Innovation and Operational Excellence Across Exploration, Production, and Refinery Management
              Through Advanced Digital Technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {digitalSolutions.map((solution, idx) => (
              <Card
                key={solution.title}
                className={`group border-border/50 bg-background/50 hover:border-primary/50 transition-all duration-500 ${
                  isSolutionsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                    <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section - Homepage style cards */}
      <section ref={storiesRef} className="py-20 md:py-28">
        <div className="container-width px-4 md:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isStoriesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              <Award className="w-3 h-3 mr-1" />
              Success Stories
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              ACT Oil & Gas <span className="text-primary">Success Stories</span>
            </h2>
          </div>

          {/* Homepage-style cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {successStories.map((story, idx) => (
              <Link
                key={story.id}
                to={`/case-study/${story.id}`}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:scale-[1.02] ${
                  isStoriesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                      <img src={story.logo} alt={`${story.company} logo`} className="w-full h-full object-contain" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <div className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center">
                      <Fuel className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-white/90 uppercase tracking-wider bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                      Oil & Gas
                    </span>
                  </div>

                  {/* Content at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">
                      {story.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">{story.subtitle}</p>

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
              isStoriesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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

      {/* Partners Section - Logos without boxes */}
      <section className="py-16 bg-card/30 border-y border-border/50">
        <div className="container-width px-4 md:px-8">
          <h3 className="text-center font-display text-lg font-semibold text-muted-foreground mb-8">
            Our Strategic Partners in Oil & Gas
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
              isWhyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              Why ACT
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Why Choose ACT for <span className="text-primary">Oil & Gas IT</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseACT.map((item, idx) => (
              <div
                key={item.title}
                className={`text-center p-6 transition-all duration-500 ${
                  isWhyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <item.icon size={32} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
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
              Start Your Transformation Journey with <span className="text-primary">ACT</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let ACT be your trusted IT partner to drive efficiency, security, and innovation across your Oil and Gas
              enterprise.
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

export default OilGasPage;
