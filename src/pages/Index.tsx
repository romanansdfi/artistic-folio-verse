import Navigation from "@/components/Portfolio/Navigation";
import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import ContactSection from "@/components/Portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Portfolio. Made with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
