// Import team images
import hassaneinTawfiq from '@/assets/team/hassanein-tawfiq.png';
import mohamedTawfik from '@/assets/team/mohamed-tawfik.png';
import mohamedAbouElLeil from '@/assets/team/mohamed-abou-el-leil.png';
import aliTawfik from '@/assets/team/ali-tawfik.png';
import mohamedElKhatib from '@/assets/team/mohamed-el-khatib.png';
import magedTaha from '@/assets/team/maged-taha.png';
import frankWagner from '@/assets/team/frank-wagner.png';
import stefanSchaefer from '@/assets/team/stefan-schaefer.png';

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  shortBio: string;
  fullBio: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 'hassanein-tawfiq',
    name: 'Hassanein Tawfiq',
    title: 'Chairman',
    image: hassaneinTawfiq,
    shortBio: 'Over three decades shaping Egypt\'s ICT landscape since 1988.',
    fullBio: [
      'Over more than three decades since 1988, Hassanein Tawfiq has played a pivotal role in shaping the information and communication technology landscape. As Chairman and Managing Director of Advanced Computer Technology (ACT), he has been the driving force behind the company\'s growth and evolution.',
      'Starting as Managing Director in 1988 and later assuming the role of Chairman in 2016, Hassanein has led ACT\'s strategic vision across all lines of business. Under his leadership, ACT expanded from a single partnership into a global ICT integrator, collaborating with more than 20 leading technology providers and establishing a strong international presence across key markets.',
    ],
  },
  {
    id: 'mohamed-tawfik',
    name: 'Mohamed Tawfik',
    title: 'CEO',
    image: mohamedTawfik,
    shortBio: 'Two decades of experience at the intersection of technology, strategy, and business growth.',
    fullBio: [
      'Mohamed Tawfik, CEO of Advanced Computer Technology (ACT), brings over two decades of experience at the intersection of technology, strategy, and business growth. A Mechanical Engineering graduate from AUC, Mohamed quickly realized that sustainable innovation requires strong commercial vision, leading him to earn an MBA from Henley Business School in the UK. His career spans regional and global roles at Micros Fidelio (Oracle), where he gained deep exposure across the Middle East and Africa.',
      'Returning to Egypt in 2018, he led ACT\'s regional expansion and strategic transformation. Appointed CEO in 2025, Mohamed drives ACT\'s vision as a long-term technology partner enabling scalable, people-centric digital ecosystems.',
      'His story is proof that when passion meets persistence, leaders don\'t just build companies, they shape the future.',
    ],
  },
  {
    id: 'mohamed-abou-el-leil',
    name: 'Mohamed Abou El-Leil',
    title: 'Managing Director - Egypt',
    image: mohamedAbouElLeil,
    shortBio: 'Nearly 28 years of progressive leadership across technology and hospitality.',
    fullBio: [
      'Mohamed Abou El-Leil is the Managing Director of ACT Egypt, bringing nearly 28 years of progressive leadership experience across technology, enterprise solutions, and hospitality. His journey with ACT began early—as a trainee—before advancing through technical, managerial, and commercial roles that shaped the company\'s growth trajectory.',
      'He played a pivotal role in building ACT\'s Enterprise Division and later laid the foundations for its successful Hospitality Division, translating vision into sustainable business outcomes. Beyond ACT, Mohamed actively contributes to the ICT ecosystem as a Board Member of the Chamber of Information Technology & Telecommunication (CIT) and a member of leading industry associations, reinforcing his impact on the sector\'s future.',
      'He graduated at Cairo University\'s Faculty of Engineering in 1994. His academic foundation and hands-on industry experience have shaped him into the remarkable leader he is.',
    ],
  },
  {
    id: 'ali-tawfik',
    name: 'Ali Tawfik',
    title: 'Managing Partner',
    image: aliTawfik,
    shortBio: 'Over a decade of experience in Commercial and Strategic Management.',
    fullBio: [
      'Ali Tawfik brings over a decade of rich experience in Commercial and Strategic Management with a strong focus on nurturing pivotal business relationships. As Enterprise Business General Manager, Ali leads the entire business cycle for the Enterprise Segment including Business Development, Presales, Alliances Management, Sales, Project Management, and Service Delivery functions. His key responsibilities encompass shaping the go-to-market strategy across multiple sectors under the Enterprise Segment.',
      'Notably, he has introduced innovative concepts in customer care management, focusing on enhancing the overall customer experience. Ali has spearheaded a comprehensive overhaul of the customer satisfaction evaluation system, ensuring it aligns with the company\'s relentless pursuit of excellence. He has also played a pivotal role in crafting the company\'s brand identity, ensuring it resonates authentically with the substantial equity that has been amassed since its inception in 1988. Ali\'s purview extends across the company\'s entire value chain, assuring its sustained competitiveness.',
      'In 2016, Ali was handpicked to join the company\'s Strategy Committee, where he played a critical role in crafting and executing the company\'s transformation strategy. This encompassed overseeing the implementation of the company\'s overarching strategy and the comprehensive restructuring and revitalization of the entire commercial system.',
      'Before joining ACT in 2015, Ali contributed his expertise at Vodafone Egypt for four years in the Prepaid Consumer Segment Department within the Marketing Division. During this tenure, he adeptly managed the prepaid customer base, which constituted the highest revenue-generating line of business at that time.',
      'Beyond his professional endeavors and corporate achievements, Ali\'s commitment to community and professional development is evident in his memberships in the American Chamber of Commerce (AmCham) and the Egyptian Junior Business Association (EJB), and his active engagement with various civil society associations.',
      'Ali\'s academic foundation is anchored by a BSc in Business Administration, earned at the American University in Cairo, where he majored in Marketing and minored in Economics. His journey embodies excellence and innovation in the dynamic world of enterprise business management.',
    ],
  },
  {
    id: 'mohamed-el-khatib',
    name: 'Mohamed El Khatib',
    title: 'Chief Financial Officer',
    image: mohamedElKhatib,
    shortBio: 'Leading ACT\'s financial strategy and corporate governance.',
    fullBio: [
      'Mohamed El Khatib is the Chief Financial Officer of Advanced Computer Technology (ACT), with a distinguished career in financial leadership and strategic direction across large-scale organizations built through a diversified exposure of corporate banking, treasury management, financial planning and reengineering.',
      'His professional journey reflects a strong focus on building resilient financial structures, supporting sustainable growth, and enabling long-term value creation. Throughout his career, he has contributed to strengthening governance, guiding complex financial decisions, and supporting organizations through periods of growth and transformation.',
      'At ACT, he plays a central role in reinforcing financial discipline and supporting the company\'s strategic expansion as a leading technology solutions provider.',
    ],
  },
  {
    id: 'maged-taha',
    name: 'Maged Taha',
    title: 'General Manager - Middle East',
    image: magedTaha,
    shortBio: 'Over 35 years of experience in the global hospitality industry.',
    fullBio: [
      'With over 35 years of experience in the global hospitality industry, Maged Taha has built a distinguished career spanning hotel operations, international business development, and technology-led transformation. He is recognized for leading high-performing teams, executing go-to-market strategies, and driving sustainable growth across highly competitive markets.',
      'Maged brings deep expertise in expanding regional footprints, strengthening commercial performance, and delivering large-scale digital transformation initiatives that enhance operational efficiency and guest experience.',
      'As Managing Director of ACT Middle East, Maged leads regional expansion, builds strategic customer relationships, and ensures the successful delivery of ACT\'s hospitality technology solutions, reinforcing ACT\'s position as a trusted partner across the Middle East.',
    ],
  },
  {
    id: 'frank-wagner',
    name: 'Frank Wagner',
    title: 'International Business General Manager',
    image: frankWagner,
    shortBio: 'Over 37 years of extensive experience in global hospitality.',
    fullBio: [
      'Frank brings over 37 years of extensive experience in the global hospitality industry, having held senior roles across some of the world\'s most renowned hotel chains and technology leaders.',
      'He began his career with hospitality giants such as IHG and Kempinski, where he built a solid foundation in hotel operations, guest experience, and large-scale service excellence.',
      'For the past 25 years, Frank transitioned into the hospitality technology sector, taking on director and VP roles at leading technology providers, including MICROS, Oracle, and NCR. Throughout his career, he has worked closely with major hospitality brands worldwide, contributing to their digital transformation journeys and helping them adopt advanced, future-ready technology solutions.',
      'Today, Frank serves as the General Manager of ACT International, where he leads the company\'s strategic expansion and global service delivery. He specializes in driving the worldwide provision of integrated hospitality technology solutions supporting hotels, resorts, and F&B groups with innovative, scalable, and customer-centric digital capabilities.',
      'With a unique blend of operational know-how and deep technical expertise, Frank plays a pivotal role in shaping ACT\'s vision, strengthening global partnerships, and empowering hospitality organizations to achieve exceptional operational performance and guest satisfaction.',
    ],
  },
  {
    id: 'stefan-schaefer',
    name: 'Stefan Schaefer',
    title: 'Hospitality Technology Leader',
    image: stefanSchaefer,
    shortBio: 'Over 20 years delivering innovative hotel and F&B solutions globally.',
    fullBio: [
      'Stefan Schaefer is a hospitality technology leader with over 20 years of experience delivering innovative hotel and F&B solutions across global markets. He began his career with MICROS-Fidelio (now Oracle Hospitality), where he built deep expertise across implementation, account management, product management, and pre-sales.',
      'Today, Stefan leads Oracle FBGBU EMEA Delivery, overseeing multi-country operations across Europe and the Middle East. He works closely with ACT—Oracle\'s long-standing partner since 1988—ensuring the successful delivery of Oracle Hospitality solutions at scale, with speed, reliability, and a strong customer-centric focus.',
    ],
  },
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamMembers.find(member => member.id === id);
};
