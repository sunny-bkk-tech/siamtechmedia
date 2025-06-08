import { HeroSection } from "@/components/hero-section";
import { Check } from "lucide-react";

export default function Services() {
  return (
    <div className="page-transition active">
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive technology solutions designed to transform your business"
      />

      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Custom App Development */}
          <div className="grid md:grid-cols-2 gap-16 items-center fade-in-up">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gradient">Custom App Development</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We create bespoke mobile and web applications tailored to your specific business
                requirements. From concept to deployment, our experienced team delivers
                high-performance solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center modern-card p-4 bg-white">
                  <Check className="text-primary mr-4 w-6 h-6" />
                  <span className="font-medium">iOS & Android Native Development</span>
                </li>
                <li className="flex items-center modern-card p-4 bg-white">
                  <Check className="text-secondary mr-4 w-6 h-6" />
                  <span className="font-medium">Cross-Platform Solutions</span>
                </li>
                <li className="flex items-center modern-card p-4 bg-white">
                  <Check className="text-accent mr-4 w-6 h-6" />
                  <span className="font-medium">Progressive Web Apps</span>
                </li>
                <li className="flex items-center modern-card p-4 bg-white">
                  <Check className="text-primary mr-4 w-6 h-6" />
                  <span className="font-medium">API Integration & Backend Development</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Mobile app development workspace"
                className="rounded-3xl shadow-2xl w-full h-auto relative z-10 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* E-commerce Solutions */}
          <div className="grid md:grid-cols-2 gap-16 items-center fade-in-up">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl transform -rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="E-commerce platform dashboard"
                  className="rounded-3xl shadow-2xl w-full h-auto relative z-10 transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-8 text-gradient">E-commerce Website Solutions</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Complete online store platforms with secure payment processing, inventory
                management, and analytics to help your business thrive in the digital marketplace.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center modern-card p-4 bg-white">
                  <Check className="text-secondary mr-4 w-6 h-6" />
                  <span className="font-medium">Custom Shopping Cart Development</span>
                </li>
                <li className="flex items-center modern-card p-4 bg-white">
                  <Check className="text-primary mr-4 w-6 h-6" />
                  <span className="font-medium">Payment Gateway Integration</span>
                </li>
                <li className="flex items-center modern-card p-4 bg-white">
                  <Check className="text-accent mr-4 w-6 h-6" />
                  <span className="font-medium">Inventory Management Systems</span>
                </li>
                <li className="flex items-center modern-card p-4 bg-white">
                  <Check className="text-secondary mr-4 w-6 h-6" />
                  <span className="font-medium">Multi-vendor Marketplace Solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* AI & Automation */}
          <div className="grid md:grid-cols-2 gap-16 items-center fade-in-up">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gradient">AI & Automation Tools</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Harness the power of artificial intelligence and automation to streamline
                operations, reduce costs, and improve efficiency across your organization.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center modern-card p-4 bg-white">
                  <Check className="text-accent mr-4 w-6 h-6" />
                  <span className="font-medium">Chatbot Development</span>
                </li>
                <li className="flex items-center modern-card p-4 bg-white">
                  <Check className="text-primary mr-4 w-6 h-6" />
                  <span className="font-medium">Process Automation</span>
                </li>
                <li className="flex items-center modern-card p-4 bg-white">
                  <Check className="text-secondary mr-4 w-6 h-6" />
                  <span className="font-medium">Data Analytics & Insights</span>
                </li>
                <li className="flex items-center modern-card p-4 bg-white">
                  <Check className="text-accent mr-4 w-6 h-6" />
                  <span className="font-medium">Machine Learning Solutions</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="AI automation dashboard"
                className="rounded-3xl shadow-2xl w-full h-auto relative z-10 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Government IT */}
          <div className="grid md:grid-cols-2 gap-16 items-center fade-in-up">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform -rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Government digital transformation"
                  className="rounded-3xl shadow-2xl w-full h-auto relative z-10 transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-8 text-gradient">Government & Enterprise IT</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Digital transformation solutions for government agencies and large enterprises,
                ensuring security, compliance, and seamless citizen/employee experiences.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center modern-card p-4 bg-white">
                  <Check className="text-primary mr-4 w-6 h-6" />
                  <span className="font-medium">Digital Service Platforms</span>
                </li>
                <li className="flex items-center modern-card p-4 bg-white">
                  <Check className="text-accent mr-4 w-6 h-6" />
                  <span className="font-medium">Legacy System Modernization</span>
                </li>
                <li className="flex items-center modern-card p-4 bg-white">
                  <Check className="text-secondary mr-4 w-6 h-6" />
                  <span className="font-medium">Security & Compliance Solutions</span>
                </li>
                <li className="flex items-center modern-card p-4 bg-white">
                  <Check className="text-primary mr-4 w-6 h-6" />
                  <span className="font-medium">Cloud Migration Services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
