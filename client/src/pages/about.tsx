import { HeroSection } from "@/components/hero-section";
import { Lightbulb, Shield, Users } from "lucide-react";

export default function About() {
  return (
    <div className="page-transition active">
      <HeroSection
        title="About Siam Tech Media"
        subtitle="Innovation, reliability, and client success at the heart of everything we do"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Based in the vibrant tech hub of Bangkok, Thailand, Siam Tech Media Co., Ltd. was
                founded with a vision to bridge the gap between innovative technology and practical
                business solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our experienced development team combines deep technical expertise with a passion
                for innovation and reliability. We believe that technology should serve people, not
                the other way around.
              </p>
              <p className="text-lg text-gray-600">
                With a client-focused, quality-first approach, we've helped businesses across
                Thailand and beyond transform their operations through smart technology solutions.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Bangkok city skyline"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-primary mb-4">
                  <Lightbulb className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We stay at the forefront of technology trends to deliver cutting-edge solutions
                </p>
              </div>
              <div className="text-center">
                <div className="text-primary mb-4">
                  <Shield className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Reliability</h3>
                <p className="text-gray-600">
                  Our solutions are built to last with robust architecture and ongoing support
                </p>
              </div>
              <div className="text-center">
                <div className="text-primary mb-4">
                  <Users className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Client-Focused</h3>
                <p className="text-gray-600">
                  Your success is our priority - we listen, understand, and deliver accordingly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
