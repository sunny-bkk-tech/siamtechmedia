
import { Link } from "wouter";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  ArrowUp,
  Linkedin,
  Twitter,
  Globe,
  Heart,
  Star,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Custom App Development", href: "/services" },
      { label: "E-commerce Solutions", href: "/services" },
      { label: "3D/AR Technology", href: "/services" },
      { label: "Enterprise Systems", href: "/services" },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
      { label: "Our Story", href: "/about" },
    ]
  },
  {
    title: "Technologies",
    links: [
      { label: "React & Node.js", href: "/services" },
      { label: "Python & Laravel", href: "/services" },
      { label: "Three.js & WebGL", href: "/services" },
      { label: "Cloud Solutions", href: "/services" },
    ]
  }
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/vara-edtech", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/EdtechVara", label: "Twitter" },
  { icon: Globe, href: "https://varaedtech.com", label: "Head Company Website" },
];

const stats = [
  { icon: Star, value: "50+", label: "Projects Delivered" },
  { icon: Globe, value: "6", label: "Countries Served" },
  { icon: Heart, value: "100%", label: "Client Satisfaction" },
  { icon: Zap, value: "4+", label: "Years Experience" }
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>

      <div className="relative z-10">
        {/* Stats Section */}
        <div className="border-b border-white/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Trusted by Clients Worldwide
              </h3>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Building digital solutions that drive real business results across 6 countries
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <img 
                    src="/logo.png" 
                    alt="Siam Tech Media Logo" 
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      Siam Tech Media
                    </h3>
                    <p className="text-sm text-white/60 font-medium">Co., Ltd.</p>
                  </div>
                </div>
                
                <p className="text-white/80 mb-8 text-lg leading-relaxed">
                  Transforming ideas into digital reality with cutting-edge technology solutions. 
                  From luxury e-commerce to 3D configurators, we bring your vision to life.
                </p>

                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span>Bangkok, Thailand</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>+66 94 887 7955</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>siamtechmedia@gmail.com</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Footer Links */}
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h4 className="font-bold mb-6 text-lg text-white">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href={link.href}>
                          <a className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                            <span>{link.label}</span>
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-white/10 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Let's discuss your project and create solutions that drive real results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-medium">
                  Start Your Project
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="border-2 border-white/60 text-white hover:bg-white hover:text-primary px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-xl bg-white/10 backdrop-blur-sm group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-semibold">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/60 text-center md:text-left">
                <p>&copy; 2025 Siam Tech Media Co., Ltd. All rights reserved.</p>
                <p className="text-sm mt-1">Building the future, one project at a time.</p>
              </div>
              
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
