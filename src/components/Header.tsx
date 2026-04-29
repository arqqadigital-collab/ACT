import { useState, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, ChevronRight, Server, Cpu, Database, Settings, Shield, Network, Cloud, MonitorCog, Radio, Building2, GraduationCap, Fuel } from 'lucide-react';
import actLogo from '@/assets/logo.png';

const services = [
  { label: 'Infrastructure Services', description: 'Enterprise-grade infrastructure solutions', href: '/services#infrastructure', icon: Server },
  { label: 'Digital Transformation Services', description: 'Modernize your business operations', href: '/services#digital-transformation', icon: Cpu },
  { label: 'Data Center Services', description: 'Secure and scalable data management', href: '/services#data-center', icon: Database },
  { label: 'Managed Operations', description: 'End-to-end operational excellence', href: '/services#managed-operations', icon: Settings },
];

const solutions = [
  { label: 'Digital Solutions', href: '/solutions#digital', icon: MonitorCog },
  { label: 'Networking Solutions', href: '/solutions#networking', icon: Network },
  { label: 'Hybrid IT', href: '/solutions#hybrid-it', icon: Cloud },
  { label: 'Cybersecurity', href: '/solutions#cybersecurity', icon: Shield },
];

const industries = [
  { label: 'Telecom', description: 'Telecommunications infrastructure', href: '/industries/telecom', icon: Radio },
  { label: 'Oil & Gas', description: 'Energy sector solutions', href: '/industries/oil-gas', icon: Fuel },
  { label: 'Public Sector', description: 'Government & public services', href: '/industries/public-sector', icon: Building2 },
  { label: 'Education', description: 'Academic institutions', href: '/industries/education', icon: GraduationCap },
];

type ActiveCategory = 'services' | 'solutions' | null;

