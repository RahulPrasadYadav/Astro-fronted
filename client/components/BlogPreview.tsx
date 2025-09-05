import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Button } from "./ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  authorImage: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Mercury Retrograde 2024: What to Expect and How to Navigate",
    excerpt:
      "Learn how Mercury retrograde affects communication, technology, and travel. Discover practical tips to minimize disruptions and maximize opportunities during this cosmic event.",
    image:
      "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=600&h=400&fit=crop",
    author: "Dr. Priya Sharma",
    authorImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Planetary Transit",
    tags: ["Mercury Retrograde", "Astrology", "Predictions"],
  },
  {
    id: "2",
    title: "The Power of Gemstones: Ancient Remedies for Modern Problems",
    excerpt:
      "Explore the healing properties of gemstones and how they can enhance your life. From Ruby to Emerald, discover which stones align with your zodiac sign.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
    author: "Pandit Rajesh Kumar",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    publishDate: "2024-01-12",
    readTime: "6 min read",
    category: "Remedies",
    tags: ["Gemstones", "Healing", "Remedies"],
  },
  {
    id: "3",
    title:
      "Understanding Your Birth Chart: A Beginner's Guide to Self-Discovery",
    excerpt:
      "Decode the secrets hidden in your birth chart. Learn about houses, planets, and aspects that shape your personality and life path.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    author: "Dr. Meera Patel",
    authorImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=50&h=50&fit=crop&crop=face",
    publishDate: "2024-01-10",
    readTime: "12 min read",
    category: "Astrology Basics",
    tags: ["Birth Chart", "Beginner", "Self-Discovery"],
  },
];

const BlogCard = ({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) => {
  const formattedDate = new Date(post.publishDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (featured) {
    return (
      <div className="lg:col-span-2 group cursor-pointer">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-astro-gold/20 overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
          <div className="lg:grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-astro-gold text-astro-navy text-sm font-medium rounded-full">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-bold text-astro-navy mb-4 group-hover:text-astro-orange transition-colors">
                  {post.title}
                </h3>
                <p className="text-astro-navy/70 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-astro-gold/20 text-astro-navy text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-8 h-8 rounded-full border border-astro-gold/30"
                    />
                    <div>
                      <p className="text-astro-navy font-medium text-sm">
                        {post.author}
                      </p>
                      <div className="flex items-center space-x-3 text-astro-navy/60 text-xs">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-astro-gold group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group cursor-pointer">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-astro-gold/20 overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-astro-gold text-astro-navy text-xs font-medium rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-display font-bold text-astro-navy mb-3 group-hover:text-astro-orange transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-astro-navy/70 text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center space-x-3 mb-3">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-6 h-6 rounded-full border border-astro-gold/30"
            />
            <span className="text-astro-navy font-medium text-sm">
              {post.author}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 text-astro-navy/60 text-xs">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-astro-gold group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogPreview = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-astro-gold/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-astro-navy mb-4">
            Latest from Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-astro-orange to-astro-orange-dark">
              Cosmic Blog
            </span>
          </h2>
          <p className="text-lg text-astro-navy/70 max-w-2xl mx-auto">
            Stay updated with the latest astrological insights, predictions, and
            wisdom from our expert astrologers. Explore articles that guide you
            through life's cosmic mysteries.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <BlogCard post={blogPosts[0]} featured />
          <div className="space-y-6">
            <BlogCard post={blogPosts[1]} />
            <BlogCard post={blogPosts[2]} />
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-astro-gold/20 to-astro-gold/10 rounded-2xl p-8 border border-astro-gold/30 text-center">
          <h3 className="text-2xl font-display font-bold text-astro-navy mb-4">
            Stay Connected to the Cosmos
          </h3>
          <p className="text-astro-navy/70 mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter and receive weekly horoscopes,
            astrological insights, and exclusive content directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-astro-gold/30 focus:outline-none focus:ring-2 focus:ring-astro-gold/50 focus:border-astro-gold"
            />
            <Button className="bg-gradient-to-r from-astro-gold to-astro-gold-dark text-astro-navy hover:shadow-lg whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-astro-navy text-astro-navy hover:bg-astro-navy hover:text-white"
          >
            Read All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
