import { Link } from "react-router-dom";
import {
  ArrowRight,
  GraduationCap,
  Laptop,
  Shield,
  Wifi,
  Server,
  Cloud,
  Monitor,
  Users,
  Lock,
  Leaf,
  Award,
  CheckCircle,
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
import educationHero from "@/assets/industries/education.jpg";
import sewedyBg from "@/assets/success-stories/sewedy-bg.jpg";
import sewedyLogo from "@/assets/success-stories/sewedy-logo.jpg";
// Case study images
import mustUniversityImg from "@/assets/case-studies/must-university.jpg";
import alAzharLibraryImg from "@/assets/case-studies/al-azhar-library.jpg";

// Partner logos (white versions for dark background)
import partnerHpe from "@/assets/industries/partner-hpe-white.png";
import partnerCisco from "@/assets/industries/partner-cisco-white.png";

const strategicPillars = [
  {
    icon: Laptop,
    title: "Next-Generation Learning Spaces",
    description:
      "Transform traditional classrooms into hybrid, interactive, and digital-first environments with lecture sharing, video collaboration, and remote learning support.",
  },
  {
    icon: Shield,
    title: "Smart Campus Security",
    description:
      "Comprehensive video surveillance, access control, student attendance, and vehicle management solutions that ensure safety while building trust with parents and staff.",
  },
  {
    icon: Monitor,
    title: "Digital Transformation for Schools",
    description:
      "Cloud-based tools, AI-driven apps, and data integration that enhance teaching quality, reduce workloads, and streamline school operations.",
  },
  {
    icon: Leaf,
    title: "Sustainability and Smart Facilities",
    description:
      "Energy-efficient lighting, cooling, and waste management systems that reduce costs while creating greener campuses.",
  },
  {
    icon: Lock,
    title: "Cybersecurity for Education",
    description:
      "Protect student data, block harmful content, and secure networks with endpoint protection, firewalls, intrusion prevention, and compliance (CIPA, FERPA).",
  },
];

const technologySolutions = [
  {
    icon: Shield,
    title: "Safe and Smart Campuses",
    features: [
      "Access control, attendance, and pickup systems",
      "AI-powered classroom monitoring",
      "IP surveillance & real-time alerts",
    ],
  },
  {
    icon: Laptop,
    title: "Hybrid and Digital Learning",
    features: [
      "Lecture sharing & remote classroom solutions",
      "Interactive HD video classes",
      "Digital signage & smart teaching tools",
    ],
  },
  {
    icon: Wifi,
    title: "High-Performance Networking",
    features: [
      "Wi-Fi 6/7 for classrooms & outdoor areas",
      "Centralized cloud controllers for scalability",
      "Application monitoring & traffic optimization",
    ],
  },
  {
    icon: Monitor,
    title: "Device and Endpoint Management",
    features: [
      "Manage thousands of devices (iOS, Android, Mac, PC)",
      "Push updates, block harmful content, locate devices",
      "Support for BYOD and 1:1 programs",
    ],
  },
  {
    icon: Cloud,
    title: "Data Protection and Cloud Solutions",
    features: [
      "Hyperconverged infrastructure (VDI, private cloud)",
      "Disaster recovery & backup solutions",
      "Secure data management & analytics",
    ],
  },
];

const whyChooseACT = [
  {
    icon: Award,
    title: "35+ Years of ICT Leadership",
    description: "Delivering innovative technology solutions that power education across Egypt and the MENA region.",
  },
  {
    icon: Building2,
    title: "Proven Education Experience",
    description:
      "Trusted by schools, universities, and smart campuses to build connected, future-ready learning environments.",
  },
  {
    icon: Clock,
    title: "Nationwide SLA-Driven Support",
    description: "Reliable coverage and responsive service ensuring consistent performance across all institutions.",
  },
  {
    icon: Users,
    title: "Vendor-Certified Expertise",
    description: "A skilled team accredited by leading global OEMs to deliver quality and compliance in every project.",
  },
  {
    icon: CheckCircle,
    title: "Integrated Smart Campus Approach",
    description: "Connecting classrooms, campuses, security, and data into one seamless digital ecosystem.",
  },
];

const successStories = [
  {
    id: "must-university-campus",
    title: "MUST University Builds a Smart Campus with ACT’s End-to-End Network and Security Solutions",
    company: "MUST University",
  },
  {
    id: "knowledge-hub-aruba",
    title: "El Sewedy Education’s The Knowledge Hub Transforms Connectivity with ACT’s HPE Aruba Network Solution",
    company: "El Sewedy Education",
    backgroundImage: sewedyBg,
    logo: sewedyLogo,
  },
  {
    id: "Technology Infrastructure for Al-Azhar Library",
    title:
      "ACT Delivers Cutting-Edge Technology Infrastructure for Al-Azhar Library – The Largest Islamic Library in the Middle East",
    company: "Al-Azhar Library",
    backgroundImage: sewedyBg,
    logo: sewedyLogo,
  },
];

const partners = [
  { name: "HPE", logo: partnerHpe },
  { name: "Cisco", logo: partnerCisco },
];

const EducationPage = () => {
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
          <img src={educationHero} alt="Education Industry" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container-width px-4 md:px-8 relative z-10">
          <div
            className={`max-w-3xl text-left transition-all duration-700 ${
              isHeroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <GraduationCap className="w-3 h-3 mr-1" />
              Education Industry
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Smart, Sustainable Technology Solutions for <span className="text-primary">Schools</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              At ACT, we believe education is the foundation of the future. For over 35 years, we've partnered with
              schools, universities, and educational institutions across Egypt and MENA to design and deliver
              end-to-end, technology-driven learning ecosystems. From hybrid classrooms and student safety to
              cybersecurity, device management, and smart campuses, ACT enables schools to adopt future- ready education
              models that empower students, support teachers, and transform operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Let's Talk
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              {/* <Button asChild variant="outline" size="lg">
                <Link to="/case-studies">View Case Studies</Link>
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
              The Strategic Pillars of ACT's <span className="text-primary">Education Expertise</span>
            </h2>
            {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From hybrid classrooms and student safety to cybersecurity, device management, and smart campuses.
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

      {/* Technology Solutions Section */}
      <section ref={solutionsRef} className="py-20 md:py-28 bg-card/30">
        <div className="container-width px-4 md:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isSolutionsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              Technology Solutions
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              ACT's Education <span className="text-primary">Technology Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solutions for modern schools, universities, and smart campuses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologySolutions.map((solution, idx) => (
              <Card
                key={solution.title}
                className={`group border-border/50 bg-background/50 hover:border-primary/50 transition-all duration-500 ${
                  isSolutionsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
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
              isStoriesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              <Award className="w-3 h-3 mr-1" />
              Success Stories
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              ACT Education <span className="text-primary">Success Stories</span>
            </h2>
          </div>

          {/* Homepage-style cards - 3 in a row */}
          <div className="grid md:grid-cols-3 gap-6">
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
                <div className="aspect-[3/4] relative overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={story.backgroundImage || sewedyBg}
                    alt={story.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

                  {/* Logo Top Right */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl p-2 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <img
                        src={story.logo || sewedyLogo}
                        alt={`${story.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <div className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-white/90 uppercase tracking-wider bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                      Education
                    </span>
                  </div>

                  {/* Content at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">
                      {story.title}
                    </h3>
                    {/* <p className="text-sm text-white/80 leading-relaxed">{story.subtitle}</p> */}

                    {/* Arrow */}
                    <div className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                      <span className="text-sm font-medium">Read the case study</span>
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

      {/* Partners Section */}
      <section className="py-16 bg-card/30 border-y border-border/50">
        <div className="container-width px-4 md:px-8">
          <h3 className="text-center font-display text-lg font-semibold text-muted-foreground mb-8">
            Our Strategic Partners in Education
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
              Why Choose ACT for <span className="text-primary">Education IT</span>
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
              Start Your Education Transformation with <span className="text-primary">ACT</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let ACT be your trusted IT partner to build safe, connected, and future-ready schools.
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

export default EducationPage;
