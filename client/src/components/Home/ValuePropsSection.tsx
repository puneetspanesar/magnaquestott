import { Heart, TrendingUp, Eye, Shield, Zap, Users2 } from "lucide-react";

export default function ValuePropsSection() {
  const valueProps = [
    {
      icon: Heart,
      title: "Build Strong Relationships",
      description: "With cutting-edge capabilities, flexible packages and exciting offers, address customers' pain points, nurturing relationships with them and ensuring customer loyalty",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: TrendingUp, 
      title: "Churn Management",
      description: "Profitably manage churn by cross-selling and upselling products and services, maximizing average revenue per user",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Eye,
      title: "Customer Insights", 
      description: "Get access to deeper customer insights using our easy-to-use visualisation tools and deliver personalized experiences",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with multi-level authentication, data encryption, and compliance with international standards including HIPAA",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Get up and running in just 2-6 weeks with our pre-integrated solution stack and expert implementation team",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Users2,
      title: "Partner Ecosystem",
      description: "Comprehensive partner management with revenue sharing, wallet management, and multi-level reseller support",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Global Enterprises Choose Magnaquest Sure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive subscription management platform trusted by 250+ customers 
            across 50+ countries for over 25 years
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all animate-fadeIn group">
              <div className={`${prop.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <prop.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{prop.title}</h3>
              <p className="text-gray-600 leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 gradient-premium rounded-3xl p-12 text-white text-center animate-fadeIn relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Subscription Business?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
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
