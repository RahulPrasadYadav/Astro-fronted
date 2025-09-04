import Hero from '../components/Hero';
import AstrologerCards from '../components/AstrologerCards';
import CustomerReviews from '../components/CustomerReviews';
import CelebrityVideos from '../components/CelebrityVideos';
import FreeServices from '../components/FreeServices';
import BlogPreview from '../components/BlogPreview';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AstrologerCards />
      <CustomerReviews />
      <CelebrityVideos />
      <FreeServices />
      <BlogPreview />
    </div>
  );
}
