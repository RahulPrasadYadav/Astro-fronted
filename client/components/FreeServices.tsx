import { Sun, FileText, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface FreeService {
  id: string;
  title: string;
  description: string;
  icon: any;
  features: string[];
  bgGradient: string;
  iconColor: string;
}

const freeServices: FreeService[] = [
  {
    id: '1',
    title: 'Daily Horoscope',
    description: 'Get personalized daily predictions based on your zodiac sign',
    icon: Sun,
    features: ['Love & Relationships', 'Career & Finance', 'Health & Wellness', 'Lucky Numbers'],
    bgGradient: 'from-orange-100 to-yellow-100',
    iconColor: 'text-orange-500'
  },
  {
    id: '2',
    title: 'Free Kundali Report',
    description: 'Comprehensive birth chart analysis with planetary positions',
    icon: FileText,
    features: ['Birth Chart Analysis', 'Planetary Positions', 'Dasha Predictions', 'Remedies'],
    bgGradient: 'from-purple-100 to-pink-100',
    iconColor: 'text-purple-500'
  },
  {
    id: '3',
    title: "Today's Panchang",
    description: 'Complete Hindu calendar with auspicious timings and festivals',
    icon: Calendar,
    features: ['Tithi & Nakshatra', 'Muhurat Timings', 'Festival Dates', 'Sunrise/Sunset'],
    bgGradient: 'from-green-100 to-emerald-100',
    iconColor: 'text-green-500'
  },
  {
    id: '4',
    title: 'Tarot Card of the Day',
    description: 'Draw your daily tarot card for guidance and inspiration',
    icon: Sparkles,
    features: ['Daily Card Draw', 'Card Meaning', 'Life Guidance', 'Meditation Tips'],
    bgGradient: 'from-blue-100 to-indigo-100',
    iconColor: 'text-blue-500'
  }
];

const ServiceCard = ({ service }: { service: FreeService }) => {
  const Icon = service.icon;
  
  return (
    <div className="group cursor-pointer">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-astro-gold/20 overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
        {/* Header with Icon */}
        <div className={`bg-gradient-to-br ${service.bgGradient} p-6 relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
          <div className="relative z-10">
            <div className={`w-16 h-16 ${service.iconColor} bg-white/80 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-display font-bold text-astro-navy mb-2">
              {service.title}
            </h3>
            <p className="text-astro-navy/70 text-sm">
              {service.description}
            </p>
          </div>
        </div>

        {/* Features List */}
        <div className="p-6">
          <ul className="space-y-3 mb-6">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3 text-astro-navy/80">
                <div className="w-2 h-2 bg-astro-gold rounded-full"></div>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button className="w-full bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy hover:shadow-lg group-hover:shadow-astro-gold/30 transition-all duration-300">
            Try Free Now
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const FreeServices = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-astro-gold/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-astro-navy mb-4">
            Explore Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-astro-orange to-astro-orange-dark">Free Astrology</span> Tools
          </h2>
          <p className="text-lg text-astro-navy/70 max-w-2xl mx-auto">
            Start your cosmic journey with our complimentary astrology services. 
            Get instant insights and discover the power of ancient wisdom.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {freeServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-astro-gold/20 to-astro-gold/10 rounded-2xl p-8 border border-astro-gold/30">
          <h3 className="text-2xl font-display font-bold text-astro-navy mb-4">
            Want More Personalized Insights?
          </h3>
          <p className="text-astro-navy/70 mb-6 max-w-xl mx-auto">
            Unlock deeper cosmic wisdom with our premium consultations. 
            Get personalized readings from expert astrologers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy hover:shadow-lg hover:shadow-astro-gold/30"
            >
              Explore All Free Services
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-astro-navy text-astro-navy hover:bg-astro-navy hover:text-white"
            >
              Book Premium Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeServices;
