import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-paint-splash.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Colorful creative background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/20" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
        <p className="text-lg md:text-xl text-background font-medium mb-2 animate-fade-in uppercase tracking-wide">
          Inspiring creativity and connection
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-background mb-12 animate-fade-in leading-tight">
          Unforgettable moments.<br />
          <span className="italic">Endless adventure.</span>
        </h1>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => {
            const element = document.getElementById("quick-links");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-background hover:opacity-80 transition-smooth"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
