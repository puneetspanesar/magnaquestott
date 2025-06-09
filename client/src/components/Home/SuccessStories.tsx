import { Quote, ArrowRight, Star } from "lucide-react";

export default function SuccessStories() {
  const stories = [
    {
      company: "MBC",
      industry: "Broadcasting",
      region: "Middle East & North Africa",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=60",
      challenge: "Wanted an automated system to handle dynamic subscription management and needed help in customer acquisitions through customized notifications, offerings, promotions, and discounts",
      solution: "End-to-end capability to launch services across multiple countries with a multi-language interface. Implemented a credit distribution model for dealers and retailers using authentication.",
      result: "MBC was able to rapidly roll out its services across multiple GCC countries with ease through customized portals for customers and dealers.",
      metrics: [
        { label: "Countries Launched", value: "6+" },
        { label: "Subscriber Growth", value: "300%" },
        { label: "Implementation Time", value: "8 weeks" }
      ]
    },
    {
      company: "GTPL Hathway",
      industry: "Multi-Service Operator",
      region: "India",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=60",
      challenge: "Managing the complexities of billing while optimizing operational costs. Adapting to evolving marketing trends toward digital services like IPTV, OTT, and VAS. Enhancing offerings with multi-play services.",
      solution: "Comprehensive subscription management platform with integrated billing, CRM, and analytics. Multi-service bundling capabilities with automated provisioning and customer self-service portals.",
      result: "Successfully manages 10+ million subscribers across 800 cities in 15 states with 45,000 LCO partners, offering 26 indigenous channels on their platform.",
      metrics: [
        { label: "Subscribers", value: "10M+" },
        { label: "Cities Covered", value: "800+" },
        { label: "LCO Partners", value: "45K+" }
      ]
    },
    {
      company: "Thu Do Multimedia",
      industry: "Content & Media",
      region: "Vietnam",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=60",
      challenge: "Transforming subscription content management to enhance customer experience and streamline operations in the competitive Vietnamese media market.",
      solution: "Complete digital transformation with Magnaquest Sure's content subscription management platform, enabling personalized customer experiences and automated billing workflows.",
      result: "Achieved significant improvement in customer satisfaction and operational efficiency with streamlined content delivery and subscription management.",
      metrics: [
        { label: "Customer Satisfaction", value: "95%" },
        { label: "Operational Efficiency", value: "40%" },
        { label: "Revenue Growth", value: "25%" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Global Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how industry leaders have transformed their subscription businesses 
            with Magnaquest Sure across different markets and verticals
          </p>
        </div>
        
        <div className="space-y-12">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden animate-fadeIn">
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <img 
                      src={story.logo} 
                      alt={`${story.company} logo`}
                      className="h-12 w-auto mr-4"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{story.company}</h3>
                      <p className="text-gray-600">{story.industry} • {story.region}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                        Challenge
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{story.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        Solution
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{story.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        Result
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{story.result}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary to-accent p-8 lg:p-12 text-white">
                  <div className="flex items-center mb-6">
                    <Quote className="w-8 h-8 text-blue-200 mr-3" />
                    <span className="text-lg font-semibold">Key Metrics</span>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {story.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                        <div className="text-3xl font-bold mb-1">{metric.value}</div>
                        <div className="text-blue-100 text-sm">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center group">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders Worldwide</h3>
            <p className="text-gray-600 mb-6">
              From startups to Fortune 500 companies, our customers consistently achieve 
              exceptional results with Magnaquest Sure's comprehensive subscription platform.
            </p>
            <button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore More Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}