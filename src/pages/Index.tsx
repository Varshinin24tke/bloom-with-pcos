import HeroSection from "@/components/HeroSection";
import PCOSExplanation from "@/components/PCOSExplanation";
import SymptomsSection from "@/components/SymptomsSection";
import LifestyleSection from "@/components/LifestyleSection";
import InsightsSection from "@/components/InsightsSection";
import VideoSection from "@/components/VideoSection";
import LearnMoreSection from "@/components/LearnMoreSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PCOSExplanation />
      <SymptomsSection />
      <LifestyleSection />
      <InsightsSection />
      <VideoSection />
      <LearnMoreSection />
    </main>
  );
};

export default Index;