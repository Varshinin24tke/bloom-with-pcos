import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-support.jpg";

const HeroSection = () => {
  // Scroll handler
  const handleScroll = () => {
    const section = document.getElementById("guide");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-pink-50 via-pink-100 to-pink-200">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-[#3d2d2d] mb-6 leading-tight">
              Understanding PCOS
              <span className="block text-[#e78ca3]"> Together</span>
            </h1>
            <p className="text-lg text-[#6b5b5b] mb-8 max-w-xl">
              PCOS affects millions of women worldwide, and understanding it is the first step toward feeling empowered. 
              You're not alone in this journey, and knowledge is your greatest ally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={handleScroll}
                className="bg-[#e78ca3] text-white hover:bg-[#d96f8b] shadow-md px-8 py-4 rounded-full"
              >
                Explore the Guide 💖
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img 
              src={heroImage} 
              alt="Diverse women supporting each other"
              className="w-full max-w-lg rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300/40 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/40 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSection;
