import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Rocket, Users } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "AWS", "Docker", "GraphQL", "Tailwind CSS", "Three.js"
  ];

  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern technologies and best practices."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that enhance user experience."
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, accessibility, and search engine visibility."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working effectively with cross-functional teams to deliver exceptional results."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-shape w-64 h-64 top-20 -right-32 opacity-5" />
        <div className="bg-shape w-48 h-48 bottom-20 -left-24 opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a love for creating innovative 
            digital solutions that make a difference. With expertise in modern web 
            technologies, I bring ideas to life through clean, efficient code.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              With over 5 years of experience in web development, I've had the privilege 
              of working with startups and established companies alike. My journey started 
              with a curiosity about how websites work, and it has evolved into a passion 
              for creating digital experiences that truly matter.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in the power of technology to solve real-world problems and 
              improve people's lives. When I'm not coding, you can find me exploring 
              new technologies, contributing to open source projects, or mentoring 
              aspiring developers.
            </p>
            
            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="glass-card hover-lift cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl glass-card p-4 overflow-hidden">
              <img 
                src="/lovable-uploads/12cde534-0487-4fa2-be99-e42df599ba1a.png" 
                alt="Rambilas Sah" 
                className="w-full h-full object-cover rounded-xl hover-lift transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              What I <span className="gradient-text">Do</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I offer a comprehensive range of development services to help bring 
              your digital vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="glass-card p-6 hover-lift group cursor-default"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;