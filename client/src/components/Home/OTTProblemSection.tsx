import { ArrowRight, CheckCircle, UserMinus, Users, Globe, Zap, Target, Lightbulb, Building2, DollarSign } from "lucide-react";

export default function OTTProblemSection() {
  return (
    <section id="problem-section" className="py-20 bg-gradient-to-br from-primary via-primary to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center text-white">
          {/* Opening Question */}
          <div className="mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Target className="w-5 h-5 text-white mr-3" />
              <span className="text-white font-semibold">The OTT Challenge</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="block mb-4">Struggling with subscriber churn</span>
              <span className="block mb-4">and revenue stagnation in an</span>
              <span className="block text-blue-200">increasingly competitive OTT landscape?</span>
            </h2>
          </div>

          {/* Problem Statement */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-6">
                Today's OTT landscape demands more than just content delivery. You need the agility to experiment with pricing, 
                retain users, and expand across geographies — all while optimizing operations.
              </p>
              
              {/* Key Challenges Grid */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <UserMinus className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Rising Churn Rates</h4>
                  <p className="text-blue-200 text-sm">Users canceling faster than ever</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Complex Scaling</h4>
                  <p className="text-blue-200 text-sm">Multiple markets, currencies, regulations</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Pricing Pressure</h4>
                  <p className="text-blue-200 text-sm">Struggle to maximize ARPU</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Introduction */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                SURE by Magnaquest
              </h3>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                SURE by Magnaquest is a unified, cloud-native subscription platform built for modern OTT providers. Whether you're launching 
                new content bundles, managing freemium tiers, or scaling to new markets — SURE empowers you to grow without complexity.
              </p>
            </div>

            {/* Platform Features Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 rounded-2xl p-4 flex-shrink-0">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">Rapid Deployment</h4>
                    <p className="text-blue-200 leading-relaxed">
                      Launch your OTT platform in days, not months. Pre-built integrations and configurable workflows 
                      get you to market faster than traditional solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 rounded-2xl p-4 flex-shrink-0">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">Infinite Scale</h4>
                    <p className="text-blue-200 leading-relaxed">
                      From thousands to millions of subscribers. Cloud-native architecture automatically 
                      scales with your growth without performance degradation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 rounded-2xl p-4 flex-shrink-0">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">Global Operations</h4>
                    <p className="text-blue-200 leading-relaxed">
                      Expand internationally with built-in multi-currency support, local taxation handling, 
                      and regional compliance frameworks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 rounded-2xl p-4 flex-shrink-0">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">Smart Analytics</h4>
                    <p className="text-blue-200 leading-relaxed">
                      AI-powered insights predict churn, optimize pricing, and identify upsell opportunities 
                      to maximize your revenue per user.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button
                onClick={() => {
                  document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-white text-primary px-10 py-5 text-xl font-bold rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center mx-auto"
              >
                See How SURE Transforms OTT
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}