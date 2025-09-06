import { Calendar, Weight, Droplets, Zap, Heart, Moon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SymptomsSection = () => {
  const symptoms = [
    {
      icon: Calendar,
      title: "Irregular Periods",
      description: "Periods may be infrequent, unpredictable, or absent",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Weight,
      title: "Weight Changes",
      description: "Difficulty maintaining weight or unexplained weight gain",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Droplets,
      title: "Skin Changes",
      description: "Acne, oily skin, or dark patches may appear",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Zap,
      title: "Energy Levels",
      description: "Fatigue and energy fluctuations throughout the day",
      color: "bg-rose/10 text-rose"
    },
    {
      icon: Heart,
      title: "Mood Changes",
      description: "Emotional ups and downs, anxiety, or mood swings",
      color: "bg-mint/10 text-mint"
    },
    {
      icon: Moon,
      title: "Sleep Issues",
      description: "Difficulty falling asleep or staying asleep",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Common PCOS Symptoms
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Remember, every woman's experience with PCOS is unique. You might have some, all, or different symptoms. 
            What matters most is getting the support you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {symptoms.map((symptom, index) => (
            <Card key={index} className="border-0 shadow-card bg-card/80 backdrop-blur-sm hover:shadow-gentle transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-2xl ${symptom.color} flex items-center justify-center mx-auto mb-6`}>
                  <symptom.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {symptom.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {symptom.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "Having PCOS symptoms doesn't make you broken or less than. 
            You're navigating something challenging with incredible strength."
          </p>
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;