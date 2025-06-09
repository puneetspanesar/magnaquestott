import { Tv, Radio, Building2, Globe2, Smartphone, Factory, Hospital, GraduationCap, Wifi, FileText } from "lucide-react";

export default function IndustryVerticals() {
  const industries = [
    {
      icon: Tv,
      title: "Pay TV",
      description: "Complete subscription management for traditional broadcasters, cable operators, and media companies",
      features: ["Content Monetization", "Subscriber Analytics", "Multi-Platform Support"],
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "OTT & Streaming",
      description: "End-to-end solutions for over-the-top content providers and streaming platforms",
      features: ["Flexible Billing", "Global Payments", "Content Analytics"],
      color: "text-accent"
    },
    {
      icon: Wifi,
      title: "Broadband",
      description: "Robust billing and subscriber management for internet service providers",
      features: ["Usage-Based Billing", "Network Integration", "Customer Lifecycle"],
      color: "text-primary"
    },
    {
      icon: Hospital,
      title: "Healthcare",
      description: "HIPAA-compliant subscription management for healthcare providers and medical platforms",
      features: ["Compliance Ready", "Patient Data Security", "Medical Billing"],
      color: "text-accent"
    },
    {
      icon: Building2,
      title: "B2B Enterprise",
      description: "Scalable subscription management for B2B software and enterprise service providers",
      features: ["Multi-Tenant Support", "Enterprise APIs", "Custom Workflows"],
      color: "text-primary"
    },
    {
      icon: FileText,
      title: "Media & Publications",
      description: "Subscription solutions for digital publications, news platforms, and content creators",
      features: ["Content Access Control", "Subscription Tiers", "Analytics Dashboard"],
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="section-title">
            Magnaquest Sure for Every Industry
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Our platform adapts to your industry's unique requirements, delivering specialized 
            subscription management solutions across diverse verticals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary/30 transition-all animate-fadeIn group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <industry.icon className={`w-8 h-8 ${industry.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="card-title mb-2">{industry.title}</h3>
                  <p className="body-text mb-4">{industry.description}</p>
                  <div className="grid grid-cols-1 gap-1">
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        <span className="feature-item">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center animate-fadeIn">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry-Specific Expertise</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            With 25+ years of experience, we understand the unique challenges and requirements 
            of each industry, delivering tailored solutions that drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
              Regulatory Compliance
            </span>
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
              Industry Standards
            </span>
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
              Custom Integrations
            </span>
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
              Scalable Architecture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}