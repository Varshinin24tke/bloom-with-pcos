import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import pcosImage from "@/assets/pcos-explanation.jpg";

const PCOSExplanation = () => {
  return (
    // 👇 Added id="guide" so HeroSection button scrolls here
    <section id="guide" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6">
            PCOS Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn the basics of Polycystic Ovary Syndrome, its causes, and how it can affect women differently. 
            Knowledge is the first step toward empowerment and better health.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card p-8 rounded-3xl shadow-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Image */}
              <div>
                <img 
                  src={pcosImage} 
                  alt="Understanding PCOS - supportive illustration"
                  className="w-full rounded-2xl shadow-gentle"
                />
              </div>

              {/* Right Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">What is PCOS?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  PCOS (Polycystic Ovary Syndrome) is a common hormonal condition that affects 1 in 10 women of reproductive age worldwide. 
                  It involves an imbalance of reproductive hormones that can impact ovulation and lead to a variety of symptoms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  While PCOS presents differently for each woman, understanding your body and working with healthcare providers 
                  can help you manage symptoms effectively and live a fulfilling life.
                </p>

                {/* Highlight Box */}
                <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl">
                  <Heart className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-sm text-foreground font-medium">
                    Early understanding and support make all the difference in managing PCOS successfully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PCOSExplanation;
