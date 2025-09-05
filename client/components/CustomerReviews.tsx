import { Star } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  image: string;
  rating: number;
  review: string;
  location: string;
  service: string;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    review: 'Dr. Priya gave me incredibly accurate predictions about my career. Everything she said came true within 3 months!',
    location: 'Mumbai, India',
    service: 'Career Guidance'
  },
  {
    id: '2',
    name: 'Anita Patel',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    review: 'The matchmaking consultation helped me find my perfect life partner. Forever grateful to AstroXprt!',
    location: 'Delhi, India',
    service: 'Matchmaking'
  },
  {
    id: '3',
    name: 'Vikram Singh',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    review: 'The remedies suggested for my business problems worked like magic. Highly recommend their services!',
    location: 'Bangalore, India',
    service: 'Business Astrology'
  },
  {
    id: '4',
    name: 'Priya Gupta',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    review: 'Amazing accuracy in love predictions. The astrologer helped me understand my relationship better.',
    location: 'Chennai, India',
    service: 'Love & Relationships'
  },
  {
    id: '5',
    name: 'Amit Kumar',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    review: 'The Kundali reading was so detailed and insightful. It gave me clarity about my life path.',
    location: 'Pune, India',
    service: 'Kundali Reading'
  },
  {
    id: '6',
    name: 'Deepika Rao',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    review: 'Excellent palm reading session. The predictions about my health were spot on and very helpful.',
    location: 'Hyderabad, India',
    service: 'Palm Reading'
  },
  {
    id: '7',
    name: 'Rajesh Agarwal',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    review: 'The tarot reading was incredibly accurate. It helped me make important life decisions with confidence.',
    location: 'Kolkata, India',
    service: 'Tarot Reading'
  },
  {
    id: '8',
    name: 'Sunita Joshi',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    review: 'Professional and compassionate service. The spiritual healing session brought peace to my mind.',
    location: 'Ahmedabad, India',
    service: 'Spiritual Healing'
  }
];

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="flex-shrink-0 w-80 bg-gradient-to-br from-astro-gold/10 to-white rounded-2xl p-6 border border-astro-gold/20 shadow-lg hover:shadow-xl transition-all duration-300 mx-4">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-astro-gold/30">
          <img
            src={review.image}
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-astro-navy text-lg">{review.name}</h4>
          <p className="text-astro-navy/60 text-sm">{review.location}</p>
          <span className="inline-block mt-1 px-2 py-1 bg-astro-gold/20 text-astro-navy text-xs rounded-full">
            {review.service}
          </span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < review.rating
                ? 'text-astro-gold fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-astro-navy/80 leading-relaxed text-sm">
        "{review.review}"
      </p>
    </div>
  );
};

const CustomerReviews = () => {
  // Duplicate reviews for seamless scrolling
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-16 bg-gradient-to-b from-astro-gold/5 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-astro-navy mb-4">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-astro-orange to-astro-orange-dark">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-astro-navy/70 max-w-2xl mx-auto">
            Read authentic reviews from thousands of satisfied clients who found guidance,
            clarity, and positive changes in their lives through our expert astrology services.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-astro-navy mb-2">4.9★</div>
            <div className="text-astro-navy/70">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-astro-navy mb-2">25,000+</div>
            <div className="text-astro-navy/70">Happy Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-astro-navy mb-2">98%</div>
            <div className="text-astro-navy/70">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-astro-navy mb-2">50+</div>
            <div className="text-astro-navy/70">Expert Astrologers</div>
          </div>
        </div>

        {/* Scrolling Reviews */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <div 
              className="flex animate-scroll hover:pause-scroll"
              style={{
                width: `${duplicatedReviews.length * 320}px`,
                animationDuration: '60s'
              }}
            >
              {duplicatedReviews.map((review, index) => (
                <ReviewCard key={`${review.id}-${index}`} review={review} />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-astro-navy/70 mb-4">
            Join thousands of satisfied clients and discover your cosmic blueprint today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy font-medium rounded-lg hover:shadow-lg hover:shadow-astro-gold/30 transition-all duration-300">
              Read All Reviews
            </button>
            <button className="px-8 py-3 border-2 border-astro-navy text-astro-navy font-medium rounded-lg hover:bg-astro-navy hover:text-white transition-all duration-300">
              Share Your Experience
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
