/**
 * Seed Industries Data - Single Type Version
 * 
 * This script creates/updates the Industries Page single type with all industry data
 * Run with: node scripts/seed-industries.js
 * 
 * Note: Make sure Strapi is running at http://localhost:1337
 */

const industriesData = {
  industries: [
  {
    title: "Oil & Gas",
    slug: "oil-gas",
    shortDescription:
      "Enhancing operations through SCADA systems, predictive maintenance, and real-time monitoring to boost safety and maximize production efficiency.",
    order: 1,
    heroSection: {
      title: "Empowering Egypt's <span class='text-primary'>Oil & Gas Sector</span> with Integrated IT Excellence",
      badge: "Oil & Gas Industry",
      description: "At ACT, we understand the critical demands of the Oil & Gas industry, from exploration sites to headquarters. For over 35 years, we've delivered end-to-end, on-premises IT solutions that transform manual operations into dynamic, automated ecosystems. From enterprise networking and cybersecurity to data protection, IP video surveillance, and data center infrastructure, ACT ensures your operations are connected, resilient, and secure.",
    },
    ourExpertise: [
      {
        title: "Enterprise Networking for Remote Sites",
        description: "Robust LAN, WAN, and wireless networks ensuring secure, high-performance connectivity between field sites, refineries, and HQ.",
        iconName: "Network",
      },
      {
        title: "End-to-End Cybersecurity",
        description: "From firewalls to 24/7 SOC services, ACT safeguards sensitive operational and exploration data against evolving threats.",
        iconName: "Shield",
      },
      {
        title: "Data Protection and Business Continuity",
        description: "Backup, disaster recovery, and business continuity solutions that ensure zero data loss and uninterrupted operations.",
        iconName: "Database",
      },
      {
        title: "IP Video Surveillance and Access Control",
        description: "Integrated monitoring systems to secure critical infrastructure, assets, and personnel across multiple sites.",
        iconName: "Camera",
      },
      {
        title: "Data Center Infrastructure",
        description: "Civil works, power systems, fire safety, cooling, and IT migration designed to build secure, scalable, and compliant facilities.",
        iconName: "Server",
      },
    ],
    technologySolutions: [
      {
        title: "SCADA and IoT Integration",
        description: "Seamlessly connect field sensors, equipment, and control systems to enable real-time monitoring, data collection, and automated decision-making.",
        iconName: "Cpu",
      },
      {
        title: "Predictive Maintenance with AI",
        description: "Leverage machine learning to anticipate equipment failures, minimize downtime, and optimize maintenance schedules for maximum efficiency.",
        iconName: "Wrench",
      },
      {
        title: "Cloud and Hybrid IT",
        description: "Empower collaboration and scalability with secure cloud and hybrid infrastructures tailored for data-intensive Oil & Gas environments.",
        iconName: "Cloud",
      },
      {
        title: "Secure Networking for Refineries",
        description: "Ensure reliable, high-speed, and protected connectivity between remote sites, headquarters, and data centers to maintain business continuity.",
        iconName: "Network",
      },
    ],
    whyChooseUs: [
      {
        title: "35+ Years of ICT Excellence",
        description: "Delivering trusted technology solutions across Egypt and MENA.",
        iconName: "Award",
      },
      {
        title: "Proven Industry Expertise",
        description: "Supporting leading Oil & Gas enterprises with tailored IT strategies.",
        iconName: "Building2",
      },
      {
        title: "Nationwide SLA Coverage",
        description: "Ensuring uninterrupted operations with responsive local support.",
        iconName: "Clock",
      },
      {
        title: "Certified Engineering Team",
        description: "Partnered with top global OEMs for reliable implementation.",
        iconName: "Users",
      },
      {
        title: "Integrated IT Approach",
        description: "Combining network, security, data, and facilities into one seamless solution.",
        iconName: "CheckCircle",
      },
    ],
  },
  {
    title: "Telecommunications",
    slug: "telecom",
    shortDescription:
      "Enabling telecom providers with 5G readiness, infrastructure optimization, and network expansion to power the future of connectivity.",
    order: 2,
    heroSection: {
      title: "Accelerating Egypt's <span class='text-primary'>Telecom Evolution</span> with Next-Generation Solutions",
      badge: "Telecommunications",
      description: "ACT empowers telecom operators with cutting-edge 5G infrastructure, Open RAN architectures, Deep Packet Inspection (DPI), and intelligent network solutions. From core networks to edge computing, we help CSPs deliver faster, smarter, and more reliable services across Egypt and the region.",
    },
    ourExpertise: [
      {
        title: "Next-Generation Architectures with Open RAN",
        description: "Break free from vendor lock-in with flexible, open, and intelligent RAN solutions. ACT ensures seamless interoperability between RUs, DUs, and CUs.",
        iconName: "Signal",
      },
      {
        title: "Data-Driven Intelligence with DPI",
        description: "Gain granular, real-time insights to optimize Quality of Service (QoS), monetize user behavior, enable network slicing, and strengthen customer experience.",
        iconName: "Network",
      },
      {
        title: "Enterprise 5G and Edge Computing",
        description: "ACT delivers private 5G networks for factories, logistics hubs, campuses, and smart cities — integrating edge computing for IoT and automation.",
        iconName: "Wifi",
      },
      {
        title: "Accelerated Time-to-Market",
        description: "With CI/CD expertise and automated orchestration, ACT deploys advanced telecom solutions faster, reducing complexity.",
        iconName: "Zap",
      },
      {
        title: "Risk Mitigation in Multi-Vendor Environments",
        description: "ACT's skilled engineering teams and security-first approach ensure seamless integration, performance, and resilience.",
        iconName: "Shield",
      },
    ],
    technologySolutions: [
      {
        title: "Next-Generation Network Solutions (5G)",
        description: "Build robust, scalable, and secure 5G networks from RAN to core.",
        iconName: "Signal",
        features: "<ul><li>5G Core Network Design & Deployment</li><li>Private 5G for Enterprises</li><li>Network Slicing & Edge Computing</li></ul>",
      },
      {
        title: "Network Intelligence & Service Assurance",
        description: "Real-time insights and proactive quality assurance.",
        iconName: "Network",
        features: "<ul><li>DPI for network analytics</li><li>Service Assurance with Netscout</li><li>Automated Network Analytics</li></ul>",
      },
      {
        title: "OSS/BSS Systems",
        description: "Streamline operations and improve customer experience.",
        iconName: "Server",
        features: "<ul><li>Operations Support Systems</li><li>Business Support Systems</li><li>Revenue Assurance</li></ul>",
      },
      {
        title: "Cybersecurity for Telecom",
        description: "Protect hardware, applications, and critical infrastructure.",
        iconName: "Shield",
        features: "<ul><li>End-to-End Security Architectures</li><li>Fraud Management</li><li>SIM boxing defense</li></ul>",
      },
    ],
    whyChooseUs: [
      {
        title: "35+ Years of ICT Leadership",
        description: "Decades of experience delivering transformative telecom solutions.",
        iconName: "Award",
      },
      {
        title: "Proven Track Record",
        description: "Trusted by leading telecom operators to build reliable infrastructures.",
        iconName: "Building2",
      },
      {
        title: "Vendor-Certified Expertise",
        description: "Certified by top global technology providers.",
        iconName: "Users",
      },
      {
        title: "5G, Open RAN & DPI Integration",
        description: "Specialized in next-generation network technologies.",
        iconName: "Signal",
      },
      {
        title: "Local Presence, Global Reach",
        description: "Strong operations backed by international partnerships.",
        iconName: "Globe",
      },
    ],
  },
  {
    title: "Public Sector",
    slug: "public-sector",
    shortDescription:
      "Delivering e-government platforms, citizen portals, and connected infrastructure to support smarter, more inclusive communities.",
    order: 3,
    heroSection: {
      title: "Empowering Egypt's <span class='text-primary'>Public Sector</span> with Digital Government Solutions",
      badge: "Public Sector",
      description: "ACT partners with government entities to modernize operations, enhance citizen services, and build secure, scalable digital infrastructures. From smart cities to e-government platforms, we enable transparent, efficient, and connected public services.",
    },
    ourExpertise: [
      {
        title: "E-Government Platforms",
        description: "Comprehensive digital platforms for citizen services, licensing, and administrative operations.",
        iconName: "Globe",
      },
      {
        title: "Smart City Infrastructure",
        description: "IoT-enabled solutions for traffic management, public safety, and utilities monitoring.",
        iconName: "Building2",
      },
      {
        title: "Cybersecurity for Government",
        description: "Enterprise-grade security to protect sensitive data and critical infrastructure.",
        iconName: "Shield",
      },
      {
        title: "Data Center Modernization",
        description: "Scalable, resilient data centers for government operations.",
        iconName: "Server",
      },
    ],
    technologySolutions: [
      {
        title: "Citizen Service Portals",
        description: "User-friendly digital portals for seamless public service delivery.",
        iconName: "Users",
      },
      {
        title: "Integrated Command Centers",
        description: "Centralized monitoring and management for public safety and operations.",
        iconName: "Monitor",
      },
      {
        title: "Government Cloud Solutions",
        description: "Secure cloud infrastructure for data sovereignty and scalability.",
        iconName: "Cloud",
      },
    ],
    whyChooseUs: [
      {
        title: "Trusted Government Partner",
        description: "Proven track record with public sector entities.",
        iconName: "Award",
      },
      {
        title: "Compliance & Security",
        description: "Adherence to government regulations and standards.",
        iconName: "ShieldCheck",
      },
      {
        title: "Local Support Network",
        description: "Nationwide presence for responsive service delivery.",
        iconName: "MapPin",
      },
    ],
  },
  {
    title: "Education",
    slug: "education",
    shortDescription:
      "Empowering schools and universities with hybrid learning environments, advanced cybersecurity, and smart campus solutions.",
    order: 4,
    heroSection: {
      title: "Transforming <span class='text-primary'>Education</span> Through Technology",
      badge: "Education Sector",
      description: "ACT enables educational institutions to create engaging, secure, and future-ready learning environments. From smart classrooms to campus-wide networks, we support teachers, inspire students, and streamline operations.",
    },
    ourExpertise: [
      {
        title: "Smart Campus Solutions",
        description: "End-to-end campus connectivity with wireless networks, IoT integration, and unified communications.",
        iconName: "GraduationCap",
      },
      {
        title: "Hybrid Learning Platforms",
        description: "Seamless integration of physical and digital learning experiences.",
        iconName: "Monitor",
      },
      {
        title: "Education Cybersecurity",
        description: "Protect student data, research, and institutional assets with advanced security measures.",
        iconName: "Shield",
      },
      {
        title: "Device Management",
        description: "Centralized management of student and faculty devices across campus.",
        iconName: "Settings",
      },
    ],
    technologySolutions: [
      {
        title: "Learning Management Systems",
        description: "Modern platforms for course delivery, assessment, and collaboration.",
        iconName: "Lightbulb",
      },
      {
        title: "Interactive Classrooms",
        description: "Smart boards, video conferencing, and collaboration tools.",
        iconName: "Monitor",
      },
      {
        title: "Campus Wi-Fi Infrastructure",
        description: "High-performance wireless networks covering entire campus grounds.",
        iconName: "Wifi",
      },
    ],
    whyChooseUs: [
      {
        title: "Education-Focused Solutions",
        description: "Tailored specifically for academic institutions.",
        iconName: "GraduationCap",
      },
      {
        title: "Budget-Friendly Options",
        description: "Cost-effective solutions designed for educational budgets.",
        iconName: "CheckCircle",
      },
      {
        title: "Training & Support",
        description: "Comprehensive training for faculty and IT staff.",
        iconName: "Users",
      },
    ],
  },
  {
    title: "Hospitality",
    slug: "hospitality",
    shortDescription:
      "Powering hotel rooms worldwide with advanced digital solutions that enhance guest experience and streamline operations.",
    order: 5,
    heroSection: {
      title: "Elevating <span class='text-primary'>Hospitality</span> with Smart Technology",
      badge: "Hospitality Sector",
      description: "ACT transforms hospitality operations with guest-centric technology, seamless connectivity, and integrated management systems. From luxury resorts to boutique hotels, we deliver experiences that delight guests and optimize operations.",
    },
    ourExpertise: [
      {
        title: "Guest Wi-Fi & Connectivity",
        description: "High-speed, secure wireless networks throughout properties.",
        iconName: "Wifi",
      },
      {
        title: "Property Management Systems",
        description: "Integrated systems for reservations, check-in, and guest services.",
        iconName: "Monitor",
      },
      {
        title: "Smart Room Technology",
        description: "IoT-enabled room controls for lighting, climate, and entertainment.",
        iconName: "Settings",
      },
      {
        title: "Security & Surveillance",
        description: "Comprehensive video surveillance and access control systems.",
        iconName: "Camera",
      },
    ],
    technologySolutions: [
      {
        title: "Guest Experience Platforms",
        description: "Mobile apps and digital concierge services for personalized stays.",
        iconName: "Users",
      },
      {
        title: "Revenue Management Systems",
        description: "AI-powered pricing and occupancy optimization.",
        iconName: "BarChart3",
      },
      {
        title: "Energy Management",
        description: "Smart systems to reduce operational costs and environmental impact.",
        iconName: "Zap",
      },
    ],
    whyChooseUs: [
      {
        title: "150,000+ Rooms Powered",
        description: "Proven track record in hospitality technology.",
        iconName: "Award",
      },
      {
        title: "24/7 Support",
        description: "Round-the-clock support for uninterrupted operations.",
        iconName: "Clock",
      },
      {
        title: "Scalable Solutions",
        description: "From boutique hotels to large resort chains.",
        iconName: "Building2",
      },
    ],
  },
],
};

// Display the prepared data
console.log("✨ Industries Page data prepared for seeding:\n");
console.log(JSON.stringify(industriesData, null, 2));

console.log("\n\n📋 TO SEED THIS DATA:\n");
console.log("Option 1: Manual Entry");
console.log("  1. Start Strapi: npm run develop");
console.log("  2. Go to http://localhost:1337/admin");
console.log("  3. Navigate to Content Manager > Industries Page (Single Type)");
console.log("  4. Add all industries using the data structure above");
console.log("  5. Upload images for cardImage, hero backgrounds, and partner logos");
console.log("  6. Click 'Save' and then 'Publish'");

console.log("\nOption 2: API Upload (requires authentication)");
console.log("  Use this JSON structure with PUT request to /api/industry");
console.log("  Example: PUT http://localhost:1337/api/industry");
console.log("  Body: { data: <industries data above> }");

console.log("\n\n⚠️  IMPORTANT:");
console.log("  - This is a Single Type, so you create/update ONE entry with ALL industries");
console.log("  - Each industry is a component within the industries array");
console.log("  - Icons are referenced by name (iconName field) - images are optional");
console.log("  - Don't forget to publish after saving!");

module.exports = { industriesData };
