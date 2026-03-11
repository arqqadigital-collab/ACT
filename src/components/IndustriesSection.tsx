import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import {
  fetchIndustries,
  getStrapiImageUrl,
  type Industry,
} from "@/services/industryService";

// Fallback images
import educationImg from "@/assets/industries/education.jpg";
import oilGasImg from "@/assets/industries/oil-gas.jpg";
import publicSectorImg from "@/assets/industries/public-sector.jpg";
import hospitalityImg from "@/assets/industries/hospitality.jpg";
import telecomImg from "@/assets/industries/telecom.jpg";

// Fallback data as backup
const fallbackIndustries = [
  {
    id: 1,
    title: "Oil & Gas",
    slug: "oil-gas",
    shortDescription:
      "Enhancing operations through SCADA systems, predictive maintenance, and real-time monitoring to boost safety and maximize production efficiency.",
    cardImage: { url: oilGasImg },
    order: 1,
  },
  {
    id: 2,
    title: "Public Sector",
    slug: "public-sector",
    shortDescription:
      "Delivering e-government platforms, citizen portals, and connected infrastructure to support smarter, more inclusive communities across Egypt and the region.",
    cardImage: { url: publicSectorImg },
    order: 2,
  },
  {
    id: 3,
    title: "Telecommunications",
    slug: "telecom",
    shortDescription:
      "Enabling telecom providers with 5G readiness, infrastructure optimization, and network expansion to power the future of connectivity.",
    cardImage: { url: telecomImg },
    order: 3,
  },
  {
    id: 4,
    title: "Hospitality",
    slug: "hospitality",
    shortDescription:
      "Powering 150,000+ hotel rooms worldwide with advanced digital solutions that enhance guest experience, streamline operations, and improve profitability.",
    cardImage: { url: hospitalityImg },
    order: 4,
  },
  {
    id: 5,
    title: "Education",
    slug: "education",
    shortDescription:
      "Empowering schools and universities with hybrid learning environments, advanced cybersecurity, smart campus solutions, and intelligent device management enabling future-ready education that supports teachers, inspires students, and transforms operations.",
    cardImage: { url: educationImg },
    order: 5,
  },
] as Industry[];

const IndustriesSection = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [industries, setIndustries] = useState<Industry[]>(fallbackIndustries);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadIndustries = async () => {
      try {
        const data = await fetchIndustries();
        if (data && data.length > 0) {
          setIndustries(data);
        }
      } catch (error) {
        console.error("Error loading industries:", error);
      } finally {
        setLoading(false);
      }
    };

    loadIndustries();
  }, []);

  const getIndustryImage = (industry: Industry) => {
    if (industry.cardImage?.url) {
      return getStrapiImageUrl(industry.cardImage.url);
    }
    // Fallback based on slug
    const fallbackMap: Record<string, string> = {
      "oil-gas": oilGasImg,
      "public-sector": publicSectorImg,
      telecom: telecomImg,
      hospitality: hospitalityImg,
      education: educationImg,
    };
    return fallbackMap[industry.slug] || oilGasImg;
  };

  const getIndustryLink = (industry: Industry) => {
    return `/industries/${industry.slug}`;
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="container-width relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-4">
            Industries We Empower
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Industries We Empower with{" "}
            <span className="text-gradient">Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ACT Combines Global Partnerships With Local Expertise to Deliver
            Tailored ICT and Digital Transformation Solutions Across Egypt, the
            Middle East, and Beyond.
          </p>
        </div>

        {/* Industries Slider - Grid on mobile, Flex on desktop */}
        <div
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"
          }`}
        >
          {/* Mobile Horizontal Slider */}
          <div className="sm:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
              {industries.map((industry, index) => (
                <Link
                  key={industry.id}
                  to={getIndustryLink(industry)}
                  className="relative overflow-hidden rounded-2xl w-[240px] aspect-[3/4] flex-shrink-0"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={getIndustryImage(industry)}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-base font-bold text-white mb-1">
                      {industry.title}
                    </h3>
                    <p className="text-white/80 text-xs line-clamp-2">
                      {industry.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Tablet Grid Layout */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-3 md:hidden">
            {industries.map((industry, index) => (
              <Link
                key={industry.id}
                to={getIndustryLink(industry)}
                className="relative overflow-hidden rounded-2xl aspect-[3/4]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={getIndustryImage(industry)}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-base font-bold text-white mb-1">
                    {industry.title}
                  </h3>
                  <p className="text-white/80 text-xs line-clamp-2">
                    {industry.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop Flex Layout */}
          <div className="hidden md:flex h-[600px] lg:h-[700px] gap-2">
            {industries.map((industry, index) => (
              <Link
                key={industry.id}
                to={getIndustryLink(industry)}
                className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
                  activeIndex === index
                    ? "flex-[3]"
                    : activeIndex !== null
                      ? "flex-[0.5]"
                      : "flex-1"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Background Image */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    activeIndex === index ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <img
                    src={getIndustryImage(industry)}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                    activeIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4"
                  }`}
                >
                  <h3 className="font-display text-lg lg:text-xl font-bold text-white mb-2 whitespace-nowrap">
                    {industry.title}
                  </h3>
                  <p
                    className={`text-white/80 text-sm transition-all duration-500 ${
                      activeIndex === index
                        ? "opacity-100 max-h-20"
                        : "opacity-1 max-h-0"
                    }`}
                  >
                    {industry.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
