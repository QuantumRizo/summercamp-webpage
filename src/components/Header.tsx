import { Phone, Search, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      {/* Top Bar */}
      <div className="bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:0000000000"
                className="flex items-center gap-2 hover:opacity-80 transition-smooth"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">(000) 000-0000</span>
              </a>
              <a
                href="#rentals"
                className="hover:opacity-80 transition-smooth hidden md:inline"
              >
                Facility Rentals
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button className="hover:opacity-80 transition-smooth">
                <Search className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-1 hover:opacity-80 transition-smooth">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`bg-background border-b transition-smooth ${
          isScrolled ? "bg-background/95 backdrop-blur-sm" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex-shrink-0">
              <h1 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                Camp Name
                <span className="block text-sm font-normal text-muted-foreground">
                  Summer Experience
                </span>
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="ghost"
                className="text-base font-semibold hover:text-primary transition-smooth flex items-center gap-1"
              >
                About Camp <ChevronDown className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                className="text-base font-semibold hover:text-primary transition-smooth flex items-center gap-1"
              >
                For Families <ChevronDown className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                className="text-base font-semibold hover:text-primary transition-smooth flex items-center gap-1"
              >
                Join Our Team <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="lg"
                className="hidden lg:flex border-2 font-heading font-semibold rounded-full"
              >
                Contact Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hidden lg:flex border-2 font-heading font-semibold rounded-full"
              >
                Register Now
              </Button>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold rounded-full"
              >
                Dates & Rates
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
