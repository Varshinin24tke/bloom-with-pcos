import { Heart, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import pcosImage from "@/assets/pcos-explanation.jpg";

const PCOSExplanation = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
            Understanding PCOS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            PCOS (Polycystic Ovary Syndrome) affects 1 in 10 women of reproductive age. 
            It's a hormonal condition that's completely manageable with the right knowledge and support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={pcosImage} 
              alt="Understanding PCOS illustration"
              className="w-full rounded-3xl shadow-card"
            />
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-card p-6 rounded-2xl shadow-gentle">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Hormonal Balance</h3>
              </div>
              <p className="text-muted-foreground">
                PCOS involves an imbalance of reproductive hormones, affecting ovulation and causing various symptoms.
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl shadow-gentle">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary/20 rounded-full">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Multiple Symptoms</h3>
              </div>
              <p className="text-muted-foreground">
                Each woman experiences PCOS differently, with symptoms ranging from irregular periods to metabolic changes.
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-2xl shadow-gentle">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/20 rounded-full">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">You're Not Alone</h3>
              </div>
              <p className="text-muted-foreground">
                Millions of women worldwide live fulfilling lives with PCOS through proper management and community support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PCOSExplanation;