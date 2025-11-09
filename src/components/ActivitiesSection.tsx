import { Button } from "@/components/ui/button";
import facePaintImage from "@/assets/face-paint.jpg";
import climbingImage from "@/assets/climbing.jpg";
import rockBandImage from "@/assets/rock-band.jpg";

const ActivitiesSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Create Your Own Schedule
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Our major and minor option gives campers the ability to mix concentration, experimentation, 
            fun, recreation, and exploration. Each camper is encouraged and supported to realize and 
            surpass their full potential in their chosen activity areas.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-light text-primary-foreground font-heading font-semibold rounded-full"
          >
            View Activities
          </Button>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl shadow-lg hover-lift transition-smooth">
            <img 
              src={facePaintImage}
              alt="Creative arts - teens with colorful face paint"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lg hover-lift transition-smooth">
            <img 
              src={climbingImage}
              alt="Adventure activities - climbing wall"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lg hover-lift transition-smooth">
            <img 
              src={rockBandImage}
              alt="Performing arts - rock band performance"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
