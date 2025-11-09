import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, ShoppingBag, Utensils } from "lucide-react";
import familiesImage from "@/assets/families-section.jpg";

const FamiliesSection = () => {
  return (
    <section id="families" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-highlight/10 rounded-full mb-4">
            <Heart className="h-8 w-8 text-highlight" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Welcome, Families!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to prepare for an amazing summer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <img 
              src={familiesImage}
              alt="Families enjoying visiting day at camp"
              className="rounded-3xl card-shadow w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              We understand that choosing the right summer camp for your child is an important decision. Our goal is to create a safe, nurturing, and exciting environment where your child can thrive, make lasting friendships, and create memories that will last a lifetime.
            </p>
            <p className="text-muted-foreground">
              From the moment you arrive on our campus, you'll feel the warmth and energy that makes our camp special. We're committed to keeping you informed and connected throughout the summer.
            </p>
            <Button size="lg" className="bg-highlight hover:bg-highlight/90 text-highlight-foreground font-heading font-semibold rounded-full">
              Download Parent Handbook
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-2 hover-lift transition-smooth rounded-2xl">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                <Calendar className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Visiting Day</h3>
              <p className="text-sm text-muted-foreground">
                Join us mid-summer for a special day to see what your camper has been up to and enjoy performances and games together.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover-lift transition-smooth rounded-2xl">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-full mb-4">
                <ShoppingBag className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Clothing & Gear</h3>
              <p className="text-sm text-muted-foreground">
                Our comprehensive packing list ensures your camper has everything they need for sports, arts, and outdoor adventures.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover-lift transition-smooth rounded-2xl">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                <Utensils className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Dining & Nutrition</h3>
              <p className="text-sm text-muted-foreground">
                Fresh, healthy meals prepared daily. We accommodate all dietary restrictions and allergies with care.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover-lift transition-smooth rounded-2xl">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-highlight/10 rounded-full mb-4">
                <Calendar className="h-7 w-7 text-highlight" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Dates & Rates</h3>
              <p className="text-sm text-muted-foreground">
                Flexible session options from 2-8 weeks. Financial assistance available. Early bird discounts through March 31st.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FamiliesSection;
