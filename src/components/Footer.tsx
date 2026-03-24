import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

import actLogo from '@/assets/logo.png';

const Footer = () => {
  const exploreLinks = [
    { label: 'Home', href: '/' },
    { label: 'Who We Are', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Insights', href: '/insights' },
    { label: 'Career', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ];

  const hospitalityLinks = [
    { label: 'Home', href: '/hospitality' },
    { label: 'Hotels & Resorts', href: '/hotels-resorts' },
    { label: 'F&B', href: '/fnb' },
    { label: 'Support', href: '/support' },
  ];

  const industriesLinks = [
    { label: 'Telecom', href: '/industries/telecom' },
    { label: 'Oil & Gas', href: '/industries/oil-gas' },
    { label: 'Public Sector', href: '/industries/public-sector' },
    { label: 'Education', href: '/industries/education' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/act.eg', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/act_hospitality?igsh=dzFvb2l3anJ5MWpi', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/advanced-computer-technology/', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/@advancedcomputertechnology7729', label: 'YouTube' },
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-xl border-t border-border/50">

      {/* Main Footer */}
      <div className="container-width px-4 md:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo, Description & Social */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img 
                src={actLogo} 
                alt="ACT Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Since 1988, empowering organizations with trusted technology solutions across Egypt, the Middle East, and beyond.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Hospitality Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Hospitality</h4>
            <ul className="space-y-2">
              {hospitalityLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Industries</h4>
            <ul className="space-y-2">
              {industriesLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border/50">
        <div className="container-width px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} ACT. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;