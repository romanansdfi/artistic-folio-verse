import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const allProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      github: "https://github.com/rambilas/ecommerce-platform",
      demo: "https://ecommerce-demo.rambilas.dev",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
      github: "https://github.com/rambilas/task-manager",
      demo: "https://tasks.rambilas.dev",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies featuring 3D animations and smooth interactions.",
      technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/rambilas/portfolio",
      demo: "https://rambilas.dev",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with interactive maps, forecasts, and data visualization using modern APIs.",
      technologies: ["TypeScript", "D3.js", "OpenWeather API", "Mapbox"],
      github: "https://github.com/rambilas/weather-dashboard",
      demo: "https://weather.rambilas.dev",
      featured: false
    },
    {
      title: "Social Media App",
      description: "Full-stack social media platform with real-time messaging, image sharing, and social features.",
      technologies: ["Next.js", "MongoDB", "Socket.io", "Cloudinary"],
      github: "https://github.com/rambilas/social-app",
      demo: "https://social.rambilas.dev",
      featured: false
    },
    {
      title: "AI Chat Bot",
      description: "Intelligent chatbot powered by OpenAI API with conversation memory and personalized responses.",
      technologies: ["Python", "FastAPI", "OpenAI API", "Redis"],
      github: "https://github.com/rambilas/ai-chatbot",
      demo: "https://chat.rambilas.dev",
      featured: false
    },
    {
      title: "Expense Tracker",
      description: "Personal finance management app with budget tracking, expense categorization, and financial insights.",
      technologies: ["React Native", "Express.js", "MySQL", "Chart.js"],
      github: "https://github.com/rambilas/expense-tracker",
      demo: "https://expenses.rambilas.dev",
      featured: false
    },
    {
      title: "Blog Platform",
      description: "Content management system with markdown support, SEO optimization, and multi-author capabilities.",
      technologies: ["Gatsby", "GraphQL", "Strapi", "Netlify"],
      github: "https://github.com/rambilas/blog-platform",
      demo: "https://blog.rambilas.dev",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-2xl font-bold">All Projects</h1>
          <div></div>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="bg-shape w-96 h-96 top-40 -left-48 opacity-5" />
          <div className="bg-shape w-72 h-72 bottom-20 -right-36 opacity-5" />
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
                className="glass-card overflow-hidden hover-lift group h-full flex flex-col"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-primary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-4xl text-primary/40">
                    {project.featured ? "🚀" : "💼"}
                  </div>
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
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="glass-card group/btn"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
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