import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Watch & Learn
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deepen your understanding of PCOS with this informative video that covers essential insights and practical advice.
          </p>
        </div>

        <div className="bg-gradient-card p-6 rounded-3xl shadow-card">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-gentle">
            <iframe
              src="https://www.youtube.com/embed/YVQzolMgNp0"
              title="PCOS Educational Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex items-center justify-center gap-3 mt-6">
            <Play className="w-5 h-5 text-primary" />
            <p className="text-muted-foreground">
              Take your time to absorb the information - every step forward in understanding is a victory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;