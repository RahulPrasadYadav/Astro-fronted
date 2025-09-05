import { Play, Clock, Eye } from 'lucide-react';

interface CelebrityVideo {
  id: string;
  celebrity: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  topic: string;
}

const celebrityVideos: CelebrityVideo[] = [
  {
    id: '1',
    celebrity: 'Ranveer Singh',
    title: 'How Astrology Changed My Life',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    duration: '8:45',
    views: '2.3M',
    topic: 'Life Transformation'
  },
  {
    id: '2',
    celebrity: 'Deepika Padukone',
    title: 'Finding Peace Through Cosmic Guidance',
    thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop',
    duration: '12:20',
    views: '1.8M',
    topic: 'Mental Wellness'
  },
  {
    id: '3',
    celebrity: 'Virat Kohli',
    title: 'Timing in Sports & Life',
    thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop',
    duration: '6:30',
    views: '3.1M',
    topic: 'Career Success'
  },
  {
    id: '4',
    celebrity: 'Priyanka Chopra',
    title: 'Numerology and Global Success',
    thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop',
    duration: '10:15',
    views: '1.5M',
    topic: 'International Career'
  }
];

const VideoCard = ({ video }: { video: CelebrityVideo }) => {
  return (
    <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
      <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-astro-gold/20">
        {/* Thumbnail */}
        <div className="relative">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-astro-gold/90 rounded-full flex items-center justify-center group-hover:bg-astro-gold transition-colors duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 text-astro-navy ml-1" fill="currentColor" />
            </div>
          </div>
          
          {/* Duration */}
          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{video.duration}</span>
          </div>
          
          {/* Topic Tag */}
          <div className="absolute top-2 left-2 bg-astro-gold text-astro-navy px-3 py-1 rounded-full text-xs font-medium">
            {video.topic}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4 bg-white">
          <h3 className="font-display font-semibold text-astro-navy text-lg mb-2 group-hover:text-astro-orange transition-colors">
            {video.title}
          </h3>
          <p className="text-astro-navy/80 font-medium mb-2">{video.celebrity}</p>
          <div className="flex items-center space-x-4 text-astro-navy/60 text-sm">
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{video.views} views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CelebrityVideos = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-astro-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-astro-navy mb-4">
            Astrology Insights from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-astro-gold to-astro-gold-dark">
              Celebrities
            </span>
          </h2>
          <p className="text-lg text-astro-navy/70 max-w-2xl mx-auto">
            Discover how successful personalities have used astrology and cosmic wisdom to 
            transform their lives and achieve extraordinary success.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {celebrityVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy font-medium rounded-lg hover:shadow-lg hover:shadow-astro-gold/30 transition-all duration-300">
            Watch All Celebrity Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default CelebrityVideos;
