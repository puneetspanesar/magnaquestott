import { ArrowRight, TrendingDown, TrendingUp, Package, CreditCard, Zap, Globe, Award } from "lucide-react";

export default function OTTCTASection() {
  const achievements = [
    {
      icon: TrendingDown,
      title: "Reduce Subscriber Churn",
      description: "Deliver personalized journeys, dynamic offers, and intelligent engagement — all backed by churn prediction analytics and retention automation."
    },
    {
      icon: TrendingUp,
      title: "Increase Revenue Per User",
      description: "Upsell, cross-sell, and bundle with ease. Experiment with monetization models like AVOD, SVOD, TVOD, and hybrid — all from a single, configurable platform."
    },
    {
      icon: Package,
      title: "A Complete OTT Monetization Solution",
      description: "From subscription lifecycle management to payment integrations, user entitlements, regional compliance, and analytics — everything you need is built in."
    },
    {
      icon: CreditCard,
      title: "Pay As You Grow",
      description: "Whether you serve 10,000 or 10 million users, SURE's scalable, cloud-native architecture grows with you — no massive upfront investment required."
    },
    {
      icon: Zap,
      title: "Faster Launches, Smarter Ops",
      description: "Roll out new offerings in days, not months. Automate renewals, invoicing, entitlements, and more with intelligent workflows and no-code configuration."
    },
    {
      icon: Globe,
      title: "Global Reach, Local Compliance",
      description: "Operate across borders with support for multi-currency, multi-taxation, and geo-specific business logic."
    }
  ];

  return (
    <section id="benefits-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What You Can Achieve with SURE
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-xl p-3 flex-shrink-0">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proven Results */}
        <div className="bg-primary rounded-2xl p-8 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-6 h-6 text-white mr-2" />
            <span className="text-lg font-bold">Proven Across OTT Use Cases</span>
          </div>
          <p className="text-blue-100 mb-6">
            Trusted by global OTT and streaming brands to manage over $300M+ in recurring revenues across 50+ countries.
          </p>
          
          <button
            onClick={() => {
              document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group bg-white text-primary px-8 py-4 text-lg font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center mx-auto"
          >
            Schedule Your SURE Demo Today
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}