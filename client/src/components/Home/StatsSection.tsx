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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
            Leading the Subscription Revolution for 25+ Years
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-normal">
            Our flagship product, Sure, offers competitive subscription lifecycle management 
            software capabilities that are trusted by enterprises across the globe
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-8 border border-gray-200 hover:border-primary/30 transition-all animate-fadeIn group">
              <div className={`${stat.color} p-6 rounded-xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2 tracking-tight">{stat.number}</div>
                <div className="text-lg font-medium text-gray-900 mb-3">{stat.label}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
            <p className="text-gray-600 mb-6">
              From Pay TV and OTT platforms to Healthcare and B2B enterprises, 
              we've enabled subscription success across every industry vertical.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span className="bg-gray-100 px-4 py-2 rounded-full">Pay TV</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">OTT & Streaming</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Broadband</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Healthcare</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">B2B Enterprise</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Media & Publications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
