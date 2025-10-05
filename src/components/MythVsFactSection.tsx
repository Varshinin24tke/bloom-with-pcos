import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const MythVsFactSection = () => {
  const mythsFacts = [
    {
      myth: "PCOS always causes infertility.",
      fact: "Many women with PCOS conceive naturally with proper lifestyle changes and care.",
    },
    {
      myth: "PCOS is only about weight gain.",
      fact: "PCOS also affects hormones, mood, skin, and metabolism.",
    },
    {
      myth: "PCOS can be cured completely.",
      fact: "While there's no complete cure, consistent management helps balance hormones and reduce symptoms.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-rose/5 via-background to-rose/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            💡 Myth vs Fact: Understanding PCOS Better
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's clear up common misconceptions and embrace the truth about PCOS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mythsFacts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full bg-gradient-to-br from-white to-rose/5 border-rose/10 shadow-gentle hover:shadow-card transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  {/* Myth */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-rose flex items-start gap-2">
                      <span className="text-xl">❌</span>
                      <span>Myth</span>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                      {item.myth}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-rose/10 my-4"></div>

                  {/* Fact */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-mint flex items-start gap-2">
                      <span className="text-xl">✅</span>
                      <span>Fact</span>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                      {item.fact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground italic text-sm">
          "Understanding the truth helps you make kinder choices for your body."
        </p>
      </div>
    </section>
  );
};

export default MythVsFactSection;
