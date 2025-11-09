import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import staffImage from "@/assets/staff-section.jpg";
import facePaintImage from "@/assets/face-paint.jpg";
import climbingImage from "@/assets/climbing.jpg";
import rockBandImage from "@/assets/rock-band.jpg";

const InstagramSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Discover Life at CampName
          </h2>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold rounded-full gap-2"
          >
            <Instagram className="h-5 w-5" />
            Follow us on Instagram
          </Button>
          <p className="text-2xl font-heading font-bold text-primary mt-6">#CampNameExperience</p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <a
            href="https://www.instagram.com/campname"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl aspect-square hover-lift transition-smooth"
          >
            <img
              src={staffImage}
              alt="Camp team and activities"
              className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-center pb-4">
              <Instagram className="h-8 w-8 text-background" />
            </div>
          </a>

          <a
            href="https://www.instagram.com/campname"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl aspect-square hover-lift transition-smooth"
          >
            <img
              src={facePaintImage}
              alt="Creative moments at camp"
              className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-center pb-4">
              <Instagram className="h-8 w-8 text-background" />
            </div>
          </a>

          <a
            href="https://www.instagram.com/campname"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl aspect-square hover-lift transition-smooth"
          >
            <img
              src={climbingImage}
              alt="Outdoor adventures at camp"
              className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-center pb-4">
              <Instagram className="h-8 w-8 text-background" />
            </div>
          </a>

          <a
            href="https://www.instagram.com/campname"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl aspect-square hover-lift transition-smooth"
          >
            <img
              src={rockBandImage}
              alt="Fun and music at camp"
              className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-center pb-4">
              <Instagram className="h-8 w-8 text-background" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
