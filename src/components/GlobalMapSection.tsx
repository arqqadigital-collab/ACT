import { useInView } from '@/hooks/useInView';
import { Building2, Globe, MapPin } from 'lucide-react';
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

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-background relative overflow-hidden"
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
            isInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-semibold mb-4">
            Our Global Offices
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Connecting Egypt, <span className="text-gradient">Beyond</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From Egypt to the Middle East and beyond, ACT empowers industries
            worldwide with advanced technology and consultancy.
          </p>
        </div>

        {/* Stats Row */}
        <div
          className={`flex flex-wrap justify-center gap-6 mt-16 max-w-3xl mx-auto transition-all duration-700 delay-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-1 translate-y-8"
          }`}
        >
          <div className="text-center p-4 rounded-xl glass-card hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-primary mb-1">4</div>
            <div className="text-xs text-muted-foreground">Countries</div>
          </div>
          <div className="text-center p-4 rounded-xl glass-card hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-primary mb-1">5</div>
            <div className="text-xs text-muted-foreground">
              Office Locations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMapSection;
