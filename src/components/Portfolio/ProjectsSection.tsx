import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      image: "/placeholder-project-1.jpg",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
      image: "/placeholder-project-2.jpg",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies featuring 3D animations and smooth interactions.",
      technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
      image: "/placeholder-project-3.jpg",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with interactive maps, forecasts, and data visualization using modern APIs.",
      technologies: ["TypeScript", "D3.js", "OpenWeather API", "Mapbox"],
      image: "/placeholder-project-4.jpg",
      github: "#",
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
                <div className="aspect-video lg:aspect-square bg-gradient-primary/20 flex items-center justify-center">
                  <div className="text-6xl text-primary/40">🚀</div>
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
                  <Button size="sm" className="group">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="secondary" size="sm" className="glass-card">
                    <Github className="w-4 h-4 mr-2" />
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
                <div className="aspect-video bg-gradient-primary/20 flex items-center justify-center">
                  <div className="text-4xl text-primary/40">💼</div>
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
                    <Button size="sm" variant="ghost" className="p-2">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
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
          <Button variant="secondary" className="glass-card group">
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
