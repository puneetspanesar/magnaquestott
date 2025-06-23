import { Zap, Users, Globe, Target, ArrowRight } from "lucide-react";

export default function OTTValuePropsSection() {
  const features = [
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Launch your OTT platform in days, not months. Pre-built integrations and configurable workflows get you to market faster than traditional solutions."
    },
    {
      icon: Users,
      title: "Infinite Scale",
      description: "From thousands to millions of subscribers. Cloud-native architecture automatically scales with your growth without performance degradation."
    },
    {
      icon: Globe,
      title: "Global Operations", 
      description: "Expand internationally with built-in multi-currency support, local taxation handling, and regional compliance frameworks."
    },
    {
      icon: Target,
      title: "Smart Analytics",
      description: "AI-powered insights predict churn, optimize pricing, and identify upsell opportunities to maximize your revenue per user."
    }
  ];

  return (
    <section id="solutions-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            SURE by Magnaquest
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            SURE by Magnaquest is a unified, cloud-native subscription platform built for modern OTT providers. Whether you're launching 
            new content bundles, managing freemium tiers, or scaling to new markets — SURE empowers you to grow without complexity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-all group border border-gray-200">
              <div className="flex items-start space-x-6">
                <div className="bg-primary rounded-2xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}