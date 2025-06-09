import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="gradient-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInUp">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Render the Perfect{" "}
              <span className="text-blue-200">Subscription Experience</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Sure is a multidisciplinary subscription management platform that effortlessly 
              automates subscription management, rendering the perfect subscription experience 
              and building long-term subscription-based relationships.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button className="bg-accent text-white hover:bg-accent/90 px-8 py-4 text-lg font-semibold">
                  Schedule A Demo
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative animate-float">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Subscription management technology dashboard" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
