import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from './ui/button';

const slides = [
  {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F051248bf61844be4835e51ba02d80da0%2Fc96948ad5a754f639368f49fa3c01ad1?format=webp&width=800',
    title: 'Celestial Chronicles',
    subtitle: 'Journey through the Cosmos'
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F051248bf61844be4835e51ba02d80da0%2F6b3b9fe21f9d4e7bbd4e12dd3f2d9a7d?format=webp&width=800',
    title: 'Ascension',
    subtitle: 'Unlock Your Celestial Path'
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F051248bf61844be4835e51ba02d80da0%2Faac854c7aa394e289c4816f6cf939292?format=webp&width=800',
    title: 'Cosmic Oraculum',
    subtitle: 'Unlock the Secrets of the Universe'
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F051248bf61844be4835e51ba02d80da0%2Fd8262e8df9fa43bd9a12d39c3b1cef00?format=webp&width=800',
    title: 'Vedic Astrology',
    subtitle: 'Ancient Wisdom for Modern Life'
  }
];

const HolographicAvatar = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [index, setIndex] = useState(0);
  const hoverRef = useRef(false);

  useEffect(() => {
    const spin = setInterval(() => {
      setRotationAngle(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(spin);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (!hoverRef.current) setIndex(i => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-astro-navy-dark via-cosmic to-astro-navy"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-all duration-700 ease-out ${i === index ? 'opacity-70 scale-100' : 'opacity-0 scale-105'}`}
            style={{
              backgroundImage: `url(${s.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      {/* Nebula Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-astro-gold/20 via-purple-900/30 to-astro-navy-dark/80" />

      {/* Floating Stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div>

      {/* Distant Galaxies */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-32 h-32 rounded-full opacity-20 animate-pulse"
          style={{
            background: `radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%)`,
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: '6s'
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Holographic Avatar */}
        <div className="relative mb-12">
          <div className="relative flex items-center justify-center">
            {/* Holographic Deity Figure */}
            <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
              {/* Constellation Body */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-astro-gold/30 via-transparent to-astro-gold/20 animate-pulse backdrop-blur-sm border border-astro-gold/30">
                {/* Constellation Pattern */}
                <div className="absolute inset-0">
                  {[
                    { x: 20, y: 30 }, { x: 80, y: 25 }, { x: 50, y: 15 },
                    { x: 30, y: 60 }, { x: 70, y: 55 }, { x: 50, y: 70 },
                    { x: 15, y: 80 }, { x: 85, y: 85 }, { x: 50, y: 90 }
                  ].map((point, index) => (
                    <div
                      key={index}
                      className="absolute w-2 h-2 bg-astro-gold rounded-full animate-pulse shadow-lg shadow-astro-gold/50"
                      style={{
                        left: `${point.x}%`,
                        top: `${point.y}%`,
                        animationDelay: `${index * 0.3}s`,
                        boxShadow: '0 0 10px rgba(255, 215, 0, 0.8)'
                      }}
                    />
                  ))}
                  <svg className="absolute inset-0 w-full h-full">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255, 215, 0, 0.6)" />
                        <stop offset="50%" stopColor="rgba(255, 215, 0, 0.3)" />
                        <stop offset="100%" stopColor="rgba(255, 215, 0, 0.6)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 20% 30% L 50% 15% L 80% 25% M 30% 60% L 50% 70% L 70% 55% M 15% 80% L 50% 90% L 85% 85%"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      fill="none"
                      className="animate-pulse"
                    />
                  </svg>
                </div>

                {/* Holographic Face Area */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-astro-gold/30 backdrop-blur-md border border-astro-gold/50 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-astro-gold/40 to-white/30 flex items-center justify-center">
                    <div className="w-3 h-3 bg-astro-gold rounded-full animate-pulse shadow-lg shadow-astro-gold/80" />
                  </div>
                </div>

                {/* Energy Aura */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-astro-gold/10 via-transparent to-purple-500/10 animate-pulse" style={{ animationDuration: '4s' }} />
              </div>

              {/* Extended Hands with Solar System */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
                <div className="relative flex justify-center space-x-16">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-astro-gold/40 to-white/20 backdrop-blur-sm border border-astro-gold/30 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-astro-gold/30 animate-pulse" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-astro-gold/40 to-white/20 backdrop-blur-sm border border-astro-gold/30 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-astro-gold/30 animate-pulse" />
                  </div>
                </div>

                {/* Floating Solar System / Zodiac Wheel */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div
                    className="relative w-24 h-24 md:w-32 md:h-32"
                    style={{ transform: `rotate(${rotationAngle}deg)` }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-astro-gold to-amber-400 rounded-full animate-pulse shadow-lg shadow-astro-gold/80" />
                    {[...Array(8)].map((_, index) => {
                      const angle = (360 / 8) * index;
                      const radius = 40;
                      const x = Math.cos((angle * Math.PI) / 180) * radius;
                      const y = Math.sin((angle * Math.PI) / 180) * radius;
                      return (
                        <div
                          key={index}
                          className="absolute w-2 h-2 bg-astro-gold rounded-full animate-pulse"
                          style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: 'translate(-50%, -50%)',
                            animationDelay: `${index * 0.2}s`,
                            boxShadow: '0 0 6px rgba(255, 215, 0, 0.8)'
                          }}
                        />
                      );
                    })}
                    <div className="absolute inset-0 border border-astro-gold/30 rounded-full animate-pulse" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-radial from-astro-gold/20 to-transparent rounded-full animate-pulse pointer-events-none" />
                </div>
              </div>

              {/* Lens Flare Effects */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse opacity-80" />
              <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-astro-gold rounded-full animate-pulse opacity-60" />
              <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/60 rounded-full animate-pulse opacity-40" />
            </div>

            {/* Floating Energy Particles */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-astro-gold rounded-full animate-float opacity-70"
                style={{
                  left: `${45 + Math.random() * 10}%`,
                  top: `${30 + Math.random() * 40}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Animated Text Content tied to slide */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-white">{slides[index].title.split(' ')[0]} </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-astro-gold via-amber-300 to-astro-gold animate-pulse">
                  {slides[index].title.split(' ').slice(1).join(' ') || slides[index].title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-astro-gold/90 max-w-4xl mx-auto leading-relaxed font-light">
                {slides[index].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-astro-gold via-amber-400 to-astro-gold text-astro-navy hover:shadow-2xl hover:shadow-astro-gold/50 transform hover:scale-105 transition-all duration-500 animate-glow text-xl px-12 py-6 font-bold"
            >
              Begin Sacred Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-astro-gold text-astro-gold hover:bg-astro-gold hover:text-astro-navy transition-all duration-300 text-xl px-12 py-6 backdrop-blur-sm"
            >
              Explore Divine Wisdom
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 pt-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === index ? 'bg-astro-gold scale-125 shadow' : 'bg-white/60 hover:bg-white'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-astro-gold/70 animate-bounce">
        <div className="text-sm mb-2 font-light">Explore Your Cosmic Path</div>
        <div className="w-1 h-8 bg-gradient-to-b from-astro-gold to-transparent rounded-full mx-auto animate-pulse"></div>
      </div>
    </section>
  );
};

export default HolographicAvatar;
