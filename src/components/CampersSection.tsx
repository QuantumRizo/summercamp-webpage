import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sparkles, Activity, Heart, MapPin, Calendar, Shield } from "lucide-react";

const CampersSection = () => {
  return (
    <section id="campers" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            About Camp
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our amazing summer camp program
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem 
              value="program" 
              className="bg-card rounded-2xl px-6 border-2 border-border card-shadow hover-lift"
            >
              <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                <div className="flex items-center gap-3">
                  <Activity className="h-5 w-5 text-primary" />
                  Our Program
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                Our unique program blends athletic activities with performing arts, allowing campers to explore their interests in soccer, basketball, swimming, theater, music, and dance. Each day is thoughtfully designed to balance structured activities with free play, ensuring every camper discovers their passion while building confidence and friendships.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="activities" 
              className="bg-card rounded-2xl px-6 border-2 border-border card-shadow hover-lift"
            >
              <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-secondary" />
                  Activities
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                <strong>Sports:</strong> Soccer, basketball, tennis, swimming, archery, rock climbing<br/>
                <strong>Arts:</strong> Musical theater, dance, drama, visual arts, music lessons<br/>
                <strong>Special Events:</strong> Talent shows, sports tournaments, camping trips, water days
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="director" 
              className="bg-card rounded-2xl px-6 border-2 border-border card-shadow hover-lift"
            >
              <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-highlight" />
                  Meet Our Director
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                Sarah Johnson brings over 15 years of experience in youth development and camp management. With a background in both education and sports coaching, she is passionate about creating an environment where every child feels valued, challenged, and inspired to grow.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="schedule" 
              className="bg-card rounded-2xl px-6 border-2 border-border card-shadow hover-lift"
            >
              <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-accent" />
                  Daily Schedule
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                <strong>8:00 AM</strong> - Drop-off & Morning Activities<br/>
                <strong>9:00 AM</strong> - Sports Rotation<br/>
                <strong>11:00 AM</strong> - Swimming & Water Activities<br/>
                <strong>12:00 PM</strong> - Lunch<br/>
                <strong>1:00 PM</strong> - Arts & Performance Activities<br/>
                <strong>3:00 PM</strong> - Free Choice Time<br/>
                <strong>4:00 PM</strong> - Group Games & Closing Circle<br/>
                <strong>5:00 PM</strong> - Pick-up
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="location" 
              className="bg-card rounded-2xl px-6 border-2 border-border card-shadow hover-lift"
            >
              <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  Campus & Location
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                Our 50-acre campus features state-of-the-art athletic fields, an Olympic-size pool, a professional theater, art studios, and acres of natural woodlands. Located just 30 minutes from downtown, we offer the perfect blend of accessibility and natural beauty.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="safety" 
              className="bg-card rounded-2xl px-6 border-2 border-border card-shadow hover-lift"
            >
              <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-secondary" />
                  Health & Safety
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                Safety is our top priority. All staff are CPR and First Aid certified, we maintain a 1:8 counselor-to-camper ratio, and our on-site nurse is available throughout the day. We follow strict health protocols and have comprehensive emergency procedures in place.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CampersSection;
