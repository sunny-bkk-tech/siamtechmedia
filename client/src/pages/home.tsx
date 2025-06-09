import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { Smartphone, ShoppingCart, Bot, Building, Globe, Users, Award, TrendingUp, Star } from "lucide-react";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="page-transition active">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Content Column - Takes up more space */}
            <div className="lg:col-span-7 fade-in-up">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Delivering live projects across 6 countries
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
                We transform ideas into 
                <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">digital experiences</span>
                <span className="block text-white/90">that scale globally</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 lg:mb-10 text-white/80 leading-relaxed max-w-2xl">
                From luxury diamond jewelry platforms in France to 3D house configurators in Sweden – 
                we craft technology solutions that turn ambitious visions into market-leading realities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-8 lg:mb-10">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/95 font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-xl shadow-lg border-0 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <span className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Schedule Free Consultation
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="border-2 border-white/60 text-white hover:bg-white hover:text-primary px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-xl bg-white/10 backdrop-blur-sm group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-semibold">
                    <span className="flex items-center gap-3">
                      <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      Explore Live Projects
                    </span>
                  </Button>
                </Link>
              </div>
              
              {/* Achievement Badges */}
              <div className="flex flex-wrap gap-2 lg:gap-3 mb-6 lg:mb-8">
                <div className="bg-white/15 backdrop-blur-sm px-3 lg:px-5 py-2 lg:py-3 rounded-full flex items-center gap-2 border border-white/20">
                  <Award className="w-4 h-4 text-amber-300" />
                  <span className="text-xs lg:text-sm font-medium">Perfect Success Rate</span>
                </div>
                <div className="bg-white/15 backdrop-blur-sm px-3 lg:px-5 py-2 lg:py-3 rounded-full flex items-center gap-2 border border-white/20">
                  <TrendingUp className="w-4 h-4 text-emerald-300" />
                  <span className="text-xs lg:text-sm font-medium">3D/AR Leaders</span>
                </div>
                <div className="bg-white/15 backdrop-blur-sm px-3 lg:px-5 py-2 lg:py-3 rounded-full flex items-center gap-2 border border-white/20">
                  <Users className="w-4 h-4 text-blue-300" />
                  <span className="text-xs lg:text-sm font-medium">Global Clients</span>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">10+</div>
                  <div className="text-xs lg:text-sm text-white/70">Live Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">6</div>
                  <div className="text-xs lg:text-sm text-white/70">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">24h</div>
                  <div className="text-xs lg:text-sm text-white/70">Response Time</div>
                </div>
              </div>
            </div>
            
            {/* Visual Column - Compact but impactful */}
            <div className="lg:col-span-5 fade-in-up">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-2"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-secondary/15 to-primary/15 rounded-2xl transform -rotate-1"></div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Advanced technology dashboard and analytics interface"
                  className="rounded-2xl shadow-2xl w-full h-auto relative z-10 transform hover:scale-105 transition-all duration-500"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-xl z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-gray-700">Live Projects</span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg z-20">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium text-gray-700">5-Star Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Real Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've transformed businesses across continents with innovative technology solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Sweden Success */}
            <div className="modern-card p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-l-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">SE</div>
                <span className="text-sm font-medium text-blue-700">Swedish Innovation</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Revolutionary 3D House Configurator</h3>
              <p className="text-muted-foreground mb-4">
                Transformed how customers design and visualize homes with interactive 3D technology, 
                increasing engagement by 300%.
              </p>
              <Link href="/portfolio">
                <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                  View Live Project →
                </Button>
              </Link>
            </div>

            {/* France Success */}
            <div className="modern-card p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-l-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">FR</div>
                <span className="text-sm font-medium text-purple-700">French Luxury</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Diamond Jewelry Platform</h3>
              <p className="text-muted-foreground mb-4">
                Created an exclusive e-commerce experience with custom configurators that elevated 
                luxury shopping to new heights.
              </p>
              <Link href="/portfolio">
                <Button variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50">
                  Explore Platform →
                </Button>
              </Link>
            </div>

            {/* Global Success */}
            <div className="modern-card p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-l-green-500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">🌍</div>
                <span className="text-sm font-medium text-green-700">Global Impact</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Cross-Continental Solutions</h3>
              <p className="text-muted-foreground mb-4">
                From Canadian 3D platforms to Australian hospitality systems – delivering 
                scalable solutions across industries.
              </p>
              <Link href="/portfolio">
                <Button variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">
                  See All Projects →
                </Button>
              </Link>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">300%</div>
                <p className="text-muted-foreground">User Engagement Increase</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-muted-foreground">Project Success Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">24h</div>
                <p className="text-muted-foreground">Average Response Time</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">Live Global Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specialized technology solutions that drive measurable business growth and digital transformation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Smartphone}
              title="Custom App Development"
              description="Native mobile apps and progressive web applications with seamless user experiences"
            />
            <ServiceCard
              icon={ShoppingCart}
              title="E-commerce Solutions"
              description="Advanced online stores with 3D product visualization and payment integration"
            />
            <ServiceCard
              icon={Bot}
              title="3D/AR Technology"
              description="Interactive configurators and augmented reality solutions for immersive experiences"
            />
            <ServiceCard
              icon={Building}
              title="Enterprise Systems"
              description="CRM platforms and business management solutions for streamlined operations"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform -rotate-2"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Professional development team collaboration"
                  className="rounded-3xl shadow-2xl w-full h-auto relative z-10 transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Why Industry Leaders Choose Us</h2>
              <div className="space-y-8">
                <div className="flex items-start modern-card p-6 bg-white">
                  <div className="text-primary mr-6 mt-1">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Proven Global Track Record</h3>
                    <p className="text-muted-foreground text-lg">Successfully delivered 10+ live projects across 6 countries</p>
                  </div>
                </div>
                <div className="flex items-start modern-card p-6 bg-white">
                  <div className="text-secondary mr-6 mt-1">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Cutting-Edge Technology</h3>
                    <p className="text-muted-foreground text-lg">Specialized in 3D/AR solutions and modern web technologies</p>
                  </div>
                </div>
                <div className="flex items-start modern-card p-6 bg-white">
                  <div className="text-accent mr-6 mt-1">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Full-Cycle Development</h3>
                    <p className="text-muted-foreground text-lg">From concept to deployment with ongoing support and maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Powered by Cutting-Edge Technology
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We leverage the latest technologies to build scalable, future-proof solutions that give your business a competitive edge
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="font-bold mb-2">React & Next.js</h3>
              <p className="text-white/70 text-sm">Modern frontend frameworks</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold mb-2">Three.js & WebGL</h3>
              <p className="text-white/70 text-sm">3D visualization & AR</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold mb-2">Node.js & Laravel</h3>
              <p className="text-white/70 text-sm">Robust backend systems</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="font-bold mb-2">Cloud & DevOps</h3>
              <p className="text-white/70 text-sm">Scalable infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium">
              🚀 Ready to launch your next big idea?
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Let's Build Something 
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Extraordinary Together</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto">
            From concept to global deployment, we're your trusted technology partner. 
            Join the growing list of international clients who've transformed their businesses with our solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-12 py-6 text-xl rounded-2xl shadow-2xl group">
                <span className="flex items-center gap-3">
                  Get Started Now
                  <span className="transform group-hover:translate-x-1 transition-transform text-2xl">🚀</span>
                </span>
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-2 border-white/60 text-white hover:bg-white hover:text-primary px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-xl bg-white/10 backdrop-blur-sm group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-semibold">
                <span className="flex items-center gap-3">
                  <Globe className="w-6 h-6" />
                  View Live Projects
                </span>
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-sm text-white/60 mb-1">Response Time</div>
              <div className="text-lg font-bold text-white">Within 24 Hours</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-white/60 mb-1">Consultation</div>
              <div className="text-lg font-bold text-white">100% Free</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-white/60 mb-1">Success Rate</div>
              <div className="text-lg font-bold text-white">10/10 Projects</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
