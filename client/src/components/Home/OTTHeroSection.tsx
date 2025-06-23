import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Play, ArrowRight, CheckCircle, TrendingUp, Users, Globe, Shield, Award, Building2, Zap, Mail, Phone, User, Calendar } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertDemoRequest } from "@shared/schema";

export default function OTTHeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const demoMutation = useMutation({
    mutationFn: async (data: InsertDemoRequest) => {
      const response = await fetch("/api/demo-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to submit demo request");
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Demo Request Submitted!",
        description: "Our OTT experts will contact you within 24 hours to schedule your personalized demo.",
      });
      setFormData({ name: "", email: "", phone: "", organization: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/demo-requests"] });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact our support team.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    demoMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const keyFeatures = [
    { icon: TrendingUp, text: "Reduce Subscriber Churn", color: "text-white", description: "Personalized journeys and churn prediction analytics" },
    { icon: Users, text: "Increase Revenue Per User", color: "text-white", description: "Upsell, cross-sell, and bundle with ease" },
    { icon: Globe, text: "Global Reach, Local Compliance", color: "text-white", description: "Multi-currency, multi-taxation support" },
    { icon: Shield, text: "Pay As You Grow", color: "text-white", description: "Scalable cloud-native architecture" }
  ];

  return (
    <section id="demo-form" className="relative bg-gradient-to-br from-primary via-primary to-accent text-white overflow-hidden py-12">
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
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-24 items-start">
          {/* Left Column - Content */}
          <div className="text-left pr-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-100 font-medium">Trusted by Global OTT Leaders</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="block text-white mb-4">Streamline, Scale, and Succeed</span>
              <span className="block text-white mb-4">with Smarter</span>
              <span className="block text-3xl lg:text-5xl bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent font-bold">
                OTT Monetization
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed">
              Reduce churn and accelerate growth with a comprehensive end-to-end monetization suite.
            </p>
            
            {/* Key Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all group relative" title={feature.description}>
                  <feature.icon className={`w-6 h-6 ${feature.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <p className="text-white font-medium text-sm leading-tight">{feature.text}</p>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    {feature.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/80"></div>
                  </div>
                </div>
              ))}
            </div>
            

          </div>

          {/* Right Column - Demo Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Book a Personalized Demo</h3>
              <p className="text-blue-100">See how SURE transforms OTT monetization for your unique use case</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-semibold text-white mb-2 block">Full Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 pl-12 text-base bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white focus:bg-white/20"
                    placeholder="Your full name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-semibold text-white mb-2 block">Business Email *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 pl-12 text-base bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white focus:bg-white/20"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-semibold text-white mb-2 block">Phone Number *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 pl-12 text-base bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white focus:bg-white/20"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="organization" className="text-sm font-semibold text-white mb-2 block">OTT Platform/Company *</Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200" />
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    className="h-12 pl-12 text-base bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white focus:bg-white/20"
                    placeholder="Your OTT platform name"
                    required
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                disabled={demoMutation.isPending}
                className="w-full h-14 text-lg font-bold bg-white text-primary hover:bg-gray-100 rounded-xl transition-all transform hover:scale-105 shadow-lg"
              >
                {demoMutation.isPending ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary mr-3"></div>
                    Scheduling Demo...
                  </div>
                ) : (
                  <>
                    Book Your Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>

            <div className="text-center mt-6">
              <p className="text-blue-200 text-sm">
                Our OTT experts will contact you within 24 hours
              </p>
            </div>
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