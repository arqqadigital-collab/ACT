import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  Building2,
  Utensils,
  Settings,
  Users,
  FileText,
  Sparkles,
  Dumbbell,
  Ticket,
  Heart,
  Shield,
  Wifi,
  Camera,
  Bell,
  Volume2,
  Tv,
  Phone,
  Car,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  CreditCard,
  BarChart3,
  Key,
  Fingerprint,
  Gauge,
  Home,
  Lock,
  Zap,
  Loader2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useInView } from "@/hooks/useInView";
import { useToast } from "@/hooks/use-toast";

// Partner logos
import ciscoLogo from "@/assets/partners/cisco.png";
import hpeLogo from "@/assets/partners/hpe.png";
import arubaLogo from "@/assets/partners/aruba.png";
import fortinetLogo from "@/assets/partners/fortinet.png";
import nutanixLogo from "@/assets/partners/nutanix.png";

// Why ACT image
import whyActImage from "@/assets/hotels/why-act.jpg";

// Entertainment & Wellness images
import ticketingImg from "@/assets/hotels/ticketing-solutions.png";
import spaImg from "@/assets/hotels/spa-management.png";
import gymImg from "@/assets/hotels/gym-fitness.png";
import accessControlImg from "@/assets/hotels/resort-access-control.png";

// Physical Security images
import videoSurveillanceImg from "@/assets/hotels/video-surveillance.png";
import fireAlarmImg from "@/assets/hotels/fire-alarm.png";
import publicAddressImg from "@/assets/hotels/public-address.png";
import iptvImg from "@/assets/hotels/iptv-solution.png";
import ipTelephoneImg from "@/assets/hotels/ip-telephone.png";
import parkingImg from "@/assets/hotels/parking-management.png";

import { LucideIcon } from "lucide-react";
import { StackingCardsSection, StackingCardData } from "@/components/StackingCards";
// Case study images
import cityHotelImg from "@/assets/case-studies/city-hotel.jpg";
import luxuryResortImg from "@/assets/case-studies/luxury-resort.jpg";
import madenImg from "@/assets/case-studies/maden-hotels.jpg";
import rotanaImg from "@/assets/case-studies/rotana.jpg";

// Core Solutions images
import pmsImg from "@/assets/hotels/pms.webp";
import restaurantMgmtImg from "@/assets/hotels/restaurant-management.webp";
import inventoryMgmtImg from "@/assets/hotels/inventory-management.webp";
import accountingImg from "@/assets/hotels/accounting-system.webp";
import maestroHcmImg from "@/assets/hotels/maestro-hcm.webp";
import automationImg from "@/assets/hotels/automation-solutions.png";

