import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Utensils,
  Monitor,
  Tablet,
  BarChart3,
  Package,
  Users,
  CalendarDays,
  Calculator,
  Heart,
  ShoppingCart,
  Headphones,
  Truck,
  Receipt,
  CreditCard,
  Shield,
  Zap,
  Settings,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  fetchFnBHardwareSolutions,
  FnBHardwareSolutionsData,
} from "@/services/fnbHardwareSolutionsService";
import {
  fetchFnBBusinessIntelligence,
  FnBBusinessIntelligenceData,
} from "@/services/fnbBusinessIntelligenceService";
import {
  fetchFnBSuccessStories,
  FnBSuccessStoriesData,
} from "@/services/fnbSuccessStoriesService";

// Partner logos
import ciscoLogo from "@/assets/partners/cisco.png";
import hpeLogo from "@/assets/partners/hpe.png";
import arubaLogo from "@/assets/partners/aruba.png";

// Images
import restaurantPosImage from "@/assets/fnb/restaurant-pos.jpg";
import complianceEinvoice from "@/assets/fnb/compliance-einvoice.jpg";
import compliancePos from "@/assets/fnb/compliance-pos.jpg";
import complianceTeam from "@/assets/fnb/compliance-team.jpg";
import biTable from "@/assets/fnb/bi-table.jpg";
import biInventory from "@/assets/fnb/bi-inventory.jpg";
import biReporting from "@/assets/fnb/bi-reporting.jpg";
import biHr from "@/assets/fnb/bi-hr.jpg";
import biAccounting from "@/assets/fnb/bi-accounting.jpg";

// Utility function to map icon strings to Lucide icon components
const getIconComponent = (iconName: string) => {
  const icons: Record<string, any> = {
    Monitor,
    Tablet,
    CreditCard,
    Package,
    Receipt,
    // Add more icons as needed
  };
  return icons[iconName] || Monitor;
};

const FnBPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ threshold: 0.1 });
  const [operationsRef, operationsInView] = useInView({ threshold: 0.1 });
  const [intelligenceRef, intelligenceInView] = useInView({ threshold: 0.1 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.1 });
  const [complianceRef, complianceInView] = useInView({ threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.1 });
  const [storiesRef, storiesInView] = useInView({ threshold: 0.1 });

  const [hardwareSolutionsData, setHardwareSolutionsData] =
    useState<FnBHardwareSolutionsData | null>(null);
  const [businessIntelligenceData, setBusinessIntelligenceData] =
    useState<FnBBusinessIntelligenceData | null>(null);
  const [successStoriesData, setSuccessStoriesData] =
    useState<FnBSuccessStoriesData | null>(null);

  // Fetch hardware solutions data
  useEffect(() => {
    const loadHardwareSolutions = async () => {
      console.log("🔄 Fetching FnB Hardware Solutions...");
      const data = await fetchFnBHardwareSolutions();
      console.log("📦 Hardware Solutions Data:", data);
      if (data) {
        setHardwareSolutionsData(data);
        console.log("✅ Hardware Solutions loaded successfully");
      } else {
        console.warn("⚠️ No hardware solutions data received from API");
      }
    };
    loadHardwareSolutions();
  }, []);

  // Fetch business intelligence data
  useEffect(() => {
    const loadBusinessIntelligence = async () => {
      console.log("🔄 Fetching FnB Business Intelligence...");
      const data = await fetchFnBBusinessIntelligence();
      console.log("📦 Business Intelligence Data:", data);
      if (data) {
        setBusinessIntelligenceData(data);
        console.log("✅ Business Intelligence loaded successfully");
      } else {
        console.warn("⚠️ No business intelligence data received from API");
      }
    };
    loadBusinessIntelligence();
  }, []);

  // Fetch success stories data
  useEffect(() => {
    const loadSuccessStories = async () => {
      console.log("🔄 Fetching FnB Success Stories...");
      const data = await fetchFnBSuccessStories();
      console.log("📦 Success Stories Data:", data);
      if (data) {
        setSuccessStoriesData(data);
        console.log("✅ Success Stories loaded successfully");
      } else {
        console.warn("⚠️ No success stories data received from API");
      }
    };
    loadSuccessStories();
  }, []);

  const whyChoosePoints = [
    "End-to-end restaurant platform: POS, hardware, analytics, delivery, and compliance.",
    "Scales from 1 outlet to global groups — from cafés to franchises.",
    "Oracle-backed technology, trusted across Egypt, MENA, and beyond.",
    "Local presence — offices in Egypt, Dubai, KSA, and Germany for on-ground support.",
  ];

  // Default hardware features (fallback if API fails)
  const defaultHardwareFeatures = [
    {
      icon: Monitor,
      title: "Kitchen Display Systems (KDS)",
      desc: "Streamline orders and eliminate paper tickets.",
    },
    {
      icon: Tablet,
      title: "Self-Order Kiosks",
      desc: "Empower guests with faster, contactless ordering.",
    },
    {
      icon: Tablet,
      title: "Oracle Micros Tablet 700 Series",
      desc: "Tableside ordering for ultimate convenience.",
    },
    {
      icon: Monitor,
      title: "Oracle Micros Workstations 6 & 8",
      desc: "High-performance touch POS for peak hours.",
    },
    {
      icon: CreditCard,
      title: "Accessories",
      desc: "Printers, EMV readers, wallet readers, and cash drawers.",
    },
  ];

  // Map API data to component format with icon components
  const hardwareFeatures = hardwareSolutionsData
    ? hardwareSolutionsData.hardwareFeatures.map((feature) => ({
        icon: getIconComponent(feature.icon),
        title: feature.title,
        desc: feature.desc,
      }))
    : defaultHardwareFeatures;

  // Default intelligence features (fallback if API fails)
  const defaultIntelligenceFeatures = [
    {
      id: "inventory",
      title: "Inventory Management Software",
      description:
        "Monitor stock levels, prevent waste, and optimize purchasing through real-time tracking.",
      image: biInventory,
    },
    {
      id: "analytics",
      title: "Restaurant  Analytics & Reporting",
      description:
        "Access detailed performance dashboards for revenue, operations, and cost control.",
      image: biReporting,
    },
    {
      id: "table",
      title: "Table Management Systems",
      description:
        "Enhance seating efficiency, reduce wait times, and improve guest turnover.",
      image: biTable,
    },
    {
      id: "hr",
      title: "HR & Labor Management",
      description:
        "Streamline workforce scheduling, monitor productivity, and ensure labor compliance with built-in analytics and automated shift planning.",
      image: biHr,
    },
    {
      id: "accounting",
      title: "Accounting Software",
      description:
        "Integrate finance, payroll, and scheduling into a unified, accurate platform.",
      image: biAccounting,
    },
  ];

  // Use dynamic data or fallback to defaults
  const intelligenceFeatures = businessIntelligenceData
    ? businessIntelligenceData.intelligenceFeatures
    : defaultIntelligenceFeatures;

  const [activeIntelligenceId, setActiveIntelligenceId] = useState(
    intelligenceFeatures[0].id,
  );

  const experienceFeatures = [
    {
      icon: Heart,
      title: "Restaurant  Loyalty Programs",
      desc: "Create personalized reward programs that boost retention and average check size.",
    },
    {
      icon: ShoppingCart,
      title: "Online Ordering & Menu management solutions",
      desc: "Enable seamless self-ordering, menu updates, and dynamic promotions.",
    },
    {
      icon: Headphones,
      title: "Call Center Module",
      desc: "Centralize delivery operations, integrate with Talabat, Jahez, HungerStation and ensure fast fulfillment.",
    },
    {
      icon: Truck,
      title: "Delivery Management Software",
      desc: "Track every order from kitchen to doorstep with real-time delivery analytics,smart routing, and driver performance monitoring to guarantee on-timeservice and customer satisfaction.",
    },
  ];

  const complianceFeatures = [
    {
      image: complianceEinvoice,
      title: "Fatorty E-Invoice & E-Receipts",
      desc: "Fully integrated with Egypt's Tax Authority (ETA) and GCC VAT systems for compliant e-invoicing.",
    },
    {
      image: compliancePos,
      title: "Payment Integration",
      desc: "Accept Visa, Mastercard, Apple Pay, and local e-wallets with EMV-secure readers.",
    },
    {
      image: complianceTeam,
      title: "Tax & Regulatory Compliance",
      desc: "Meet local data, fiscal, and food service regulations (GDPR, PCI DSS).",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Efficiency",
      desc: "Automate manual tasks, reduce order delays, and streamline kitchen workflows.",
    },
    {
      icon: Settings,
      title: "Control",
      desc: "Unify POS, inventory, HR, and analytics in one connected ecosystem.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      desc: "Scale from one outlet to a multi-country franchise with cloud-based agility.",
    },
    {
      icon: BarChart3,
      title: "Insight",
      desc: "Access real-time analytics for data-driven decisions and forecasting.",
    },
    {
      icon: Sparkles,
      title: "Guest Delight",
      desc: "Enhance speed, personalization, and loyalty across every interaction.",
    },
  ];

  // Default success stories (fallback if API fails)
  const defaultSuccessStories = [
    {
      category: "Coffee & Café",
      title: "Specialty Coffee",
      subtitle:
        "Implemented Egypt's first AI-powered cashless café with 30% faster delivery time and higher repeat orders.",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    },
    {
      category: "Quick Service",
      title: "BRGR",
      subtitle:
        "Deployed kiosks and tablets for 40% faster order times during peak hours operations.",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    },
    {
      category: "Fine Dining",
      title: "Garten",
      subtitle:
        "Unified POS and accounting systems for improved operational control.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    },
  ];

  // Use dynamic data or fallback to defaults
  const successStories = successStoriesData
    ? successStoriesData.successStories
    : defaultSuccessStories;

  const partners = [
    { name: "Cisco", logo: ciscoLogo },
    { name: "HPE", logo: hpeLogo },
    { name: "Aruba", logo: arubaLogo },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/fnb-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Hero Content */}
        <div className="container-width px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border/30 mb-6">
              <Utensils className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">F&B Solutions</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Trusted Partner for{" "}
              <span className="text-primary">Smarter, Scalable</span> Restaurant
              Management & POS Solutions
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              From fine dining to quick service, ACT empowers every F&B business
              with the technology to run smarter, faster, and more connected.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">
                  Book a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#why-act">
                  Learn More
                  <ChevronDown className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div> */}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </section>

      {/* Why Choose ACT Section */}
      <section
        id="why-act"
        ref={whyRef as React.RefObject<HTMLElement>}
        className="py-24 bg-muted/30"
      >
        <div className="container-width px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Why ACT
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose ACT for F&B
            </h2>
            <p className="text-lg text-muted-foreground">
              The food & beverage industry moves fast, and success depends on
              more than just great food. With ACT, restaurants get a single
              ecosystem that drives efficiency, reduces costs, and delivers
              unforgettable guest experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {whyChoosePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={whyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/30 hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Restaurant Operations Section */}
      <section
        ref={operationsRef as React.RefObject<HTMLElement>}
        className="py-24"
      >
        <div className="container-width px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={operationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Core Operations
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Core Restaurant Operations
            </h2>
          </motion.div>

          {/* Oracle Simphony POS */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={operationsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border/30 mb-4">
                <Monitor className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Cloud-Based POS</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Oracle Simphony POS – Cloud-Based Restaurant Management
              </h3>
              <p className="text-muted-foreground mb-6">
                The all-in-one, cloud-based POS system for restaurants built on
                Oracle Micros technology.
              </p>
              <ul className="space-y-3">
                {[
                  "Manage online and in-store operations in real time",
                  "Access securely from any device, anywhere",
                  "Seamless integration with payment, delivery, and loyalty systems",
                  "Scalable from cafés and QSRs to international chains",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={operationsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden border border-border/30">
                <img
                  src={restaurantPosImage}
                  alt="Restaurant POS System"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Hardware Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={operationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                {hardwareSolutionsData?.sectionTitle ||
                  "Restaurant Hardware Solutions"}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {hardwareSolutionsData?.sectionDescription ||
                  "Built for speed, durability, and reliability. Designed to thrive in demanding environments."}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={operationsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border/30 hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Intelligence Section - Hover Reveal Style */}
      <section
        ref={intelligenceRef as React.RefObject<HTMLElement>}
        className="py-24 bg-muted/30"
      >
        <div className="container-width px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={intelligenceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold">
              {businessIntelligenceData?.sectionTitle ||
                "Business Intelligence & Control"}
            </h2>
            {businessIntelligenceData?.sectionDescription && (
              <p className="text-lg text-muted-foreground mt-4">
                {businessIntelligenceData.sectionDescription}
              </p>
            )}
          </motion.div>

          {/* Hover Reveal Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={intelligenceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full bg-card rounded-3xl overflow-hidden border border-border/30 shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row min-h-[500px]">
              {/* Left Side: Service List */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center gap-2">
                {intelligenceFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    onMouseEnter={() => setActiveIntelligenceId(feature.id)}
                    className={`group relative py-6 cursor-pointer border-b border-border/30 transition-all duration-300 ${
                      activeIntelligenceId === feature.id
                        ? "opacity-100"
                        : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-display font-medium tracking-tight text-foreground">
                        {feature.title}
                      </h3>
                      <ArrowRight
                        className={`text-primary transition-all duration-500 ${
                          activeIntelligenceId === feature.id
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-4 opacity-0"
                        }`}
                        size={32}
                      />
                    </div>
                    {/* Mobile-only description */}
                    <div
                      className={`lg:hidden overflow-hidden transition-all duration-500 ${
                        activeIntelligenceId === feature.id
                          ? "max-h-40 mt-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Side: Dynamic Preview (Desktop Only) */}
              <div className="flex-1 relative overflow-hidden hidden lg:block">
                {intelligenceFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      activeIntelligenceId === feature.id
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-110 translate-y-4 pointer-events-none"
                    }`}
                  >
                    {/* Background Image */}
                    <img
                      src={`/api/strapi${feature.image?.url || ""}`}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Content - Aligned to Bottom */}
                    <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-background/90 via-background/50 to-transparent">
                      <div
                        className={`transition-all duration-500 delay-100 ${
                          activeIntelligenceId === feature.id
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                      >
                        <h3 className="text-3xl font-display font-bold text-primary mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-foreground text-xl leading-relaxed max-w-md">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guest Experience Section */}
      <section
        ref={experienceRef as React.RefObject<HTMLElement>}
        className="py-24"
      >
        <div className="container-width px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Engagement
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Guest Experience & Engagement
            </h2>
            <p className="text-lg text-muted-foreground">
              Your guests deserve more than service — they deserve experiences
              that make them return.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {experienceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border/30 hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section
        ref={complianceRef as React.RefObject<HTMLElement>}
        className="py-24 bg-muted/30"
      >
        <div className="container-width px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={complianceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Compliance
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Compliance & Integration
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay compliant, connected, and secure across every transaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={complianceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden border border-border/30 hover:border-primary/30 transition-all"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Content */}
                <div className="p-6 bg-card">
                  <h4 className="font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        ref={benefitsRef as React.RefObject<HTMLElement>}
        className="py-24"
      >
        <div className="container-width px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Benefits
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Benefits of Partnering with ACT
            </h2>
            <p className="text-lg text-muted-foreground">
              With ACT, restaurants achieve measurable results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/30 hover:border-primary/30 transition-all text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section - Image Card Style */}
      <section
        ref={storiesRef as React.RefObject<HTMLElement>}
        className="py-24 bg-muted/30 relative overflow-hidden"
      >
        {/* Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container-width px-4 md:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-4">
              {successStoriesData?.sectionTitle || "Success Stories"}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {successStoriesData?.sectionSubtitle ||
                "Real results from F&B leaders who trusted "}
              <span className="text-gradient">ACT</span>
            </h2>
          </motion.div>

          {/* Stories Grid - Image Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story: any, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
              >
                {/* Background Image */}
                <img
                  src={`/api/strapi${story.image?.url || ""}`}
                  alt={story.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Category Badge - Top Right */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground border-none text-xs font-semibold px-3 py-1">
                    {story.category}
                  </Badge>
                </div>

                {/* Content - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-2">
                    {story.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {story.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-24">
        <div className="container-width px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                FAQ
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-2xl border border-border/30 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container-width px-4 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Where Great Hospitality Begins
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with ACT to unlock efficiency, innovation, and growth in
            every meal served.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/support">
              Let's Talk!
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FnBPage;
