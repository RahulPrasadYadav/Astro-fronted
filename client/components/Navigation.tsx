import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Star, Calendar, Heart, Eye, Hand, Sparkles, BookOpen } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', path: '/', icon: Star },
    { name: 'Kundali', path: '/kundali', icon: Star },
    { name: 'Matchmaking', path: '/matchmaking', icon: Heart },
    { name: 'Horoscope', path: '/horoscope', icon: Calendar },
    { name: 'Panchang', path: '/panchang', icon: Calendar },
    { name: 'Palm Reading', path: '/palm-reading', icon: Hand },
    { name: 'Face Reading', path: '/face-reading', icon: Eye },
    { name: 'Tarot Reading', path: '/tarot-reading', icon: Sparkles },
    { name: 'News & Blog', path: '/blog', icon: BookOpen },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-astro-gold/20 shadow-lg shadow-astro-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-astro-gold to-astro-gold-dark rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-astro-navy" />
            </div>
            <span className="text-xl font-display font-bold text-astro-navy">
              AstroXprt
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex absolute inset-0 items-center justify-center space-x-8 pointer-events-none">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-astro-navy hover:text-astro-gold-dark transition-colors duration-200 font-medium text-sm pointer-events-auto"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-astro-navy text-astro-navy hover:bg-astro-navy hover:text-white"
            >
              Free Services
            </Button>
            <Button className="bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy hover:shadow-lg hover:shadow-astro-gold/30 animate-glow">
              Schedule Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-astro-navy hover:text-astro-gold-dark transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-astro-gold/30 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center space-x-3 text-astro-navy hover:text-astro-gold-dark transition-colors py-2 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-astro-navy text-astro-navy hover:bg-astro-navy hover:text-white"
                >
                  Free Services
                </Button>
                <Button className="w-full bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy hover:shadow-lg">
                  Schedule Appointment
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
