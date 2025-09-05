import { useEffect, useRef, useState } from 'react';
import { Sparkles, Moon, Sun, Star } from 'lucide-react';
import { Button } from './ui/button';

const SlideDecor = () => (
  <>
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            opacity: Math.random() * 0.8 + 0.2,
          }}
        />
      ))}
    </div>
  </>
);

const Slides = [
  {
    id: 'holo',
    bg: 'https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg',
    content: (
      <div className="relative w-full flex items-center justify-center">
        <div className="relative w-80 h-80 md:w-96 md:h-96">
          <div className="absolute inset-0 rounded-full blur-3xl opacity-50 bg-gradient-to-br from-astro-gold to-astro-orange" />
          <div className="absolute inset-0 border-2 border-astro-gold/30 rounded-full animate-spin" style={{ animationDuration: '25s' }} />
          <div className="absolute inset-0 border border-astro-orange/30 rounded-full animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-astro-gold/60 bg-gradient-to-br from-astro-gold/30 to-white/10 animate-float">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop&crop=face" alt="Holographic Astrologer" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-astro-gold/10" />
            <div className="absolute top-4 right-4 w-14 h-14 rounded-full bg-astro-gold/90 text-2xl flex items-center justify-center animate-bounce">✨</div>
          </div>
          {[Sun, Moon, Star, Sparkles].map((Icon, idx) => (
            <div key={idx} className={`absolute w-10 h-10 rounded-full bg-astro-gold/30 text-astro-navy flex items-center justify-center shadow-lg animate-orbit-${idx}`} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <Icon className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    ),
    title: (
      <>
        <span className="text-white">Discover Your </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-astro-gold via-amber-300 to-astro-gold animate-pulse">Cosmic Destiny</span>
      </>
    ),
    sub: 'Experience holographic wisdom and premium guidance.',
  },
  {
    id: 'tarot',
    bg: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1920&h=1080&fit=crop&crop=center',
    content: (
      <div className="relative w-full flex items-center justify-center">
        <div className="grid grid-cols-3 gap-6">
          {[0,1,2].map((i) => (
            <div key={i} className="w-28 h-44 md:w-36 md:h-56 rounded-xl bg-white/10 border border-astro-gold/40 backdrop-blur-md shadow-lg animate-tilt" style={{ animationDelay: `${i*0.2}s`, transform: `rotate(${i===1?0:i===0?-8:8}deg)` }}>
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-500/40 to-astro-gold/20" />
            </div>
          ))}
        </div>
      </div>
    ),
    title: (
      <>
        <span className="text-white">Unveil the </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-astro-orange to-astro-orange-dark">Tarot Truth</span>
      </>
    ),
    sub: 'Mystical tarot motions with premium glow.',
  },
  {
    id: 'solar',
    bg: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center',
    content: (
      <div className="relative w-72 h-72 md:w-96 md:h-96">
        <div className="absolute inset-0 rounded-full border-2 border-astro-gold/30 animate-spin" style={{ animationDuration: '30s' }} />
        <div className="absolute inset-6 rounded-full border border-astro-gold/20 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-astro-gold to-amber-300 shadow-lg animate-pulse" />
        </div>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute w-2 h-2 bg-astro-gold rounded-full animate-pulse" style={{ left: '50%', top: '50%', transform: `translate(-50%, -50%) rotate(${(360/8)*i}deg) translateX(140px)` }} />
        ))}
      </div>
    ),
    title: (
      <>
        <span className="text-white">Align with the </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-astro-gold to-astro-orange">Golden Cosmos</span>
      </>
    ),
    sub: 'Rotating solar elegance in golden light.',
  },
];

const BannerSlider = () => {
  const [index, setIndex] = useState(0);
  const isHovering = useRef(false);
  const total = Slides.length;

  useEffect(() => {
    const id = setInterval(() => {
      if (!isHovering.current) setIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section className="relative overflow-hidden">
      <div
        onMouseEnter={() => (isHovering.current = true)}
        onMouseLeave={() => (isHovering.current = false)}
        className="relative"
      >
        <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${index * 100}%)`, width: `${total * 100}%` }}>
          {Slides.map((s) => (
            <div key={s.id} className="min-w-full">
              <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${s.bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-astro-navy/40 to-black/60" />
                <SlideDecor />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  {s.content}
                  <div className="mt-10 space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                      {s.title}
                    </h1>
                    <p className="text-astro-gold/90 text-xl md:text-2xl max-w-3xl mx-auto">
                      {s.sub}
                    </p>
                    <div className="flex gap-4 justify-center pt-2">
                      <Button className="bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy hover:shadow-2xl hover:shadow-astro-gold/40">
                        Get Started
                      </Button>
                      <Button variant="outline" className="border-2 border-astro-gold text-astro-gold hover:bg-astro-gold hover:text-astro-navy">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {Slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === index ? 'bg-astro-gold scale-125 shadow' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
