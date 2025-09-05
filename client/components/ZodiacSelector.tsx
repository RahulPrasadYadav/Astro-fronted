import { useState } from "react";

interface ZodiacSign {
  name: string;
  symbol: string;
  emoji: string;
  element: string;
  color: string;
  description: string;
}

// Image mapping for provided zodiac sign artwork
const signImages: Record<string, string> = {
  Aries:
    "https://cdn.builder.io/api/v1/image/assets%2F051248bf61844be4835e51ba02d80da0%2F873ea004eacc4f3f82996d9b601c9b45?format=webp&width=800",
  Taurus:
    "https://cdn.builder.io/api/v1/image/assets%2F051248bf61844be4835e51ba02d80da0%2Ff589c7d58933402795eb673ff5d9cfc0?format=webp&width=800",
  Gemini:
    "https://cdn.builder.io/api/v1/image/assets%2F051248bf61844be4835e51ba02d80da0%2F73510deb94304413a6a05c69f73c88bc?format=webp&width=800",
  Cancer:
    "https://cdn.builder.io/api/v1/image/assets%2F051248bf61844be4835e51ba02d80da0%2Fd61ac352501440cfbfe13bfcd7dd47f0?format=webp&width=800",
  Leo: "https://cdn.builder.io/api/v1/image/assets%2F051248bf61844be4835e51ba02d80da0%2F8085a0c94ed44de29599f00560c2a09c?format=webp&width=800",
  Virgo:
    "https://cdn.builder.io/api/v1/image/assets%2F051248bf61844be4835e51ba02d80da0%2Fa69f183d892f474abcbad81a0b67721a?format=webp&width=800",
  Libra:
    "https://cdn.builder.io/api/v1/image/assets%2F051248bf61844be4835e51ba02d80da0%2Fa9dbf92a14d84d9d9e50d0f63a58be5c?format=webp&width=800",
  Scorpio:
    "https://cdn.builder.io/api/v1/image/assets%2F051248bf61844be4835e51ba02d80da0%2F5e26813b17f342f2a11a6d7d31cc7ae1?format=webp&width=800",
  Sagittarius:
    "https://cdn.builder.io/api/v1/image/assets%2F051248bf61844be4835e51ba02d80da0%2Fba4ba4820f8e4715974bf7038e225fc1?format=webp&width=800",
  Capricorn:
    "https://cdn.builder.io/api/v1/image/assets%2F051248bf61844be4835e51ba02d80da0%2F6dda933f76bf42a7a9d91f50a57910f7?format=webp&width=800",
  Aquarius:
    "https://cdn.builder.io/api/v1/image/assets%2F051248bf61844be4835e51ba02d80da0%2F058af7c74ecb4469bdb1f0c7c7a2cb5c?format=webp&width=800",
  Pisces:
    "https://cdn.builder.io/api/v1/image/assets%2F051248bf61844be4835e51ba02d80da0%2F90ba45f41c784f939a1ba4395df685b8?format=webp&width=800",
};

const zodiacSigns: ZodiacSign[] = [
  {
    name: "Aries",
    symbol: "♈",
    emoji: "🐏",
    element: "Fire",
    color: "from-red-400 to-orange-500",
    description: "Bold and ambitious leader",
  },
  {
    name: "Taurus",
    symbol: "♉",
    emoji: "🐂",
    element: "Earth",
    color: "from-green-400 to-emerald-500",
    description: "Reliable and patient soul",
  },
  {
    name: "Gemini",
    symbol: "♊",
    emoji: "👯",
    element: "Air",
    color: "from-yellow-400 to-amber-500",
    description: "Curious and adaptable mind",
  },
  {
    name: "Cancer",
    symbol: "♋",
    emoji: "🦀",
    element: "Water",
    color: "from-blue-400 to-cyan-500",
    description: "Intuitive and caring heart",
  },
  {
    name: "Leo",
    symbol: "♌",
    emoji: "🦁",
    element: "Fire",
    color: "from-orange-400 to-yellow-500",
    description: "Generous and warm-hearted",
  },
  {
    name: "Virgo",
    symbol: "♍",
    emoji: "👤",
    element: "Earth",
    color: "from-green-500 to-teal-500",
    description: "Analytical and kind perfectionist",
  },
  {
    name: "Libra",
    symbol: "♎",
    emoji: "⚖️",
    element: "Air",
    color: "from-pink-400 to-rose-500",
    description: "Diplomatic and fair-minded",
  },
  {
    name: "Scorpio",
    symbol: "♏",
    emoji: "🦂",
    element: "Water",
    color: "from-purple-500 to-indigo-600",
    description: "Passionate and resourceful",
  },
  {
    name: "Sagittarius",
    symbol: "♐",
    emoji: "🏹",
    element: "Fire",
    color: "from-purple-400 to-pink-500",
    description: "Generous and idealistic",
  },
  {
    name: "Capricorn",
    symbol: "♑",
    emoji: "🐐",
    element: "Earth",
    color: "from-gray-500 to-slate-600",
    description: "Responsible and disciplined",
  },
  {
    name: "Aquarius",
    symbol: "♒",
    emoji: "🏺",
    element: "Air",
    color: "from-blue-500 to-indigo-500",
    description: "Progressive and original",
  },
  {
    name: "Pisces",
    symbol: "♓",
    emoji: "🐟",
    element: "Water",
    color: "from-teal-400 to-blue-500",
    description: "Compassionate and artistic",
  },
];

