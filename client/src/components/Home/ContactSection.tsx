import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertDemoRequest } from "@shared/schema";
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Zap } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: ""
  });

  const demoRequestMutation = useMutation({
    mutationFn: async (data: InsertDemoRequest) => {
      return apiRequest("POST", "/api/demo-request", data);
    },
    onSuccess: () => {
      toast({
        title: "Demo Request Submitted",
        description: "Thank you for your interest! We'll contact you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    demoRequestMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const benefits = [
    "Personalized demo tailored to your industry",
    "ROI analysis and implementation roadmap",
    "Direct access to our technical experts",
    "Free proof of concept setup"
  ];

  const contactInfo = [
    { icon: Phone, label: "24/7 Support", value: "+1 (555) 123-4567" },
    { icon: Mail, label: "Sales Inquiries", value: "sales@magnaquest.com" },
    { icon: MapPin, label: "Global HQ", value: "New York, London, Singapore" },
    { icon: Clock, label: "Response Time", value: "< 2 hours" }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-accent overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join 250+ enterprises who've revolutionized their subscription management with Magnaquest SURE. 
            Let's discuss how we can accelerate your growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Benefits & Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* What You Get */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">What You Get</h3>
              </div>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-200">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right: Enhanced Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Schedule Your Demo</h3>
                  <p className="text-gray-600">See Magnaquest SURE in action with a personalized demonstration</p>
                </div>
                <div className="hidden md:block">
                  <div className="bg-primary/10 rounded-full p-4">
                    <div className="bg-primary rounded-full p-3">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-gray-800 mb-2 block">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12 text-base border-2 border-gray-200 focus:border-primary"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-800 mb-2 block">Business Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12 text-base border-2 border-gray-200 focus:border-primary"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-800 mb-2 block">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12 text-base border-2 border-gray-200 focus:border-primary"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="organization" className="text-sm font-semibold text-gray-800 mb-2 block">Company Name *</Label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleChange}
                      className="h-12 text-base border-2 border-gray-200 focus:border-primary"
                      placeholder="Your company name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-gray-800 mb-2 block">Tell us about your needs</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="text-base border-2 border-gray-200 focus:border-primary"
                    placeholder="Describe your current subscription management challenges and goals..."
                  />
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 px-8 text-lg font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:transform-none"
                    disabled={demoRequestMutation.isPending}
                  >
                    {demoRequestMutation.isPending ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Scheduling Your Demo...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span>Get My Free Demo</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    )}
                  </button>
                  <p className="text-sm text-gray-500 text-center mt-3">
                    No commitment required. Setup takes less than 30 minutes.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
