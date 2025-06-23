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


        </div>
      </div>
    </section>
  );
}