const ZodiacCard = ({
  sign,
  isSelected,
  onClick,
}: {
  sign: ZodiacSign;
  isSelected: boolean;
  onClick: () => void;
}) => {
  const img = signImages[sign.name];
  return (
    <div
      onClick={onClick}
      className={`
        group cursor-pointer relative overflow-hidden rounded-2xl
        transition-all duration-500 transform hover:scale-105 hover:-translate-y-2
        ${
          isSelected
            ? "shadow-lg shadow-astro-gold/30 scale-105"
            : "hover:shadow-xl hover:shadow-astro-gold/20"
        }
        bg-white/80 backdrop-blur-sm
      `}
    >
      {/* Animated Background Gradient */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br ${sign.color} opacity-10 
          group-hover:opacity-20 transition-opacity duration-500
        `}
      />

      {/* Content */}
      <div className="relative z-10 p-6 text-center">
        {/* Sign Artwork or Fallback */}
        {img ? (
          <div className="w-full h-40 md:h-44 mb-4 rounded-xl overflow-hidden shadow-lg">
            <img
              src={img}
              alt={`${sign.name} sign`}
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}

        {/* Zodiac Symbol (shown only when no image available) */}
        {!img && (
          <div
            className={`
            text-4xl font-bold mb-2 bg-gradient-to-r ${sign.color} bg-clip-text text-transparent
            group-hover:scale-125 transition-transform duration-300
          `}
          >
            {sign.symbol}
          </div>
        )}

        {/* Sign Name */}
        <h3 className="text-xl font-display font-bold text-astro-navy mb-3 group-hover:text-astro-orange transition-colors">
          {sign.name}
        </h3>

        {/* Selection Indicator */}
        {isSelected && (
          <div className="absolute top-2 right-2 w-6 h-6 bg-astro-gold rounded-full flex items-center justify-center animate-pulse">
            <div className="w-3 h-3 bg-astro-navy rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
};

const ZodiacSelector = () => {
  const [selectedZodiac, setSelectedZodiac] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-astro-gold/5 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        {/* Constellation pattern */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-astro-gold/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-astro-gold to-astro-gold-dark rounded-full mb-6 animate-pulse">
            <span className="text-2xl">✨</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-astro-navy mb-4">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-astro-orange to-astro-orange-dark">
              Zodiac Sign
            </span>
          </h2>
          <p className="text-lg text-astro-navy/70 max-w-2xl mx-auto">
            Select your zodiac sign to unlock personalized cosmic insights,
            daily predictions, and discover what the stars have aligned for your
            unique journey.
          </p>
        </div>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 mb-12">
          {zodiacSigns.map((sign) => (
            <ZodiacCard
              key={sign.name}
              sign={sign}
              isSelected={selectedZodiac === sign.name}
              onClick={() =>
                setSelectedZodiac(
                  sign.name === selectedZodiac ? null : sign.name,
                )
              }
            />
          ))}
        </div>

        {/* Selected Sign Details */}
        {selectedZodiac && (
          <div className="bg-gradient-to-r from-astro-gold/10 to-astro-gold/5 rounded-2xl p-8 border border-astro-gold/30 animate-in slide-in-from-bottom duration-500">
            <div className="text-center">
              <div className="mb-6">
                <div className="inline-flex items-center space-x-4 mb-4">
                  <div className="text-6xl">
                    {
                      zodiacSigns.find((sign) => sign.name === selectedZodiac)
                        ?.emoji
                    }
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-astro-navy">
                      {selectedZodiac}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <h4 className="font-semibold text-astro-navy mb-2">
                    Get Your Reading
                  </h4>
                  <button className="px-6 py-3 bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    Daily Horoscope
                  </button>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-astro-navy mb-2">
                    Compatibility
                  </h4>
                  <button className="px-6 py-3 border-2 border-astro-navy text-astro-navy rounded-lg font-medium hover:bg-astro-navy hover:text-white transition-all duration-300">
                    Find Your Match
                  </button>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-astro-navy mb-2">
                    Birth Chart
                  </h4>
                  <button className="px-6 py-3 bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    Free Kundali
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        {!selectedZodiac && (
          <div className="text-center">
            <p className="text-astro-navy/70 mb-4">
              Not sure about your zodiac sign? Calculate it based on your birth
              date.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy rounded-lg font-medium hover:shadow-lg hover:shadow-astro-gold/30 transition-all duration-300">
              Find My Zodiac Sign
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ZodiacSelector;
