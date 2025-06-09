
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Shield, Users, MapPin, Phone, Mail, Star, Award, TrendingUp, Globe, Heart, Zap, Target, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay at the forefront of technology trends to deliver cutting-edge solutions that transform businesses",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Our solutions are built to last with robust architecture, comprehensive testing, and ongoing support",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our priority - we listen, understand, and deliver solutions that exceed expectations",
    gradient: "from-purple-500 to-pink-500"
  }
];

const timeline = [
  {
    year: "2021",
    title: "Company Founded",
    description: "Established Siam Tech Media with a vision to bridge technology and business innovation in Thailand"
  },
  {
    year: "2022",
    title: "First International Project",
    description: "Launched our first cross-border solution, expanding our reach beyond Thailand"
  },
  {
    year: "2023",
    title: "3D Technology Integration",
    description: "Pioneered 3D configurators and AR solutions for luxury brands and enterprise clients"
  },
  {
    year: "2024",
    title: "Multi-Country Operations",
    description: "Successfully delivered projects across 6 countries with 50+ satisfied clients"
  },
  {
    year: "2025",
    title: "Innovation Leadership",
    description: "Recognized as a leading technology partner for digital transformation in Southeast Asia"
  }
];

const teamMembers = [
  {
    name: "Development Team",
    role: "Full-Stack Engineers",
    description: "Expert developers specializing in modern web technologies, mobile apps, and 3D solutions",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Design Team",
    role: "UX/UI Specialists",
    description: "Creative professionals focused on user experience and modern interface design",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Project Management",
    role: "Delivery Experts",
    description: "Experienced project managers ensuring timely delivery and client satisfaction",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];

const stats = [
  { icon: Award, label: "Projects Delivered", value: "50+", color: "text-blue-600" },
  { icon: Globe, label: "Countries Served", value: "6", color: "text-green-600" },
  { icon: Star, label: "Client Satisfaction", value: "100%", color: "text-yellow-600" },
  { icon: TrendingUp, label: "Years Experience", value: "4+", color: "text-purple-600" }
];

export default function About() {
  return (
    <div className="page-transition active">
      <HeroSection
        title="About Siam Tech Media"
        subtitle="Innovation, reliability, and client success at the heart of everything we do"
      />

      {/* Company Overview */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gradient">Transforming Ideas into Digital Reality</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Based in the vibrant tech hub of Bangkok, Thailand, Siam Tech Media Co., Ltd. was
                  founded with a vision to bridge the gap between innovative technology and practical
                  business solutions.
                </p>
                <p>
                  Our experienced development team combines deep technical expertise with a passion
                  for innovation and reliability. We believe that technology should serve people, not
                  the other way around.
                </p>
                <p>
                  With a client-focused, quality-first approach, we've helped businesses across
                  Thailand and beyond transform their operations through smart technology solutions
                  that drive measurable growth and success.
                </p>
              </div>
              
              {/* Key Features */}
              <div className="mt-8 space-y-3">
                {[
                  "100% Project Success Rate",
                  "24/7 Technical Support",
                  "Agile Development Process",
                  "Multi-Country Experience"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Bangkok city skyline representing our tech hub"
                className="rounded-3xl shadow-2xl w-full h-auto relative z-10 transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center opacity-90 z-20">
                <MapPin className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="modern-card text-center group hover:shadow-xl transition-all duration-300 fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The principles that guide every project, every decision, and every client relationship
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white modern-card group hover:bg-white/20 transition-all duration-500 fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a local startup to an international technology partner - our growth story
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center gap-8 fade-in-up ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} style={{ animationDelay: `${index * 200}ms` }}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="modern-card group hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="text-sm text-primary font-bold mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 hidden md:block">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Talented professionals dedicated to bringing your digital vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="modern-card group overflow-hidden hover:shadow-2xl transition-all duration-500 fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                  <div className="text-primary font-medium mb-3">{member.role}</div>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full transform -translate-x-48 translate-y-48"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-12 text-white/90 leading-relaxed">
            Let's discuss your project and create solutions that drive real business results
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-white/80">Bangkok, Thailand</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-white/80">+66 94 887 7955</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-white/80">siamtechmedia@gmail.com</p>
            </div>
          </div>

          <div className="flex justify-center">
            <a href="/contact" className="inline-flex items-center gap-3 bg-white text-primary hover:bg-white/95 font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <Target className="w-5 h-5" />
              Start Your Project Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
