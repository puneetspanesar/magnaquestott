import { Play, Tv, Heart } from "lucide-react";
import { Link } from "wouter";

export default function IndustrySolutions() {
  const solutions = [
    {
      icon: Play,
      title: "OTT & Streaming",
      description: "Quick monetization, smarter OTT subscription billing, and scalable subscriptions for streaming platforms",
      features: [
        "SVOD, TVOD, Hybrid Models",
        "Multi-currency payments", 
        "Partner billing & revenue sharing"
      ],
      link: "/solutions/ott"
    },
    {
      icon: Tv,
      title: "PayTV & Cable",
      description: "Comprehensive billing and customer management solutions for traditional and digital TV services",
      features: [
        "Multi-service bundling",
        "Usage-based billing",
        "Customer self-service"
      ],
      link: "/solutions/paytv"
    },
    {
      icon: Heart,
      title: "Healthcare & Wellness", 
      description: "Secure, compliant subscription management for healthcare services and digital wellness platforms",
      features: [
        "HIPAA compliance",
        "Flexible pricing models",
        "Patient data security"
      ],
      link: "/solutions/healthcare"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
          <p className="text-xl text-gray-600">Tailored subscription management for every industry vertical</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group animate-fadeIn">
              <div className="flex items-center justify-center mx-auto mb-6">
                <solution.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={solution.link}>
                <span className="text-primary font-semibold hover:text-primary/80 transition-colors cursor-pointer">
                  Learn More →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
