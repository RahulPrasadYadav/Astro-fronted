import { Construction, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-b from-astro-gold/5 to-white">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Icon */}
        <div className="w-24 h-24 bg-gradient-to-br from-astro-gold to-astro-gold-dark rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
          <Construction className="w-12 h-12 text-astro-navy" />
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-display font-bold text-astro-navy mb-4">
          {title}
        </h1>
        <p className="text-lg text-astro-navy/70 mb-8 leading-relaxed">
          {description || `We're working on bringing you the best ${title.toLowerCase()} experience. This page will be available soon with comprehensive features and expert guidance.`}
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-astro-gold/20 to-astro-gold/10 border border-astro-gold/30 rounded-full mb-8">
          <span className="text-astro-navy font-medium">🚀 Coming Soon</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy hover:shadow-lg hover:shadow-astro-gold/30"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link to="/">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-astro-navy text-astro-navy hover:bg-astro-navy hover:text-white"
            >
              Explore Free Services
            </Button>
          </Link>
        </div>

        {/* Alternative Options */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-astro-gold/20 shadow-lg">
          <h3 className="text-xl font-display font-semibold text-astro-navy mb-4">
            What You Can Do Right Now
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-astro-gold rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-astro-navy">Talk to an Astrologer</h4>
                <p className="text-astro-navy/70 text-sm">Get instant guidance from our expert astrologers</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-astro-gold rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-astro-navy">Free Daily Horoscope</h4>
                <p className="text-astro-navy/70 text-sm">Check your daily predictions and cosmic insights</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-astro-gold rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-astro-navy">Free Kundali Report</h4>
                <p className="text-astro-navy/70 text-sm">Generate your complete birth chart analysis</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-astro-gold rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-astro-navy">Read Our Blog</h4>
                <p className="text-astro-navy/70 text-sm">Explore latest astrological insights and wisdom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
