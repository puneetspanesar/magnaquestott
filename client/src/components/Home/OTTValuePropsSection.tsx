import { Users, TrendingUp, Package, CreditCard, Zap, Globe, CheckCircle, Award } from "lucide-react";

export default function OTTValuePropsSection() {
  const valueProps = [
    {
      icon: Users,
      title: "Reduce Subscriber Churn",
      description: "Deliver personalized journeys, dynamic offers, and intelligent engagement — all backed by churn prediction analytics and retention automation.",
      features: ["Churn prediction analytics", "Personalized user journeys", "Dynamic retention offers", "Automated engagement workflows"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Increase Revenue Per User",
      description: "Upsell, cross-sell, and bundle with ease. Experiment with monetization models like AVOD, SVOD, TVOD, and hybrid — all from a single, configurable platform.",
      features: ["AVOD, SVOD, TVOD models", "Smart bundling engine", "A/B testing for pricing", "Cross-sell automation"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Package,
      title: "A Complete OTT Monetization Solution",
      description: "From subscription lifecycle management to payment integrations, user entitlements, regional compliance, and analytics — everything you need is built in.",
      features: ["Subscription lifecycle", "Payment integrations", "Content entitlements", "Regional compliance"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: CreditCard,
      title: "Pay As You Grow",
      description: "Whether you serve 10,000 or 10 million users, SURE's scalable, cloud-native architecture grows with you — no massive upfront investment required.",
      features: ["Cloud-native architecture", "Auto-scaling infrastructure", "Usage-based pricing", "No upfront costs"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Faster Launches, Smarter Ops",
      description: "Roll out new offerings in days, not months. Automate renewals, invoicing, entitlements, and more with intelligent workflows and no-code configuration.",
      features: ["No-code configuration", "Automated renewals", "Smart invoicing", "Rapid deployment"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Globe,
      title: "Global Reach, Local Compliance",
      description: "Operate across borders with support for multi-currency, multi-taxation, and geo-specific business logic.",
      features: ["Multi-currency support", "Local tax compliance", "Geo-specific logic", "Regional regulations"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="solutions-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4 mr-2" />
            What You Can Achieve with SURE
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your OTT Business
            <span className="text-primary block mt-2">with Proven Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SURE by Magnaquest delivers the complete toolkit you need to reduce churn, increase revenue, and scale globally.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all group border border-gray-100">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${prop.color} mb-6 group-hover:scale-110 transition-transform`}>
                <prop.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{prop.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{prop.description}</p>
              
              <div className="space-y-3">
                {prop.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proven Results Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Proven Across OTT Use Cases
            </h3>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Trusted by global OTT and streaming brands to manage over $300M+ in recurring revenues across 50+ countries.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">$300M+</div>
                <div className="text-gray-300">Recurring Revenue Managed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">25+</div>
                <div className="text-gray-300">Years of Industry Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}