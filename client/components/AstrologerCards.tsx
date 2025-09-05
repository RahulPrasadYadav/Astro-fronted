import { Star, Clock, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

interface Astrologer {
  id: string;
  name: string;
  image: string;
  specialties: string[];
  rating: number;
  reviews: number;
  pricePerMin: number;
  experience: string;
  isOnline: boolean;
  responseTime: string;
}

const astrologers: Astrologer[] = [
  {
    id: '1',
    name: 'Dr. Priya Sharma',
    image: 'https://images.unsplash.com/photo-1594736797933-d0301ba6fe65?w=200&h=200&fit=crop&crop=face',
    specialties: ['Vedic Astrology', 'Love & Relationships', 'Career'],
    rating: 4.9,
    reviews: 2341,
    pricePerMin: 4.99,
    experience: '15+ years',
    isOnline: true,
    responseTime: '2 min'
  },
  {
    id: '2',
    name: 'Pandit Rajesh Kumar',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    specialties: ['Numerology', 'Marriage', 'Business'],
    rating: 4.8,
    reviews: 1876,
    pricePerMin: 6.99,
    experience: '20+ years',
    isOnline: true,
    responseTime: '1 min'
  },
  {
    id: '3',
    name: 'Dr. Meera Patel',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
    specialties: ['Tarot Reading', 'Spiritual Healing', 'Life Path'],
    rating: 4.9,
    reviews: 3102,
    pricePerMin: 5.99,
    experience: '12+ years',
    isOnline: false,
    responseTime: '5 min'
  },
  {
    id: '4',
    name: 'Acharya Vikram Singh',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    specialties: ['Vedic Astrology', 'Gemstone', 'Remedies'],
    rating: 4.7,
    reviews: 987,
    pricePerMin: 7.99,
    experience: '25+ years',
    isOnline: true,
    responseTime: '3 min'
  },
  {
    id: '5',
    name: 'Dr. Anjali Gupta',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
    specialties: ['Palm Reading', 'Health', 'Family'],
    rating: 4.8,
    reviews: 1543,
    pricePerMin: 4.99,
    experience: '10+ years',
    isOnline: true,
    responseTime: '2 min'
  },
  {
    id: '6',
    name: 'Pandit Suresh Joshi',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    specialties: ['KP Astrology', 'Finance', 'Legal Issues'],
    rating: 4.9,
    reviews: 2654,
    pricePerMin: 8.99,
    experience: '18+ years',
    isOnline: false,
    responseTime: '10 min'
  }
];

const AstrologerCard = ({ astrologer }: { astrologer: Astrologer }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-astro-gold/20 overflow-hidden group">
      {/* Header with Online Status */}
      <div className="relative">
        <div className="absolute top-4 right-4 z-10">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            astrologer.isOnline 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-gray-100 text-gray-600 border border-gray-200'
          }`}>
            {astrologer.isOnline ? 'Online' : 'Offline'}
          </div>
        </div>
        
        {/* Avatar */}
        <div className="flex justify-center pt-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-astro-gold/30 group-hover:border-astro-gold transition-colors duration-300">
              <img
                src={astrologer.image}
                alt={astrologer.name}
                className="w-full h-full object-cover"
              />
            </div>
            {astrologer.isOnline && (
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-4">
        {/* Name and Experience */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-display font-semibold text-astro-navy mb-1">
            {astrologer.name}
          </h3>
          <p className="text-astro-navy/60 text-sm">{astrologer.experience} Experience</p>
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {astrologer.specialties.map((specialty, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-astro-gold/20 text-astro-navy text-xs rounded-full border border-astro-gold/30"
            >
              {specialty}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(astrologer.rating)
                    ? 'text-astro-gold fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-astro-navy font-medium">{astrologer.rating}</span>
          <span className="text-astro-navy/60 text-sm">
            ({astrologer.reviews.toLocaleString()} reviews)
          </span>
        </div>

        {/* Price and Response Time */}
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="text-center">
            <div className="text-lg font-bold text-astro-navy">
              ${astrologer.pricePerMin}
            </div>
            <div className="text-xs text-astro-navy/60">per minute</div>
          </div>
          <div className="text-center">
            <div className="flex items-center space-x-1 text-astro-navy">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">{astrologer.responseTime}</span>
            </div>
            <div className="text-xs text-astro-navy/60">avg response</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button
            className="w-full bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy hover:shadow-lg hover:shadow-astro-gold/30 transition-all duration-300"
            disabled={!astrologer.isOnline}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Consult Now
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full border-astro-navy/30 text-astro-navy hover:bg-astro-navy hover:text-white text-sm"
          >
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

const AstrologerCards = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-astro-gold/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-astro-navy mb-4">
            Consult The Right{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-astro-orange to-astro-orange-dark">
              Astrologer
            </span>{' '}
            For You
          </h2>
          <p className="text-lg text-astro-navy/70 max-w-2xl mx-auto">
            Connect with our verified expert astrologers who specialize in various aspects of life
            and provide personalized guidance based on ancient wisdom.
          </p>
        </div>

        {/* Astrologer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {astrologers.map((astrologer) => (
            <AstrologerCard key={astrologer.id} astrologer={astrologer} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-astro-navy text-astro-navy hover:bg-astro-navy hover:text-white transition-all duration-300 px-8"
          >
            View All Astrologers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AstrologerCards;