const MENU_CLOSE_DELAY = 150; // ms delay before closing menu

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isIndustriesMenuOpen, setIsIndustriesMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('services');
  const [isMobileMegaOpen, setIsMobileMegaOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Refs for delayed close timers
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handlers for "What We Do" mega menu with delay
  const handleMegaMenuEnter = useCallback(() => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
    setIsMegaMenuOpen(true);
    setIsIndustriesMenuOpen(false);
    setActiveCategory('services');
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
    { label: 'Who We Are', href: '/about' },
    { label: 'Insights', href: '/insights' },
    { label: 'Career', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const hospitalityNavLinks = [
    { label: 'Home', href: '/hospitality' },
    { label: 'Who We Are', href: '/hospitality/about' },
    { label: 'Hotels & Resorts', href: '/hotels-resorts' },
    { label: 'F&B', href: '/fnb' },
    { label: 'Career', href: '/hospitality/careers' },
    { label: 'Insights', href: '/hospitality/insights' },
    { label: 'Support', href: '/support' },
    { label: 'FAQ', href: '/faq' },
  ];

  // Check if current route is a hospitality-related page
  const isHospitalitySection = ['/hospitality', '/hotels-resorts', '/fnb', '/support', '/faq', '/hospitality/about', '/hospitality/careers', '/hospitality/insights'].includes(location.pathname);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
    setIsIndustriesMenuOpen(false);
    if (!isMegaMenuOpen) {
      setActiveCategory('services');
    }
  };

  const toggleIndustriesMenu = () => {
    setIsIndustriesMenuOpen(!isIndustriesMenuOpen);
    setIsMegaMenuOpen(false);
  };

  const handleCategoryClick = (category: ActiveCategory, e: React.MouseEvent) => {
    if (category === 'services') {
      setIsMegaMenuOpen(false);
      navigate('/services');
    } else if (category === 'solutions') {
      setIsMegaMenuOpen(false);
      navigate('/solutions');
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
            <img 
              src={actLogo} 
              alt="ACT Logo" 
              className="h-14 md:h-16 w-auto"
            />
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
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
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
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
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
                      isMegaMenuOpen ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    What We Do
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} 
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
                      isIndustriesMenuOpen ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Industries
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-200 ${isIndustriesMenuOpen ? 'rotate-180' : ''}`} 
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
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
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
              <Link to={isHospitalitySection ? '/' : '/hospitality'}>
                {isHospitalitySection ? 'Enterprise' : 'Hospitality'}
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
                        location.pathname === link.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
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
                        location.pathname === link.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
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
                        className={`transition-transform duration-200 ${isMobileMegaOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    {isMobileMegaOpen && (
                      <div className="pl-4 mt-2 space-y-4 animate-fade-in">
                        {/* Mobile Services */}
                        <div>
                          <h4 className="px-4 text-xs font-semibold text-primary uppercase tracking-wider mb-2">Services</h4>
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
                          <h4 className="px-4 text-xs font-semibold text-primary uppercase tracking-wider mb-2">Solutions</h4>
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
                      onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                      className="w-full px-4 py-3 text-sm font-medium hover:bg-muted/50 rounded-lg transition-colors text-muted-foreground hover:text-foreground flex items-center justify-between"
                    >
                      Industries
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${isMobileIndustriesOpen ? 'rotate-180' : ''}`} 
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
                        location.pathname === link.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
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
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-6">Categories</h3>
                <div className="space-y-2">
                  {/* Services Category - Hover to show, Click to navigate */}
                  <button
                    onClick={(e) => handleCategoryClick('services', e)}
                    onMouseEnter={() => handleCategoryHover('services')}
                    className={`w-full group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                      activeCategory === 'services'
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border/50 bg-card/30 hover:bg-muted/50 hover:border-border'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeCategory === 'services' ? 'bg-primary text-primary-foreground' : 'bg-muted/50 text-muted-foreground group-hover:bg-muted'
                      }`}>
                        <Server size={22} />
                      </div>
                      <div className="text-left">
                        <h4 className={`font-semibold transition-colors ${activeCategory === 'services' ? 'text-primary' : 'text-foreground'}`}>
                          Services
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Professional IT services
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={20} className={`transition-all duration-300 ${activeCategory === 'services' ? 'text-primary' : 'text-muted-foreground'}`} />
                  </button>

                  {/* Solutions Category - Hover to show, Click to navigate (future) */}
                  <button
                    onClick={(e) => handleCategoryClick('solutions', e)}
                    onMouseEnter={() => handleCategoryHover('solutions')}
                    className={`w-full group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                      activeCategory === 'solutions'
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border/50 bg-card/30 hover:bg-muted/50 hover:border-border'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeCategory === 'solutions' ? 'bg-primary text-primary-foreground' : 'bg-muted/50 text-muted-foreground group-hover:bg-muted'
                      }`}>
                        <Shield size={22} />
                      </div>
                      <div className="text-left">
                        <h4 className={`font-semibold transition-colors ${activeCategory === 'solutions' ? 'text-primary' : 'text-foreground'}`}>
                          Solutions
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Technology solutions
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={20} className={`transition-all duration-300 ${activeCategory === 'solutions' ? 'text-primary' : 'text-muted-foreground'}`} />
                  </button>
                </div>
              </div>

              {/* Right Column - Category Details */}
              <div className="pl-0 lg:pl-8 pt-6 lg:pt-0">
                {activeCategory === 'services' && (
                  <div className="animate-fade-in">
                    <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-6">Services</h3>
                    <div className="space-y-2">
                      {services.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="group flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-all duration-300"
                          onClick={() => setIsMegaMenuOpen(false)}
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            <item.icon size={18} />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {item.label}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeCategory === 'solutions' && (
                  <div className="animate-fade-in">
                    <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-6">Solutions</h3>
                    <div className="space-y-2">
                      {solutions.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="group flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-all duration-300"
                          onClick={() => setIsMegaMenuOpen(false)}
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            <item.icon size={18} />
                          </div>
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {item.label}
                          </span>
                        </Link>
                      ))}
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
              <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-6">Industries We Serve</h3>
              <div className="space-y-2">
                {industries.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/30 hover:bg-muted/50 hover:border-primary/50 transition-all duration-300"
                    onClick={() => setIsIndustriesMenuOpen(false)}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <ChevronRight size={20} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
