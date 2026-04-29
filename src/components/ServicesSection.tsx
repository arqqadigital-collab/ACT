import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import { Settings, Monitor, Headphones, Compass } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Network & Security Services",
    description:
      "Setup, deployment, and optimization of enterprise networks to ensure reliability, security, and performance across your organization.",
    link: "/services#security",
  },
  {
    icon: Monitor,
    title: "Managed IT Services",
    description:
      "Proactive monitoring and end-to-end IT management that reduce downtime, cut costs, and give your business uninterrupted performance.",
    link: "/services#managed-operations",
  },
  {
    icon: Headphones,
    title: "Support as a Service (SaaS)",
    description:
      "Dedicated and scalable IT support tailored to your business needs, without the overhead of maintaining a large in-house team.",
    link: "/services#infrastructure",
  },
  {
    icon: Compass,
    title: " Digital Transformation & Consulting",
    description:
      "ACT goes beyond implementation, we act as your strategic advisor, developing IT roadmaps, consulting on digital transformation, and providing training to empower teams for long-term success.",
    link: "/services#digital-transformation",
  },
];

const ServicesSection = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="section-padding bg-card/30 relative overflow-hidden">
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
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent text-sm font-semibold mb-4">
            Our IT Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Supporting Your Business <span className="text-gradient-orange">Every Step of the Way</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With Reliable, Secure, and Scalable Services.
          </p>
        </div>

        {/* Mobile Horizontal Slider */}
        <div className="sm:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className={`group p-6 rounded-2xl glass-card hover:bg-card/80 transition-all duration-500 w-[280px] flex-shrink-0 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl orange-gradient flex items-center justify-center mb-5 group-hover:scale-110 group-hover:glow-shadow-orange transition-all duration-300">
                  <service.icon className="w-6 h-6 text-accent-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className={`group p-6 rounded-2xl glass-card hover:bg-card/80 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl orange-gradient flex items-center justify-center mb-5 group-hover:scale-110 group-hover:glow-shadow-orange transition-all duration-300">
                <service.icon className="w-6 h-6 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
