import { useInView } from '@/hooks/useInView';
import { MapPin, Building2, Globe, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

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
    id: 'egypt',
    name: 'Egypt', 
    offices: [
      {
        city: 'Cairo, Egypt',
        company: 'ACT Headquarters',
        address: [
          'Smart Villages Company, Building B92 – A13,',
          'Al Giza Desert, Giza Governorate',
          '19488'
        ],
      },
      {
        city: 'Ismailia, Egypt',
        company: 'ACT International',
        address: [
          'Ismailia Public Free Zone,',
          'Ismailia Governorate, Egypt'
        ],
        fax: '+20 33440230',
      },
    ],
    icon: Building2,
    coords: { x: 53, y: 38 },
  },
  { 
    id: 'uae',
    name: 'UAE', 
    offices: [
      {
        city: 'Dubai, UAE',
        company: 'ACT Middle East',
        address: [
          'Al Thuraya Tower 1, Office 1608,',
          'Media City, Dubai, UAE'
        ],
        fax: '+971 (4) 5726398',
      },
    ],
    icon: Globe,
    coords: { x: 58, y: 42 },
  },
  { 
    id: 'saudi',
    name: 'Saudi Arabia', 
    offices: [
      {
        city: 'Riyadh, Saudi Arabia',
        company: 'ACT Technology',
        address: [
          'Al Imam Saud Ibn Faisal Rd., Al Malqa,',
          'Riyadh 13522, Saudi Arabia'
        ],
        fax: '+966 11445 5883',
      },
    ],
    icon: MapPin,
    coords: { x: 56, y: 40 },
  },
  { 
    id: 'germany',
    name: 'Germany', 
    offices: [
      {
        city: 'Germany',
        company: 'ACT Technology',
        address: [
          'Hottorfer Str. 17A',
          '52445 Titz Germany'
        ],
        tel: '+491711608821',
      },
    ],
    icon: Building2,
    coords: { x: 49, y: 25 },
  },
];

const GlobalMapSection = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const [activeOffice, setActiveOffice] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const activeOfficeData = officeLocations.find(o => o.id === activeOffice);

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
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-5 py-2 rounded-full glass-card text-primary text-base md:text-lg font-semibold mb-4">
            Our Global Offices
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Connecting Egypt, <span className="text-gradient">MENA & Beyond</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From Egypt to the Middle East and beyond, ACT empowers industries worldwide with advanced technology and consultancy.
          </p>
        </div>

        {/* World Map Container */}
        <div 
          className={`relative w-full max-w-6xl mx-auto aspect-[2/1] transition-all duration-1000 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
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

          {/* PNG Map - More visible version */}
          <div className="relative w-full h-full">
            <img 
              src="/images/world-map.png" 
              alt="World Map" 
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0.5) contrast(1.1)', opacity: 0.6 }}
            />
            
            {/* Country Hover Areas with circular orange highlight */}
            {officeLocations.map((office) => (
              <div
                key={office.id}
                className="absolute cursor-pointer group"
                style={{
                  left: `${office.coords.x}%`,
                  top: `${office.coords.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onMouseEnter={(e) => handleCountryHover(e, office.id)}
              >
                {/* Circular orange highlight on hover */}
                <div 
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-full transition-all duration-300 ${
                    activeOffice === office.id 
                      ? 'bg-primary/60 shadow-[0_0_40px_15px_hsl(var(--primary)/0.5)] border-2 border-primary' 
                      : 'bg-primary/20 hover:bg-primary/40'
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

        {/* Floating Info Card (follows mouse) - hidden on mobile/tablet */}
        {activeOfficeData && mousePos && (
          <div 
            className="fixed z-50 pointer-events-none animate-fade-in hidden md:block"
            style={{
              left: `${Math.min(mousePos.x + 20, window.innerWidth - 420)}px`,
              top: `${mousePos.y - 20}px`,
              transform: 'translateY(-100%)',
            }}
          >
            <div className="glass-card px-6 py-5 rounded-2xl min-w-[320px] max-w-[400px] shadow-2xl border border-primary/30 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <activeOfficeData.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg">{activeOfficeData.name}</h3>
              </div>
              
              <div className="space-y-4">
                {activeOfficeData.offices.map((office, idx) => (
                  <div key={idx} className={idx > 0 ? 'pt-4 border-t border-border/50' : ''}>
                    <h4 className="font-semibold text-primary text-sm mb-1">{office.city}</h4>
                    <p className="font-medium text-foreground text-sm mb-2">{office.company}</p>
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
          className={`grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto transition-all duration-700 delay-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center p-4 rounded-xl glass-card hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-primary mb-1">4</div>
            <div className="text-xs text-muted-foreground">Countries</div>
          </div>
          <div className="text-center p-4 rounded-xl glass-card hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-primary mb-1">5</div>
            <div className="text-xs text-muted-foreground">Office Locations</div>
          </div>
          <div className="text-center p-4 rounded-xl glass-card hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-primary mb-1">24/7</div>
            <div className="text-xs text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMapSection;
