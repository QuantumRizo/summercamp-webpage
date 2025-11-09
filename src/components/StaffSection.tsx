import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, Calendar } from "lucide-react";
import staffImage from "@/assets/staff-section.jpg";

const StaffSection = () => {
  return (
    <section id="staff" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
            <Users className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Join Our Team!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Make a difference in the lives of young people this summer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Working at our camp is more than just a summer job—it's an opportunity to inspire, mentor, and create lasting memories with amazing kids while developing your leadership skills in a supportive environment.
            </p>
            <p className="text-muted-foreground">
              Whether you're passionate about sports, arts, education, or simply love working with children, we have a place for you on our team. Our staff members come from diverse backgrounds and bring unique talents that make our camp community thrive.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold rounded-full">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 font-heading font-semibold rounded-full">
                Download Staff Info
              </Button>
            </div>
          </div>
          <div>
            <img 
              src={staffImage}
              alt="Camp staff working with children"
              className="rounded-3xl card-shadow w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 rounded-2xl bg-card">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                <Briefcase className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Staff Positions</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span><strong>Counselors:</strong> Lead daily activities and mentor campers</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span><strong>Activity Specialists:</strong> Teach sports, arts, or specialized skills</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span><strong>Lifeguards:</strong> Ensure water safety and lead aquatics programs</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-highlight rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span><strong>Administrative:</strong> Support camp operations and communications</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 rounded-2xl bg-card">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-full mb-4">
                <Calendar className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Staff Dates & FAQs</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-1">When do staff arrive?</p>
                  <p className="text-sm">One week before camp begins for comprehensive training</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">What's included?</p>
                  <p className="text-sm">Competitive pay, room and board, training, and an unforgettable experience</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Requirements?</p>
                  <p className="text-sm">Must be 18+, pass background check, and have passion for working with youth</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
