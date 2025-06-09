export default function CustomerLogos() {
  const featuredCustomers = [
    "BGE Home", "GTPL", "MBC Group", "UTV/Disney", "STAR", "NGC", 
    "Times Network", "Discovery", "Azam", "SITI Networks", "Envivo", "Link3",
    "TRICO", "Airlink", "MAYARO", "Alinet", "Pipul TV", "ISAT Africa"
  ];

  // Duplicate the array for seamless infinite scroll
  const doubledCustomers = [...featuredCustomers, ...featuredCustomers];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="section-title">
            Trusted by Industry Leaders Worldwide
          </h2>
          <p className="section-subtitle">
            250+ customers across 50+ countries rely on Magnaquest Sure
          </p>
        </div>

        {/* Scrolling Customer Logos */}
        <div className="relative overflow-hidden mb-12">
          <div className="flex animate-scroll space-x-8">
            {doubledCustomers.map((customer, index) => (
              <div key={index} className="flex-shrink-0 bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm">
                <span className="text-gray-700 font-medium whitespace-nowrap">
                  {customer}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl p-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                Join Industry Leaders Worldwide
              </h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Transform your subscription business with enterprise-grade solutions trusted by industry leaders
              </p>
            </div>
            
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
                  <div className="text-4xl font-bold text-white mb-2">250+</div>
                  <div className="text-blue-200 font-medium">Global Customers</div>
                  <div className="text-blue-300 text-sm mt-1">Across all industries</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-blue-200 font-medium">Countries</div>
                  <div className="text-blue-300 text-sm mt-1">Global presence</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
                  <div className="text-4xl font-bold text-white mb-2">300M+</div>
                  <div className="text-blue-200 font-medium">Subscribers</div>
                  <div className="text-blue-300 text-sm mt-1">Under management</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
                  <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-blue-200 font-medium">Uptime SLA</div>
                  <div className="text-blue-300 text-sm mt-1">Guaranteed reliability</div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-all transform hover:scale-105 shadow-lg">
                  Schedule Demo
                </button>
                <button className="border-2 border-accent text-accent px-8 py-4 rounded-xl font-semibold hover:bg-accent hover:text-white transition-all">
                  View Case Studies
                </button>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                Join companies like BGE Home, MBC Group, STAR, and Discovery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
