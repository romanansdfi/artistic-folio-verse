import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/80" />
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="bg-shape w-32 h-32 top-20 left-20 floating" />
        <div className="bg-shape w-24 h-24 top-40 right-32 floating-delayed" />
        <div className="bg-shape w-40 h-40 bottom-32 left-40 floating" />
        <div className="bg-shape w-28 h-28 bottom-20 right-20 floating-delayed" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="gradient-text">Creative</span>
              <br />
              <span className="text-foreground">Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with modern web technologies and creative design solutions
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group relative glow-primary hover-lift">
              <span className="relative z-10">View My Work</span>
            </Button>
            <Button variant="secondary" size="lg" className="glass-card hover-lift">
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-8">
            <a href="#" className="p-3 glass-card rounded-full hover-lift transition-all duration-300 hover:bg-primary/20">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 glass-card rounded-full hover-lift transition-all duration-300 hover:bg-primary/20">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 glass-card rounded-full hover-lift transition-all duration-300 hover:bg-primary/20">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">Scroll Down</span>
          <ArrowDown className="w-5 h-5 animate-bounce text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;