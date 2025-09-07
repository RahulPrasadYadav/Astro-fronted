import PlaceholderPage from '../components/PlaceholderPage';

export default function Kundali() {
  return (
    <div className="pt-16">
      {/* Free Astrology Tools - Visual */}
      <section className="bg-gradient-to-b from-astro-gold/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-astro-navy text-center mb-6">
            Free Astrology Tools
          </h2>
          <p className="text-center text-astro-navy/70 max-w-2xl mx-auto mb-8">
            Explore our free Kundali and astrology resources. Start with your birth chart and dive deeper.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-astro-gold/30 max-w-3xl mx-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F051248bf61844be4835e51ba02d80da0%2Fbf34306efc8d44d68afce5c2a1b2edeb?format=webp&width=800"
              alt="Free Astrology Tools - Kundali"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <PlaceholderPage
        title="Kundali Reading"
        description="Discover your complete birth chart analysis with detailed planetary positions, dasha predictions, and personalized remedies from our expert Vedic astrologers."
      />
    </div>
  );
}
