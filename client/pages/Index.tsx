import HolographicAvatar from "../components/HolographicAvatar";
import ZodiacSelector from "../components/ZodiacSelector";
import AstrologerCards from "../components/AstrologerCards";
import CustomerReviews from "../components/CustomerReviews";
import CelebrityVideos from "../components/CelebrityVideos";
import FreeServices from "../components/FreeServices";
import FAQ from "../components/FAQ";
import BlogPreview from "../components/BlogPreview";

export default function Index() {
  return (
    <div className="min-h-screen">
      <HolographicAvatar />
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
