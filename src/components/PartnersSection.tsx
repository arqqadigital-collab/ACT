import { useInView } from '@/hooks/useInView';
import { useEffect, useRef } from 'react';

import appdynamicsLogo from '@/assets/partners/appdynamics.png';
import ciscoLogo from '@/assets/partners/cisco.png';
import cohesityLogo from '@/assets/partners/cohesity.png';
import f5Logo from '@/assets/partners/f5.png';
import forcepointLogo from '@/assets/partners/forcepoint.png';
import fortinetLogo from '@/assets/partners/fortinet.png';
import hpeLogo from '@/assets/partners/hpe.png';
import arubaLogo from '@/assets/partners/aruba.png';
import paloaltoLogo from '@/assets/partners/paloalto.png';
import commvaultLogo from '@/assets/partners/commvault.png';
import nutanixLogo from '@/assets/partners/nutanix.png';
import paloaltoNewLogo from '@/assets/partners/paloalto-new.png';
import portworxLogo from '@/assets/partners/portworx.png';
import purestorageLogo from '@/assets/partners/purestorage.png';
import rittalLogo from '@/assets/partners/rittal.png';
import splunkLogo from '@/assets/partners/splunk.png';
import trellixLogo from '@/assets/partners/trellix.png';
import vmwareLogo from '@/assets/partners/vmware.png';
import zertoLogo from '@/assets/partners/zerto.png';

const partners = [
  { name: 'AppDynamics', logo: appdynamicsLogo },
  { name: 'Cisco', logo: ciscoLogo },
  { name: 'Cohesity', logo: cohesityLogo },
  { name: 'F5', logo: f5Logo },
  { name: 'Forcepoint', logo: forcepointLogo },
  { name: 'Fortinet', logo: fortinetLogo },
  { name: 'HPE', logo: hpeLogo },
  { name: 'Aruba', logo: arubaLogo },
  { name: 'Palo Alto', logo: paloaltoLogo },
  { name: 'Commvault', logo: commvaultLogo },
  { name: 'Nutanix', logo: nutanixLogo },
  { name: 'Palo Alto Networks', logo: paloaltoNewLogo },
  { name: 'Portworx', logo: portworxLogo },
  { name: 'Pure Storage', logo: purestorageLogo },
  { name: 'Rittal', logo: rittalLogo },
  { name: 'Splunk', logo: splunkLogo },
  { name: 'Trellix', logo: trellixLogo },
  { name: 'VMware', logo: vmwareLogo },
  { name: 'Zerto', logo: zertoLogo },
];

const PartnersSection = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const scrollRef = useRef<HTMLDivElement>(null);

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
    const handleMouseLeave = () => { animationId = requestAnimationFrame(scroll); };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Duplicate partners for infinite scroll effect
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 px-4 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent text-sm font-semibold mb-4">
            Our Partners
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted Technology{" "}
            <span className="text-gradient-orange">Partnerships</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ACT partners with global leaders to deliver best-in-class solutions
          </p>
        </div>

        {/* Full-width Scrolling Slider */}
        <div className="w-full overflow-hidden">
          <div
            ref={scrollRef}
            className={`w-full overflow-x-auto transition-all duration-700 delay-200 ${
              isInView ? "opacity-100" : "opacity-1"
            }`}
            style={{
              scrollBehavior: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex items-center gap-8 sm:gap-12 px-4 sm:px-8 py-6 w-max">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={index}
                  className="group flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-6 md:h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Count */}
        <p className="text-center mt-8 text-muted-foreground px-4">
          <span className="font-display font-bold text-primary">50+</span>{" "}
          Global Technology Partners & Alliances
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;
