import { HeroSection } from "@/components/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Food Delivery Platform",
    category: "Mobile App",
    description: "A comprehensive food delivery mobile application with real-time tracking, payment integration, and restaurant management system.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Fashion Retail Platform",
    category: "E-commerce",
    description: "Multi-vendor e-commerce platform for fashion retailers with advanced inventory management and customer analytics.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["React", "Laravel", "MySQL"],
  },
  {
    id: 3,
    title: "Customer Service Chatbot",
    category: "AI Solution",
    description: "Intelligent chatbot system for customer support with natural language processing and automated ticket routing.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["Python", "TensorFlow", "API"],
  },
  {
    id: 4,
    title: "Citizen Services Portal",
    category: "Government IT",
    description: "Digital transformation platform for government services with secure authentication and document management.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["Vue.js", ".NET", "PostgreSQL"],
  },
  {
    id: 5,
    title: "Business Analytics Dashboard",
    category: "Web App",
    description: "Real-time business intelligence platform with advanced data visualization and predictive analytics capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["Angular", "Django", "Redis"],
  },
];

export default function Portfolio() {
  return (
    <div className="page-transition active">
      <HeroSection
        title="Our Portfolio"
        subtitle="Showcasing successful projects across various industries"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="modern-card overflow-hidden bg-white border-0 fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 mb-4 px-3 py-1 rounded-full">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-sm rounded-lg border-primary/20 text-primary hover:bg-primary/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
