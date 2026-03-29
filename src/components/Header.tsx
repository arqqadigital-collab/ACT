import { useState, useRef, useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Server,
  Cpu,
  Database,
  Settings,
  Shield,
  Network,
  Cloud,
  MonitorCog,
  Radio,
  Building2,
  GraduationCap,
  Fuel,
  Hotel,
  Utensils,
  Globe,
  LucideIcon,
} from "lucide-react";
import { fetchSolutions, type Solution } from "@/services/solutionsService";
import { fetchServices, type Service } from "@/services/servicesService";
import { fetchIndustries, type Industry } from "@/services/industryService";
import actLogo from "@/assets/logo.png";

// Icon mapping for solutions and services
const iconMap: Record<string, LucideIcon> = {
  MonitorCog,
  Network,
  Cloud,
  Shield,
  Server,
  Cpu,
  Database,
  Settings,
  monitorcog: MonitorCog,
  network: Network,
  cloud: Cloud,
  shield: Shield,
  server: Server,
  cpu: Cpu,
  database: Database,
  settings: Settings,
};

// Icon mapping for industries
const industryIconMap: Record<string, LucideIcon> = {
  Radio,
  Fuel,
  Building2,
  GraduationCap,
  Hotel,
  Utensils,
  Globe,
  radio: Radio,
  fuel: Fuel,
  building2: Building2,
  graduationcap: GraduationCap,
  hotel: Hotel,
  utensils: Utensils,
  globe: Globe,
  telecom: Radio,
  "oil-gas": Fuel,
  "public-sector": Building2,
  education: GraduationCap,
  hospitality: Hotel,
};

type ActiveCategory = "services" | "solutions" | null;

