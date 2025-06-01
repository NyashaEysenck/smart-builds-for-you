
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 px-6 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-b from-background/80 to-background min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="heading-gradient">Making Software</span>
            <br />
            <span className="animate-float inline-block">So Your Competitors Can't Sleep</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-foreground/80 mb-10">
            Web apps, AI tools, and automation—plus guidance if you're building your own solution.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <a href="#contact" className="btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Start Your Project 
              <ArrowRight size={18} className="animate-pulse" />
            </a>
            <a href="#contact" className="btn-secondary flex items-center justify-center hover:scale-105 transition-transform">
              Free Discovery Call
            </a>
          </div>
          
          <div className="mt-16 animate-fade-in animation-delay-500">
            <p className="text-sm text-foreground/70 mb-3">Trusted technologies</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-accent font-semibold hover:scale-110 transition-transform cursor-default">React</div>
              <div className="text-accent font-semibold hover:scale-110 transition-transform cursor-default">Python</div>
              <div className="text-accent font-semibold hover:scale-110 transition-transform cursor-default">TensorFlow</div>
              <div className="text-accent font-semibold hover:scale-110 transition-transform cursor-default">AWS</div>
              <div className="text-accent font-semibold hover:scale-110 transition-transform cursor-default">Node.js</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
