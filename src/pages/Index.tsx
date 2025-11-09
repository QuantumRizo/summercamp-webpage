import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickLinksSection from "@/components/QuickLinksSection";
import AboutSection from "@/components/AboutSection";
import UniqueExperienceSection from "@/components/UniqueExperienceSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuickLinksSection />
        <AboutSection />
        <UniqueExperienceSection />
        <ActivitiesSection />
        <TestimonialsSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
