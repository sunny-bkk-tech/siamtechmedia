
import { HeroSection } from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Smartphone, ShoppingCart, Bot, Building, Globe, Zap, Shield, Users, Star, TrendingUp, ExternalLink } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: 1,
    icon: Smartphone,
    title: "Custom App Development",
    subtitle: "Native & Cross-Platform Solutions",
    description: "We create bespoke mobile and web applications tailored to your specific business requirements. From concept to deployment, our experienced team delivers high-performance solutions that scale with your business.",
    features: [
      "iOS & Android Native Development",
      "Cross-Platform Solutions (React Native, Flutter)",
      "Progressive Web Apps (PWA)",
      "API Integration & Backend Development",
      "Real-time Features & Push Notifications",
      "Performance Optimization & Testing"
    ],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    gradient: "from-blue-500 to-purple-600",
    bgGradient: "from-blue-50 to-purple-50",
    stats: [
      { label: "Apps Delivered", value: "50+" },
      { label: "App Store Rating", value: "4.8★" },
      { label: "Active Users", value: "1M+" }
    ]
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    subtitle: "Complete Online Store Platforms",
    description: "Build powerful online stores with secure payment processing, inventory management, and analytics. Our e-commerce solutions are designed to maximize conversions and provide exceptional customer experiences.",
    features: [
      "Custom Shopping Cart Development",
      "Payment Gateway Integration (Stripe, PayPal, etc.)",
      "Inventory Management Systems",
      "Multi-vendor Marketplace Solutions",
      "SEO-Optimized Product Pages",
      "Analytics & Conversion Tracking"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
    stats: [
      { label: "Stores Built", value: "30+" },
      { label: "Avg Revenue Increase", value: "+150%" },
      { label: "Conversion Rate", value: "3.2%" }
    ]
  },
  {
    id: 3,
    icon: Bot,
    title: "3D/AR Technology",
    subtitle: "Immersive Digital Experiences",
    description: "Create cutting-edge 3D configurators and AR visualization tools that provide immersive user experiences. From house configurators to jewelry visualization, we bring products to life digitally.",
    features: [
      "3D Product Configurators",
      "Augmented Reality (AR) Applications",
      "Virtual Showrooms & Tours",
      "Real-time 3D Rendering",
      "Interactive Product Visualization",
      "WebGL & Three.js Development"
    ],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
    stats: [
      { label: "3D Projects", value: "15+" },
      { label: "User Engagement", value: "+300%" },
      { label: "Countries Served", value: "6" }
    ]
  },
  {
    id: 4,
    icon: Building,
    title: "Enterprise Systems",
    subtitle: "Scalable Business Solutions",
    description: "Digital transformation solutions for government agencies and large enterprises, ensuring security, compliance, and seamless user experiences across all organizational levels.",
    features: [
      "Digital Service Platforms",
      "Legacy System Modernization",
      "Security & Compliance Solutions",
      "Cloud Migration Services",
      "CRM & ERP Integration",
      "Enterprise API Development"
    ],
    image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    gradient: "from-indigo-500 to-blue-600",
    bgGradient: "from-indigo-50 to-blue-50",
    stats: [
      { label: "Enterprise Clients", value: "20+" },
      { label: "System Uptime", value: "99.9%" },
      { label: "Data Security", value: "100%" }
    ]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We analyze your business needs, target audience, and technical requirements to create a comprehensive project roadmap.",
    icon: Globe
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Our design team creates intuitive user experiences with interactive prototypes for validation and testing.",
    icon: Zap
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Agile development with continuous testing, code reviews, and quality assurance throughout the process.",
    icon: Shield
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Seamless deployment with ongoing maintenance, updates, and 24/7 technical support for your success.",
    icon: Users
  }
];

export default function Services() {
  return (
    <div className="page-transition active">
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive technology solutions designed to transform your business and drive measurable growth"
      />

      {/* Services Grid */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Trusted by 50+ businesses worldwide
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">What We Deliver</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From mobile apps to enterprise systems, we create technology solutions that drive real business results
            </p>
          </div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-16 items-center fade-in-up ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-8">
                    <div>
                      <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${service.gradient} text-white px-4 py-2 rounded-full text-sm font-medium mb-6`}>
                        <service.icon className="w-4 h-4" />
                        {service.subtitle}
                      </div>
                      <h3 className="text-4xl font-bold mb-6 text-gradient">{service.title}</h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center modern-card p-4 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 group">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-4 group-hover:scale-125 transition-transform duration-300`}></div>
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{feature}</span>
                          <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                      {service.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl transform ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'} transition-transform duration-500 group-hover:rotate-6`}></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-3xl shadow-2xl w-full h-auto relative z-10 transform group-hover:scale-105 transition-all duration-500"
                    />
                    <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center opacity-90 z-20 transform group-hover:scale-110 transition-all duration-500`}>
                      <service.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Development Process
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to launch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white modern-card fade-in-up group hover:bg-white/20 transition-all duration-500" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-white/20 mb-4 group-hover:text-white/40 transition-colors duration-300">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Powered by Modern Technology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use cutting-edge tools and frameworks to build scalable, future-proof solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", logo: "⚛️" },
              { name: "Node.js", logo: "🟢" },
              { name: "Python", logo: "🐍" },
              { name: "AWS", logo: "☁️" },
              { name: "Three.js", logo: "🎮" },
              { name: "MongoDB", logo: "🍃" },
              { name: "TypeScript", logo: "📘" },
              { name: "Docker", logo: "🐳" },
              { name: "Vue.js", logo: "💚" },
              { name: "Laravel", logo: "🔧" },
              { name: "React Native", logo: "📱" },
              { name: "PostgreSQL", logo: "🐘" }
            ].map((tech, index) => (
              <div key={index} className="modern-card p-6 bg-white text-center group hover:shadow-xl transition-all duration-300 fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {tech.logo}
                </div>
                <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full transform -translate-x-48 translate-y-48"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Let's discuss your project and create a custom solution that drives real results. 
            Free consultation included with every inquiry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-2 border-white/60 text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                View Our Work
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-sm text-white/70 mb-1">Response Time</div>
              <div className="text-lg font-bold">Within 24 Hours</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-white/70 mb-1">Free Consultation</div>
              <div className="text-lg font-bold">Always Included</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-white/70 mb-1">Project Success</div>
              <div className="text-lg font-bold">100% Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
