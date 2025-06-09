
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
  className?: string;
}

export function HeroSection({ title, subtitle, children, className = "" }: HeroSectionProps) {
  return (
    <section className={`relative py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 hero-gradient text-white overflow-hidden ${className}`}>
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enhanced title with better responsive sizing */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight fade-in-up">
          <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-sm">
            {title}
          </span>
        </h1>
        
        {/* Enhanced subtitle with better spacing and readability */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 fade-in-up" style={{animationDelay: '0.2s'}}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed sm:leading-relaxed md:leading-loose font-light">
            {subtitle}
          </p>
        </div>
        
        {/* Children content with enhanced animation */}
        {children && (
          <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
            {children}
          </div>
        )}
      </div>
      
      {/* Subtle bottom border for visual separation */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
}
