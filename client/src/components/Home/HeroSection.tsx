import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, CheckCircle, TrendingUp, Users, Globe, Shield } from "lucide-react";

export default function HeroSection() {
  const keyFeatures = [
    { icon: TrendingUp, text: "Increase Revenue by 40%", color: "text-green-400" },
    { icon: Users, text: "Manage 300M+ Subscribers", color: "text-blue-400" },
    { icon: Globe, text: "Deploy in 50+ Countries", color: "text-purple-400" },
    { icon: Shield, text: "Enterprise-Grade Security", color: "text-orange-400" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-accent text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="hero-grid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="white" strokeWidth="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-100 font-medium">Trusted by Fortune 500 Companies</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="block text-white mb-4">Transform Your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 animate-pulse">
              Subscription Business
            </span>
            <span className="block text-white text-4xl lg:text-5xl mt-4 font-semibold">
              with Magnaquest SURE
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            The world's most comprehensive subscription management platform. 
            <span className="block mt-2 text-blue-200">
              Launch faster. Scale bigger. Revenue grows by 40% on average.
            </span>
          </p>
          
          {/* Key Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group">
                <feature.icon className={`w-8 h-8 ${feature.color} mb-3 mx-auto group-hover:scale-110 transition-transform`} />
                <p className="text-white font-medium text-sm leading-tight">{feature.text}</p>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/contact">
              <button className="group bg-white text-primary px-12 py-5 text-xl font-bold rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center">
                Start Free Demo
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <button className="group border-2 border-white/30 text-white px-12 py-5 text-xl font-bold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all flex items-center">
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Watch 3-Min Demo
            </button>
          </div>
          
          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-blue-200 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">250+</div>
              <div className="text-blue-200 font-medium">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">300M+</div>
              <div className="text-blue-200 font-medium">Subscribers Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-200 font-medium">Uptime Guarantee</div>
            </div>
          </div>
        </div>
        
        {/* Floating Customer Logos */}
        <div className="text-center opacity-60">
          <p className="text-blue-200 mb-4 font-medium">Trusted by industry leaders</p>
          <div className="flex justify-center items-center space-x-8 text-blue-300">
            <span className="font-semibold">BGE Home</span>
            <span>•</span>
            <span className="font-semibold">MBC Group</span>
            <span>•</span>
            <span className="font-semibold">STAR</span>
            <span>•</span>
            <span className="font-semibold">Discovery</span>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-auto">
          <path d="M0,50 C300,100 900,0 1200,50 L1200,120 L0,120 Z" fill="#df222b" fillOpacity="0.1"/>
        </svg>
      </div>
    </section>
  );
}
