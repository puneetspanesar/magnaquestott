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
    },
    {
      icon: Users,
      title: "Customer Relationship Management",
      description: "Cultivate and nurture everlasting customer relationships.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
            Complete Subscription Management Solutions
          </h2>
          <p className="text-lg text-gray-600 font-normal">
            A next-generation recurring subscription billing platform designed to help companies 
            maximize subscription revenue, build, nurture relationships and minimize customer churn.
          </p>
        </div>
        
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 hover:border-primary/30 transition-all animate-fadeIn overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-0">
                <div className="lg:col-span-1">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-64 lg:h-full object-cover" 
                  />
                </div>
                <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-700">Real-time Processing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-gray-700">Enterprise Security</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-700">Scalable Architecture</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-gray-700">Global Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
