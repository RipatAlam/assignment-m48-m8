import HeroSectionPage from "@/components/HeroSection";
import FeaturedBooks from "./featuredbooks/page";
import BreakingNewsPage from "@/components/BreakingNews";

export default function Home() {
  return (
    <div>
      <BreakingNewsPage />
      <HeroSectionPage />
      <FeaturedBooks />
    </div>
  );
}
