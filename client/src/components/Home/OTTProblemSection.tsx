import { AlertTriangle, TrendingDown, Users, DollarSign, Globe, Zap } from "lucide-react";

export default function OTTProblemSection() {
  const challenges = [
    {
      icon: TrendingDown,
      title: "Subscriber Churn",
      description: "High cancellation rates eating into your revenue growth",
      color: "text-red-500"
    },
    {
      icon: DollarSign,
      title: "Revenue Stagnation", 
      description: "Struggling to increase ARPU in competitive markets",
      color: "text-orange-500"
    },
    {
      icon: Users,
      title: "Complex User Management",
      description: "Managing freemium tiers and content bundles manually",
      color: "text-yellow-500"
    },
    {
      icon: Globe,
      title: "Global Expansion Challenges",
      description: "Multi-currency, taxation, and compliance complexities",
      color: "text-blue-500"
    }
  ];

  return (
    <section id="problem-section" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The OTT Reality Check
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Struggling with subscriber churn and revenue stagnation in an 
            <span className="text-primary block mt-2">increasingly competitive OTT landscape?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Today's OTT landscape demands more than just content delivery. You need the agility to experiment with pricing, 
            retain users, and expand across geographies — all while optimizing operations.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors mb-4">
                <challenge.icon className={`w-6 h-6 ${challenge.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{challenge.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{challenge.description}</p>
            </div>
          ))}
        </div>

        {/* Solution Introduction */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Meet SURE by Magnaquest
            </h3>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              A unified, cloud-native subscription platform built for modern OTT providers. Whether you're launching 
              new content bundles, managing freemium tiers, or scaling to new markets — SURE empowers you to grow without complexity.
            </p>
            <div className="flex items-center justify-center space-x-8 text-blue-200">
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                <span className="font-semibold">Lightning Fast Setup</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-semibold">Scales to Millions</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span className="font-semibold">Global Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}