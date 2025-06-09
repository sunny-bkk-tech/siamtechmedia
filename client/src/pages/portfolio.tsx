import { HeroSection } from "@/components/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "3D House Configurator",
    category: "3D/AR Solution",
    description: "Interactive platform for customizing 3D house designs with real-time visualization and configuration options.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["Three.js", "React", "WebGL"],
    client: "Swedish Client",
    link: "https://varahousing.vercel.app",
  },
  {
    id: 2,
    title: "MyFirstDiamond.fr",
    category: "Luxury E-commerce",
    description: "Luxury e-commerce platform for custom diamond jewelry with interactive configurator and 3D product rendering.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["React", "Three.js", "Stripe"],
    client: "French Client",
    link: "https://www.myfirstdiamond.fr/",
  },
  {
    id: 3,
    title: "XM3DView Platform",
    category: "3D/AR Solution",
    description: "Comprehensive 3D/AR platform for modeling, collaboration, and showcasing designs across industries.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["WebGL", "Node.js", "MongoDB"],
    client: "Canadian Partner",
    link: "https://xm3dview.com",
  },
  {
    id: 4,
    title: "Car Sales CRM",
    category: "CRM System",
    description: "Innovative CRM system streamlining car sales processes with lead management and customer tracking.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["React", "Laravel", "MySQL"],
    client: "Swedish Client",
    link: "https://carsynq.se",
  },
  {
    id: 5,
    title: "Flight Tax System",
    category: "Business Platform",
    description: "Login-based platform for managing flight tax calculations with automated reporting and compliance.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["Vue.js", ".NET", "SQL Server"],
    client: "US Client",
    link: "https://app.flighttaxsystems.com",
  },
  {
    id: 6,
    title: "Bannisters Booking System",
    category: "Hospitality",
    description: "Hotel and resort booking platform with seamless UX and integrated payment processing.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    client: "Australian Client",
    link: "https://www.bannisters.com.au",
  },
  {
    id: 7,
    title: "The Optical Co E-Commerce",
    category: "E-commerce",
    description: "Online eyewear store with health fund integration and virtual try-on capabilities.",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["Shopify Plus", "React", "API"],
    client: "Australian Client",
    link: "https://theopticalco.com.au",
  },
  {
    id: 8,
    title: "Appliance Repair Platform",
    category: "Service Platform",
    description: "Service tracking system for appliance repairs with customer reviews and technician management.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["React", "Node.js", "MongoDB"],
    client: "Canadian Client",
    link: "https://advanceappliance.ca",
  },
  {
    id: 9,
    title: "Premier Pools Website",
    category: "Business Website",
    description: "Custom pool builder site with quote requests, project gallery, and customer portal.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["WordPress", "PHP", "MySQL"],
    client: "US Client",
    link: "https://premierpoolspa.com/services/",
  },
  {
    id: 10,
    title: "Quest Industrial Testing",
    category: "Testing Portal",
    description: "Mold and asbestos testing service portal with scheduling, reporting, and certification management.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: ["Laravel", "Vue.js", "PostgreSQL"],
    client: "US Client",
    link: "https://quest-testing.com",
  },
];

export default function Portfolio() {
  return (
    <div className="page-transition active">
      <HeroSection
        title="Our Portfolio"
        subtitle="Real client projects delivered across 6 countries with cutting-edge technology solutions"
      />

      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="modern-card overflow-hidden bg-white border-0 fade-in-up group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 px-3 py-1 rounded-full">
                      {project.client}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 px-3 py-1 rounded-full">
                      {project.category}
                    </Badge>
                    <Globe className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs rounded-lg border-primary/20 text-primary hover:bg-primary/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    asChild 
                    className="w-full gradient-button text-white font-medium rounded-xl border-0 h-10"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      View Live Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Portfolio Statistics */}
          <div className="mt-20 grid md:grid-cols-4 gap-8">
            <div className="text-center modern-card p-6 bg-white">
              <div className="text-3xl font-bold text-gradient mb-2">10+</div>
              <p className="text-muted-foreground">Live Projects</p>
            </div>
            <div className="text-center modern-card p-6 bg-white">
              <div className="text-3xl font-bold text-gradient mb-2">6</div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div className="text-center modern-card p-6 bg-white">
              <div className="text-3xl font-bold text-gradient mb-2">3</div>
              <p className="text-muted-foreground">3D/AR Solutions</p>
            </div>
            <div className="text-center modern-card p-6 bg-white">
              <div className="text-3xl font-bold text-gradient mb-2">100%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Themes Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Our Expertise Areas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions across diverse industries and technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="modern-card p-8 bg-white text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">3D/AR Solutions</h3>
              <p className="text-muted-foreground mb-4">
                Cutting-edge 3D configurators and AR visualization tools for immersive user experiences.
              </p>
              <div className="text-sm text-primary font-medium">
                House Configurators • Diamond Jewelry • XM3DView Platform
              </div>
            </div>

            <div className="modern-card p-8 bg-white text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mb-6">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Industry-Specific Platforms</h3>
              <p className="text-muted-foreground mb-4">
                Tailored CRM and business management systems for specialized industries.
              </p>
              <div className="text-sm text-secondary font-medium">
                Car Sales • Optical • Appliance Repair • Flight Tax
              </div>
            </div>

            <div className="modern-card p-8 bg-white text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mb-6">
                <Badge className="w-8 h-8 text-white bg-transparent border-0 p-0 flex items-center justify-center">🏨</Badge>
              </div>
              <h3 className="text-xl font-bold mb-4">Booking & Service Systems</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive booking platforms and service management solutions.
              </p>
              <div className="text-sm text-accent font-medium">
                Hotels • Pools • Testing Services • E-commerce
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-lg">
              <strong>Confidential Projects:</strong> Several additional projects are under NDAs and cannot be publicly displayed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
