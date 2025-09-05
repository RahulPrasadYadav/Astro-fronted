import { useState } from "react";
import { ChevronDown, HelpCircle, Star } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "How accurate are astrology readings?",
    answer:
      "Our expert astrologers provide highly accurate readings based on precise birth chart calculations and years of experience. Accuracy depends on the exactness of your birth time and location. Many clients report 85-95% accuracy in our predictions.",
    category: "General",
  },
  {
    id: "2",
    question: "What information do I need for a reading?",
    answer:
      "For the most accurate reading, you need your exact birth date, time (preferably to the minute), and place of birth. If you don't know your exact birth time, our astrologers can still provide valuable insights using other techniques.",
    category: "General",
  },
  {
    id: "3",
    question: "How does online astrology consultation work?",
    answer:
      "You can connect with our astrologers through video calls, phone calls, or chat. Simply choose your preferred astrologer, select a time slot, and provide your birth details. The session includes personalized insights and remedies based on your birth chart.",
    category: "Services",
  },
  {
    id: "4",
    question: "What is the difference between Vedic and Western astrology?",
    answer:
      "Vedic astrology uses the sidereal zodiac and focuses on karma and dharma, while Western astrology uses the tropical zodiac and emphasizes psychological traits. Our platform offers both systems, and our astrologers will recommend the best approach for you.",
    category: "General",
  },
  {
    id: "5",
    question: "Can astrology predict the future?",
    answer:
      "Astrology reveals potential trends and possibilities based on planetary movements and your birth chart. It shows favorable and challenging periods, helping you make informed decisions. Think of it as a cosmic weather forecast for your life.",
    category: "General",
  },
  {
    id: "6",
    question: "How often should I get an astrology reading?",
    answer:
      "For general guidance, annual readings are common. However, you might want more frequent consultations during major life transitions, important decisions, or challenging periods. Our astrologers can suggest the best timing for follow-up sessions.",
    category: "Services",
  },
  {
    id: "7",
    question: "Is matchmaking through astrology reliable?",
    answer:
      "Astrological matchmaking analyzes compatibility through birth charts, examining factors like guna matching, mangal dosha, and planetary compatibility. While it provides valuable insights, successful relationships also depend on understanding, communication, and mutual respect.",
    category: "Matchmaking",
  },
  {
    id: "8",
    question: "What are astrological remedies and do they work?",
    answer:
      "Astrological remedies include gemstones, mantras, rituals, and lifestyle changes designed to balance planetary energies. Many clients report positive changes, though results vary by individual belief, consistency in practice, and the specific remedy prescribed.",
    category: "Remedies",
  },
  {
    id: "9",
    question: "How do I choose the right astrologer?",
    answer:
      "Consider the astrologer's specialization (Vedic, Western, KP, etc.), experience, client reviews, and areas of expertise. Our platform displays each astrologer's qualifications, specialties, and client ratings to help you make the best choice.",
    category: "Services",
  },
  {
    id: "10",
    question: "Are your astrologers verified and qualified?",
    answer:
      "Yes, all our astrologers undergo a rigorous verification process. We check their educational background, years of practice, and expertise through practical assessments. Only qualified professionals with proven track records join our platform.",
    category: "Services",
  },
];

const FAQAccordion = ({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border border-astro-gold/20 rounded-2xl bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-astro-gold/20 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between group"
      >
        <h3 className="text-lg font-semibold text-astro-navy group-hover:text-astro-orange transition-colors pr-4">
          {item.question}
        </h3>
        <div
          className={`
          flex-shrink-0 w-8 h-8 bg-gradient-to-br from-astro-gold to-astro-gold-dark rounded-full 
          flex items-center justify-center transform transition-transform duration-300
          ${isOpen ? "rotate-180" : ""}
        `}
        >
          <ChevronDown className="w-5 h-5 text-astro-navy" />
        </div>
      </button>

      <div
        className={`
        overflow-hidden transition-all duration-500 ease-in-out
        ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
      `}
      >
        <div className="px-6 pb-5">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-astro-gold/30 to-transparent mb-4" />
          <p className="text-astro-navy/80 leading-relaxed">{item.answer}</p>
          <div className="mt-3">
            <span className="inline-block px-3 py-1 bg-astro-gold/20 text-astro-navy text-xs rounded-full border border-astro-gold/30">
              {item.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const categories = ["All", "General", "Services", "Matchmaking", "Remedies"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs =
    selectedCategory === "All"
      ? faqData
      : faqData.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-b from-astro-gold/5 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-astro-gold to-astro-gold-dark rounded-full mb-6 animate-pulse">
            <HelpCircle className="w-8 h-8 text-astro-navy" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-astro-navy mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-astro-orange to-astro-orange-dark">
              Questions
            </span>
          </h2>
          <p className="text-lg text-astro-navy/70 max-w-2xl mx-auto">
            Find answers to common questions about astrology, our services, and
            how we can guide you on your cosmic journey. Still have questions?
            Feel free to contact our experts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105
                ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy shadow-lg"
                    : "bg-white/80 text-astro-navy border border-astro-gold/30 hover:bg-astro-gold/20"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {filteredFAQs.map((item) => (
            <FAQAccordion
              key={item.id}
              item={item}
              isOpen={openItems.has(item.id)}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-astro-gold/10 to-astro-gold/5 rounded-2xl p-8 border border-astro-gold/30">
          <div className="mb-6">
            <Star className="w-12 h-12 text-astro-gold mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-astro-navy mb-4">
              Still Have Questions?
            </h3>
            <p className="text-astro-navy/70 mb-6 max-w-lg mx-auto">
              Our expert astrologers are here to help. Get personalized answers
              to your specific questions about your cosmic journey and spiritual
              path.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy rounded-lg font-medium hover:shadow-lg hover:shadow-astro-gold/30 transition-all duration-300">
              Talk to an Astrologer
            </button>
            <button className="px-8 py-3 border-2 border-astro-navy text-astro-navy rounded-lg font-medium hover:bg-astro-navy hover:text-white transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-astro-navy mb-2">24/7</div>
            <div className="text-astro-navy/70">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-astro-navy mb-2">50+</div>
            <div className="text-astro-navy/70">Expert Astrologers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-astro-navy mb-2">95%</div>
            <div className="text-astro-navy/70">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
