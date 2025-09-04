import AstrologyAvatar from '../components/AstrologyAvatar';
import ZodiacSelector from '../components/ZodiacSelector';
import AstrologerCards from '../components/AstrologerCards';
import CustomerReviews from '../components/CustomerReviews';
import CelebrityVideos from '../components/CelebrityVideos';
import FreeServices from '../components/FreeServices';
import BlogPreview from '../components/BlogPreview';

export default function Index() {
  return (
    <div className="min-h-screen">
      <AstrologyAvatar />
      <ZodiacSelector />
      <AstrologerCards />
      <CustomerReviews />
      <CelebrityVideos />
      <FreeServices />
      <BlogPreview />
    </div>
  );
}
