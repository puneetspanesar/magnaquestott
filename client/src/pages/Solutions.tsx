import { Play, Tv, Heart, Building2, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Solutions() {
  const solutionsBySize = [
    {
      icon: Zap,
      title: "Startups",
      description: "Quick setup and affordable pricing to get your subscription business off the ground",
      features: ["Out-of-the-box features", "Rapid deployment", "Cost-effective pricing"]
    },
    {
      icon: Users,
      title: "Scaling Up",
      description: "Advanced features and flexibility to support your growing customer base",
      features: ["Advanced analytics", "Custom integrations", "Multi-currency support"]
    },
    {
      icon: Building2,
      title: "Enterprise",
      description: "Enterprise-grade security, compliance, and customization for large-scale operations",
      features: ["Enterprise security", "Custom workflows", "Dedicated support"]
    }
  ];

  const solutionsByIndustry = [
    {
      icon: Play,
      title: "OTT & Streaming",
      description: "Comprehensive subscription management for streaming platforms and content providers",
      features: ["SVOD/TVOD models", "Content monetization", "Partner revenue sharing"],
      link: "/solutions/ott"
    },
    {
      icon: Tv,
      title: "PayTV & Cable",
      description: "Traditional and digital TV service billing with multi-service bundling capabilities",
      features: ["Multi-service bundling", "Usage-based billing", "Customer self-service"],
      link: "/solutions/paytv"
    },
    {
      icon: Heart,
      title: "Healthcare & Wellness",
      description: "HIPAA-compliant subscription management for healthcare and wellness services",
      features: ["HIPAA compliance", "Patient data security", "Flexible pricing models"],
      link: "/solutions/healthcare"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slideInUp">
            <h1 className="text-5xl font-bold mb-6">Subscription Solutions for Every Business</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From startups to enterprises, across all industries - discover how Magnaquest Sure 
              can transform your subscription business model and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions by Size */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Solutions by Company Size</h2>
            <p className="text-xl text-gray-600">Tailored solutions that grow with your business</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {solutionsBySize.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all animate-fadeIn">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <solution.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{solution.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{solution.description}</p>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link href="/contact">
                    <span className="text-primary font-semibold hover:text-primary/80 transition-colors cursor-pointer">
                      Learn More →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600">Specialized features and compliance for your industry</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {solutionsByIndustry.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all animate-fadeIn">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <solution.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{solution.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{solution.description}</p>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link href={solution.link || "/contact"}>
                    <span className="text-primary font-semibold hover:text-primary/80 transition-colors cursor-pointer">
                      Learn More →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Subscription Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 250+ companies already using Magnaquest Sure to manage their subscription revenue.
            </p>
            <Link href="/contact">
              <button className="bg-accent text-white hover:bg-accent/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Schedule a Demo
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
