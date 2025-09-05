import BannerSlider from '../components/BannerSlider';
import ZodiacSelector from '../components/ZodiacSelector';
import AstrologerCards from '../components/AstrologerCards';
import CustomerReviews from '../components/CustomerReviews';
import CelebrityVideos from '../components/CelebrityVideos';
import FreeServices from '../components/FreeServices';
import FAQ from '../components/FAQ';
import BlogPreview from '../components/BlogPreview';

export default function Index() {
  return (
    <div className="min-h-screen">
      <BannerSlider />
      <FreeServices />
      <AstrologerCards />
      <ZodiacSelector />
      <CustomerReviews />
      <CelebrityVideos />
      <FAQ />
      <BlogPreview />
    </div>
  );
}
