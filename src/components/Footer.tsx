
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background/90 text-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-foreground">Nyasha Gandah</h3>
            <p className="text-foreground/80 mb-4 max-w-md">
              Building smart, custom software solutions for businesses and individuals.
              From web apps to AI tools and everything in between.
            </p>
            <div>
              <button onClick={scrollToTop} className="text-foreground flex items-center hover:text-accent transition-colors">
                <span className="mr-2">Back to top</span>
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-foreground/80 hover:text-accent transition-colors">
                  Custom Websites
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/80 hover:text-accent transition-colors">
                  AI & ML Tools
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/80 hover:text-accent transition-colors">
                  Dashboards
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/80 hover:text-accent transition-colors">
                  MVPs
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/80 hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#mentorship" className="text-foreground/80 hover:text-accent transition-colors">
                  Mentorship
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Nyasha Gandah. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-foreground/60 hover:text-accent mx-2">
              LinkedIn
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent mx-2">
              GitHub
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent mx-2">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
