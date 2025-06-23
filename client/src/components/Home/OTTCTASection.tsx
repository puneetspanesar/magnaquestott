import { Link } from "wouter";
import { Calendar, Download, MessageCircle, ArrowRight, Play, FileText, Users } from "lucide-react";

export default function OTTCTASection() {
  const ctaOptions = [
    {
      icon: Calendar,
      title: "Book a Personalized Demo",
      description: "See how SURE transforms OTT monetization for your unique use case",
      buttonText: "Schedule Demo",
      buttonStyle: "bg-gradient-to-r from-primary to-accent text-white hover:shadow-2xl transform hover:scale-105",
      href: "/contact",
      accent: "from-blue-500 to-blue-600"
    },
    {
      icon: Download,
      title: "Download the OTT Monetization Guide",
      description: "Learn how leading providers reduce churn & boost ARPU",
      buttonText: "Get Free Guide",
      buttonStyle: "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white",
      href: "/resources",
      accent: "from-green-500 to-green-600"
    },
    {
      icon: MessageCircle,
      title: "Talk to an Expert",
      description: "Quick strategy call with our OTT solution consultants",
      buttonText: "Start Conversation",
      buttonStyle: "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-black",
      href: "/contact",
      accent: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your
            <span className="text-primary block mt-2">OTT Monetization?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the best way to get started with SURE and unlock your platform's full revenue potential.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((cta, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all group border border-gray-100 relative overflow-hidden">
              {/* Background Gradient */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cta.accent}`}></div>
              
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${cta.accent} mb-6 group-hover:scale-110 transition-transform`}>
                <cta.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{cta.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{cta.description}</p>
              
              <Link href={cta.href}>
                <button className={`w-full px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center group ${cta.buttonStyle} shadow-lg`}>
                  {cta.buttonText}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Alternative CTA Section */}
        <div className="bg-gradient-to-r from-primary via-primary to-accent rounded-3xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Explore a Tailored Roadmap for Your Platform
            </h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Get a customized strategy session to understand how SURE can specifically address your OTT monetization challenges and growth objectives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <button className="group bg-white text-primary px-10 py-5 text-xl font-bold rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Book Strategy Call
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <button className="group border-2 border-white/30 text-white px-10 py-5 text-xl font-bold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all flex items-center">
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div>Watch Success Stories</div>
                  <div className="text-sm font-normal text-blue-200">See how others transformed their OTT business</div>
                </div>
              </button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2 text-blue-200" />
                  <span className="text-blue-100">Expert Consultation</span>
                </div>
                <div className="flex items-center justify-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-200" />
                  <span className="text-blue-100">Custom Roadmap</span>
                </div>
                <div className="flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-200" />
                  <span className="text-blue-100">Flexible Timing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}