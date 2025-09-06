import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-support.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-foreground mb-6 leading-tight">
              Understanding PCOS
              <span className="block text-primary"> Together</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              PCOS affects millions of women worldwide, and understanding it is the first step toward feeling empowered. 
              You're not alone in this journey, and knowledge is your greatest ally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gentle">
                Explore the Guide
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={heroImage} 
              alt="Diverse women supporting each other"
              className="w-full max-w-lg rounded-3xl shadow-card"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/30 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;