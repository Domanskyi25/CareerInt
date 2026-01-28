import Header from "@/components/career/Header";
import HeroSection from "@/components/career/HeroSection";
import MeetIntellias from "@/components/career/MeetIntellias";
import EVPSection from "@/components/career/EVPSection";
import NumbersSection from "@/components/career/NumbersSection";
import AwardsSection from "@/components/career/AwardsSection";
import SocialResponsibility from "@/components/career/SocialResponsibility";
import OpenPositions from "@/components/career/OpenPositions";
import CareerFooter from "@/components/career/CareerFooter";

export default function Career() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <MeetIntellias />
      <EVPSection />
      <NumbersSection />
      <AwardsSection />
      <SocialResponsibility />
      <OpenPositions />
      <CareerFooter />
    </div>
  );
}
