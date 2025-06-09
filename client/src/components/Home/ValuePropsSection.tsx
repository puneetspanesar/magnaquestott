import { Heart, TrendingUp, Eye, Shield, Zap, Users2 } from "lucide-react";

export default function ValuePropsSection() {
  const valueProps = [
    {
      icon: Heart,
      title: "Build Strong Relationships",
      description: "With cutting-edge capabilities, flexible packages and exciting offers, address customers' pain points, nurturing relationships with them and ensuring customer loyalty",
      color: "bg-accent"
    },
    {
      icon: TrendingUp, 
      title: "Churn Management",
      description: "Profitably manage churn by cross-selling and upselling products and services, maximizing average revenue per user",
      color: "bg-primary"
    },
    {
      icon: Eye,
      title: "Customer Insights", 
      description: "Get access to deeper customer insights using our easy-to-use visualisation tools and deliver personalized experiences",
      color: "bg-accent"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with multi-level authentication, data encryption, and compliance with international standards including HIPAA",
      color: "bg-primary"
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Get up and running in just 2-6 weeks with our pre-integrated solution stack and expert implementation team",
      color: "bg-accent"
    },
    {
      icon: Users2,
      title: "Partner Ecosystem",
      description: "Comprehensive partner management with revenue sharing, wallet management, and multi-level reseller support",
      color: "bg-primary"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">
              Why Global Enterprises Choose Magnaquest Sure
            </h2>
            <p className="text-lg text-gray-600 font-normal mb-8">
              Comprehensive subscription management platform trusted by 250+ customers 
              across 50+ countries for over 25 years
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700 font-medium">25+ Years Industry Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-gray-700 font-medium">Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700 font-medium">99.9% Uptime Guarantee</span>
              </div>
            </div>
          </div>
          
          {/* Right grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {valueProps.map((prop, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary/30 transition-all animate-fadeIn group">
                  <div className="flex items-start space-x-3">
                    <prop.icon className={`w-6 h-6 ${prop.color === 'bg-primary' ? 'text-primary' : 'text-accent'} flex-shrink-0 mt-1`} />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{prop.title}</h3>
                      <p className="text-gray-600 text-sm font-normal leading-relaxed">{prop.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 gradient-premium rounded-3xl p-12 text-white text-center animate-fadeIn relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-6 tracking-tight">Ready to Transform Your Subscription Business?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg font-normal">
              Join industry leaders like MBC, GTPL, and hundreds of other companies who trust 
              Magnaquest Sure for their subscription management needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
