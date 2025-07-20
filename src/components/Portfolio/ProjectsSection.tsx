import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import spotifyImage from "@/assets/spotify-clone.jpg";
import bloodDonationImage from "@/assets/blood-donation-ai.jpg";
import aiDetectionImage from "@/assets/ai-detection.jpg";
import schoolManagementImage from "@/assets/school-management.jpg";
import touristAiImage from "@/assets/tourist-ai.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Spotify Clone",
      description: "A full-featured music streaming application with playlist management, music player controls, search functionality, and modern dark UI design similar to Spotify.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Web Audio API", "Tailwind CSS"],
      image: spotifyImage,
      github: "https://github.com/Ram-sah19/spotify-clone",
      demo: "#",
      featured: true
    },
    {
      title: "Blood Donation AI System",
      description: "An Intelligent Health-Aware Platform for Optimized Blood Donation and Emergency Resource Matching with AI-powered donor-recipient matching and real-time inventory management.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Machine Learning"],
      image: bloodDonationImage,
      github: "https://github.com/Ram-sah19/blood-donation-ai",
      demo: "#",
      featured: true
    },
    {
      title: "AI-Powered Object Detection and Tracking System",
      description: "Real-time object detection using YOLOv5/CNN for smart surveillance, safety automation, and visual analytics with advanced computer vision capabilities.",
      technologies: ["Python", "YOLOv5", "OpenCV", "TensorFlow", "Flask", "WebSocket"],
      image: aiDetectionImage,
      github: "https://github.com/Ram-sah19/ai-object-detection",
      demo: "#",
      featured: true
    },
    {
      title: "Pioneer – Smart School Management Web Platform",
      description: "Comprehensive school management system with student enrollment, grade tracking, attendance management, and parent-teacher communication portal.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Chart.js"],
      image: schoolManagementImage,
      github: "https://github.com/Ram-sah19/pioneer-school-management",
      demo: "#",
      featured: false
    },
    {
      title: "🌍 Tourist AI – Smart Travel Guide for Tamil Nadu",
      description: "AI-powered travel companion for Tamil Nadu with personalized itinerary planning, cultural site recommendations, and local guide integration.",
      technologies: ["React Native", "Python", "Google Maps API", "TensorFlow", "Firebase"],
      image: touristAiImage,
      github: "https://github.com/Ram-sah19/tourist-ai-tamil-nadu",
      demo: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-shape w-96 h-96 top-40 -left-48 opacity-5" />
        <div className="bg-shape w-72 h-72 bottom-20 -right-36 opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion 
            for creating exceptional digital experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index}
              className={`glass-card overflow-hidden hover-lift group ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <div className="aspect-video lg:aspect-square overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r lg:from-background/80 lg:to-transparent" />
              </div>

              {/* Project Info */}
              <div className="lg:w-1/2 p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="glass-card text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <Button 
                    size="sm" 
                    className="group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="glass-card group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              More <span className="gradient-text">Projects</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <Card 
                key={index}
                className="glass-card overflow-hidden hover-lift group"
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="glass-card text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="glass-card text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="p-2 hover:scale-110 hover:rotate-12 transition-all duration-300 hover:bg-primary/10 hover:shadow-md"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="p-2 hover:scale-110 hover:rotate-12 transition-all duration-300 hover:bg-secondary/10 hover:shadow-md"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <Link to="/projects">
            <Button variant="secondary" className="glass-card group hover:scale-105 hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:scale-110 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
