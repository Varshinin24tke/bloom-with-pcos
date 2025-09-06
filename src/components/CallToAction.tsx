import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, BookOpen } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-6 bg-gradient-section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Your Journey Starts Here
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the next step toward understanding and managing your PCOS with confidence. 
            You deserve all the support, care, and resources available.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card shadow-card rounded-2xl p-8 text-center hover:shadow-gentle transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Learn More</h3>
            <p className="text-muted-foreground mb-6">
              Discover comprehensive, evidence-based information about PCOS from trusted medical sources.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Educational Resources
            </Button>
          </div>

          <div className="bg-card shadow-card rounded-2xl p-8 text-center hover:shadow-gentle transition-all duration-300">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Find Community</h3>
            <p className="text-muted-foreground mb-6">
              Connect with other women who understand your experience and can offer support and friendship.
            </p>
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
              Join Support Groups
            </Button>
          </div>

          <div className="bg-card shadow-card rounded-2xl p-8 text-center hover:shadow-gentle transition-all duration-300">
            <div className="w-16 h-16 bg-rose/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-rose" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Get Professional Help</h3>
            <p className="text-muted-foreground mb-6">
              Find healthcare providers who specialize in PCOS and understand your unique needs.
            </p>
            <Button className="bg-rose text-rose-foreground hover:bg-rose/90">
              Find a Doctor
            </Button>
          </div>
        </div>

        <div className="bg-gradient-hero p-8 md:p-12 rounded-3xl shadow-card text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Ready to Take Control of Your PCOS Journey?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start with one small step today. Whether it's learning something new, 
            reaching out for support, or simply being kind to yourself - you've got this.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gentle">
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;