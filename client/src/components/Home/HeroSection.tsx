import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, CheckCircle } from "lucide-react";

export default function HeroSection() {
  const highlights = [
    "Launch OTT Platform in 2 Weeks",
    "25+ Years of Industry Excellence", 
    "250+ Global Customers",
    "50+ Countries Served"
  ];

  return (
    <section className="gradient-primary text-white py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slideInUp">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 inline-block mb-6">
              <span className="text-blue-100 text-sm font-medium">🚀 Inspired By The Future</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6 tracking-tight">
              Increase{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Subscription Revenue
              </span>
              <br />
              With Magnaquest
            </h1>
            
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl font-normal">
              SURE is an end-to-end Subscription, Billing and CRM platform built around 
              a solid CRM core to manage and handle the entire subscriber lifecycle seamlessly.
            </p>
            
            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2 text-blue-100">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm font-medium">{highlight}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <button className="btn-premium text-white px-10 py-4 text-lg font-bold rounded-xl group flex items-center justify-center">
                  Schedule A Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="btn-outline-premium px-10 py-4 text-lg font-bold rounded-xl backdrop-blur-sm group flex items-center justify-center">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>
            
            <div className="mt-8 flex items-center space-x-8 text-blue-200">
              <div className="text-center">
                <div className="text-2xl font-bold">2 Weeks</div>
                <div className="text-sm">OTT Launch</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Magnaquest Sure subscription management platform dashboard" 
                className="rounded-3xl shadow-2xl w-full h-auto border border-white/20" 
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white/20 backdrop-blur-md rounded-xl p-4 animate-pulse">
                <div className="text-white font-semibold text-sm">300M+ Subscribers</div>
                <div className="text-blue-200 text-xs">Managed Monthly</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-md rounded-xl p-4 animate-pulse delay-1000">
                <div className="text-white font-semibold text-sm">$Multi-Billion</div>
                <div className="text-blue-200 text-xs">Revenue Processed</div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-3xl blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
