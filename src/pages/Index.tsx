import Navigation from "@/components/Portfolio/Navigation";
import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import SkillsSection from "@/components/Portfolio/SkillsSection";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import ContactSection from "@/components/Portfolio/ContactSection";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">Coded at midnight 🌙, styled at sunrise 🌅 — © 2025, React & Tailwind creation</p>
        </div>
      </footer>
    </div>;
};
export default Index;