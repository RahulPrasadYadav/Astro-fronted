import { useState, useEffect } from 'react';
import { Sparkles, Moon, Sun, Star } from 'lucide-react';
import { Button } from './ui/button';

const AstrologyAvatar = () => {
  const [currentAvatar, setCurrentAvatar] = useState(0);
  
  const astrologyAvatars = [
    {
      id: 1,
      name: "Mystic Sage",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      specialty: "Vedic Astrology",
      element: "🔮",
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 2,
      name: "Cosmic Oracle",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      specialty: "Tarot Reading",
      element: "🌟",
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 3,
      name: "Star Reader",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      specialty: "Numerology",
      element: "✨",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 4,
      name: "Luna Guardian", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      specialty: "Moon Reading",
      element: "🌙",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  // Auto-rotate avatars
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAvatar((prev) => (prev + 1) % astrologyAvatars.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentAstrologer = astrologyAvatars[currentAvatar];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-astro-gold/20 via-white to-cosmic-light/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Zodiac Symbols */}
        {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((symbol, index) => (
          <div
            key={symbol}
            className="absolute text-astro-gold/20 text-4xl font-bold animate-pulse"
            style={{
              left: `${(index * 8.33) % 100}%`,
              top: `${Math.sin(index) * 30 + 50}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${3 + (index % 3)}s`
            }}
          >
            {symbol}
          </div>
        ))}

        {/* Orbiting Stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-astro-gold rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Avatar Container with Advanced Animations */}
          <div className="relative mb-8">
            {/* Outer Rotating Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-[600px] h-[600px] border-2 border-astro-gold/30 rounded-full animate-spin"
                style={{ animationDuration: '30s' }}
              >
                {/* Orbiting Elements */}
                {[Sun, Moon, Star, Sparkles].map((Icon, index) => (
                  <div
                    key={index}
                    className={`absolute w-12 h-12 bg-gradient-to-br ${currentAstrologer.color} rounded-full flex items-center justify-center text-white shadow-lg animate-orbit-${index}`}
                    style={{
                      top: `${50 + 45 * Math.sin(2 * Math.PI * index / 4)}%`,
                      left: `${50 + 45 * Math.cos(2 * Math.PI * index / 4)}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Rotating Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-[450px] h-[450px] border border-cosmic/40 rounded-full animate-spin"
                style={{ animationDuration: '20s', animationDirection: 'reverse' }}
              />
            </div>

            {/* Central Avatar */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Pulsing Aura */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${currentAstrologer.color} rounded-full blur-3xl opacity-40 animate-pulse`}
                  style={{ animationDuration: '3s' }}
                />
                
                {/* Main Avatar Circle */}
                <div className={`
                  relative w-full h-full rounded-full overflow-hidden 
                  border-4 border-astro-gold/60 shadow-2xl
                  animate-float transform hover:scale-110 transition-all duration-700
                  bg-gradient-to-br ${currentAstrologer.color}
                `}>
                  {/* Avatar Image */}
                  <img
                    src={currentAstrologer.image}
                    alt={currentAstrologer.name}
                    className="w-full h-full object-cover transition-all duration-1000"
                    style={{
                      filter: 'brightness(1.1) contrast(1.2) saturate(1.1)'
                    }}
                  />
                  
                  {/* Mystical Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-astro-gold/20" />
                  
                  {/* Element Badge */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-astro-gold/90 rounded-full flex items-center justify-center text-2xl animate-bounce">
                    {currentAstrologer.element}
                  </div>

                  {/* Specialty Badge */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-astro-gold px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    {currentAstrologer.specialty}
                  </div>
                </div>

                {/* Energy Rings */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`
                      absolute inset-0 border-2 border-astro-gold/20 rounded-full 
                      animate-ping
                    `}
                    style={{
                      animationDelay: `${i * 1}s`,
                      animationDuration: '3s',
                      scale: `${1 + i * 0.1}`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-astro-navy leading-tight">
                Meet Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-astro-gold to-astro-gold-dark animate-pulse">
                  {currentAstrologer.name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-astro-navy/80 max-w-3xl mx-auto leading-relaxed">
                Experience the wisdom of ancient astrology with modern insight. 
                Let our cosmic guides illuminate your path to destiny.
              </p>
            </div>

            {/* Avatar Selector */}
            <div className="flex justify-center space-x-3 my-8">
              {astrologyAvatars.map((avatar, index) => (
                <button
                  key={avatar.id}
                  onClick={() => setCurrentAvatar(index)}
                  className={`
                    w-4 h-4 rounded-full transition-all duration-300
                    ${index === currentAvatar 
                      ? 'bg-astro-gold scale-125 shadow-lg' 
                      : 'bg-astro-gold/40 hover:bg-astro-gold/70'
                    }
                  `}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy hover:shadow-2xl hover:shadow-astro-gold/40 transform hover:scale-105 transition-all duration-300 animate-glow text-xl px-10 py-5"
              >
                Begin Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-astro-navy text-astro-navy hover:bg-astro-navy hover:text-white transition-all duration-300 text-xl px-10 py-5"
              >
                Explore Free Readings
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-12 text-astro-navy/70 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-astro-navy">25k+</div>
                <div className="text-sm">Readings Given</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-astro-navy">4.9★</div>
                <div className="text-sm">Expert Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-astro-navy">24/7</div>
                <div className="text-sm">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-astro-navy/60 animate-bounce">
        <div className="text-sm mb-2">Discover Your Cosmic Path</div>
        <div className="w-1 h-8 bg-astro-gold rounded-full mx-auto animate-pulse"></div>
      </div>
    </section>
  );
};

export default AstrologyAvatar;
