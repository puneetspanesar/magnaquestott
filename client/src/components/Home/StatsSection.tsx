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
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-white font-semibold">Industry Pioneer</h4>
              <p className="text-blue-200 text-sm text-center">Leading subscription management innovation since 1999</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-white font-semibold">Enterprise Grade</h4>
              <p className="text-blue-200 text-sm text-center">99.9% uptime with bank-level security standards</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-white font-semibold">Global Scale</h4>
              <p className="text-blue-200 text-sm text-center">Serving 300M+ subscribers across 50+ countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
