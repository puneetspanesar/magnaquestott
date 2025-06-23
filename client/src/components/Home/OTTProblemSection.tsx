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
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
              <div className="flex items-center justify-center mb-8">
                <Lightbulb className="w-8 h-8 text-yellow-300 mr-4" />
                <span className="text-2xl font-bold text-white">The Solution</span>
              </div>
              
              <h3 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
                SURE by Magnaquest
              </h3>
              
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                A unified, cloud-native subscription platform built for modern OTT providers. Whether you're launching 
                new content bundles, managing freemium tiers, or scaling to new markets — SURE empowers you to grow without complexity.
              </p>
              
              {/* Key Benefits */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center bg-white/5 rounded-2xl p-4">
                  <Zap className="w-8 h-8 text-yellow-300 mr-4 flex-shrink-0" />
                  <div className="text-left">
                    <h4 className="font-bold text-white">Lightning Fast</h4>
                    <p className="text-blue-200 text-sm">Deploy in days, not months</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-white/5 rounded-2xl p-4">
                  <Users className="w-8 h-8 text-blue-300 mr-4 flex-shrink-0" />
                  <div className="text-left">
                    <h4 className="font-bold text-white">Scales Infinitely</h4>
                    <p className="text-blue-200 text-sm">From thousands to millions</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-white/5 rounded-2xl p-4">
                  <Globe className="w-8 h-8 text-green-300 mr-4 flex-shrink-0" />
                  <div className="text-left">
                    <h4 className="font-bold text-white">Global Ready</h4>
                    <p className="text-blue-200 text-sm">Multi-currency & compliance</p>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="mt-8">
                <button
                  onClick={() => {
                    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group bg-white text-primary px-8 py-4 text-lg font-bold rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center mx-auto"
                >
                  See How SURE Transforms OTT
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}