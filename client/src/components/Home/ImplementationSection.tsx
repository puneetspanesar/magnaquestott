import { Rocket, DollarSign, Zap } from "lucide-react";

export default function ImplementationSection() {
  const benefits = [
    {
      icon: Rocket,
      title: "Quick Launch",
      description: "Embarking with out-of-the-box features in just six weeks",
      color: "bg-primary"
    },
    {
      icon: DollarSign,
      title: "Best Value",
      description: "Speedier Implementation with maximum ROI",
      color: "bg-accent"
    },
    {
      icon: Zap,
      title: "Easy Scale",
      description: "Thrive and Scale with current and more customers",
      color: "bg-primary"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeIn">
            <img 
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Global enterprise solutions implementation" 
              className="rounded-2xl shadow-lg w-full h-auto" 
            />
          </div>
          <div className="animate-slideInUp">
            <h2 className="section-title mb-8">
              Fast Implementation, Lasting Results
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <benefit.icon className={`w-6 h-6 mr-4 flex-shrink-0 ${benefit.color === 'bg-primary' ? 'text-primary' : 'text-accent'}`} />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 font-normal">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
