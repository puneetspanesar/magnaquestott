import { UserPlus, CreditCard, TrendingUp, Users } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: UserPlus,
      title: "Manage Acquisitions & Conversions",
      description: "Automate acquisition process, increasing conversions and sales.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      icon: CreditCard,
      title: "Billing & Revenue Management", 
      description: "Ensure recurring revenue on time and a hassle-free/smooth billing process.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      icon: TrendingUp,
      title: "Retention & Churn Management",
      description: "Reduce churn friction and improve overall customer experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
            Complete Subscription Management Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal">
            Next-generation platform designed to maximize revenue and minimize churn
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 hover:border-primary/30 transition-all animate-fadeIn p-6">
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-48 object-cover rounded-lg mb-4" 
              />
              <div className="flex items-center space-x-3 mb-3">
                <feature.icon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-sm font-normal mb-4">{feature.description}</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-xs text-gray-600">Real-time Processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span className="text-xs text-gray-600">Enterprise Security</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
