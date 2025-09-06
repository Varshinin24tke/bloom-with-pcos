import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-support.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-foreground mb-6 leading-tight">
              You Are
              <span className="block text-primary"> Stronger</span>
              Than PCOS
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Join millions of women who are living full, empowered lives with PCOS. 
              You're not alone in this journey, and you deserve all the support and understanding in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-rose text-rose-foreground hover:bg-rose/90 shadow-gentle">
                Learn About PCOS
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                Find Support
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