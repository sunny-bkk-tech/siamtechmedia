import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
  className?: string;
}

export function HeroSection({ title, subtitle, children, className = "" }: HeroSectionProps) {
  return (
    <section className={`py-24 hero-gradient text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight fade-in-up">{title}</h1>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed fade-in-up">{subtitle}</p>
        {children}
      </div>
    </section>
  );
}
