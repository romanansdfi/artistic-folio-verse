import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Smartphone, Server, Palette, GitBranch, Shield } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "SASS/SCSS", level: 87 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 93 },
        { name: "Python", level: 88 },
        { name: "Express.js", level: 90 },
        { name: "Django", level: 85 },
        { name: "REST APIs", level: 95 },
        { name: "GraphQL", level: 82 }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 87 },
        { name: "MySQL", level: 85 },
        { name: "Redis", level: 80 },
        { name: "Prisma", level: 88 },
        { name: "Supabase", level: 85 }
      ],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 80 },
        { name: "Expo", level: 87 },
        { name: "PWA", level: 90 },
        { name: "Ionic", level: 75 },
        { name: "Capacitor", level: 82 }
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "DevOps",
      icon: Shield,
      skills: [
        { name: "Docker", level: 88 },
        { name: "AWS", level: 85 },
        { name: "Vercel", level: 92 },
        { name: "GitHub Actions", level: 87 },
        { name: "Nginx", level: 80 },
        { name: "Linux", level: 85 }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Tools",
      icon: Code2,
      skills: [
        { name: "Git", level: 95 },
        { name: "VS Code", level: 98 },
        { name: "Figma", level: 88 },
        { name: "Postman", level: 90 },
        { name: "Jest", level: 85 },
        { name: "Webpack", level: 82 }
      ],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-shape w-96 h-96 top-10 -left-48 opacity-5 floating" />
        <div className="bg-shape w-80 h-80 top-60 -right-40 opacity-5 floating-delayed" />
        <div className="bg-shape w-64 h-64 bottom-20 left-20 opacity-5 floating" />
        <div className="bg-shape w-72 h-72 bottom-40 -right-36 opacity-5 floating-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mastering the latest technologies to build scalable, efficient, and 
            innovative solutions across the full development stack.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="glass-card p-6 hover-lift group relative overflow-hidden"
              style={{
                transform: "translateZ(0)",
                transformStyle: "preserve-3d"
              }}
            >
              {/* 3D Background Gradient */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
              />
              
              {/* Category Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-3 shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <category.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="space-y-2"
                    style={{
                      animationDelay: `${skillIndex * 100}ms`
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    {/* 3D Progress Bar */}
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                        style={{
                          width: `${skill.level}%`,
                          boxShadow: `0 0 10px rgba(59, 130, 246, 0.5)`,
                          transform: "translateZ(2px)"
                        }}
                      />
                      {/* 3D Shine Effect */}
                      <div 
                        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* 3D Hover Effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg" />
                <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-sm -z-10" />
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">
            Additional <span className="gradient-text">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "JavaScript", "HTML5", "CSS3", "Bootstrap", "Material-UI", 
              "Ant Design", "Firebase", "Stripe", "WebSockets", "Three.js",
              "D3.js", "Chart.js", "Framer Motion", "Electron", "Puppeteer"
            ].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 glass-card rounded-full text-sm hover-lift group cursor-default"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <span className="group-hover:text-primary transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;