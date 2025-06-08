import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { Smartphone, ShoppingCart, Bot, Building } from "lucide-react";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="page-transition active">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Empowering businesses with 
                <span className="block text-white/90">smart technology</span>
              </h1>
              <p className="text-xl mb-10 text-white/80 leading-relaxed">
                Custom app development, e-commerce solutions, AI tools, and government IT projects
                tailored for your success.
              </p>
              <Link href="/contact">
                <Button size="lg" className="gradient-button text-white font-semibold px-8 py-4 text-lg rounded-2xl shadow-2xl border-0">
                  Get in touch for a free consultation
                </Button>
              </Link>
            </div>
            <div className="relative fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern technology office workspace"
                className="rounded-3xl shadow-2xl w-full h-auto relative z-10 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive technology solutions for modern businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Smartphone}
              title="Custom App Development"
              description="Mobile & web applications built to your exact specifications"
            />
            <ServiceCard
              icon={ShoppingCart}
              title="E-commerce Solutions"
              description="Complete online store platforms with payment integration"
            />
            <ServiceCard
              icon={Bot}
              title="AI & Automation"
              description="Smart tools to streamline your business processes"
            />
            <ServiceCard
              icon={Building}
              title="Government IT"
              description="Digital transformation for government and enterprise"
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
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Why Choose Siam Tech Media?</h2>
              <div className="space-y-8">
                <div className="flex items-start modern-card p-6 bg-white">
                  <div className="text-primary mr-6 mt-1">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Bangkok-Based Expertise</h3>
                    <p className="text-muted-foreground text-lg">Local presence with global standards</p>
                  </div>
                </div>
                <div className="flex items-start modern-card p-6 bg-white">
                  <div className="text-secondary mr-6 mt-1">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Quality-First Approach</h3>
                    <p className="text-muted-foreground text-lg">Rigorous testing and continuous improvement</p>
                  </div>
                </div>
                <div className="flex items-start modern-card p-6 bg-white">
                  <div className="text-accent mr-6 mt-1">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Client-Focused Solutions</h3>
                    <p className="text-muted-foreground text-lg">Tailored to your unique business needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
