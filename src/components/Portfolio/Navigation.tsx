import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo with enhanced styling */}
          <a href="#" className="relative group">
            <div className="text-2xl font-bold gradient-text hover-lift transition-all duration-300">
              <span className="relative">
                Rambilas Sah
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </span>
            </div>
          </a>

          {/* Desktop Navigation with enhanced hover effects */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-foreground font-medium group transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </span>
                {/* Animated background */}
                <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-hover:opacity-10 transition-all duration-300 transform scale-0 group-hover:scale-100" />
                {/* Animated underline */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </a>
            ))}
            <Button size="sm" className="ml-4 glow-primary hover-lift relative overflow-hidden group">
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button with enhanced styling */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 glass-card hover:bg-primary/20 transition-all duration-300"
            >
              <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-card mt-2 rounded-lg overflow-hidden animate-fade-in">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-primary/10 group"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">
                    {item.name}
                  </span>
                </a>
              ))}
              <Button size="sm" className="w-full glow-primary hover-lift mt-4">
                <span className="relative z-10">Hire Me</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;