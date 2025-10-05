import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const LearnMoreSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-section">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-rose/5 to-rose/10 backdrop-blur-sm p-10 rounded-3xl shadow-gentle border border-rose/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              💖 Learn More About PCOS
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empower yourself with knowledge from trusted, reliable sources. 
              These resources offer comprehensive insights to help you understand PCOS better.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-rose to-rose/80 hover:from-rose/90 hover:to-rose/70 text-rose-foreground shadow-card rounded-full px-8 py-6 text-base font-semibold transition-all hover:scale-105"
            >
              <a
                href="https://en.wikipedia.org/wiki/Polycystic_ovary_syndrome"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                📘 Read on Wikipedia
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-card rounded-full px-8 py-6 text-base font-semibold transition-all hover:scale-105"
            >
              <a
                href="https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                🌍 Explore WHO Insights
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <p className="text-center text-muted-foreground italic text-sm mt-8">
            "Knowledge is power — every small step in learning brings you closer to balance and well-being."
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearnMoreSection;
