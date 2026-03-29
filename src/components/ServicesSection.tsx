import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import {
  Settings,
  Monitor,
  Headphones,
  Compass,
  Server,
  Cpu,
  Database,
  Shield,
  Network,
  Cloud,
  LucideIcon,
} from "lucide-react";
import { fetchServices, type Service } from "@/services/servicesService";

// Icon mapping for dynamic services
const iconMap: Record<string, LucideIcon> = {
  settings: Settings,
  monitor: Monitor,
  headphones: Headphones,
  compass: Compass,
  server: Server,
  cpu: Cpu,
  database: Database,
  shield: Shield,
  network: Network,
  cloud: Cloud,
};

const ServicesSection = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      const servicesData = await fetchServices();
      setServices(servicesData);
      setLoading(false);
    };
    loadServices();
  }, []);

  // Get icon component from string
  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName?.toLowerCase()] || Settings;
    return IconComponent;
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-card/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent text-base font-semibold mb-4">
            Our IT Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Supporting Your Business{" "}
            <span className="text-gradient-orange">Every Step of the Way</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With Reliable, Secure, and Scalable Services.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {/* Mobile Horizontal Slider */}
            <div className="sm:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
                {services.map((service, index) => {
                  const IconComponent = getIcon(service.icon);
                  return (
                    <Link
                      key={service.id}
                      to={service.href}
                      className={`group p-6 rounded-2xl glass-card hover:bg-card/80 transition-all duration-500 w-[280px] flex-shrink-0 ${
                        isInView
                          ? "opacity-100 translate-y-0"
                          : "opacity-1 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl orange-gradient flex items-center justify-center mb-5 group-hover:scale-110 group-hover:glow-shadow-orange transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-accent-foreground" />
                      </div>

                      {/* Content */}
                      <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {service.label}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const IconComponent = getIcon(service.icon);
                return (
                  <Link
                    key={service.id}
                    to={service.href}
                    className={`group p-6 rounded-2xl glass-card hover:bg-card/80 transition-all duration-500 ${
                      isInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-1 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl orange-gradient flex items-center justify-center mb-5 group-hover:scale-110 group-hover:glow-shadow-orange transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-accent-foreground" />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {service.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
