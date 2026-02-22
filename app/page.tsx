import NewsTicker from "../components/NewsTicker";
import HeroSection from "../components/HeroSection";
import TrendingSlider from "../components/TrendingSlider";
import CategoryNewsSection from "../components/CategoryNewsSection";
import HighlightsSection from "../components/HighlightsSection";
import AuthorsSection from "../components/AuthorsSection";

export default function Home() {
  return (
    <>
      <NewsTicker />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <HeroSection />
        <TrendingSlider />
        <CategoryNewsSection />
        <HighlightsSection />
        <AuthorsSection />
        {/* <NewsletterSection /> */}
      </main>
    </>
  );
}
