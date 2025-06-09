import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronRight, ExternalLink } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", description: "Welcome to our digital world" },
  { href: "/services", label: "Services", description: "Explore our solutions" },
  { href: "/about", label: "About", description: "Our story & team" },
  { href: "/portfolio", label: "Portfolio", description: "See our work in action" },
  { href: "/contact", label: "Contact", description: "Let's start a conversation" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-glass sticky top-0 z-50 border-b border-white/20 transition-all duration-300 ${
      scrolled ? "backdrop-blur-xl bg-white/80 shadow-lg" : "backdrop-blur-sm bg-white/60"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Enhanced Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 group">
              <div className="flex items-center gap-3 py-2 transition-transform duration-300 group-hover:scale-105">
                <div className="relative">
                  <img 
                    src="/logo.png" 
                    alt="Siam Tech Media Logo" 
                    className="w-10 h-10 object-contain transition-transform duration-300 group-hover:rotate-12"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Siam Tech Media
                  </h1>
                </div>
              </div>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10 shadow-md"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {/* Active indicator */}
                    {isActive(item.href) && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                    )}
                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </Link>
              ))}
              
              {/* CTA Button */}
              <Link href="/contact">
                <Button className="ml-4 bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-xl px-6 py-2 font-medium">
                  Get Started
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <div className="relative w-6 h-6">
                    <Menu className={`h-6 w-6 transition-all duration-300 ${isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"}`} />
                    <X className={`h-6 w-6 absolute top-0 left-0 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"}`} />
                  </div>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:w-80 bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-xl border-l border-white/20">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="py-6 border-b border-gray-200/50">
                    <div className="flex items-center gap-3 mb-2">
                      <img 
                        src="/logo.png" 
                        alt="Siam Tech Media Logo" 
                        className="w-8 h-8 object-contain"
                      />
                      <h2 className="text-lg font-bold text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Navigation
                      </h2>
                    </div>
                    <p className="text-sm text-muted-foreground">Discover our digital solutions</p>
                  </div>
                  
                  {/* Mobile Menu Items */}
                  <div className="flex flex-col space-y-2 py-6 flex-1">
                    {navItems.map((item, index) => (
                      <Link key={item.href} href={item.href}>
                        <Button
                          variant="ghost"
                          className={`w-full justify-start p-4 h-auto rounded-xl transition-all duration-300 group ${
                            isActive(item.href)
                              ? "bg-primary/10 text-primary border-l-4 border-l-primary"
                              : "hover:bg-primary/5 hover:text-primary"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex flex-col items-start w-full">
                            <div className="flex items-center justify-between w-full">
                              <span className="font-medium">{item.label}</span>
                              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                            <span className="text-xs text-muted-foreground mt-1">{item.description}</span>
                          </div>
                        </Button>
                      </Link>
                    ))}
                  </div>
                  
                  {/* Mobile CTA */}
                  <div className="py-6 border-t border-gray-200/50">
                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg transition-all duration-300 rounded-xl p-4 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        Get Started Today
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transform origin-left transition-transform duration-300"
        style={{ 
          width: '100%',
          transform: `scaleX(${scrolled ? 1 : 0})`
        }}
      ></div>
    </nav>
  );
}
