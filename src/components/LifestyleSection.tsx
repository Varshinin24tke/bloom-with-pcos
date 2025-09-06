import { Apple, Dumbbell, Heart, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import lifestyleImage from "@/assets/lifestyle-wellness.jpg";

const LifestyleSection = () => {
  const tips = [
    {
      icon: Apple,
      title: "Nourishing Foods",
      description: "Focus on whole foods, balanced meals, and foods that make you feel energized and satisfied.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Dumbbell,
      title: "Joyful Movement",
      description: "Find physical activities you enjoy - whether it's dancing, walking, yoga, or strength training.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Heart,
      title: "Self-Care Rituals",
      description: "Prioritize stress management, quality sleep, and activities that bring you peace and joy.",
      color: "bg-rose/10 text-rose"
    },
    {
      icon: BookOpen,
      title: "Education & Support",
      description: "Learn about your body, connect with others, and work with healthcare providers who understand PCOS.",
      color: "bg-secondary/10 text-secondary"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Living Well with PCOS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These gentle, sustainable approaches can help you feel your best. 
            Remember: small, consistent steps lead to meaningful changes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {tips.map((tip, index) => (
              <div key={index} className="bg-gradient-card p-6 rounded-2xl shadow-gentle">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${tip.color} flex-shrink-0`}>
                    <tip.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {tip.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <img 
              src={lifestyleImage} 
              alt="Healthy lifestyle and wellness for PCOS"
              className="w-full max-w-lg rounded-3xl shadow-card"
            />
          </div>
        </div>

        <div className="bg-gradient-card p-8 rounded-3xl shadow-gentle text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Remember: Progress, Not Perfection
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your PCOS journey is unique to you. Celebrate small victories, be patient with yourself, 
            and know that every positive step you take is an act of self-love.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;