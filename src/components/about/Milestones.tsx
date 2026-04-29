import { useInView } from '@/hooks/useInView';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import theBeginningImg from '@/assets/milestones/the-beginning.png';
import buildingPartnershipsImg from '@/assets/milestones/building-partnerships.jpg';
import drivingExcellenceImg from '@/assets/milestones/driving-excellence.jpg';
import globalExpansionImg from '@/assets/milestones/global-expansion.jpg';
import globalRecognitionImg from '@/assets/milestones/global-recognition.jpeg';

interface MilestoneEvent {
  year: string;
  description: string;
}

interface MilestoneEra {
  era: string;
  years: string;
  image: string;
  events: MilestoneEvent[];
}

const milestoneData: MilestoneEra[] = [
  {
    era: 'The Beginning',
    years: '1988–1999',
    image: theBeginningImg,
    events: [
      { year: '1988', description: 'ACT was founded as the sole agent of Compaq in Egypt, pioneering Egypt\'s early IT transformation.' },
      { year: '1990', description: 'Entered the hospitality technology field by introducing Fidelio, the global hotel management system, revolutionizing hotel operations across Egypt.' },
      { year: '1994', description: 'Became the sole agent for Micros-Fidelio, marking the start of a legacy in hospitality excellence.' },
      { year: '1999', description: 'Achieved ISO 9001:2000 certification, proving ACT\'s commitment to world-class quality standards and customer satisfaction.' },
    ],
  },
  {
    era: 'Building Partnerships',
    years: '2000–2009',
    image: buildingPartnershipsImg,
    events: [
      { year: '2002', description: 'Following the HP–Compaq merger, ACT became an HP Business Partner and was later recognized as Egypt\'s Best HP Service Provider.' },
      { year: '2003', description: 'Partnered with Infor, expanding ACT\'s enterprise software solutions.' },
      { year: '2005', description: 'Became a Cisco Gold Certified Partner, introducing advanced networking solutions to Egypt\'s enterprises.' },
      { year: '2008', description: 'Established Micros Fidelio Middle East Hub, a joint venture providing implementation and training services across the region.' },
    ],
  },
  {
    era: 'Driving Excellence',
    years: '2010–2018',
    image: drivingExcellenceImg,
    events: [
      { year: '2012', description: 'Became an Aruba Gold Certified Partner, expanding wireless and mobility expertise.' },
      { year: '2014', description: 'After Oracle\'s acquisition of Micros, ACT took full ownership of the Middle East Hub and launched Advanced Global Services (AGS) — its hospitality implementation arm operating on a global scale.' },
      { year: '2016', description: 'Earned HPE Platinum Partner status, offering cutting-edge infrastructure solutions.' },
      { year: '2017', description: 'Achieved ISO 9001:2015 certification, reaffirming a commitment to excellence and innovation.' },
    ],
  },
  {
    era: 'Global Expansion',
    years: '2019–2024',
    image: globalExpansionImg,
    events: [
      { year: '2019', description: 'ACT entered a new era of growth by founding ACT Australia, ACT GlobalSoft, and transforming AGS into ACT International to drive its global expansion.' },
      { year: '2019', description: 'Established a joint venture with iKen, combining digital infrastructure, data center, and business solutions expertise.' },
      { year: '2020', description: 'Relocated headquarters to Smart Village in Egypt, symbolizing ACT\'s transformation into a modern, future-ready organization.' },
      { year: '2024', description: 'Expanded its footprint with the launch of ACT KSA in Riyadh, strengthening its presence in the Middle East\'s fastest-growing technology market.' },
    ],
  },
  {
    era: 'Global Recognition',
    years: '2025',
    image: globalRecognitionImg,
    events: [
      { year: '2025', description: 'Honored with Global Recognition at the Oracle Partner Awards, celebrating ACT\'s excellence in global delivery and partnership.' },
    ],
  },
];

interface TimelineEraProps {
  era: MilestoneEra;
  eraIndex: number;
  isInView: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

const TimelineEra = ({ era, eraIndex, isInView, isOpen, onToggle }: TimelineEraProps) => {
  return (
    <div 
      className={`relative transition-all duration-700 pl-10 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${eraIndex * 150}ms` }}
    >
      {/* Timeline Node */}
      <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 ring-4 ring-background z-10 shadow-lg shadow-orange-500/30" />
      
      {/* Connecting Line */}
      <div 
        className={`absolute left-[9px] top-5 w-0.5 bg-gradient-to-b from-orange-500 to-orange-400 transition-all duration-700 ease-out ${
          isOpen ? 'opacity-100' : 'opacity-30'
        }`}
        style={{ 
          height: isOpen ? 'calc(100% - 1.25rem)' : '0px',
          transition: 'height 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease'
        }}
      />

      {/* Era Header - Clickable */}
      <button
        onClick={onToggle}
        className="flex items-center gap-4 mb-6 group cursor-pointer"
      >
        <div className={`px-6 py-2.5 rounded-full font-bold text-base md:text-lg transition-all duration-300 shadow-lg ${
          isOpen 
            ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-500/40' 
            : 'bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-orange-400/30 hover:from-orange-500 hover:to-orange-600 hover:shadow-orange-500/40'
        }`}>
          {era.era}
        </div>
        <span className="text-muted-foreground font-medium text-sm">{era.years}</span>
        <ChevronDown 
          size={18} 
          className={`text-orange-500 transition-transform duration-500 ease-out ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Events Container with Smooth Animation */}
      <div 
        className={`overflow-hidden transition-all duration-700 ease-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          transition: 'max-height 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-out'
        }}
      >
        {/* Era Image */}
        <div className="mb-6 overflow-hidden rounded-xl">
          <img 
            src={era.image} 
            alt={era.era} 
            className="w-full max-w-lg mx-auto h-auto rounded-xl object-cover shadow-lg"
            loading="lazy"
          />
        </div>

        <div className="space-y-4 pb-8">
          {era.events.map((event, eventIndex) => (
            <div 
              key={`${event.year}-${eventIndex}`}
              className={`relative transition-all duration-500 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isOpen ? `${eventIndex * 120}ms` : '0ms' }}
            >
              {/* Event Card */}
              <div className="glass-card rounded-xl p-5 hover:card-shadow-hover transition-all duration-300 group border border-orange-500/10 hover:border-orange-500/20">
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-400/20 text-orange-500 font-bold text-sm mb-2">
                  {event.year}
                </span>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Milestones = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.05 });
  const [openEraIndex, setOpenEraIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setOpenEraIndex(openEraIndex === index ? -1 : index);
  };

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-orange-500/5 blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-orange-400/5 blur-[100px]" />

      <div className="container-width px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-orange-500 text-sm font-semibold mb-4">
            Our Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            ACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Milestones</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main Timeline Line */}
          <div className="absolute left-[9px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 opacity-20" />

          <div className="space-y-2">
            {milestoneData.map((era, eraIndex) => (
              <TimelineEra 
                key={era.era} 
                era={era} 
                eraIndex={eraIndex} 
                isInView={isInView}
                isOpen={openEraIndex === eraIndex}
                onToggle={() => handleToggle(eraIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
