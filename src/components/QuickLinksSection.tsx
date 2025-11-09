import virtualTourImage from "@/assets/virtual-tour.jpg";
import campStoriesImage from "@/assets/camp-stories.jpg";
import datesRatesImage from "@/assets/families-section.jpg";

const QuickLinksSection = () => {
  return (
    <section id="quick-links" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Virtual Tour Card */}
          <a 
            href="#virtual-tour" 
            className="group relative overflow-hidden rounded-3xl shadow-lg hover-lift transition-smooth"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={virtualTourImage}
                alt="Aerial view of camp facilities with tennis courts and green fields"
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex flex-col justify-end p-6">
              <p className="text-background font-heading font-bold text-2xl mb-2">
                Take a look around
              </p>
              <p className="text-background/90 text-sm">Start Virtual Tour</p>
            </div>
          </a>

          {/* Camp Stories Card */}
          <a 
            href="#stories" 
            className="group relative overflow-hidden rounded-3xl shadow-lg hover-lift transition-smooth"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={campStoriesImage}
                alt="Happy campers enjoying activities together"
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex flex-col justify-end p-6">
              <p className="text-background font-heading font-bold text-2xl mb-2">
                Discover Camp Stories
              </p>
              <p className="text-background/90 text-sm">Explore Videos</p>
            </div>
          </a>

          {/* Dates & Rates Card */}
          <a 
            href="#dates-rates" 
            className="group relative overflow-hidden rounded-3xl shadow-lg hover-lift transition-smooth"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={datesRatesImage}
                alt="Plan your summer at camp"
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex flex-col justify-end p-6">
              <p className="text-background font-heading font-bold text-2xl mb-2">
                Plan your summer
              </p>
              <p className="text-background/90 text-sm">View Dates & Rates</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
