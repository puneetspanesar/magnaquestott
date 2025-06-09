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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group animate-fadeIn hover:transform hover:scale-105 transition-all duration-300">
              <img 
                src={feature.image} 
                alt={feature.title}
                className="rounded-xl shadow-lg w-full h-48 object-cover mb-6 group-hover:shadow-xl transition-shadow" 
              />
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/90 transition-colors">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm font-normal mb-4">{feature.description}</p>
              <a href="#" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
