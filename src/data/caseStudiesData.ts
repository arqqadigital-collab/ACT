// Import images for case studies
import agibaBg from "@/assets/success-stories/agiba-bg.jpg";
import redseaBg from "@/assets/success-stories/redsea-bg.jpg";
import telecomBg from "@/assets/success-stories/telecom-bg.jpg";
import sewedyBg from "@/assets/success-stories/sewedy-bg.jpg";
import sopcBg from "@/assets/success-stories/sopc-bg.png";
import oilGasImg from "@/assets/industries/oil-gas.jpg";
import publicSectorImg from "@/assets/industries/public-sector.jpg";
import telecomImg from "@/assets/industries/telecom.jpg";
import educationImg from "@/assets/industries/education.jpg";
import hospitalityImg from "@/assets/industries/hospitality.jpg";
import movenpickImg from "@/assets/case-studies/movenpick.jpg";
import orascomImg from "@/assets/case-studies/orascom.jpg";
import accorImg from "@/assets/case-studies/accor.jpg";
import millenniumImg from "@/assets/case-studies/millennium.jpg";
import pinkberryImg from "@/assets/case-studies/pinkberry.jpg";
import rotanaImg from "@/assets/case-studies/rotana.jpg";
import madenImg from "@/assets/case-studies/maden-hotels.jpg";
import cityHotelImg from "@/assets/case-studies/city-hotel.jpg";
import luxuryResortImg from "@/assets/case-studies/luxury-resort.jpg";
import mustUniversityImg from "@/assets/case-studies/must-university.jpg";
import alAzharLibraryImg from "@/assets/case-studies/al-azhar-library.jpg";
import damiettaPortImg from "@/assets/case-studies/damietta-port.jpg";
import modCapitalImg from "@/assets/case-studies/mod-capital.jpg";
import semafImg from "@/assets/case-studies/semaf.jpg";

export interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  title: string;
  description: string;
  challenges: string[];
  solution: string[];
  results: string[];
  technologies?: string[];
  image?: string;
}

// Helper function to get image by case study ID or industry
export const getCaseStudyImage = (caseStudy: CaseStudy): string => {
  // Specific images for featured case studies
  const specificImages: Record<string, string> = {
    "agiba-data-center": agibaBg,
    "sopc-data-center": sopcBg,
    "redsea-container-voip": redseaBg,
    "telecom-egypt-data": telecomBg,
    "knowledge-hub-aruba": sewedyBg,
    "movenpick-cloud-migration": movenpickImg,
    "orascom-digital-transformation": orascomImg,
    "accor-opera-cloud": accorImg,
    "millennium-opera-cloud": millenniumImg,
    "pinkberry-symphony": pinkberryImg,
    "rotana-cloud-finance": rotanaImg,
    "maden-hotels-cloud": madenImg,
    "city-hotel-hospitality": cityHotelImg,
    "luxury-resort-hospitality": luxuryResortImg,
    "must-university-campus": mustUniversityImg,
    "al-azhar-library": alAzharLibraryImg,
    "damietta-port-it": damiettaPortImg,
    "mod-admin-capital": modCapitalImg,
    "semaf-digital-transformation": semafImg,
  };

  if (specificImages[caseStudy.id]) {
    return specificImages[caseStudy.id];
  }

  // Default images by industry
  const industryImages: Record<string, string> = {
    "Oil & Gas": oilGasImg,
    "Public Sector": publicSectorImg,
    Telecom: telecomImg,
    Education: educationImg,
    Hospitality: hospitalityImg,
  };

  return industryImages[caseStudy.industry] || oilGasImg;
};

