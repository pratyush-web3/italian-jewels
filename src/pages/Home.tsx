import Hero from "@/components/sections/Hero";
import BrandStory from "@/components/sections/BrandStory";
import FeaturedCollections from "@/components/sections/FeaturedCollections";
import CategoryShowcase from "@/components/sections/CategoryShowcase";
import LuxuryStats from "@/components/sections/LuxuryStats";
import Craftsmanship from "@/components/sections/Craftsmanship";
import HeritageTimeline from "@/components/sections/HeritageTimeline";
import PreciousMaterials from "@/components/sections/PreciousMaterials";
import ArtisanSpotlight from "@/components/sections/ArtisanSpotlight";
import LimitedEdition from "@/components/sections/LimitedEdition";
import MembersClub from "@/components/sections/MembersClub";
import ConciergeService from "@/components/sections/ConciergeService";
import GiftExperience from "@/components/sections/GiftExperience";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandStory />
      <FeaturedCollections />
      <CategoryShowcase />
      <LuxuryStats />
      <Craftsmanship />
      <HeritageTimeline />
      <PreciousMaterials />
      <ArtisanSpotlight />
      <LimitedEdition />
      <MembersClub />
      <ConciergeService />
      <GiftExperience />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
