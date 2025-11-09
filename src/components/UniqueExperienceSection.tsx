import { Button } from "@/components/ui/button";
import poolImage from "@/assets/pool-fun.jpg";
import sistersImage from "@/assets/camp-sisters.jpg";

const UniqueExperienceSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Image */}
          <div>
            <img 
              src={poolImage}
              alt="Teens having fun in the pool at summer camp"
              className="rounded-3xl shadow-lg w-full"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-heading font-semibold text-lg mb-2">Since 2015</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                A Unique Camp <span className="italic">Experience</span>
              </h2>
            </div>
            <p className="text-lg text-foreground leading-relaxed">
              Our fully elective program was designed and implemented at CampName almost 56 years ago. 
              We are masters of elective and creative programming, can work with any camper no matter what 
              their interest or skill level is, and pride ourselves on offering each camper a unique 
              individual camping experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-light text-primary-foreground font-heading font-semibold rounded-full"
              >
                Explore Our Program
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 font-heading font-semibold rounded-full"
              >
                Frequently Asked Questions
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="max-w-md mx-auto">
          <img 
            src={sistersImage}
            alt="Camp sisters enjoying summer together"
            className="rounded-3xl shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default UniqueExperienceSection;
