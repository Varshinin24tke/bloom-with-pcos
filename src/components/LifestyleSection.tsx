import { Apple, Dumbbell, Heart, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import lifestyleImage from "@/assets/lifestyle-wellness.jpg";
import { motion } from "framer-motion";

const tips = [
  {
    icon: Apple,
    title: "Nourishing Foods",
    description:
      "Focus on whole foods, balanced meals, and foods that make you feel energized and satisfied.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Dumbbell,
    title: "Joyful Movement",
    description:
      "Find physical activities you enjoy - whether it's dancing, walking, yoga, or strength training.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Self-Care Rituals",
    description:
      "Prioritize stress management, quality sleep, and activities that bring you peace and joy.",
    color: "bg-rose/10 text-rose",
  },
  {
    icon: BookOpen,
    title: "Education & Support",
    description:
      "Learn about your body, connect with others, and work with healthcare providers who understand PCOS.",
    color: "bg-secondary/10 text-secondary",
  },
];

const LifestyleSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Management & Lifestyle
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These evidence-based approaches can help you manage PCOS symptoms
            and feel your best every day.
          </p>
        </div>

        {/* Tips + Image Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column with Tips */}
          <div className="space-y-8">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97, rotate: -1 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                <Card className="border-0 shadow-card bg-card/90 backdrop-blur-sm">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div
                      className={`p-3 rounded-xl ${tip.color} flex-shrink-0`}
                    >
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
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right Column with Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={lifestyleImage}
              alt="Healthy lifestyle and wellness for PCOS"
              className="w-full max-w-lg rounded-3xl shadow-card"
            />
          </motion.div>
        </div>

        {/* Bottom Motivational Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-card p-8 rounded-3xl shadow-gentle text-center"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Remember: Progress, Not Perfection
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your PCOS journey is unique to you. Celebrate small victories, be
            patient with yourself, and know that every positive step you take is
            an act of self-love.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LifestyleSection;
