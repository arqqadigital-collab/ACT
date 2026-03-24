import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fetchSolutions, type Solution } from "@/services/solutionsService";

// const solutions = [
//   {
//     number: "01",
//     title: "Hybrid IT section",
//     subtitle: "Cloud & On-Premises",
//     description:
//       "Future-ready infrastructure that balances flexibility, cost-efficiency, and scalability. ACT enables seamless cloud migration while maintaining secure on-premises systems for critical workloads.",
//     image: itInfrastructureImg,
//     link: "/solutions#hybrid-it",
//   },
//   {
//     number: "02",
//     title: "Networking Solutions Section",
//     subtitle: "Enterprise Networks",
//     description:
//       "Enterprise-grade networks designed for mobility, IoT readiness, and agile business operations. Our solution ensure network security, uptime, and business continuity at every stage of growth.",
//     image: networkImg,
//     link: "/solutions#networking",
//   },
//   {
//     number: "03",
//     title: "Cybersecurity Solutions Section",
//     subtitle: "Security & Compliance",
//     description:
//       "Advanced security against evolving digital threats. ACT’s cybersecurity services comply with ISO, NTRA, and GDPR standards to safeguard enterprises, banks, and government organizations. ",
//     image: cyberSecurityImg,
//     link: "/solutions#cybersecurity",
//   },
//   {
//     number: "04",
//     title: "Digital Solutions Section",
//     subtitle: "AI & Automation",
//     description:
//       "AI-powered platforms, automation tools, and data analytics that drive smarter decisions and better customer experiences. We help organizations unlock efficiency, speed, and competitive advantage through intelligent digital transformation.",
//     image: digitalAiImg,
//     link: "/solutions#digital",
//   },
// ];

const SolutionsSection = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSolutions = async () => {
      const data = await fetchSolutions();
      setSolutions(data);
      setLoading(false);
    };
    loadSolutions();
  }, []);

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScrollButtons);
      return () => slider.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const isMobile = window.innerWidth < 640;
      const scrollAmount = isMobile ? 300 : 440;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="relative z-10">
        {/* Section Header */}
        <div
          className={`container-width flex flex-col md:flex-row md:items-center md:justify-between mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"
          }`}
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-4">
              Our Technology Solutions
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Building the Foundation for{" "}
              <span className="text-gradient">Digital Success</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border border-muted-foreground/30 flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "hover:bg-primary hover:border-primary hover:text-primary-foreground cursor-pointer"
                  : "opacity-30 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border border-muted-foreground/30 flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "hover:bg-primary hover:border-primary hover:text-primary-foreground cursor-pointer"
                  : "opacity-30 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Solutions Slider */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div
            ref={sliderRef}
            className={`flex gap-4 overflow-x-auto scrollbar-hide px-[max(1rem,calc((100vw-1280px)/2+1rem))] pb-4 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {solutions.map((solution, index) => (
              <Link
                key={solution.slug}
                to={`/solutions#${solution.slug}`}
                className="group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px] h-[400px] sm:h-[450px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={solution.cardImage}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                    <span className="text-primary font-bold text-sm mb-2 block">
                      {solution.subtitle}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed opacity-1 group-hover:opacity-100 transition-opacity duration-500">
                      {solution.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionsSection;
