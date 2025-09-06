import HeroSection from "@/components/HeroSection";
import PCOSExplanation from "@/components/PCOSExplanation";
import SymptomsSection from "@/components/SymptomsSection";
import LifestyleSection from "@/components/LifestyleSection";
import MotivationalSection from "@/components/MotivationalSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PCOSExplanation />
      <SymptomsSection />
      <LifestyleSection />
      <MotivationalSection />
      <CallToAction />
    </main>
  );
};

export default Index;