const HotelsResortsPage = () => {
  const { toast } = useToast();
  const [heroRef, heroInView] = useInView<HTMLDivElement>();
  const [activeSecurityTab, setActiveSecurityTab] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessType: "",
    roomCount: "",
    services: [] as string[],
    businessName: "",
    contactName: "",
    mobile: "",
    email: "",
  });

  const whyActFeatures = [
    "End-to-end hospitality solutions (PMS, RMS, HCM, CRM, Smart Automation)",
    "Oracle-powered solutions trusted worldwide",
    "Integrations across every touchpoint",
    "Local expertise with global presence",
  ];

  const coreSolutions = [
    {
      icon: Building2,
      image: pmsImg,
      title: "Property Management Systems (PMS)",
      description:
        "Oracle Hospitality OPERA PMS centralizes hotel operations—covering reservations, front desk, housekeeping, billing, and guest preferences with powerful reporting and analytics.",
      features: [
        "OPERA V5 Property Management",
        "OPERA Sales and Catering",
        "Opera Cloud",
        "OPERA Sales and Events Management (OSEM)",
        "Hotel Property Interface",
      ],
    },
    {
      icon: Utensils,
      image: restaurantMgmtImg,
      title: "Restaurant Management System",
      description:
        "Oracle Simphony is a cloud-based POS system managing transactions across restaurants, bars, spas with seamless OPERA Cloud integration and mobile ordering.",
      features: ["Cloud-based POS", "Room charging integration", "Mobile ordering", "Multi-outlet management"],
    },
    {
      icon: BarChart3,
      image: inventoryMgmtImg,
      title: "Inventory Management System",
      description:
        "Track stock, manage purchasing, and streamline procurement. Improve cost control, reduce waste, and boost operational efficiency.",
      features: ["Stock tracking", "Purchasing management", "Procurement streamlining", "Cost control"],
    },
    {
      icon: CreditCard,
      image: accountingImg,
      title: "Accounting System",
      description:
        "Manage revenues, expenses, payroll, and reporting with complete financial visibility across your property.",
      features: ["Revenue management", "Expense tracking", "Payroll integration", "Financial reporting"],
    },
    {
      icon: Settings,
      image: automationImg,
      title: "Automation Solutions",
      description:
        "Automate every step from check-in to check-out with comprehensive solutions designed to deliver the finest guest experience.",
      features: ["Self check-in/out", "Smart room controls", "Automated workflows", "Guest service automation"],
    },
    {
      icon: Users,
      image: maestroHcmImg,
      title: "Maestro HCM",
      description:
        "Simplify HR from hire to retire with powerful analytics, smart dashboards, and an easy-to-use interface.",
      features: ["HR analytics", "Smart dashboards", "Employee lifecycle", "Performance management"],
    },
  ];

  const entertainmentWellnessData: StackingCardData[] = [
    {
      label: "Events & Entertainment",
      icon: Ticket,
      title: "Ticketing Solutions",
      description:
        "A unified solution for entertainment venues that streamlines registration and ticket sales, enabling efficient event bookings and allowing guests to access entertainment and wellness services through one seamless platform.",
      color: "hsl(var(--primary))",
      image: ticketingImg,
    },
    {
      label: "Wellness & Relaxation",
      icon: Heart,
      title: "SPA Management",
      description:
        "Seamless booking, personalized treatments, and efficient scheduling drive guest satisfaction and maximize spa productivity.",
      color: "hsl(var(--primary))",
      image: spaImg,
    },
    {
      label: "Fitness & Health",
      icon: Dumbbell,
      title: "Gym & Fitness",
      description:
        "Provides secure access control across different membership levels, ensuring smooth facility use and enhanced member experience.",
      color: "hsl(var(--primary))",
      image: gymImg,
    },
    {
      label: "Security & Access",
      icon: Key,
      title: "Resort Access Control",
      description:
        "Provides efficient access control across resort premises, efficiently managing guest privileges and amenities while enhancing security, privacy, and personalized experiences.",
      color: "hsl(var(--primary))",
      image: accessControlImg,
    },
  ];

  // Add-On Applications with detailed content
  interface AddOnApp {
    icon: LucideIcon;
    title: string;
    description: string;
    subItems?: string[];
  }

  const addOnApplications: AddOnApp[] = [
    {
      icon: Users,
      title: "CRM & Loyalty",
      description:
        "Integrates with Oracle Simphony POS to strengthen loyalty programs, deliver targeted marketing campaigns, and ensure accurate revenue tracking, driving guest satisfaction and effective customer relationship management across hospitality venues.",
    },
    {
      icon: Wifi,
      title: "CRS Distribution (Channel Manager)",
      description:
        "Acts as a central hub connecting PMS to online and offline sales channels, enabling real-time updates, optimized rates, and unified management—driving higher revenue and improved hotel performance.",
    },
    {
      icon: Fingerprint,
      title: "ID/Passport Scanning",
      description:
        "Facilitates fast, secure ID verification by scanning passports, driver's licenses, and national IDs—streamlining customer onboarding and compliance processes.",
    },
    {
      icon: Gauge,
      title: "Revenue Management Software",
      description:
        "Infor's revenue management system automates pricing decisions to maximize ADR, RevPAR, and occupancy—driving stronger revenue performance in hospitality.",
    },
    {
      icon: Home,
      title: "GRMS",
      description:
        "Optimizes energy efficiency, enhances guest comfort, and streamlines room control—improving sustainability and operational performance in hospitality.",
      subItems: [
        "RCU Control Room Unit",
        "Cards (Admin, Guest, and Housekeeping)",
        "Door/Window Contact",
        "DLP Panel (Smart/Touch)",
        "RF Card Reader & Master Control",
        "RF Intelligent Hotel Doorbell",
        "PIR & LUX Sensors",
      ],
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description:
        "Our tailored cybersecurity solutions safeguard your entire ICT infrastructure—from assessments to continuous protection—allowing you to focus on core operations while proactively preparing for evolving threats.",
      subItems: [
        "Comprehensive Network and Endpoint Security",
        "Effective Vulnerability and Patch Management",
        "Advanced Threat Detection and Response (EDR, NDR, XDR)",
        "Security Information and Event Management (SIEM)",
        "Identity and Privileged Access Management (IAM - PAM)",
        "Robust Data Protection, Loss Prevention and Encryption",
      ],
    },
    {
      icon: Wifi,
      title: "Networking & Connectivity",
      description:
        "Empowers businesses with advanced networking technologies—integrating campus and data center systems, enabling software-defined automation, and supporting unified communications. From industrial networking and Super WiFi to FTTX (GPON), these solutions drive secure, scalable, and high-performance connectivity.",
      subItems: [
        "Fiber to the X (FTTX) (Gigabit Passive Optical Network (GPON))",
        "Super Wi-Fi Outdoor Solutions",
        "Industrial Networking (Switches and Routers)",
        "Unified Communications (Voice and Video over IP)",
        "Software Defined Networking and Automation",
        "Campus and Datacenter Networking (Switches, Routers, Wireless)",
      ],
    },
  ];

  const physicalSecuritySystems = [
    {
      icon: Camera,
      title: "Video Surveillance",
      image: videoSurveillanceImg,
      items: [
        "Indoor/Outdoor Cameras (Fixed/PTZ)",
        "Network Video Management software on the appropriate server platform (VMS)",
        "Storage (NVRs)",
        "Client Software on the appropriate PC Hardware platform",
        "Joystick Keyboards",
        "Display Solution/Video Wall Solution (LED Monitors)",
      ],
    },
    {
      icon: Bell,
      title: "Fire Alarm System",
      image: fireAlarmImg,
      items: [
        "Panels (FACP)",
        "Detectors",
        "Manual Call Points (MCP)",
        "Siren / Sounders",
        "Graphical User Interface (GUI)",
      ],
    },
    {
      icon: Volume2,
      title: "Public Address System",
      image: publicAddressImg,
      items: [
        "Controllers",
        "Amplifiers",
        "Speakers (Ceiling, Horn, or projectors)",
        "Call Station/Paging Desk",
        "Public Address Management software on an appropriate server/PC platform",
      ],
    },
    {
      icon: Tv,
      title: "IPTV Solution",
      image: iptvImg,
      items: ["Hospitality Screens", "IPTV server Middleware", "Integration With PMS"],
    },
    {
      icon: Phone,
      title: "IP Telephone",
      image: ipTelephoneImg,
      items: [],
    },
    {
      icon: Car,
      title: "Parking Management Solutions",
      image: parkingImg,
      items: [],
    },
  ];

  const benefits = [
    { icon: Sparkles, text: "Elevate Guest Satisfaction with personalized, seamless service" },
    { icon: Zap, text: "Boost Efficiency by connecting PMS, POS, and operations" },
    { icon: BarChart3, text: "Maximize Revenue with distribution, revenue management & analytics" },
    { icon: Settings, text: "Streamline Events with mobile sales & catering management" },
    { icon: Lock, text: "Secure & Compliant with e-invoice & ID integration" },
  ];

  const caseStudies = [
    {
      id: "rotana-cloud-finance",
      title: "Rotana Hotels & Resorts",
      metric: "25%",
      description:
        "Increased guest satisfaction through seamless PMS integration and smart automation across properties.",
    },
    {
      id: "maden-hotels-cloud",
      title: "Maden Hotels",
      metric: "30%",
      description: "Unified access control & spa management - improved membership sales and operational efficiency.",
    },
  ];

  const successStoriesImages = [
    {
      id: "city-hotel-hospitality",
      category: "Urban Hospitality",
      title: "City Hotel",
      subtitle: "Reduced check-in times by 40% through self-service kiosks & smart integration.",
      image: cityHotelImg,
    },
    {
      id: "luxury-resort-hospitality",
      category: "Hospitality",
      title: "Luxury Resort",
      subtitle: "Boosted guest satisfaction by 25% with OPERA PMS & automation.",
      image: luxuryResortImg,
    },
    {
      id: "maden-hotels-cloud",
      category: "Leisure & Wellness",
      title: "Maden Hotels",
      subtitle: "Increased membership revenue by 30% using Spa & Access Control solutions.",
      image: madenImg,
    },
  ];

  const partners = [
    { name: "Cisco", logo: ciscoLogo },
    { name: "HPE", logo: hpeLogo },
    { name: "Aruba", logo: arubaLogo },
    { name: "Fortinet", logo: fortinetLogo },
    { name: "Nutanix", logo: nutanixLogo },
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = import.meta.env.VITE_EMAILJS_HOTELS_TEMPLATE_ID || "YOUR_HOTELS_TEMPLATE_ID";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      const templateParams = {
        business_type: formData.businessType,
        room_count: formData.roomCount,
        services: formData.services.join(", ") || "None selected",
        business_name: formData.businessName,
        contact_name: formData.contactName || "Not provided",
        mobile: formData.mobile || "Not provided",
        email: formData.email,
        to_email: "sales@act.eg",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Request Submitted!",
        description: "Our hospitality team will contact you soon.",
      });

      // Reset form
      setFormData({
        businessType: "",
        roomCount: "",
        services: [],
        businessName: "",
        contactName: "",
        mobile: "",
        email: "",
      });
    } catch (error) {
      console.error("Failed to send request:", error);
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/AC_-_4-2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="container-width px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Transforming Guest Experiences with <span className="text-primary">Smart Hotel Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
              From check-in to check-out, ACT delivers the technology that empowers hotels and resorts to provide
              seamless, personalized, and connected experiences for every guest.
            </p>
            <Button variant="accent" size="lg" className="group" asChild>
              <Link to="/support">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why ACT Section */}
      <section className="py-20 bg-card/30">
        <div className="container-width px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why ACT for Hotels & Resorts?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The hospitality industry is evolving, and guests expect personalized, effortless, and memorable
                experiences. ACT helps hotels deliver on these expectations with flexible, scalable, and integrated
                technology that connects every part of the property into one ecosystem.
              </p>
              <ul className="space-y-4">
                {whyActFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden bg-card border border-border/50">
                <img src={whyActImage} alt="Luxury hotel resort with pool" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-20">
        <div className="container-width px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Core Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed specifically for hotels and resorts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all overflow-hidden"
              >
                {solution.image ? (
                  <div className={`w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 ${solution.title === "Automation Solutions" ? "bg-white shadow-lg" : ""}`}>
                    <img src={solution.image} alt={solution.title} className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${solution.title === "Automation Solutions" ? "object-contain scale-110 p-2" : "object-cover"}`} />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="w-7 h-7 text-primary" />
                  </div>
                )}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Entertainment & Wellness Section - Scroll Stacking Cards */}
      <StackingCardsSection
        badge="Entertainment & Wellness Segment"
        title="Entertainment & Wellness Segment"
        description="Elevate guest experiences through intelligent leisure services and seamless wellness integrations."
        cards={entertainmentWellnessData}
      />

      {/* Add-On Applications Section */}
      <section className="py-20">
        <div className="container-width px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Add-On Applications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extend your hospitality ecosystem with powerful integrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {addOnApplications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col gap-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <app.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{app.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{app.description}</p>
                  </div>
                </div>
                {app.subItems && app.subItems.length > 0 && (
                  <div className="pl-16">
                    <ul className="space-y-2">
                      {app.subItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Physical Security & Smart Solutions - Vertical Tabs */}
      <section className="py-20 bg-card/30">
        <div className="container-width px-4 md:px-8">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Physical Security & Smart Solutions
            </h2>
          </div>

          {/* Horizontal Tabs */}
          <div className="flex flex-wrap gap-3 mb-8 border-b border-border/30 pb-4">
            {physicalSecuritySystems.map((system, index) => (
              <button
                key={system.title}
                onClick={() => setActiveSecurityTab(index)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSecurityTab === index
                    ? "bg-primary text-primary-foreground"
                    : "border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {system.title}
              </button>
            ))}
          </div>

          {/* Content - Two columns: text left, image right */}
          <motion.div
            key={activeSecurityTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            {/* Left - Title & Bullet List */}
            <div className="md:w-1/2">
              <h3 className="font-display text-2xl font-bold text-primary mb-6">
                {physicalSecuritySystems[activeSecurityTab].title}
              </h3>
              {physicalSecuritySystems[activeSecurityTab].items.length > 0 && (
                <ul className="space-y-4">
                  {physicalSecuritySystems[activeSecurityTab].items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Right - Image */}
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden bg-muted/50">
                <img
                  src={physicalSecuritySystems[activeSecurityTab].image}
                  alt={physicalSecuritySystems[activeSecurityTab].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card/30">
        <div className="container-width px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Benefits for Hotels & Resorts
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-foreground">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Metrics Cards */}
      <section className="section-padding bg-card/30 relative overflow-hidden">
        {/* Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container-width relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-4">
              Success Stories
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Real results from hospitality leaders who trusted <span className="text-gradient">ACT</span>
            </h2>
          </div>

          {/* Metrics Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/15 via-primary/5 to-card border border-primary/20 p-8 text-center"
              >
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">{study.title}</h3>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">{study.metric}</div>
                <p className="text-muted-foreground text-sm md:text-base">{study.description}</p>
              </div>
            ))}
          </div>

          {/* Image-Based Success Stories - Below Metrics */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Case Studies</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {successStoriesImages.map((story, index) => (
                <Link
                  key={index}
                  to={`/case-study/${story.id}`}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
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
                    <span className="bg-primary text-primary-foreground border-none text-xs font-semibold px-3 py-1 rounded-full">
                      {story.category}
                    </span>
                  </div>

                  {/* Content - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-2 group-hover:text-primary/90 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">{story.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild variant="hero" size="lg" className="group">
              <Link to="/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Generation Form */}
      <section className="py-20 bg-card/30">
        <div className="container-width px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Guest Experience?
              </h2>
              <p className="text-lg text-muted-foreground">Fill out the form below and our team will contact you</p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                {/* Business Type */}
                <div>
                  <Label className="text-foreground mb-3 block">Business Type</Label>
                  <RadioGroup
                    value={formData.businessType}
                    onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                    className="flex flex-wrap gap-4"
                  >
                    {["Hotel", "Resort", "Boutique"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <RadioGroupItem value={type.toLowerCase()} id={type.toLowerCase()} />
                        <Label htmlFor={type.toLowerCase()} className="text-muted-foreground cursor-pointer">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Number of Rooms */}
                <div>
                  <Label className="text-foreground mb-3 block">Number of Rooms</Label>
                  <RadioGroup
                    value={formData.roomCount}
                    onValueChange={(value) => setFormData({ ...formData, roomCount: value })}
                    className="flex flex-wrap gap-4"
                  >
                    {["<100", "100-300", "300+"].map((count) => (
                      <div key={count} className="flex items-center space-x-2">
                        <RadioGroupItem value={count} id={`rooms-${count}`} />
                        <Label htmlFor={`rooms-${count}`} className="text-muted-foreground cursor-pointer">
                          {count}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Services of Interest */}
                <div className="md:col-span-2">
                  <Label className="text-foreground mb-3 block">Services of Interest</Label>
                  <div className="flex flex-wrap gap-4">
                    {["PMS", "POS", "Revenue Management", "Automation"].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                        />
                        <Label htmlFor={service} className="text-muted-foreground cursor-pointer">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Name */}
                <div className="md:col-span-2">
                  <Label htmlFor="businessName" className="text-foreground mb-2 block">
                    Business Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Enter your business name"
                    className="bg-background/50"
                  />
                </div>

                {/* Contact Info */}
                <div>
                  <Label htmlFor="contactName" className="text-foreground mb-2 block">
                    Contact Name
                  </Label>
                  <Input
                    id="contactName"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Your name"
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <Label htmlFor="mobile" className="text-foreground mb-2 block">
                    Mobile
                  </Label>
                  <Input
                    id="mobile"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="Your mobile number"
                    className="bg-background/50"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="email" className="text-foreground mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your email address"
                    className="bg-background/50"
                  />
                </div>

                <div className="md:col-span-2">
                  <Button variant="accent" size="lg" className="w-full group" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Request a Demo
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Auto Scrolling */}
      <section className="py-16 overflow-hidden">
        <div className="container-width px-4 md:px-8">
          <div className="relative">
            <div className="flex animate-scroll-x gap-16 hover:[animation-play-state:paused]">
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <img
                  key={`${partner.name}-${index}`}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container-width px-4 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Where Hospitality Meets Innovation
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with ACT to deliver seamless guest experiences and unlock new revenue streams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HotelsResortsPage;
