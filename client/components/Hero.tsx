import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1920&h=1080&fit=crop&crop=center"
          alt="Cosmic nebula background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-astro-gold/20 via-astro-gold/10 to-astro-gold/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Floating Stars Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-astro-gold rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-astro-navy leading-tight">
                Unlock Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-astro-gold to-astro-gold-dark">
                  Cosmic Blueprint
                </span>{' '}
                with Expert Guidance
              </h1>
              <p className="text-lg md:text-xl text-astro-navy/80 max-w-2xl mx-auto lg:mx-0">
                Get personalized readings from verified astrologers for life, love, and career.
                Discover your destiny with ancient wisdom and modern insight.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy hover:shadow-xl hover:shadow-astro-gold/40 transform hover:scale-105 transition-all duration-300 animate-glow text-lg px-8 py-4"
              >
                Talk to an Astrologer Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-astro-navy text-astro-navy hover:bg-astro-navy hover:text-white transition-all duration-300 text-lg px-8 py-4"
              >
                Explore Free Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-astro-navy/70">
              <div className="text-center">
                <div className="text-2xl font-bold text-astro-navy">10k+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-astro-navy">50+</div>
                <div className="text-sm">Expert Astrologers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-astro-navy">4.9★</div>
                <div className="text-sm">Rating</div>
              </div>
            </div>
          </div>

          {/* Floating Avatar */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Glowing Aura */}
              <div className="absolute inset-0 bg-gradient-to-br from-astro-gold/40 to-cosmic/30 rounded-full blur-3xl scale-150 animate-pulse"></div>
              
              {/* Main Avatar Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 animate-float">
                {/* Avatar Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-astro-gold via-astro-gold-light to-cosmic rounded-full blur-sm"></div>
                
                {/* Avatar Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-astro-gold/50">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Wise Astrologer Avatar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-astro-gold/20 to-transparent"></div>
                </div>

                {/* Floating Elements Around Avatar */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-astro-gold rounded-full flex items-center justify-center text-astro-navy animate-bounce">
                  ✨
                </div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cosmic rounded-full flex items-center justify-center text-white animate-pulse">
                  🌙
                </div>
                <div className="absolute top-1/4 -left-6 w-4 h-4 bg-astro-gold-dark rounded-full animate-ping"></div>
                <div className="absolute bottom-1/4 -right-6 w-4 h-4 bg-cosmic-light rounded-full animate-ping delay-1000"></div>
              </div>

              {/* Orbital Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[120%] h-[120%] border border-astro-gold/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[140%] h-[140%] border border-cosmic/20 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-astro-navy/60 animate-bounce">
        <div className="text-sm mb-2">Discover More</div>
        <div className="w-1 h-8 bg-astro-gold rounded-full mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