export const caseStudies: CaseStudy[] = [
  // Oil & Gas
  {
    id: "agiba-data-center",
    company: "AGIBA Petroleum",
    industry: "Oil & Gas",
    title: "How ACT Delivered a Full Data Center Renovation for AGIBA with Zero Business Disruption",
    description:
      "AGIBA undertook a comprehensive data center renovation project that combined civil works, infrastructure upgrades, and IT migration activities. The project included replacing the entire cabling infrastructure and existing power panels, upgrading the fire alarm system, and installing a new raised floor and false ceiling. Additionally, a steel structure was designed and installed for outdoor condenser units, while Rittal containment with LCPs was implemented to enhance cooling efficiency.",
    challenges: [
      "No Disaster Recovery (DR) site available",
      "Execute multiple controlled downtimes to accommodate civil and IT works",
      "Manage increased risks of service interruptions during migration",
      "Handle extended project duration and increased risk of potential service interruptions",
    ],
    solution: [
      "Implemented a phased approach to minimize risks and maintain business continuity",
      "Planned and executed 16 separate controlled downtimes without any adverse impact on the customer's business operations",
    ],
    results: [
      "Zero business impact: 16 controlled downtimes completed with no service interruptions",
      "Operational resilience enhanced: Upgraded infrastructure improved reliability, efficiency, and safety of the data center",
      "Business continuity maintained 100%",
    ],
    technologies: ["Rittal", "LCP Cooling Systems"],
    image: agibaBg,
  },
  {
    id: "sopc-data-center",
    company: "SOPC",
    industry: "Oil & Gas",
    title: "How ACT Transformed SOPC’s Data Center to Unlock Performance, Scalability & Future Growth",
    description:
      "SOPC launched a strategic data center transformation project aimed at overcoming server resource limitations and ensuring future scalability. The initiative focused on infrastructure redesign and virtualization to optimize system performance and prepare the IT environment for long-term growth. Completed within 4 months, the project included assessment, design, and configuration of the new solution.",
    challenges: [
      "Limited server resources restricting performance",
      "Bottlenecks affecting application response times",
      "Difficulty scaling operations to meet business growth",
      "Requirement to balance optimization with cost efficiency",
    ],
    solution: [
      "Implemented a comprehensive Data Center solution built on virtualization technology",
      "Conducting full assessment and infrastructure design",
      "Implementing virtualization to optimize server utilization",
      "Completing detailed configurations tailored to SOPC's environment",
    ],
    results: [
      "Better performance and faster application response",
      "Increased resource availability through the virtualization solution",
      "Improved scalability to support growing demands",
    ],
    technologies: ["VMware", "Virtualization"],
  },
  {
    id: "ethydco-infrastructure",
    company: "ETHYDCO",
    industry: "Oil & Gas",
    title: "How ACT Modernized ETHYDCO’s IT Infrastructure for Seamless Industrial Operations",
    description:
      "ETHYDCO partnered with ACT to execute a comprehensive IT infrastructure transformation project spanning over three years. Leveraging a robust ecosystem of global technology leaders — including Hewlett Packard Enterprise, Cisco, McAfee, VMware, and Milestone — ACT delivered a fully integrated, future-proof infrastructure designed to meet the demanding requirements of the Oil & Gas industry.",
    challenges: [
      "Operating on outdated IT systems that limited scalability, efficiency, and security",
      "Need to build a resilient and secure infrastructure capable of supporting critical operations",
      "Ensuring high availability and minimal downtime across the plant",
    ],
    solution: [
      "Fiber optics cabling system delivering high-speed, reliable connectivity",
      "Data center infrastructure modernization with enterprise-grade hardware",
      "Deployment of IP CCTV systems for enhanced security and monitoring",
      "VoIP and IP Telephony solutions for unified, efficient communication",
      "Integration of virtualization and security platforms (VMware, McAfee)",
    ],
    results: [
      "Built a resilient and scalable infrastructure supporting ETHYDCO's industrial operations",
      "Achieved improved network performance, uptime, and system reliability",
      "Enhanced communication and collaboration through advanced VoIP and IP systems",
      "Strengthened security and monitoring capabilities with IP CCTV and enterprise-grade protection",
    ],
    technologies: ["HPE", "Cisco", "McAfee", "VMware", "Milestone"],
  },

  // Public Sector
  {
    id: "redsea-container-voip",
    company: "Red Sea Container Terminal",
    industry: "Public Sector",
    title: "How ACT Delivered a Cloud VOIP Solution for Red Sea Container Terminal S.A.E",
    description:
      "Red Sea Container Terminal S.A.E launched a strategic initiative to accommodate the growing demand and retain the position of the Port. The project focused on implementing a Cisco-powered Cloud VOIP Solution alongside a new IS Information System, enabling the terminal to handle rising demand, improve team coordination, and build a scalable foundation for future growth.",
    challenges: [
      "Increasing demand for container handling capacity",
      "Outdated communication systems limiting responsiveness and coordination",
      "Need to safeguard market position by enhancing efficiency and reliability",
    ],
    solution: [
      "Delivered a Cisco-powered Cloud VOIP Solution integrated with a new IS Information System",
      "Enhanced communication and collaboration through advanced VoIP and IP systems",
      "Strengthened security and monitoring capabilities",
    ],
    results: [
      "Enhanced communication efficiency: Cloud VOIP reduced delays and improved response times",
      "Improved operational capacity: New IS system streamlined processes for better throughput",
      "Future scalability ensured: Cisco solution designed to expand with business growth",
      "Strengthened market position: Upgraded infrastructure secured the port's competitive edge",
    ],
    technologies: ["Cisco", "Cloud VOIP"],
  },
  {
    id: "damietta-port-it",
    company: "Damietta Port Authority",
    industry: "Public Sector",
    title: "How ACT Modernized the IT Infrastructure for Damietta Port Authority (DPA)",
    description:
      "Damietta Port Authority (DPA) initiated a major IT infrastructure expansion project to support its business and operational growth. The project focused on the supply, installation, testing, and commissioning of new IT hardware, alongside support renewal for existing network resources.",
    challenges: [
      "Need for endpoint and VDI deployment to support modern operations",
      "Lack of virtualization restricting scalability and resource optimization",
      "Requirement to balance modernization with operational continuity",
    ],
    solution: [
      "Supply, installation, testing, and commissioning of new IT hardware",
      "Full renovation of the existing network infrastructure",
      "Deployment of endpoints and Virtual Desktop Infrastructure (VDI)",
      "Hypervisor virtualization to maximize system efficiency and resource utilization",
    ],
    results: [
      "Improved performance: Upgraded infrastructure delivers faster and more reliable operations",
      "Increased scalability: Virtualization enables flexible growth of IT resources",
      "Enhanced efficiency: VDI and modern endpoints optimize day-to-day workflows",
      "Operational resilience: Renewed support ensures stability and continuity",
    ],
    technologies: ["VDI", "Hypervisor Virtualization"],
  },
  {
    id: "mod-admin-capital",
    company: "Ministry of Defense - Administrative Capital",
    industry: "Public Sector",
    title: "How ACT Strengthened Connectivity for Egypt’s Ministry of Defense",
    description:
      "ACT partnered with the Ministry of Defense to design and deploy a robust digital infrastructure for the new Government District. Covering over 500 acres, the district houses the Council of Ministers, Parliament, and 10 ministry clusters. ACT's role was to enable secure, high-speed connectivity that supports mission-critical government operations.",
    challenges: [
      "Required highly available and secure network to connect multiple government entities",
      "Meet strict national security and performance standards",
      "Interlink hundreds of buildings across a vast district with zero downtime tolerance",
      "Complete operational visibility required",
    ],
    solution: [
      "Supply, installation, and configuration of active and core network switches",
      "Deployment of enterprise firewalls for end-to-end network protection",
      "Implementation of Wi-Fi controllers and access points for district-wide coverage",
      "Integration of Network Admission Control (NAC) for user authentication",
      "Deployment of DHCP, DNS, and IPAM solutions for centralized management",
    ],
    results: [
      "Delivered a resilient, scalable, and secure network backbone for all government entities",
      "Enabled seamless data flow and communication across ministries",
      "Strengthened the cybersecurity posture of national digital infrastructure",
      "Positioned the Administrative Capital as a model for smart, connected governance",
    ],
    technologies: ["Enterprise Firewalls", "Wi-Fi Controllers", "NAC", "DHCP/DNS/IPAM"],
  },
  {
    id: "semaf-digital-transformation",
    company: "SEMAF (Railway Equipment Factory)",
    industry: "Public Sector",
    title: "How ACT Enabled Industrial Digital Transformation for SEMAF",
    description:
      "As part of the Arab Organization for Industrialization's (AOI) strategic direction toward digital transformation, ACT collaborated with Iken to modernize and digitize AOI's factories, starting with the Railway Equipment Factory (SEMAF). The goal was to build a resilient, intelligent IT foundation capable of supporting AOI's vision of smarter, data-driven industrial operations.",
    challenges: [
      "Upgrade legacy systems and fragmented infrastructure",
      "Design and deploy a centralized yet flexible IT environment",
      "Unify production sites and enhance data visibility",
      "Protect critical industrial systems while maintaining operational continuity",
    ],
    solution: [
      "Modern data center architecture built on Dell and Cisco technologies",
      "Advanced network switching for high availability and performance across sites",
      "Secure ERP environment powered by SAP, streamlining operations and data flow",
      "Comprehensive IT/OT security using Palo Alto platforms",
    ],
    results: [
      "Established a centralized and future-ready digital infrastructure",
      "Improved network reliability, scalability, and performance across sites",
      "Enhanced data protection and operational security for critical industrial assets",
      "Enabled efficient collaboration and real-time visibility across AOI's ecosystem",
    ],
    technologies: ["Dell", "Cisco", "SAP", "Palo Alto"],
  },

  // Telecom
  {
    id: "telecom-egypt-data",
    company: "Telecom Egypt",
    industry: "Telecom",
    title: "How ACT Enabled Telecom Egypt to Activate Data Beyond Backup",
    description:
      "The solution proposed to Telecom Egypt goes beyond simple data protection, focusing on activating the data under management and driving additional value to their line of business by protecting physical, virtual, endpoint, SaaS and cloud-based workloads.",
    challenges: [
      "Ensuring protection of diverse workloads across physical, virtual, and cloud environments",
      "Meeting the need for agility and fast response to evolving customer requirements",
      "Avoiding data silos and inefficiencies caused by fragmented backup systems",
      "Enabling smooth scalability to support future service expansion",
    ],
    solution: [
      "Deployed Commvault's unified data management platform",
      "Deep integration into multiple hypervisors for efficient protection of dynamic virtual environments",
      "Cloud-native design allowing fast data movement across 20+ cloud providers",
      "Native integration with enterprise databases and applications",
    ],
    results: [
      "Accelerated data mobility: Enabled seamless movement of workloads across data centers and 20+ cloud providers",
      "Enhanced resilience: Physical and virtual environments fully safeguarded with native recovery",
      "Agility gained: Rapid response to evolving customer demands through flexible data activation",
      "Unified operations: One platform replacing fragmented systems, reducing complexity",
    ],
    technologies: ["Commvault"],
  },
  {
    id: "vodafone-it-infrastructure",
    company: "Vodafone Egypt",
    industry: "Telecom",
    title: "How ACT Delivered End-to-End IT Infrastructure for Vodafone Egypt",
    description:
      "Vodafone Egypt partnered with ACT to implement a comprehensive IT infrastructure solution across four newly developed buildings. The solution was composed of structured cabling systems based on CommScope technology, video conferencing and networking & connectivity based on Cisco technology.",
    challenges: [
      "Ensure four new buildings were equipped with robust and future-ready IT infrastructure",
      "Deploy a high-performance, scalable, and reliable solution",
      "Deliver seamless connectivity for employees and visitors",
    ],
    solution: [
      "Structured cabling systems based on CommScope technology",
      "Video conferencing solutions enabling seamless collaboration",
      "Networking and connectivity powered by Cisco technology",
      "End-to-end deployment across four newly developed buildings",
    ],
    results: [
      "Improved connectivity: Reliable, high-performance networks across all four buildings",
      "Enhanced collaboration: Advanced video conferencing boosting communication efficiency",
      "Future scalability: Structured cabling designed to support long-term growth",
      "Productivity boost: Staff and visitors enjoy seamless digital experiences",
    ],
    technologies: ["CommScope", "Cisco"],
  },

  // Education
  {
    id: "must-university-campus",
    company: "MUST University",
    industry: "Education",
    title: "MUST University Builds a Smart Campus with ACT’s End-to-End Network and Security Solutions",
    description:
      "ACT provided MUST with a holistic end-to-end solution with a clear focus on achieving maximum outcomes with cutting-edge technology. The designed solution included network, wireless, network security system, client security system and passive components which supported the university's innovative ways of teaching, studying, and research.",
    challenges: [
      "Build a new smart campus meeting modern academic and operational demands",
      "Delivering seamless connectivity across the entire campus",
      "Ensuring robust cybersecurity for both students and faculty",
      "Supporting innovative learning methods and digital education tools",
      "Managing costs while maintaining operational efficiency",
    ],
    solution: [
      "Network and wireless infrastructure for high-speed campus-wide connectivity",
      "Network security systems ensuring data protection and secure access",
      "Client security solutions safeguarding user devices and digital assets",
      "Passive components integrated to ensure reliability and smooth operations",
    ],
    results: [
      "Enhanced connectivity enabling seamless access to digital learning resources",
      "Improved cybersecurity posture for both infrastructure and end-users",
      "Optimized cost management through efficient resource utilization",
      "Increased operational efficiency and sustainability across campus systems",
      "A future-ready campus aligned with global standards for education and innovation",
    ],
    technologies: ["Enterprise Networking", "Security Systems"],
  },
  {
    id: "knowledge-hub-aruba",
    company: "El Sewedy Education - The Knowledge Hub",
    industry: "Education",
    title: "El Sewedy Education’s The Knowledge Hub Transforms Connectivity with ACT’s HPE Aruba Network Solution",
    description:
      "El Sewedy Education's flagship project, The Knowledge Hub, is located in Cairo's New Capital. ACT delivered advanced Networking & Connectivity solutions based on HPE Aruba technology to provide a secure gigabit Wi-Fi expressway.",
    challenges: [
      "Managing massive network demand due to rapid increase in mobile devices",
      "Guaranteeing reliable wireless coverage across indoor and outdoor spaces",
      "Ensuring secure user authentication and data transmission",
      "Integrating various network components into a single management platform",
      "Balancing scalability and efficiency to support future expansion",
    ],
    solution: [
      "High-speed WLAN infrastructure providing seamless and reliable connectivity",
      "Distributed control techniques utilizing open communication standards",
      "Comprehensive coverage in dorm rooms, lecture halls, research labs, and sports venues",
      "Secure and scalable deployment to accommodate future technology growth",
    ],
    results: [
      "World-class networking environment enabling seamless digital learning",
      "Significantly improved network performance, accessibility, and user experience",
      "Reliable and secure connectivity across all campus facilities",
    ],
    technologies: ["HPE Aruba", "WLAN"],
  },
  {
    id: "al-azhar-library",
    company: "Al-Azhar Library",
    industry: "Education",
    title:
      "ACT Delivers Cutting-Edge Technology Infrastructure for Al-Azhar Library – The Largest Islamic Library in the Middle East",
    description:
      "ACT proudly contributed to one of Egypt's most prestigious national projects, Al-Azhar Library, the largest Islamic library in the Middle East. The project aims to preserve Islamic heritage and promote digital transformation in education and culture.",
    challenges: [
      "Integrating modern technology within a facility housing sensitive historical materials",
      "Ensuring continuous connectivity and system reliability across multiple departments",
      "Meeting complex technical and operational challenges for a national cultural landmark",
    ],
    solution: [
      "Datacenter preparation and deployment featuring advanced computing and storage systems",
      "Enterprise wireless network ensuring strong, uninterrupted connectivity",
      "IP telephony system for seamless communication and collaboration",
      "High-performance data storage and backup systems for operational continuity",
      "Client and data security solutions to safeguard digital assets",
    ],
    results: [
      "Enhanced performance and seamless operations across all IT systems",
      "Reliable and secure connectivity improving staff and visitor experience",
      "Optimized data storage and security protecting invaluable archives",
      "Efficient internal communication supported by integrated IP telephony",
      "A future-ready digital infrastructure enabling long-term scalability",
    ],
    technologies: ["Enterprise Computing", "Storage Systems", "IP Telephony"],
  },

  // Hospitality
  {
    id: "pinkberry-symphony",
    company: "Pinkberry",
    industry: "Hospitality",
    title: "Pinkberry Streamlines Operations with Symphony Cloud",
    description:
      "Pinkberry, the iconic frozen yogurt brand, recognized the need to optimize daily operations. Their vision was to maintain the brand's renowned quality and service while making processes faster, more efficient, and scalable across new locations.",
    challenges: [
      "Complex workflows: Placing a single order required up to 14 clicks on the POS system",
      "Operational visibility: Inventory and sales data lacked real-time integration",
      "Customer experience impact: Longer wait times undermined seamless service",
    ],
    solution: [
      "Deployed Symphony Cloud, a modern cloud-based POS and operations management system",
      "Order processing simplified — reducing transactions from 14 clicks to just 4",
      "Real-time inventory and sales visibility gave managers instant insights",
      "Processes standardized across all outlets",
    ],
    results: [
      "71% fewer clicks per order (from 14 down to 4)",
      "Faster service and shorter queues, leading to happier customers",
      "Improved staff productivity, reducing training time and minimizing errors",
      "Scalable operations providing a strong foundation for expansion",
    ],
    technologies: ["Symphony Cloud POS"],
  },
  {
    id: "rotana-cloud-finance",
    company: "Rotana Hotels & Resorts",
    industry: "Hospitality",
    title: "Strategic Cloud Agreement to Transform Financial Operations",
    description:
      "Rotana Hotels & Resorts, a leading hospitality group in the Middle East, selected ACT as its strategic partner to implement Infor SunSystems Cloud. This agreement is a shared commitment to accelerating digital transformation and enhancing system integration across Rotana's operations.",
    challenges: [
      "Legacy systems lacked agility, transparency, and deep integration",
      "Need for data-driven decision-making across diverse portfolio of properties",
      "Finding a future-ready financial solution and trusted technology partner",
    ],
    solution: [
      "Implemented Infor SunSystems Cloud – A robust, cloud-based financial management system",
      "ACT's role as implementer combining deep industry-specific expertise",
      "Long-term value delivery to leading regional organizations",
    ],
    results: [
      "Enhanced Financial Agility & Transparency: Real-time financial data and insights",
      "Strengthened Digital Leadership: Cutting-edge cloud financial system",
      "Seamless Integration & Scalability: Deeper integration between finance and operational systems",
      "A Regional Benchmark for hospitality industry's shift toward cloud-based systems",
    ],
    technologies: ["Infor SunSystems Cloud", "Infor Hospitality"],
  },
  {
    id: "maden-hotels-cloud",
    company: "Maden Hotels",
    industry: "Hospitality",
    title: "Strategic Cloud Transformation Unifying Operations in Al-Madinah",
    description:
      "Maden Hotels, a prominent hospitality group in Al-Madinah al-Munawwarah, managed four landmark properties through a mix of legacy on-premises systems. ACT partnered with Maden Hotels to design and implement a comprehensive, cloud-based transformation strategy.",
    challenges: [
      "Operational Inefficiency: Disconnected systems hindered seamless communication",
      "Limited Agility: On-premises infrastructure lacked scalability",
      "Data Silos: No unified platform for holistic view of operations and guest preferences",
    ],
    solution: [
      "Phased implementation across four properties with greenfield deployment and migration",
      "Oracle Hospitality OPERA Cloud: For centralized property management",
      "Oracle Simphony Cloud POS: To streamline food and beverage operations",
      "Hosted Infor SunSystems: For scalable financial management and control",
    ],
    results: [
      "Enhanced Operational Agility across all properties",
      "Unified guest experience and property management",
      "Positioned Maden Hotels at the forefront of hospitality technology in the region",
    ],
    technologies: ["Oracle OPERA Cloud", "Oracle Simphony Cloud", "Infor SunSystems"],
  },
  {
    id: "city-hotel-hospitality",
    company: "City Hotel",
    industry: "Hospitality",
    title: "How ACT Reduced Check-in Times by 40% for City Hotel",
    description:
      "City Hotel, a leading urban hospitality brand, partnered with ACT to revolutionize their guest experience through smart technology integration. The project focused on implementing self-service kiosks and seamless system integration to reduce wait times and enhance guest satisfaction.",
    challenges: [
      "Long check-in queues leading to guest frustration",
      "Manual processes creating bottlenecks during peak hours",
      "Lack of integration between front desk and room management systems",
      "Need to modernize guest experience without disrupting operations",
    ],
    solution: [
      "Deployed self-service check-in kiosks with intuitive touchscreen interfaces",
      "Integrated Oracle OPERA PMS with smart room key systems",
      "Implemented real-time room status synchronization",
      "Mobile check-in option for guests to bypass lobby entirely",
    ],
    results: [
      "40% reduction in average check-in time",
      "Guest satisfaction scores increased by 28%",
      "Staff redeployed to provide personalized concierge services",
      "Peak hour congestion eliminated with smart queue management",
    ],
    technologies: ["Oracle OPERA PMS", "Self-Service Kiosks", "Smart Room Integration"],
    image: cityHotelImg,
  },
  {
    id: "luxury-resort-hospitality",
    company: "Luxury Resort",
    industry: "Hospitality",
    title: "How ACT Boosted Guest Satisfaction by 25% at Luxury Resort",
    description:
      "Luxury Resort sought to elevate their guest experience to match their five-star standards. ACT delivered a comprehensive technology transformation leveraging Oracle OPERA PMS and advanced automation to create seamless, personalized stays.",
    challenges: [
      "Inconsistent guest experience across touchpoints",
      "Manual processes slowing down service delivery",
      "Limited visibility into guest preferences and history",
      "Need for unified property management across multiple departments",
    ],
    solution: [
      "Implemented Oracle OPERA PMS for centralized property management",
      "Deployed automated guest preference tracking and fulfillment",
      "Integrated spa, dining, and activities booking into unified platform",
      "Real-time alerts for VIP arrivals and special requests",
    ],
    results: [
      "25% improvement in guest satisfaction scores",
      "Repeat guest bookings increased by 35%",
      "Staff efficiency improved with automated task assignments",
      "Revenue per available room increased through personalized upselling",
    ],
    technologies: ["Oracle OPERA PMS", "Guest Experience Automation", "Unified Booking Platform"],
    image: luxuryResortImg,
  },
  // {
  //   id: "maden-hotels-hospitality",
  //   company: "Maden Hotels",
  //   industry: "Hospitality",
  //   title: "How ACT Increased Membership Revenue by 30% for Maden Hotels",
  //   description:
  //     "Maden Hotels aimed to maximize their leisure and wellness offerings through technology innovation. ACT implemented integrated Spa & Access Control solutions that transformed their membership program and guest wellness experience.",
  //   challenges: [
  //     "Fragmented membership management across properties",
  //     "Manual access control creating security and convenience issues",
  //     "Limited data on member usage patterns and preferences",
  //     "Difficulty in cross-selling services between spa, gym, and hotel",
  //   ],
  //   solution: [
  //     "Deployed integrated Spa Management and Access Control system",
  //     "Unified membership platform across all Maden properties",
  //     "Automated member check-in with RFID wristband technology",
  //     "Real-time usage analytics and personalized offer engine",
  //   ],
  //   results: [
  //     "30% increase in membership revenue",
  //     "Member retention improved by 40%",
  //     "Cross-property visits increased through unified access",
  //     "Data-driven promotions boosted ancillary spending",
  //   ],
  //   technologies: ["Spa Management System", "Access Control", "RFID Technology", "Membership Platform"],
  //   image: hospitalityImg,
  // },
  {
    id: "movenpick-cloud-migration",
    company: "Mövenpick Hotels & Resorts",
    industry: "Hospitality",
    title: "A Global Cloud Migration: Empowering a Hospitality Leader with Operational Freedom",
    description:
      "Mövenpick Hotels & Resorts managed over 50 properties worldwide on legacy Oracle PMS. ACT led the world's first PMS cloud migration project of its scale, migrating the entire global estate to Oracle OPERA Cloud over three years.",
    challenges: [
      "Outdated legacy infrastructure across 50+ global properties",
      "Rigid systems unable to support modern mobile workflows",
      "Operational inefficiencies preventing staff from focusing on guest experience",
      "Need for standardized operations and reduced costs across all properties",
    ],
    solution: [
      "World-first global PMS cloud migration to Oracle OPERA Cloud",
      "Strategic transformation beyond a technical lift-and-shift",
      "Three-year phased migration of entire global property estate",
      "Mobile-enabled front desk operations for anywhere guest service",
    ],
    results: [
      "Unprecedented operational mobility with mobile device support",
      "Enhanced workforce efficiency with real-time updates",
      "Seamlessly integrated ecosystem with Oracle POS and kitchen management",
      "Strategic shift from managing IT complexities to delivering guest experiences",
    ],
    technologies: ["Oracle OPERA Cloud", "Oracle POS", "Oracle Kitchen Management", "Cloud Infrastructure"],
    image: movenpickImg,
  },
  {
    id: "orascom-digital-transformation",
    company: "Orascom Hotels Management",
    industry: "Hospitality",
    title: "Digital Transformation with Oracle OPERA Cloud – 2024 Hotel Visionary Award Winner",
    description:
      "Orascom Hotels Management partnered with ACT for a bold digital transformation using Oracle OPERA Cloud PMS, integrated with mobile tools and AI-driven personalization, eliminating over 30 manual processes and earning the 2024 Hotel Visionary Award.",
    challenges: [
      "Operational inefficiencies and fragmented guest experiences",
      "High dependency on third-party distribution channels",
      "Over 30 manual processes slowing operations",
      "Lack of mobile-enabled workflows for staff",
    ],
    solution: [
      "Implemented Oracle OPERA Cloud PMS with mobile tools and AI-driven personalization",
      "Redesigned hotel workflows and digitized housekeeping",
      "Enabled Experience Ambassadors with mobile check-ins and real-time service",
      "Integrated proprietary booking engine to optimize direct distribution",
    ],
    results: [
      "Eliminated over 30 manual processes across operations",
      "Reduced task completion times by up to 90%",
      "Cut room block update times by 99%",
      "60% reduction in call handling time",
      "Won 2024 Hotel Visionary Award for Guest Experience",
      "First property rollout completed in just 12 days with 95%+ user satisfaction",
    ],
    technologies: ["Oracle OPERA Cloud PMS", "Oracle Cloud Infrastructure", "Hudini Staff Connect", "AI Personalization"],
    image: orascomImg,
  },
  {
    id: "accor-opera-cloud",
    company: "Accor Group",
    industry: "Hospitality",
    title: "Accor Group Transforms Operations with OPERA Cloud",
    description:
      "Accor Group partnered with ACT to modernize property operations through Oracle OPERA Cloud, delivering measurable improvements in efficiency, guest experience, and data-driven decision-making across multiple departments.",
    challenges: [
      "Heavy dependency on printed task sheets across departments",
      "Limited real-time coordination between reception, housekeeping, and maintenance",
      "Lack of instant operational insights for management decision-making",
      "Costly and time-consuming employee training processes",
      "Inconsistent guest profile and loyalty recognition",
    ],
    solution: [
      "Implemented OPERA Cloud PMS with mobile-first operations",
      "Deployed real-time reporting and analytics dashboards",
      "Leveraged built-in digital learning platform for staff training",
      "Unified guest data for enhanced profiling and personalization",
    ],
    results: [
      "Eliminated printed task sheets completely",
      "Faster coordination between reception, housekeeping, and maintenance",
      "Real-time analytics for accurate forecasting and KPI tracking",
      "Reduced training time and costs with digital learning modules",
      "Improved recognition and engagement of ALL loyalty members",
      "Scalable mobile-first system across multi-property environment",
    ],
    technologies: ["Oracle OPERA Cloud PMS", "Mobile Operations Platform", "Digital Learning Platform", "Real-time Analytics"],
    image: accorImg,
  },
  {
    id: "millennium-opera-cloud",
    company: "Millennium Hotels & Resorts",
    industry: "Hospitality",
    title: "Millennium Hotels Modernizes Portfolio with OPERA Cloud Migration",
    description:
      "Millennium Hotels & Resorts is leading a group-wide digital transformation by transitioning from on-premises systems to OPERA Cloud, with 15 hotels successfully migrated and a full portfolio rollout underway.",
    challenges: [
      "Outdated on-premises systems restricting scalability and innovation",
      "Heavy reliance on on-site servers and manual processes",
      "Fragmented data across properties slowing decision-making",
      "Rising operational costs from maintaining legacy infrastructure",
      "Limited system accessibility for cross-functional teams",
    ],
    solution: [
      "Phased strategic migration to Oracle OPERA Cloud",
      "Fully cloud-based PMS eliminating physical servers",
      "Real-time data access across departments and properties",
      "Mobile-enabled operations for front office, housekeeping, and management",
      "Centralized reporting, analytics, and modern guest profiling",
    ],
    results: [
      "Eliminated hardware maintenance and on-site server costs",
      "Real-time operational visibility across all migrated hotels",
      "Streamlined workflows improving staff productivity",
      "Flexible architecture supporting portfolio expansion",
      "More accurate unified guest data and faster service delivery",
    ],
    technologies: ["Oracle OPERA Cloud", "Cloud Infrastructure", "Mobile Operations", "Centralized Analytics"],
    image: millenniumImg,
  },
];

export const getIndustryColor = (industry: string): string => {
  const colors: Record<string, string> = {
    "Oil & Gas": "bg-amber-500/20 text-amber-400 border-amber-500/30",
    "Public Sector": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Telecom: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    Education: "bg-green-500/20 text-green-400 border-green-500/30",
    Hospitality: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  };
  return colors[industry] || "bg-primary/20 text-primary border-primary/30";
};
