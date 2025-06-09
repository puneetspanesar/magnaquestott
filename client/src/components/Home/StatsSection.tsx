import { Calendar, Users, Globe, DollarSign } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Calendar,
      number: "25+",
      label: "Years of Excellence",
      description: "Pioneer in enabling subscription businesses across the world",
      color: "bg-primary"
    },
    {
      icon: Users,
      number: "250+",
      label: "Global Customers",
      description: "Serving 300 million+ subscribers every month",
      color: "bg-accent"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries Served",
      description: "Including India, South East Asia, Africa, LATAM, JAPAC and Europe",
      color: "bg-primary"
    },
    {
      icon: DollarSign,
      number: "$Multi-Billion",
      label: "Revenue Processed",
      description: "Managing subscription revenue at enterprise scale",
      color: "bg-accent"
    }
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="section-title text-white">
            Leading the Subscription Revolution for 25+ Years
          </h2>
          <p className="section-subtitle text-blue-100 max-w-2xl mx-auto">
            Our flagship product, Sure, offers enterprise-grade subscription management trusted globally
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fadeIn">
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-lg font-medium text-blue-100 mb-2">{stat.label}</div>
              <div className="text-sm text-blue-200 leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-blue-200">
            <span>Industry Pioneer</span>
            <span>•</span>
            <span>Enterprise Grade</span>
            <span>•</span>
            <span>Global Scale</span>
          </div>
        </div>
      </div>
    </section>
  );
}
