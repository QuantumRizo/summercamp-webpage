import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "My daughter had an incredible time at camp this summer — she came home with great stories, new friends, and a confidence we hadn’t seen before. It truly became her favorite place away from home.",
      type: "parent"
    },
    {
      text: "Our camper grew so much during her time at camp — she became more independent, responsible, and excited to try new things. She said it was ‘the best summer ever!’",
      type: "parent"
    },
    {
      text: "Working at camp was easily one of the best experiences of my life. I met amazing people from all over the world, learned new skills, and discovered how rewarding it is to help campers grow.",
      type: "staff"
    },
    {
      text: "As soon as I left camp, I couldn’t wait to go back. It’s the one place where I feel completely myself — surrounded by friends, laughter, and adventure.",
      type: "camper"
    },
    {
      text: "Camp is truly a special place — it’s where I learned teamwork, creativity, and confidence, while having fun every single day.",
      type: "camper"
    },
    {
      text: "Being part of the staff gave me lifelong friendships and a deeper appreciation for how powerful the camp experience can be for everyone involved.",
      type: "staff"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Stories from Camp
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 rounded-2xl bg-card hover-lift transition-smooth">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground italic leading-relaxed">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 font-heading font-semibold rounded-full"
          >
            Read More Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
