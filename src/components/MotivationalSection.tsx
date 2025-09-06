const MotivationalSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            You Are Not Alone —
            <span className="block text-primary">PCOS Doesn't Define You</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            You are a whole, complete, beautiful person who happens to have PCOS. 
            Your worth isn't measured by your symptoms, your weight, or your struggles. 
            You are worthy of love, care, and all the wonderful things life has to offer.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl shadow-gentle">
              <div className="text-3xl font-bold text-primary mb-2">10M+</div>
              <p className="text-muted-foreground">Women worldwide with PCOS</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl shadow-gentle">
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <p className="text-muted-foreground">Manageable with support</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl shadow-gentle">
              <div className="text-3xl font-bold text-accent mb-2">∞</div>
              <p className="text-muted-foreground">Possibilities for your future</p>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl shadow-card">
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic mb-6">
              "PCOS taught me to listen to my body, advocate for myself, 
              and find strength I never knew I had. It's part of my story, 
              but it's not the whole story."
            </blockquote>
            <p className="text-muted-foreground">— Sarah, PCOS Warrior</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotivationalSection;