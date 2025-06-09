import { Heart, TrendingUp, Eye, Shield, Zap, Users2 } from "lucide-react";

export default function ValuePropsSection() {
  const valueProps = [
    {
      icon: Heart,
      title: "Build Strong Relationships",
      description: "With cutting-edge capabilities, flexible packages and exciting offers, address customers' pain points, nurturing relationships with them and ensuring customer loyalty",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: TrendingUp, 
      title: "Churn Management",
      description: "Profitably manage churn by cross-selling and upselling products and services, maximizing average revenue per user",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Eye,
      title: "Customer Insights", 
      description: "Get access to deeper customer insights using our easy-to-use visualisation tools and deliver personalized experiences",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with multi-level authentication, data encryption, and compliance with international standards including HIPAA",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Get up and running in just 2-6 weeks with our pre-integrated solution stack and expert implementation team",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Users2,
      title: "Partner Ecosystem",
      description: "Comprehensive partner management with revenue sharing, wallet management, and multi-level reseller support",
      color: "bg-indigo-100 text-indigo-600"
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
        
        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center animate-fadeIn">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Subscription Business?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join industry leaders like MBC, GTPL, and hundreds of other companies who trust 
            Magnaquest Sure for their subscription management needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
