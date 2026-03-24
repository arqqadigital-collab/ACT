import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  fetchHospitalityStats,
  HospitalityStat,
} from "@/services/hospitalityStatsService";
import { fetchHospitalityPartnerships } from "@/services/hospitalityPartnershipsService";
import {
  fetchHospitalityProfessionalServices,
  ProfessionalServicesData,
} from "@/services/hospitalityProfessionalServicesService";
import {
  fetchHospitalitySolutions,
  HospitalitySolutionsData,
} from "@/services/hospitalitySolutionsService";
import {
  fetchHospitalityTechnologyPartners,
  HospitalityTechnologyPartnersData,
} from "@/services/hospitalityTechnologyPartnersService";
import {
  fetchHospitalityWhyChoose,
  HospitalityWhyChooseData,
} from "@/services/hospitalityWhyChooseService";
import {
  fetchCaseStudies,
  getStrapiImageUrl,
  CaseStudy,
} from "@/services/caseStudiesService";
import {
  ArrowRight,
  Hotel,
  Utensils,
  Wifi,
  Shield,
  Users,
  Clock,
  Globe,
  Award,
  CheckCircle,
  Settings,
  Sparkles,
  Dumbbell,
  CreditCard,
  Building2,
  MapPin,
  Phone,
  Mail,
  Laptop,
  LineChart,
  Ticket,
  LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
// Partner logos
import partnerCisco from "@/assets/partners/cisco.png";
import partnerHpe from "@/assets/partners/hpe.png";
import partnerAruba from "@/assets/partners/aruba.png";
// Oracle Partner Badges
import oracleCloudHospitality from "@/assets/partners/oracle-cloud-service-hospitality.png";
import oracleCloudFnb from "@/assets/partners/oracle-cloud-service-fnb.png";
import oracleSellHospitality from "@/assets/partners/oracle-sell-hospitality.png";
import oracleSellFnb from "@/assets/partners/oracle-sell-fnb.png";
// Hospitality images
import propertyManagementImg from "@/assets/hospitality/property-management.png";
import restaurantManagementImg from "@/assets/hospitality/restaurant-management.png";
import smartRoomsImg from "@/assets/hospitality/smart-rooms.png";
import financialSystemsImg from "@/assets/hospitality/financial-systems.png";
import wellnessImg from "@/assets/hospitality/wellness.png";
// Professional Services images
import managedServicesImg from "@/assets/hospitality/managed-services.jpg";
import networkSecurityImg from "@/assets/hospitality/network-security.jpg";
import slaImg from "@/assets/hospitality/sla.jpg";
import digitalTransformationImg from "@/assets/hospitality/digital-transformation.jpg";

// Default fallback stats

// Service card data for sticky scroll section
import {
  StackingCardsSection,
  StackingCardData,
} from "@/components/StackingCards";

const servicesData: StackingCardData[] = [
  {
    label: "Hospitality Core",
    title: "Property Management Systems",
    description:
      "Oracle OPERA Suite: Streamline operations, reservations, and guest services across all departments",
    color: "hsl(var(--primary))",
    icon: Hotel,
    image: propertyManagementImg,
  },
  {
    label: "F&B Excellence",
    title: "Restaurant Management",
    description:
      "Oracle Simphony POS: Manage menus, optimize service, and enhance the dining experience with intelligent",
    color: "hsl(var(--primary))",
    icon: Utensils,
    image: restaurantManagementImg,
  },
  {
    label: "Experience Design",
    title: "Guest Automation & Smart Rooms",
    description:
      "Create seamless, personalized guest experiences with smart room controls, contactless check-in, and IoT integration",
    color: "hsl(var(--primary))",
    icon: Laptop,
    image: smartRoomsImg,
  },
  {
    label: "Financial Control",
    title: "Accounting & Financial Systems",
    description:
      "Centralize financial management, improve visibility, and maintain compliance effortlessly",
    color: "hsl(var(--primary))",
    icon: LineChart,
    image: financialSystemsImg,
  },
  {
    label: "Leisure Services",
    title: "Entertainment & Wellness",
    description:
      "Integrated Offer guests connected, data-driven leisure experiences",
    color: "hsl(var(--primary))",
    icon: Ticket,
    image: wellnessImg,
  },
];

// Professional Services data for hover reveal section
const professionalServicesData = [
  {
    id: 1,
    title: "Managed Services",
    description:
      "24/7 proactive monitoring and support to keep your operations running smoothly around the clock.",
    image: managedServicesImg,
  },
  {
    id: 2,
    title: "Network and Security Services",
    description:
      "Robust, secure, and scalable connectivity solutions tailored for the hospitality industry.",
    image: networkSecurityImg,
  },
  {
    id: 3,
    title: "Service-Level Agreements (SLA)",
    description:
      "Guaranteed uptime and performance with clearly defined service commitments and response times.",
    image: slaImg,
  },
  {
    id: 4,
    title: "Digital Transformation Services",
    description:
      "Aligning technology with business vision to drive innovation and operational excellence.",
    image: digitalTransformationImg,
  },
];

// Professional Services Hover Reveal Component
const ProfessionalServicesSection = ({
  data,
}: {
  data: ProfessionalServicesData | null;
}) => {
  const services =
    data && data.services.length > 0 ? data.services : professionalServicesData;
  const [activeId, setActiveId] = useState(services[0].id);
  const [sectionRef, isSectionInView] = useInView<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="container-width px-4 md:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isSectionInView
              ? "opacity-100 translate-y-0"
              : "opacity-1 translate-y-8"
          }`}
        >
          <Badge
            variant="outline"
            className="mb-4 border-primary/50 text-primary"
          >
            {data?.badge || "Professional Services"}
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {data?.heading || "We don't just implement technology,"}{" "}
            <br className="hidden md:block" />
            <span className="text-primary">
              {data?.headingHighlight || "we ensure it performs to perfection."}
            </span>
          </h2>
        </div>

        {/* Hover Reveal Container */}
        <div
          className={`w-full bg-card rounded-3xl overflow-hidden border border-border/30 shadow-2xl transition-all duration-700 ${
            isSectionInView
              ? "opacity-100 translate-y-0"
              : "opacity-1 translate-y-8"
          }`}
        >
          <div className="flex flex-col lg:flex-row min-h-[500px]">
            {/* Left Side: Service List */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center gap-2">
              {services.map((service) => (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveId(service.id)}
                  className={`group relative py-6 cursor-pointer border-b border-border/30 transition-all duration-300 ${
                    activeId === service.id
                      ? "opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-display font-medium tracking-tight text-foreground">
                      {service.title}
                    </h3>
                    <ArrowRight
                      className={`text-primary transition-all duration-500 ${
                        activeId === service.id
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-4 opacity-1"
                      }`}
                      size={32}
                    />
                  </div>
                  {/* Mobile-only description (shows when active on small screens) */}
                  <div
                    className={`lg:hidden overflow-hidden transition-all duration-500 ${
                      activeId === service.id
                        ? "max-h-40 mt-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Dynamic Preview with Image (Desktop Only) */}
            <div className="flex-1 relative overflow-hidden hidden lg:block">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    activeId === service.id
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-110 translate-y-4 pointer-events-none"
                  }`}
                >
                  {/* Background Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Content - Aligned to Bottom */}
                  <div className="absolute inset-0 flex flex-col justify-end p-12">
                    <div
                      className={`transition-all duration-500 delay-100 ${
                        activeId === service.id
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                    >
                      <h3 className="text-3xl font-display font-bold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-xl leading-relaxed max-w-md">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const successStories = [
  {
    id: "city-hotel-hospitality",
    category: "Urban Hospitality",
    title: "City Hotel",
    subtitle:
      "Reduced check-in times by 40% through self-service kiosks & smart integration.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "luxury-resort-hospitality",
    category: "Hospitality",
    title: "Luxury Resort",
    subtitle: "Boosted guest satisfaction by 25% with OPERA PMS & automation.",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "maden-hotels-hospitality",
    category: "Leisure & Wellness",
    title: "Maden Hotels",
    subtitle:
      "Increased membership revenue by 30% using Spa & Access Control solutions.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
  },
];

// Global Presence Section Component
const GlobalPresenceSection = () => {
  const [sectionRef, isSectionInView] = useInView<HTMLElement>({
    threshold: 0.2,
  });
  const [activeOffice, setActiveOffice] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null,
  );

  const activeOfficeData = officeLocations.find((o) => o.id === activeOffice);

  const handleCountryHover = (e: React.MouseEvent, officeId: string) => {
    setActiveOffice(officeId);
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (activeOffice) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-background relative overflow-hidden min-h-[700px]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px] animate-pulse" />
      </div>

      {/* Gradient Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isSectionInView
              ? "opacity-100 translate-y-0"
              : "opacity-1 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-4">
            Global Presence
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ACT combines regional expertise with{" "}
            <span className="text-primary">global reach</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering hospitality solutions that meet international standards.
          </p>
        </div>

        {/* World Map Container */}
        <div
          className={`relative w-full max-w-6xl mx-auto aspect-[2/1] transition-all duration-1000 ${
            isSectionInView ? "opacity-100 scale-100" : "opacity-1 scale-90"
          }`}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            setActiveOffice(null);
            setMousePos(null);
          }}
        >
          {/* Edge Fade Overlays */}
          <div className="absolute inset-0 pointer-events-none z-20">
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
          </div>

          {/* PNG Map */}
          <div className="relative w-full h-full">
            <img
              src="/images/world-map.png"
              alt="World Map"
              className="w-full h-full object-contain"
              style={{ filter: "brightness(0.5) contrast(1.1)", opacity: 0.6 }}
            />

            {/* Country Hover Areas with circular orange highlight */}
            {officeLocations.map((office) => (
              <div
                key={office.id}
                className="absolute cursor-pointer group"
                style={{
                  left: `${office.coords.x}%`,
                  top: `${office.coords.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={(e) => handleCountryHover(e, office.id)}
              >
                {/* Circular orange highlight on hover */}
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-full transition-all duration-300 ${
                    activeOffice === office.id
                      ? "bg-primary/60 shadow-[0_0_40px_15px_hsl(var(--primary)/0.5)] border-2 border-primary"
                      : "bg-primary/20 hover:bg-primary/40"
                  }`}
                />

                {/* Pulse animation when active */}
                {activeOffice === office.id && (
                  <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Floating Info Card (follows mouse) */}
        {activeOfficeData && mousePos && (
          <div
            className="fixed z-50 pointer-events-none animate-fade-in"
            style={{
              left: `${mousePos.x + 20}px`,
              top: `${mousePos.y - 20}px`,
              transform: "translateY(-100%)",
            }}
          >
            <div className="glass-card px-6 py-5 rounded-2xl min-w-[320px] max-w-[400px] shadow-2xl border border-primary/30 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <activeOfficeData.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg">
                  {activeOfficeData.name}
                </h3>
              </div>

              <div className="space-y-4">
                {activeOfficeData.offices.map((office, idx) => (
                  <div
                    key={idx}
                    className={idx > 0 ? "pt-4 border-t border-border/50" : ""}
                  >
                    <h4 className="font-semibold text-primary text-sm mb-1">
                      {office.city}
                    </h4>
                    <p className="font-medium text-foreground text-sm mb-2">
                      {office.company}
                    </p>
                    <div className="text-xs text-muted-foreground space-y-0.5">
                      {office.address.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    {office.fax && (
                      <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                        <Mail className="w-3 h-3" />
                        <span>Fax: {office.fax}</span>
                      </div>
                    )}
                    {office.tel && (
                      <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                        <Phone className="w-3 h-3" />
                        <span>Tel: {office.tel}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Office locations for map section
interface OfficeLocation {
  id: string;
  name: string;
  offices: {
    city: string;
    company: string;
    address: string[];
    fax?: string;
    tel?: string;
  }[];
  icon: typeof Building2;
  coords: { x: number; y: number };
}

const officeLocations: OfficeLocation[] = [
  {
    id: "egypt",
    name: "Egypt",
    offices: [
      {
        city: "Cairo, Egypt",
        company: "ACT Headquarters",
        address: [
          "Smart Villages Company, Building B92 – A13,",
          "Al Giza Desert, Giza Governorate",
          "19488",
        ],
      },
    ],
    icon: Building2,
    coords: { x: 53, y: 38 },
  },
  {
    id: "uae",
    name: "UAE",
    offices: [
      {
        city: "Dubai, UAE",
        company: "ACT Middle East",
        address: ["Al Thuraya Tower 1, Office 1608,", "Media City, Dubai, UAE"],
        fax: "+971 (4) 5726398",
      },
    ],
    icon: Globe,
    coords: { x: 58, y: 42 },
  },
  {
    id: "saudi",
    name: "Saudi Arabia",
    offices: [
      {
        city: "Riyadh, Saudi Arabia",
        company: "ACT Technology",
        address: [
          "Al Imam Saud Ibn Faisal Rd., Al Malqa,",
          "Riyadh 13522, Saudi Arabia",
        ],
        fax: "+966 11445 5883",
      },
    ],
    icon: MapPin,
    coords: { x: 56, y: 40 },
  },
  {
    id: "germany",
    name: "Germany",
    offices: [
      {
        city: "Germany",
        company: "ACT Technology",
        address: ["Hottorfer Str. 17A", "52445 Titz Germany"],
        tel: "+491711608821",
      },
    ],
    icon: Building2,
    coords: { x: 49, y: 25 },
  },
];

const whyChooseACT = [
  {
    icon: Award,
    title: "Oracle Gold Partner",
    description: "Certified expertise in Simphony POS & OPERA PMS solutions.",
  },
  {
    icon: Globe,
    title: "Global Presence",
    description: "Offices in Egypt, Dubai, Saudi Arabia, and Germany.",
  },
  {
    icon: Users,
    title: "3,000+ Satisfied Customers",
    description: "Trusted by hospitality brands worldwide.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock proactive monitoring and assistance.",
  },
  {
    icon: CheckCircle,
    title: "35+ Years Experience",
    description: "Decades of hospitality technology expertise.",
  },
];

const partners = [
  { name: "Cisco", logo: partnerCisco },
  { name: "HPE", logo: partnerHpe },
  { name: "Aruba", logo: partnerAruba },
];

// Icon map for dynamic Why Choose ACT items
const iconMap: Record<string, LucideIcon> = {
  Award,
  Globe,
  Users,
  Clock,
  CheckCircle,
  Settings,
  Sparkles,
  Shield,
  Hotel,
  Utensils,
  Wifi,
  ArrowRight,
  Laptop,
  LineChart,
  Ticket,
  Dumbbell,
  CreditCard,
  Building2,
  MapPin,
  Phone,
  Mail,
};

// Counter component for stats
const StatCounter = ({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) => {
  const { formattedCount, elementRef } = useCountUp({
    end: value,
    duration: 2000,
    suffix,
  });

  return (
    <div
      ref={elementRef}
      className="text-center p-4 transition-all duration-500"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
        {formattedCount}
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const HospitalityPage = () => {
  const [heroTextRef, isHeroTextInView] = useInView<HTMLDivElement>({
    threshold: 0.2,
  });
  const [statsRef, isStatsInView] = useInView<HTMLDivElement>({
    threshold: 0.1,
  });
  const [storiesRef, isStoriesInView] = useInView<HTMLDivElement>({
    threshold: 0.1,
  });
  const [whyRef, isWhyInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [mapRef, isMapInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeOffice, setActiveOffice] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null,
  );
  const [stats, setStats] = useState<HospitalityStat[]>([]);
  const [partnerships, setPartnerships] = useState<{
    title: string;
    description: string;
    badges: { alt: string; logoUrl: string; order: number }[];
  } | null>(null);
  const [professionalServices, setProfessionalServices] =
    useState<ProfessionalServicesData | null>(null);
  const [solutionsData, setSolutionsData] =
    useState<HospitalitySolutionsData | null>(null);
  const [dynamicStories, setDynamicStories] = useState<CaseStudy[]>([]);
  const [technologyPartners, setTechnologyPartners] =
    useState<HospitalityTechnologyPartnersData | null>(null);
  const [whyChooseData, setWhyChooseData] =
    useState<HospitalityWhyChooseData | null>(null);

  const activeOfficeData = officeLocations.find((o) => o.id === activeOffice);

  const handleCountryHover = (e: React.MouseEvent, officeId: string) => {
    setActiveOffice(officeId);
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (activeOffice) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  // Fetch hospitality stats from Strapi
  useEffect(() => {
    const loadStats = async () => {
      const fetchedStats = await fetchHospitalityStats();
      if (fetchedStats.length > 0) {
        setStats(fetchedStats);
      }
    };
    loadStats();
  }, []);

  // Fetch hospitality partnerships from Strapi
  useEffect(() => {
    const loadPartnerships = async () => {
      const data = await fetchHospitalityPartnerships();
      if (data) {
        setPartnerships(data);
      }
    };
    loadPartnerships();
  }, []);

  // Fetch hospitality professional services from Strapi
  useEffect(() => {
    const loadProfessionalServices = async () => {
      const data = await fetchHospitalityProfessionalServices();
      if (data) {
        setProfessionalServices(data);
      }
    };
    loadProfessionalServices();
  }, []);

  // Fetch hospitality solutions from Strapi
  useEffect(() => {
    const loadSolutions = async () => {
      const data = await fetchHospitalitySolutions();
      if (data) {
        setSolutionsData(data);
      }
    };
    loadSolutions();
  }, []);

  // Fetch case studies from Strapi for success stories
  useEffect(() => {
    const loadCaseStudies = async () => {
      try {
        const data = await fetchCaseStudies();
        if (data.length > 0) {
          // Filter for hospitality-related case studies
          const hospitalityKeywords = [
            "hospitality",
            "hotel",
            "resort",
            "leisure",
            "wellness",
            "f&b",
            "food",
          ];
          const filtered = data.filter((cs) =>
            hospitalityKeywords.some(
              (kw) =>
                cs.industry?.toLowerCase().includes(kw) ||
                cs.category?.toLowerCase().includes(kw),
            ),
          );
          setDynamicStories(filtered.length > 0 ? filtered : data);
        }
      } catch (error) {
        console.error("Error loading case studies:", error);
      }
    };
    loadCaseStudies();
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch hospitality technology partners from Strapi
  useEffect(() => {
    const loadTechPartners = async () => {
      const data = await fetchHospitalityTechnologyPartners();
      if (data) {
        setTechnologyPartners(data);
      }
    };
    loadTechPartners();
  }, []);

  // Fetch hospitality why choose from Strapi
  useEffect(() => {
    const loadWhyChoose = async () => {
      const data = await fetchHospitalityWhyChoose();
      if (data) {
        setWhyChooseData(data);
      }
    };
    loadWhyChoose();
  }, []);

  // Duplicate partners for infinite scroll effect
  const dynamicPartnersList =
    technologyPartners?.partners && technologyPartners.partners.length > 0
      ? technologyPartners.partners.map((p) => ({
          name: p.name,
          logo: p.logoUrl,
        }))
      : partners;
  const duplicatedPartners = [
    ...dynamicPartnersList,
    ...dynamicPartnersList,
    ...dynamicPartnersList,
  ];

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

      {/* Hero Video Section - Full Width, No Text */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <source src="/videos/hospitality-hero.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
      </section>

      {/* Hero Text Section - Below Video with Parallax */}
      <section
        ref={heroTextRef}
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />

        <div className="container-width px-4 md:px-8 relative z-10">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
              isHeroTextInView
                ? "opacity-100 translate-y-0"
                : "opacity-1 translate-y-10"
            }`}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Delivering Technology That Transforms{" "}
              <span className="text-primary">
                Hospitality Operations Across Continents.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              With offices in Egypt, Dubai, Saudi Arabia, and Germany, ACT
              Hospitality delivers end-to-end hotel technology solutions that
              transform the way properties operate, connect, and engage guests.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-16 bg-card/30 border-y border-border/50"
      >
        <div className="container-width px-4 md:px-8">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isStatsInView
                ? "opacity-100 translate-y-0"
                : "opacity-1 translate-y-10"
            }`}
          >
            <Badge
              variant="outline"
              className="mb-4 border-primary/50 text-primary"
            >
              ACT at a Glance
            </Badge>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {stats.map((stat, idx) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={idx * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Global Partnerships Section - After ACT at a Glance */}
      <section className="py-16 bg-background">
        <div className="container-width px-4 md:px-8">
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              {partnerships ? (
                <>
                  {partnerships.title.split(" ").slice(0, -2).join(" ")}{" "}
                  <span className="text-primary">
                    {partnerships.title.split(" ").slice(-2).join(" ")}
                  </span>
                </>
              ) : (
                <>
                  Our <span className="text-primary">Global Partnerships</span>
                </>
              )}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {partnerships?.description ||
                "ACT's success is built on long-standing alliances with world-leading hospitality technology providers."}
            </p>
          </div>

          {/* Partner Badges Grid - Dynamic from Strapi */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto items-center justify-items-center">
            {(partnerships?.badges && partnerships.badges.length > 0
              ? partnerships.badges
              : [
                  {
                    alt: "Oracle Service Partner - Cloud Service Solution Hospitality",
                    logoUrl: oracleCloudHospitality,
                    order: 1,
                  },
                  {
                    alt: "Oracle Service Partner - Cloud Service Solution Food & Beverage",
                    logoUrl: oracleCloudFnb,
                    order: 2,
                  },
                  {
                    alt: "Oracle Sell Partner - Oracle Hospitality",
                    logoUrl: oracleSellHospitality,
                    order: 3,
                  },
                  {
                    alt: "Oracle Sell Partner - Oracle Food & Beverage",
                    logoUrl: oracleSellFnb,
                    order: 4,
                  },
                ]
            ).map((badge, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg w-full flex items-center justify-center"
              >
                <img
                  src={badge.logoUrl}
                  alt={badge.alt}
                  className="h-24 md:h-28 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services - Scroll Stacking Card Section */}
      <StackingCardsSection
        badge={solutionsData?.badge || "Next-Gen Hospitality"}
        title={
          <>
            {solutionsData
              ? solutionsData.title.replace(solutionsData.titleHighlight, "")
              : "Solutions for "}
            <span className="text-primary">
              {solutionsData?.titleHighlight || "Hotels & Resorts"}
            </span>
          </>
        }
        description={
          solutionsData?.description ||
          "Smart technology to streamline operations and redefine guest satisfaction."
        }
        cards={solutionsData?.cards || servicesData}
        supportingText={
          <>
            {solutionsData?.supportingText || (
              <>
                Supporting{" "}
                <span className="text-foreground font-semibold">500+</span>{" "}
                Properties Globally
              </>
            )}
          </>
        }
        className="bg-card/30"
      />

      {/* Professional Services Hover Section */}
      <ProfessionalServicesSection data={professionalServices} />

      {/* Success Stories */}
      <section
        ref={storiesRef}
        className="section-padding bg-card/30 relative overflow-hidden"
      >
        {/* Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container-width relative z-10">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isStoriesInView
                ? "opacity-100 translate-y-0"
                : "opacity-1 translate-y-8"
            }`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-4">
              Success Stories
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Real results from hospitality leaders who trusted{" "}
              <span className="text-gradient">ACT</span>
            </h2>
          </div>

          {/* Stories Grid - Image Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dynamicStories.length > 0
              ? dynamicStories.map((cs, index) => (
                  <Link
                    key={cs.slug}
                    to={`/case-study/${cs.slug}`}
                    className={`group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${
                      isStoriesInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-1 translate-y-8"
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      transition: "all 0.5s",
                    }}
                  >
                    {/* Background Image */}
                    <img
                      src={
                        getStrapiImageUrl(cs.coverImage?.url) ||
                        getStrapiImageUrl(cs.backgroundImage?.url)
                      }
                      alt={cs.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300" />

                    {/* Category Badge - Top Right */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground border-none text-xs font-semibold px-3 py-1">
                        {cs.industry}
                      </Badge>
                    </div>

                    {/* Content - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-2 group-hover:text-primary/90 transition-colors">
                        {cs.title}
                      </h3>
                      {cs.excerpt && (
                        <p className="text-white/90 text-sm leading-relaxed">
                          {cs.excerpt}
                        </p>
                      )}
                    </div>
                  </Link>
                ))
              : successStories.map((story, index) => (
                  <Link
                    key={index}
                    to={`/case-study/${story.id}`}
                    className={`group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${
                      isStoriesInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-1 translate-y-8"
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      transition: "all 0.5s",
                    }}
                  >
                    {/* Background Image */}
                    <img
                      src={story.image}
                      alt={story.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300" />

                    {/* Category Badge - Top Right */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground border-none text-xs font-semibold px-3 py-1">
                        {story.category}
                      </Badge>
                    </div>

                    {/* Content - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-2 group-hover:text-primary/90 transition-colors">
                        {story.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {story.subtitle}
                      </p>
                    </div>
                  </Link>
                ))}
          </div>

          {/* CTA */}
          <div
            className={`text-center mt-12 transition-all duration-700 delay-500 ${
              isStoriesInView
                ? "opacity-100 translate-y-0"
                : "opacity-1 translate-y-8"
            }`}
          >
            <Button asChild variant="hero" size="lg" className="group">
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
          <h3 className="text-center font-display text-xl font-semibold text-foreground mb-2">
            {technologyPartners?.title ? (
              <>
                {technologyPartners.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="text-primary">
                  {technologyPartners.title.split(" ").slice(-2).join(" ")}
                </span>
              </>
            ) : (
              <>
                Our{" "}
                <span className="text-primary">
                  Trusted Technology Partners
                </span>
              </>
            )}
          </h3>
          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mb-10">
            {technologyPartners?.description ||
              "ACT's success is built on long-standing alliances with world-leading hospitality technology providers."}
          </p>
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
          <div className="flex items-center gap-16 px-8 py-6 w-max">
            {technologyPartners?.partners.map((partner, index) => (
              <div
                key={index}
                className="group flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="h-10 md:h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center mt-6 text-sm text-muted-foreground">
          {technologyPartners?.footerText ||
            "ACT collaborates with global industry leaders to deliver secure, scalable, and integrated hospitality ecosystems."}
        </p>
      </section>

      {/* Why Choose ACT */}
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
              {whyChooseData?.badge || "Why ACT"}
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {whyChooseData?.heading || "Why Choose ACT for"}{" "}
              <span className="text-primary">
                {whyChooseData?.headingHighlight || "Hospitality Technology"}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {whyChooseData?.description ||
                "ACT collaborates with global industry leaders to deliver secure, scalable, and integrated hospitality ecosystems."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseData?.items && whyChooseData.items.length > 0
              ? whyChooseData.items.map((item, idx) => {
                  const IconComponent = iconMap[item.icon] || Award;
                  return (
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
                        <IconComponent size={24} />
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
                  );
                })
              : whyChooseACT.map((item, idx) => (
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

      {/* Global Map Section - Homepage Style */}
      <section
        ref={mapRef}
        className="section-padding bg-background relative overflow-hidden min-h-[800px]"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px] animate-pulse" />
        </div>

        {/* Gradient Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container-width relative z-10">
          {/* Section Header */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isMapInView
                ? "opacity-100 translate-y-0"
                : "opacity-1 translate-y-8"
            }`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-4">
              Our Global Offices
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Connecting Egypt, <span className="text-gradient">Beyond</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From Egypt to the Middle East and beyond, ACT empowers hospitality
              brands worldwide with advanced technology.
            </p>
          </div>

          {/* World Map Container */}
          <div
            className={`relative w-full max-w-6xl mx-auto aspect-[2/1] transition-all duration-1000 ${
              isMapInView ? "opacity-100 scale-100" : "opacity-1 scale-90"
            }`}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              setActiveOffice(null);
              setMousePos(null);
            }}
          >
            {/* Edge Fade Overlays */}
            <div className="absolute inset-0 pointer-events-none z-20">
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
              <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
            </div>

            {/* PNG Map */}
            <div className="relative w-full h-full">
              <img
                src="/images/world-map.png"
                alt="World Map"
                className="w-full h-full object-contain"
                style={{
                  filter: "brightness(0.5) contrast(1.1)",
                  opacity: 0.6,
                }}
              />

              {/* Country Hover Areas with circular orange highlight */}
              {officeLocations.map((office) => (
                <div
                  key={office.id}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${office.coords.x}%`,
                    top: `${office.coords.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={(e) => handleCountryHover(e, office.id)}
                >
                  {/* Circular orange highlight on hover */}
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full transition-all duration-300 ${
                      activeOffice === office.id
                        ? "bg-primary/60 shadow-[0_0_40px_15px_hsl(var(--primary)/0.5)] border-2 border-primary"
                        : "bg-primary/20 hover:bg-primary/40"
                    }`}
                  />

                  {/* Pulse animation when active */}
                  {activeOffice === office.id && (
                    <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Floating Info Card (follows mouse) */}
          {activeOfficeData && mousePos && (
            <div
              className="fixed z-50 pointer-events-none animate-fade-in"
              style={{
                left: `${mousePos.x + 20}px`,
                top: `${mousePos.y - 20}px`,
                transform: "translateY(-100%)",
              }}
            >
              <div className="glass-card px-6 py-5 rounded-2xl min-w-[320px] max-w-[400px] shadow-2xl border border-primary/30 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <activeOfficeData.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg">
                    {activeOfficeData.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {activeOfficeData.offices.map((office, idx) => (
                    <div
                      key={idx}
                      className={
                        idx > 0 ? "pt-4 border-t border-border/50" : ""
                      }
                    >
                      <h4 className="font-semibold text-primary text-sm mb-1">
                        {office.city}
                      </h4>
                      <p className="font-medium text-foreground text-sm mb-2">
                        {office.company}
                      </p>
                      <div className="text-xs text-muted-foreground space-y-0.5">
                        {office.address.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                      {office.fax && (
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Mail className="w-3 h-3" />
                          <span>Fax: {office.fax}</span>
                        </div>
                      )}
                      {office.tel && (
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Phone className="w-3 h-3" />
                          <span>Tel: {office.tel}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Stats Row */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto transition-all duration-700 delay-700 ${
              isMapInView
                ? "opacity-100 translate-y-0"
                : "opacity-1 translate-y-8"
            }`}
          >
            <div className="text-center p-4 rounded-xl glass-card hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-primary mb-1">4</div>
              <div className="text-xs text-muted-foreground">Countries</div>
            </div>
            <div className="text-center p-4 rounded-xl glass-card hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-primary mb-1">5</div>
              <div className="text-xs text-muted-foreground">
                Office Locations
              </div>
            </div>
            {/* <div className="text-center p-4 rounded-xl glass-card hover:scale-105 transition-transform flex-1">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-xs text-muted-foreground">
                Support Available
              </div>
            </div> */}
            {/* <div className="text-center p-4 rounded-xl glass-card hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-primary mb-1">WorldWide</div>
              <div className="text-xs text-muted-foreground">
                Region Coverage
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-card/50">
        <div className="container-width px-4 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your{" "}
            <span className="text-primary">Guest Experience</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's reimagine hospitality together.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/support">
              Let's Talk
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HospitalityPage;
