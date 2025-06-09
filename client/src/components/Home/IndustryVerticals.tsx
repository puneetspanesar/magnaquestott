import { Tv, Radio, Building2, Globe2, Smartphone, Factory, Hospital, GraduationCap } from "lucide-react";

export default function IndustryVerticals() {
  const industries = [
    {
      icon: Tv,
      title: "Broadcasting & Media",
      description: "Complete subscription management for traditional broadcasters, cable operators, and media companies",
      features: ["Content Monetization", "Subscriber Analytics", "Multi-Platform Support"]
    },
    {
      icon: Smartphone,
      title: "OTT & Streaming",
      description: "End-to-end solutions for over-the-top content providers and streaming platforms",
      features: ["Flexible Billing", "Global Payments", "Content Analytics"]
    },
    {
      icon: Radio,
      title: "Telecommunications",
      description: "Robust billing and subscriber management for telecom operators and service providers",
      features: ["Usage-Based Billing", "Network Integration", "Customer Lifecycle"]
    },
    {
      icon: Building2,
      title: "Enterprise Solutions",
      description: "Scalable subscription management for B2B software and enterprise service providers",
      features: ["Multi-Tenant Support", "Enterprise APIs", "Custom Workflows"]
    },
    {
      icon: Globe2,
      title: "Multi-Service Operators",
      description: "Comprehensive platform for MSOs managing diverse service portfolios across regions",
      features: ["Service Bundling", "Cross-Platform Billing", "Regional Compliance"]
    },
    {
      icon: Factory,
      title: "Manufacturing & IoT",
      description: "Subscription billing for connected devices, industrial IoT, and manufacturing services",
      features: ["Device Management", "Usage Tracking", "Predictive Billing"]
    },
    {
      icon: Hospital,
      title: "Healthcare",
      description: "HIPAA-compliant subscription management for healthcare providers and medical platforms",
      features: ["Compliance Ready", "Patient Data Security", "Medical Billing"]
    },
    {
      icon: GraduationCap,
      title: "Education & E-Learning",
      description: "Flexible billing solutions for educational institutions and online learning platforms",
      features: ["Student Management", "Course Subscriptions", "Academic Cycles"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
            Magnaquest Sure for Every Industry
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-normal">
            Our platform adapts to your industry's unique requirements, delivering specialized 
            subscription management solutions across diverse verticals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg p-8 border border-gray-200 hover:border-primary/30 transition-all animate-fadeIn group">
              <div className="bg-primary p-6 rounded-xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <industry.icon className="w-10 h-10 text-white" />
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 text-sm font-normal leading-relaxed">{industry.description}</p>
              </div>

              <div className="space-y-2">
                {industry.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry-Specific Expertise</h3>
            <p className="text-gray-600 mb-6">
              With 25+ years of experience, we understand the unique challenges and requirements 
              of each industry, delivering tailored solutions that drive business growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Regulatory Compliance
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                Industry Standards
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Custom Integrations
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                Scalable Architecture
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}