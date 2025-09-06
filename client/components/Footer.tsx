import { Link } from 'react-router-dom';
import { Star, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Astrologers', path: '/astrologers' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'FAQ', path: '/faq' }
  ];

  const services = [
    { name: 'Kundali Reading', path: '/kundali' },
    { name: 'Matchmaking', path: '/matchmaking' },
    { name: 'Daily Horoscope', path: '/horoscope' },
    { name: 'Panchang', path: '/panchang' },
    { name: 'Palm Reading', path: '/palm-reading' },
    { name: 'Face Reading', path: '/face-reading' },
    { name: 'Tarot Reading', path: '/tarot-reading' },
    { name: 'Numerology', path: '/numerology' }
  ];

  const freeTools = [
    { name: 'Free Kundali', path: '/free-kundali' },
    { name: 'Daily Horoscope', path: '/daily-horoscope' },
    { name: 'Love Calculator', path: '/love-calculator' },
    { name: 'Lucky Number', path: '/lucky-number' },
    { name: 'Tarot Card Draw', path: '/tarot-draw' },
    { name: 'Birth Chart', path: '/birth-chart' },
    { name: 'Moon Sign Calculator', path: '/moon-sign' },
    { name: 'Compatibility Check', path: '/compatibility' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/astroxpert' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/astroxpert' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/astroxpert' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/astroxpert' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/astroxpert' }
  ];

  return (
    <footer className="bg-gradient-to-b from-astro-navy to-astro-navy-dark text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-astro-gold to-astro-gold-dark rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-astro-navy" />
              </div>
              <span className="text-3xl font-display font-bold text-astro-gold">
                AstroXpert
              </span>
            </div>
            <p className="text-astro-navy-light mb-6 leading-relaxed">
              Unlock your cosmic blueprint with expert guidance from verified astrologers. 
              Get personalized readings for life, love, and career.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-astro-gold" />
                <span className="text-astro-navy-light">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-astro-gold" />
                <span className="text-astro-navy-light">hello@astroxpert.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-astro-gold" />
                <span className="text-astro-navy-light">New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold text-astro-gold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-astro-navy-light hover:text-astro-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-display font-bold text-astro-gold mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-astro-navy-light hover:text-astro-gold transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Free Tools */}
          <div>
            <h3 className="text-xl font-display font-bold text-astro-gold mb-6">
              Free Tools
            </h3>
            <ul className="space-y-3">
              {freeTools.map((tool) => (
                <li key={tool.name}>
                  <Link
                    to={tool.path}
                    className="text-astro-navy-light hover:text-astro-gold transition-colors duration-200 text-sm"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-astro-navy-light/20">
          <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-2xl font-display font-bold text-astro-gold mb-2">
                Stay Connected to the Cosmos
              </h3>
              <p className="text-astro-navy-light max-w-lg">
                Get weekly horoscopes, astrological insights, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="lg:ml-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-astro-gold/30 text-white placeholder-astro-navy-light focus:outline-none focus:ring-2 focus:ring-astro-gold/50 focus:border-astro-gold"
                />
                <Button className="bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy hover:shadow-lg whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Trust Badges */}
        <div className="mt-8 pt-8 border-t border-astro-navy-light/20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            {/* Social Links */}
            <div className="mb-6 lg:mb-0">
              <p className="text-astro-gold font-medium mb-4">Follow Us</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-astro-gold/20 hover:bg-astro-gold hover:text-astro-navy text-astro-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-astro-gold">4.9★</div>
                <div className="text-xs text-astro-navy-light">25,000+ Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-astro-gold">SSL</div>
                <div className="text-xs text-astro-navy-light">Secure Payment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-astro-gold">24/7</div>
                <div className="text-xs text-astro-navy-light">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-astro-navy-light/20 bg-astro-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-astro-navy-light text-sm mb-4 md:mb-0">
              © {currentYear} AstroXpert. All rights reserved. | Crafted with cosmic wisdom and modern technology.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-astro-navy-light hover:text-astro-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-astro-navy-light hover:text-astro-gold transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-astro-navy-light hover:text-astro-gold transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
