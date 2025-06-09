import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { InsertDemoRequest } from "@shared/schema";

export default function Contact() {
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
        title: "Message Sent Successfully",
        description: "Thank you for contacting us! We'll get back to you within 24 hours.",
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
        description: "Failed to send message. Please try again.",
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "sales@magnaquest.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91-40-XXXXXXXX",
      description: "Mon-Fri from 9am to 6pm IST"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Hyderabad, India",
      description: "Visit our headquarters"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      description: "We'll get back to you quickly"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slideInUp">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your subscription business? Get in touch with our experts 
              and discover how Magnaquest Sure can help you scale your revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slideInUp">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="organization" className="text-sm font-medium text-gray-700">Organization *</Label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleChange}
                      className="mt-2"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Tell us about your subscription business needs..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-white hover:bg-primary/90 py-3 font-semibold"
                  disabled={demoRequestMutation.isPending}
                >
                  {demoRequestMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Have questions? We're here to help. Reach out to us through any of these channels.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary text-white p-3 rounded-full flex-shrink-0">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-primary font-medium">{info.content}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Image */}
              <div className="mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Magnaquest office in Hyderabad" 
                  className="rounded-xl shadow-lg w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="animate-fadeIn">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly can we get started?</h3>
              <p className="text-gray-600">You can be up and running with out-of-the-box features in just six weeks. Our implementation team will guide you through the entire process.</p>
            </div>
            
            <div className="animate-fadeIn">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you support multiple currencies?</h3>
              <p className="text-gray-600">Yes, Magnaquest Sure supports multi-currency payments and billing across all major currencies worldwide.</p>
            </div>
            
            <div className="animate-fadeIn">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Is the platform secure and compliant?</h3>
              <p className="text-gray-600">Absolutely. We maintain the highest security standards and compliance requirements including HIPAA for healthcare customers.</p>
            </div>
            
            <div className="animate-fadeIn">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What kind of support do you provide?</h3>
              <p className="text-gray-600">We offer comprehensive support including dedicated customer success managers, technical support, and extensive documentation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
