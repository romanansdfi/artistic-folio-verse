
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import spotifyImage from "@/assets/spotify-clone.jpg";
import bloodDonationImage from "@/assets/blood-donation-ai.jpg";
import aiDetectionImage from "@/assets/ai-detection.jpg";
import schoolManagementImage from "@/assets/school-management.jpg";
import touristAiImage from "@/assets/tourist-ai.jpg";

const AllProjects = () => {
  const allProjects = [
    {
      title: "Spotify Clone",
      description: "A full-featured music streaming application with playlist management, music player controls, search functionality, and modern dark UI design similar to Spotify.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Web Audio API", "Tailwind CSS"],
      github: "https://github.com/Ram-sah19/spotify-clone",
      demo: "https://spotify-clone-ram.vercel.app",
      image: spotifyImage,
      featured: true
    },
    {
      title: "Blood Donation AI System",
      description: "An Intelligent Health-Aware Platform for Optimized Blood Donation and Emergency Resource Matching with AI-powered donor-recipient matching and real-time inventory management.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Machine Learning"],
      github: "https://github.com/Ram-sah19/blood-donation-ai",
      demo: "https://blood-donation-ai.vercel.app",
      image: bloodDonationImage,
      featured: true
    },
    {
      title: "AI-Powered Object Detection and Tracking System",
      description: "Real-time object detection using YOLOv5/CNN for smart surveillance, safety automation, and visual analytics with advanced computer vision capabilities.",
      technologies: ["Python", "YOLOv5", "OpenCV", "TensorFlow", "Flask", "WebSocket"],
      github: "https://github.com/Ram-sah19/ai-object-detection",
      demo: "https://ai-detection-ram.vercel.app",
      image: aiDetectionImage,
      featured: true
    },
    {
      title: "Pioneer – Smart School Management Web Platform",
      description: "Comprehensive school management system with student enrollment, grade tracking, attendance management, and parent-teacher communication portal.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Chart.js"],
      github: "https://github.com/Ram-sah19/pioneer-school-management",
      demo: "https://pioneer-school.vercel.app",
      image: schoolManagementImage,
      featured: true
    },
    {
      title: "🌍 Tourist AI – Smart Travel Guide for Tamil Nadu",
      description: "AI-powered travel companion for Tamil Nadu with personalized itinerary planning, cultural site recommendations, and local guide integration.",
      technologies: ["React Native", "Python", "Google Maps API", "TensorFlow", "Firebase"],
      github: "https://github.com/Ram-sah19/tourist-ai-tamil-nadu",
      demo: "https://tourist-ai-tn.vercel.app",
      image: touristAiImage,
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors enhanced-nav-link group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:scale-110 group-hover:-translate-x-1 transition-all duration-300" />
            Back to Home
          </Link>
          <h1 className="text-2xl font-bold">All Projects</h1>
          <div></div>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="py-16 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="bg-shape w-96 h-96 top-40 -left-48 opacity-5 animate-pulse-glow" />
          <div className="bg-shape w-72 h-72 bottom-20 -right-36 opacity-5 animate-pulse-glow" />
          <div className="bg-shape w-64 h-64 top-20 right-1/4 opacity-5 animate-pulse-glow" />
          <div className="bg-shape w-48 h-48 bottom-40 left-1/3 opacity-5 animate-pulse-glow" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My Complete <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore all my projects showcasing various technologies, frameworks, and creative solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card 
                key={index}
                className="glass-card overflow-hidden hover-lift group h-full flex flex-col enhanced-project-card"
              >
                {/* Project Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.featured && (
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="glass-card text-xs hover:scale-110 transition-transform duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="glass-card text-xs hover:scale-110 transition-transform duration-200">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex-1 group/btn enhanced-button"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="glass-card group/btn enhanced-button"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
