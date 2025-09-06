import { TrendingUp, Users, Heart, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const InsightsSection = () => {
  const insights = [
    {
      icon: Users,
      statistic: "1 in 10",
      description: "women worldwide have PCOS",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: TrendingUp,
      statistic: "70%",
      description: "of women with PCOS remain undiagnosed",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Heart,
      statistic: "90%",
      description: "of symptoms can be managed with proper care",
      color: "bg-rose/10 text-rose",
    },
    {
      icon: Target,
      statistic: "Earlier",
      description: "diagnosis improves quality of life significantly",
      color: "bg-accent/10 text-accent",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-section">
      <div className="container mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Key Insights About PCOS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the broader picture of PCOS helps us realize how common
            it is and why awareness matters so much.
          </p>
        </div>

        {/* Insights Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -6 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-0 shadow-card bg-card/90 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl ${insight.color} flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {insight.statistic}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {insight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Quote Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-card p-6 rounded-2xl shadow-gentle max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground italic">
              "Knowledge is empowerment. The more we understand about PCOS, the
              better equipped we are to thrive with it."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
