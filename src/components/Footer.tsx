import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import footerBanner from "@/assets/footer-banner.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Banner Image */}
      <div className="w-full h-48 md:h-64 overflow-hidden">
        <img
          src={footerBanner}
          alt="CampName outdoor activities and fun moments"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Contact */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:0000000000" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
                <Phone className="h-4 w-4" /> (000) 000-0000
              </a>
              <a href="mailto:info@campname.com" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
                <Mail className="h-4 w-4" /> info@campname.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Located in the heart of nature — join us this summer!</span>
              </div>
            </div>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Discover CampName</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:opacity-80 transition-smooth">About Us</a></li>
              <li><a href="#program" className="hover:opacity-80 transition-smooth">Our Program</a></li>
              <li><a href="#activities" className="hover:opacity-80 transition-smooth">Activities</a></li>
            </ul>
          </div>

          {/* Families */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Join the Camp</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#dates" className="hover:opacity-80 transition-smooth">Dates & Rates</a></li>
              <li><a href="#registration" className="hover:opacity-80 transition-smooth">Registration</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://www.facebook.com/campname" className="hover:opacity-80 transition-smooth">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/campname" className="hover:opacity-80 transition-smooth">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/campname" className="hover:opacity-80 transition-smooth">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} CampName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
