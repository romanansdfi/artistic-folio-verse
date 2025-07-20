import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Award, BookOpen, GraduationCap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Portfolio/Navigation";

const Education = () => {
  // Placeholder data - user can replace with actual education details
  const education = [
    {
      degree: "Your Degree Name",
      institution: "Your Institution Name",
      period: "Start Year - End Year",
      description: "Add your degree description here. You can mention your major subjects, achievements, and relevant coursework.",
      grade: "Your Grade/CGPA",
      type: "degree",
      image: "https://your-certificate-image-link.com/certificate1.jpg" // Placeholder
    },
    {
      degree: "Your Previous Degree/Diploma",
      institution: "Your Previous Institution",
      period: "Start Year - End Year", 
      description: "Add details about your previous education, specializations, and notable achievements.",
      grade: "Your Grade/Percentage",
      type: "diploma",
      image: "https://your-certificate-image-link.com/certificate2.jpg" // Placeholder
    }
  ];

  const certifications = [
    {
      name: "Certification Name 1",
      issuer: "Issuing Organization",
      date: "Month Year",
      description: "Brief description of the certification and skills acquired.",
      image: "https://your-certificate-image-link.com/cert1.jpg" // Placeholder
    },
    {
      name: "Certification Name 2", 
      issuer: "Issuing Organization",
      date: "Month Year",
      description: "Brief description of the certification and skills acquired.",
      image: "https://your-certificate-image-link.com/cert2.jpg" // Placeholder
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      <div className="pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-shape w-96 h-96 top-20 -left-48 opacity-5" />
        <div className="bg-shape w-72 h-72 bottom-40 -right-36 opacity-5" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Education</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My academic journey and professional certifications that shaped my expertise
          </p>
        </div>

        {/* Education Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Academic Background</h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="glass-card overflow-hidden hover-lift group">
                <div className="md:flex">
                  {/* Certificate Image Placeholder */}
                  <div className="md:w-1/3 relative overflow-hidden">
                    <div className="aspect-video md:aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <Award className="w-12 h-12 mx-auto text-primary/50" />
                        <p className="text-sm text-muted-foreground">
                          Certificate Image
                          <br />
                          <span className="text-xs">(Replace with actual image)</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Education Details */}
                  <div className="md:w-2/3 p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary font-medium">{edu.institution}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        Grade: {edu.grade}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>

                    <Badge 
                      variant="secondary" 
                      className="glass-card capitalize"
                    >
                      {edu.type}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-card overflow-hidden hover-lift group">
                {/* Certificate Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Award className="w-10 h-10 mx-auto text-primary/50" />
                    <p className="text-sm text-muted-foreground">
                      Certificate Image
                      <br />
                      <span className="text-xs">(Replace with actual image)</span>
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-primary font-medium">{cert.issuer}</p>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Placeholder Instructions */}
        <div className="mt-16 p-6 glass-card rounded-lg border-dashed border-2 border-primary/20">
          <h3 className="text-lg font-semibold mb-3 text-primary">Instructions for Customization:</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Replace placeholder text with your actual education details</p>
            <p>• Upload your certificate images and replace the placeholder image URLs</p>
            <p>• Add or remove education entries and certifications as needed</p>
            <p>• Update the grades, dates, and descriptions with your information</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Education;