import { Button } from "@/components/ui/button";
import { Users, Calendar, DollarSign } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Experience the Spirit of Camp Life
          </h2>
          <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Our camp offers a welcoming environment where participants of all ages can
            relax, learn, and connect through a variety of outdoor and creative activities.
            Whether you’re seeking adventure, personal growth, or simply time in nature,
            this is the place to disconnect from the ordinary and discover something new.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 font-heading font-semibold rounded-full"
          >
            Learn More
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold mb-3">Community</h3>
            <p className="text-muted-foreground">
              Build friendships and share experiences in a positive and inclusive atmosphere.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mb-4">
              <Calendar className="h-10 w-10 text-secondary" />
            </div>
            <h3 className="text-xl font-heading font-bold mb-3">Flexible Programs</h3>
            <p className="text-muted-foreground">
              Choose from a variety of sessions and activities that fit your schedule and interests.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-4">
              <DollarSign className="h-10 w-10 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-heading font-bold mb-3">Affordable Options</h3>
            <p className="text-muted-foreground">
              Enjoy flexible pricing and session combinations to make your camp experience accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