const MENU_CLOSE_DELAY = 150; // ms delay before closing menu

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isIndustriesMenuOpen, setIsIndustriesMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<ActiveCategory>("services");
  const [isMobileMegaOpen, setIsMobileMegaOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [solutions, setSolutions] = useState<
    Array<{
      label: string;
      href: string;
      icon: LucideIcon;
      description: string;
    }>
  >([]);
  const [services, setServices] = useState<
    Array<{
      label: string;
      href: string;
      icon: LucideIcon;
      description: string;
    }>
  >([]);
  const [industries, setIndustries] = useState<
    Array<{
      label: string;
      href: string;
      icon: LucideIcon;
      description: string;
    }>
  >([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Refs for delayed close timers
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch solutions, services, and industries on mount
  useEffect(() => {
    const loadData = async () => {
      const [solutionsData, servicesData, industriesData] = await Promise.all([
        fetchSolutions(),
        fetchServices(),
        fetchIndustries(),
      ]);

      const formattedSolutions = solutionsData.map((solution) => ({
        label: solution.title.replace(" Section", ""),
        href: `/solutions#${solution.slug}`,
        icon: iconMap[solution.icon?.toLowerCase()] || MonitorCog,
        description: solution.shortDescription || "",
      }));
      setSolutions(formattedSolutions);

      const formattedServices = servicesData.map((service) => ({
        label: service.label,
        href: service.href,
        icon: iconMap[service.icon?.toLowerCase()] || Server,
        description: service.description,
      }));
      setServices(formattedServices);

      const formattedIndustries = industriesData.map((industry) => ({
        label: industry.title,
        href: `/industries/${industry.slug}`,
        icon:
          industryIconMap[industry.slug] ||
          industryIconMap[industry.title.toLowerCase()] ||
          Building2,
        description: industry.shortDescription,
      }));
      setIndustries(formattedIndustries);
    };
    loadData();
  }, []);

  // Handlers for "What We Do" mega menu with delay
  const handleMegaMenuEnter = useCallback(() => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
    setIsMegaMenuOpen(true);
    setIsIndustriesMenuOpen(false);
    setActiveCategory("services");
  }, []);

  const handleMegaMenuLeave = useCallback(() => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, MENU_CLOSE_DELAY);
  }, []);

  // Handlers for "Industries" mega menu with delay
  const handleIndustriesMenuEnter = useCallback(() => {
    if (industriesMenuTimeoutRef.current) {
      clearTimeout(industriesMenuTimeoutRef.current);
      industriesMenuTimeoutRef.current = null;
    }
    setIsIndustriesMenuOpen(true);
    setIsMegaMenuOpen(false);
  }, []);

  const handleIndustriesMenuLeave = useCallback(() => {
    industriesMenuTimeoutRef.current = setTimeout(() => {
      setIsIndustriesMenuOpen(false);
    }, MENU_CLOSE_DELAY);
  }, []);

  const navLinks = [
    { label: "Who We Are", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Career", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ];

  const hospitalityNavLinks = [
    { label: "Home", href: "/hospitality" },
    { label: "Hotels & Resorts", href: "/hotels-resorts" },
    { label: "F&B", href: "/fnb" },
    { label: "Support", href: "/support" },
    { label: "FAQ", href: "/faq" },
    { label: "Who We Are", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Insights", href: "/insights" },
  ];

  // Check if current route is a hospitality-related page
  const isHospitalitySection = [
    "/hospitality",
    "/hotels-resorts",
    "/fnb",
    "/support",
    "/faq",
  ].includes(location.pathname);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
    setIsIndustriesMenuOpen(false);
    if (!isMegaMenuOpen) {
      setActiveCategory("services");
    }
  };

  const toggleIndustriesMenu = () => {
    setIsIndustriesMenuOpen(!isIndustriesMenuOpen);
    setIsMegaMenuOpen(false);
  };

  const handleCategoryClick = (
    category: ActiveCategory,
    e: React.MouseEvent,
  ) => {
    if (category === "services") {
      setIsMegaMenuOpen(false);
      navigate("/services");
    } else if (category === "solutions") {
      setIsMegaMenuOpen(false);
      navigate("/solutions");
    } else {
      setActiveCategory(category);
    }
  };

  const handleCategoryHover = (category: ActiveCategory) => {
    setActiveCategory(category);
  };

  const handleIndustryClick = (href: string) => {
    setIsIndustriesMenuOpen(false);
    navigate(href);
  };

  const handleServiceClick = (href: string) => {
    setIsMegaMenuOpen(false);
    navigate(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-width px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={actLogo} alt="ACT Logo" className="h-14 md:h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {isHospitalitySection ? (
              // Hospitality Section Navigation
              <>
                {hospitalityNavLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted/50 ${
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </>
            ) : (
              // Default Navigation
              <>
                {navLinks.slice(0, 1).map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted/50 ${
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* What We Do - Mega Menu Trigger (Hover) */}
                <div
                  className="relative"
                  onMouseEnter={handleMegaMenuEnter}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <button
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted/50 flex items-center gap-1 ${
                      isMegaMenuOpen
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    What We Do
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {/* Invisible bridge to connect trigger to dropdown */}
                  {isMegaMenuOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen h-6" />
                  )}
                </div>

                {/* Industries - Mega Menu Trigger (Hover) */}
                <div
                  className="relative"
                  onMouseEnter={handleIndustriesMenuEnter}
                  onMouseLeave={handleIndustriesMenuLeave}
                >
                  <button
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted/50 flex items-center gap-1 ${
                      isIndustriesMenuOpen
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Industries
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isIndustriesMenuOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {/* Invisible bridge to connect trigger to dropdown */}
                  {isIndustriesMenuOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen h-6" />
                  )}
                </div>

                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted/50 ${
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </>
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="accent" size="default">
              <Link to={isHospitalitySection ? "/" : "/hospitality"}>
                {isHospitalitySection ? "Enterprise" : "Hospitality"}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-2">
              {isHospitalitySection ? (
                // Hospitality Mobile Navigation
                <>
                  {hospitalityNavLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={`px-4 py-3 text-sm font-medium hover:bg-muted/50 rounded-lg transition-colors ${
                        location.pathname === link.href
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="pt-4 px-4">
                    <Button asChild variant="accent" className="w-full">
                      <Link to="/">Enterprise</Link>
                    </Button>
                  </div>
                </>
              ) : (
                // Default Mobile Navigation
                <>
                  {navLinks.slice(0, 1).map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={`px-4 py-3 text-sm font-medium hover:bg-muted/50 rounded-lg transition-colors ${
                        location.pathname === link.href
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}

                  {/* Mobile What We Do Accordion */}
                  <div>
                    <button
                      onClick={() => setIsMobileMegaOpen(!isMobileMegaOpen)}
                      className="w-full px-4 py-3 text-sm font-medium hover:bg-muted/50 rounded-lg transition-colors text-muted-foreground hover:text-foreground flex items-center justify-between"
                    >
                      What We Do
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${isMobileMegaOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isMobileMegaOpen && (
                      <div className="pl-4 mt-2 space-y-4 animate-fade-in">
                        {/* Mobile Services */}
                        <div>
                          <h4 className="px-4 text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                            Services
                          </h4>
                          {services.map((item) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <item.icon size={16} className="text-primary" />
                              {item.label}
                            </Link>
                          ))}
                        </div>

                        {/* Mobile Solutions */}
                        <div>
                          <h4 className="px-4 text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                            Solutions
                          </h4>
                          {solutions.map((item) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <item.icon size={16} className="text-primary" />
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Industries Accordion */}
                  <div>
                    <button
                      onClick={() =>
                        setIsMobileIndustriesOpen(!isMobileIndustriesOpen)
                      }
                      className="w-full px-4 py-3 text-sm font-medium hover:bg-muted/50 rounded-lg transition-colors text-muted-foreground hover:text-foreground flex items-center justify-between"
                    >
                      Industries
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${isMobileIndustriesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isMobileIndustriesOpen && (
                      <div className="pl-4 mt-2 space-y-1 animate-fade-in">
                        {industries.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <item.icon size={16} className="text-primary" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {navLinks.slice(1).map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={`px-4 py-3 text-sm font-medium hover:bg-muted/50 rounded-lg transition-colors ${
                        location.pathname === link.href
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="pt-4 px-4">
                    <Button asChild variant="accent" className="w-full">
                      <Link to="/hospitality">Hospitality</Link>
                    </Button>
                  </div>
                </>
              )}
            </nav>
          </div>
        )}
      </div>

      {/* Full Width Mega Menu - Two Column Interactive Layout */}
      {isMegaMenuOpen && (
        <div
          className="absolute top-full left-0 right-0 w-full bg-background border-b border-border shadow-2xl animate-fade-in"
          onMouseEnter={handleMegaMenuEnter}
          onMouseLeave={handleMegaMenuLeave}
        >
          <div className="container-width px-4 md:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Column - Category Selection */}
              <div className="border-r border-border/50 pr-8">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                  Categories
                </h3>
                <div className="space-y-3">
                  {/* Services Category - Hover to show, Click to navigate */}
                  <button
                    onClick={(e) => handleCategoryClick("services", e)}
                    onMouseEnter={() => handleCategoryHover("services")}
                    className={`w-full group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                      activeCategory === "services"
                        ? "border-[#FF6B35]/50 bg-[#FF6B35]/5"
                        : "border-border/50 bg-card/30 hover:bg-muted/50 hover:border-[#FF6B35]/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          activeCategory === "services"
                            ? "bg-[#FF6B35] text-white"
                            : "bg-muted/50 text-[#FF6B35] group-hover:bg-[#FF6B35]/20"
                        }`}
                      >
                        <Server size={22} />
                      </div>
                      <div className="text-left">
                        <h4
                          className={`font-semibold transition-colors ${
                            activeCategory === "services" ? "text-[#FF6B35]" : "text-foreground group-hover:text-[#FF6B35]"
                          }`}
                        >
                          Services
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Professional IT services
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      size={20}
                      className={`transition-all duration-300 ${
                        activeCategory === "services" ? "text-[#FF6B35]" : "text-muted-foreground"
                      }`}
                    />
                  </button>

                  {/* Solutions Category - Hover to show, Click to navigate (future) */}
                  <button
                    onClick={(e) => handleCategoryClick("solutions", e)}
                    onMouseEnter={() => handleCategoryHover("solutions")}
                    className={`w-full group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                      activeCategory === "solutions"
                        ? "border-[#FF6B35]/50 bg-[#FF6B35]/5"
                        : "border-border/50 bg-card/30 hover:bg-muted/50 hover:border-[#FF6B35]/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          activeCategory === "solutions"
                            ? "bg-[#FF6B35] text-white"
                            : "bg-muted/50 text-[#FF6B35] group-hover:bg-[#FF6B35]/20"
                        }`}
                      >
                        <Shield size={22} />
                      </div>
                      <div className="text-left">
                        <h4
                          className={`font-semibold transition-colors ${
                            activeCategory === "solutions" ? "text-[#FF6B35]" : "text-foreground group-hover:text-[#FF6B35]"
                          }`}
                        >
                          Solutions
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Technology solutions
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      size={20}
                      className={`transition-all duration-300 ${
                        activeCategory === "solutions" ? "text-[#FF6B35]" : "text-muted-foreground"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Right Column - Category Details */}
              <div className="pl-0 lg:pl-8 pt-6 lg:pt-0">
                {activeCategory === "services" && (
                  <div className="animate-fade-in">
                    <h3 className="text-xs font-semibold text-[#FF6B35] uppercase tracking-wider mb-6">
                      Services
                    </h3>
                    <div className="space-y-3">
                      {services.map((item, index) => {
                        const isFirst = index === 0;
                        return (
                          <Link
                            key={item.label}
                            to={item.href}
                            className={`group flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 ${
                              isFirst
                                ? "border-[#FF6B35]/50 bg-[#FF6B35]/5 hover:bg-[#FF6B35]/10"
                                : "border-border/50 bg-card/30 hover:bg-muted/50 hover:border-[#FF6B35]/30"
                            }`}
                            onClick={() => setIsMegaMenuOpen(false)}
                          >
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                isFirst
                                  ? "bg-[#FF6B35] text-white"
                                  : "bg-muted/50 text-[#FF6B35] group-hover:bg-[#FF6B35]/20"
                              }`}
                            >
                              <item.icon size={18} />
                            </div>
                            <div className="flex-1">
                              <h4
                                className={`font-medium transition-colors ${
                                  isFirst ? "text-[#FF6B35]" : "text-foreground group-hover:text-[#FF6B35]"
                                }`}
                              >
                                {item.label}
                              </h4>
                              <p className="text-sm text-muted-foreground line-clamp-1">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {activeCategory === "solutions" && (
                  <div className="animate-fade-in">
                    <h3 className="text-xs font-semibold text-[#FF6B35] uppercase tracking-wider mb-6">
                      Solutions
                    </h3>
                    <div className="space-y-3">
                      {solutions.map((item, index) => {
                        const isFirst = index === 0;
                        return (
                          <Link
                            key={item.label}
                            to={item.href}
                            className={`group flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 ${
                              isFirst
                                ? "border-[#FF6B35]/50 bg-[#FF6B35]/5 hover:bg-[#FF6B35]/10"
                                : "border-border/50 bg-card/30 hover:bg-muted/50 hover:border-[#FF6B35]/30"
                            }`}
                            onClick={() => setIsMegaMenuOpen(false)}
                          >
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                isFirst
                                  ? "bg-[#FF6B35] text-white"
                                  : "bg-muted/50 text-[#FF6B35] group-hover:bg-[#FF6B35]/20"
                              }`}
                            >
                              <item.icon size={18} />
                            </div>
                            <div className="flex-1">
                              <h4
                                className={`font-medium transition-colors ${
                                  isFirst ? "text-[#FF6B35]" : "text-foreground group-hover:text-[#FF6B35]"
                                }`}
                              >
                                {item.label}
                              </h4>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Industries Mega Menu - Single Column */}
      {isIndustriesMenuOpen && (
        <div
          className="absolute top-full left-0 right-0 w-full bg-background border-b border-border shadow-2xl animate-fade-in"
          onMouseEnter={handleIndustriesMenuEnter}
          onMouseLeave={handleIndustriesMenuLeave}
        >
          <div className="container-width px-4 md:px-8 py-8">
            <div className="max-w-md mx-auto">
              <h3 className="text-xs font-semibold text-[#FF6B35] uppercase tracking-wider mb-6">
                Industries We Serve
              </h3>
              <div className="space-y-3">
                {industries.map((item, index) => {
                  const isFirst = index === 0;
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                        isFirst
                          ? "border-[#FF6B35]/50 bg-[#FF6B35]/5 hover:bg-[#FF6B35]/10"
                          : "border-border/50 bg-card/30 hover:bg-muted/50 hover:border-[#FF6B35]/30"
                      }`}
                      onClick={() => setIsIndustriesMenuOpen(false)}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isFirst
                            ? "bg-[#FF6B35] text-white"
                            : "bg-muted/50 text-[#FF6B35] group-hover:bg-[#FF6B35]/20"
                        }`}
                      >
                        <item.icon size={22} />
                      </div>
                      <div className="flex-1">
                        <h4
                          className={`font-semibold transition-colors ${
                            isFirst ? "text-[#FF6B35]" : "text-foreground group-hover:text-[#FF6B35]"
                          }`}
                        >
                          {item.label}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                      <ChevronRight
                        size={20}
                        className={`transition-colors ${
                          isFirst ? "text-[#FF6B35]" : "text-muted-foreground group-hover:text-[#FF6B35]"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
