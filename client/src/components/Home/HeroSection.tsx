import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, CheckCircle, TrendingUp, Users, Globe, Shield, Award, Building2, Zap } from "lucide-react";
import EventBanner from './EventBanner';

export default function HeroSection() {
  const keyFeatures = [
    { icon: TrendingUp, text: "Increase Revenue by 40%", color: "text-white", description: "Advanced analytics and optimization strategies" },
    { icon: Users, text: "Manage 300M+ Subscribers", color: "text-white", description: "Scalable platform handling millions of users" },
    { icon: Globe, text: "Deploy in 50+ Countries", color: "text-white", description: "Global infrastructure with local compliance" },
    { icon: Shield, text: "Enterprise-Grade Security", color: "text-white", description: "Bank-level security with 99.9% uptime" }
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
        <div className="text-center mb-16 pt-16">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-100 font-medium">Trusted by Fortune 500 Companies</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="block text-white mb-4">Drive, Grow and Scale</span>
            <span className="block text-white mb-4">your Subscription Business</span>
            <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent font-bold">
              with SURE by Magnaquest
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
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group relative" title={feature.description}>
                <feature.icon className={`w-8 h-8 ${feature.color} mb-3 mx-auto group-hover:scale-110 transition-transform`} />
                <p className="text-white font-medium text-sm leading-tight">{feature.text}</p>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  {feature.description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/80"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/contact">
              <button className="group bg-white text-primary px-12 py-5 text-xl font-bold rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center">
                Start Your Free Trial
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <button className="group border-2 border-white/30 text-white px-12 py-5 text-xl font-bold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all flex items-center">
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div>Watch Product Tour</div>
                <div className="text-sm font-normal text-blue-200">See how global leaders grow with SURE</div>
              </div>
            </button>
          </div>
          
          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <Award className="w-12 h-12 text-blue-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">25+</div>
              <div className="text-blue-200 font-medium">Years of Industry</div>
              <div className="text-blue-200 font-medium">Expertise</div>
            </div>
            <div className="text-center group">
              <Building2 className="w-12 h-12 text-blue-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">250+</div>
              <div className="text-blue-200 font-medium">Leading Clients</div>
              <div className="text-blue-200 font-medium">Worldwide</div>
            </div>
            <div className="text-center group">
              <Users className="w-12 h-12 text-blue-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">300M+</div>
              <div className="text-blue-200 font-medium">Subscriptions</div>
              <div className="text-blue-200 font-medium">Seamlessly Managed</div>
            </div>
            <div className="text-center group">
              <Zap className="w-12 h-12 text-blue-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">99.9%</div>
              <div className="text-blue-200 font-medium">Uptime – Trusted</div>
              <div className="text-blue-200 font-medium">Reliability</div>
            </div>
          </div>
        </div>
        
        {/* Floating Customer Logos */}
        <div className="text-center opacity-60 mb-20">
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
      
      {/* Event Banner Overlay */}
      <EventBanner />
    </section>
  );
}
