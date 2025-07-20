
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openEmail = () => {
    window.location.href = 'mailto:ram6070246@gmail.com';
  };

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

      {/* Enhanced Floating 3D Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="bg-shape w-32 h-32 top-20 left-20 floating animate-pulse-glow" />
        <div className="bg-shape w-24 h-24 top-40 right-32 floating-delayed animate-pulse-glow" />
        <div className="bg-shape w-40 h-40 bottom-32 left-40 floating animate-pulse-glow" />
        <div className="bg-shape w-28 h-28 bottom-20 right-20 floating-delayed animate-pulse-glow" />
        <div className="bg-shape w-36 h-36 top-1/2 left-1/4 floating animate-pulse-glow" />
        <div className="bg-shape w-20 h-20 top-1/3 right-1/4 floating-delayed animate-pulse-glow" />
      </div>

      {/* Interactive Background Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none particle-container">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`absolute bg-primary/10 rounded-full animate-float-random-${i % 3}`}
            style={{
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="text-foreground">Rambilas</span>
                <br />
                <span className="gradient-text">Sah</span>
              </h1>
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl font-semibold text-primary">
                  Full Stack Developer
                </p>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl lg:mx-0 mx-auto leading-relaxed">
                  Crafting digital experiences with modern web technologies and creative design solutions
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <Button 
              size="lg" 
              className="group relative glow-primary hover-lift enhanced-button"
              onClick={scrollToProjects}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 rounded-md" />
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="glass-card hover-lift enhanced-button"
              onClick={openEmail}
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card hover-lift enhanced-button group"
              onClick={() => window.open('https://your-resume-link.com', '_blank')}
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
            </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start pt-8">
            <a 
              href="https://github.com/Ram-sah19" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 glass-card rounded-full hover-lift transition-all duration-300 hover:bg-primary/20 enhanced-social-button group"
            >
              <Github className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/rambilas-sah-3610192a4/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 glass-card rounded-full hover-lift transition-all duration-300 hover:bg-primary/20 enhanced-social-button group"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            </a>
            <a 
              href="mailto:ram6070246@gmail.com" 
              className="p-3 glass-card rounded-full hover-lift transition-all duration-300 hover:bg-primary/20 enhanced-social-button group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="lg:flex justify-center items-center">
            {/* Profile Image */}
            <div className="relative w-64 h-64 mx-auto mb-8 lg:mb-0 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse group-hover:scale-110 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <img
                src="/lovable-uploads/12cde534-0487-4fa2-be99-e42df599ba1a.png"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl z-10 group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(var(--primary),0.8)]"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin-slow z-20"></div>
            </div>
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
