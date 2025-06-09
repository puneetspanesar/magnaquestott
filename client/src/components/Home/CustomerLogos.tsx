export default function CustomerLogos() {
  const featuredCustomers = [
    "BGE Home", "GTPL", "MBC Group", "UTV/Disney", "STAR", "NGC", 
    "Times Network", "Discovery", "Azam", "SITI Networks", "Envivo", "Link3"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders Worldwide
          </h2>
          <p className="text-lg text-gray-600">
            250+ customers across 50+ countries rely on Magnaquest Sure
          </p>
        </div>

        {/* Customer Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {featuredCustomers.map((customer, index) => (
            <div key={index} className="text-center animate-fadeIn group">
              <div className="bg-gray-50 hover:bg-primary/5 border border-gray-100 hover:border-primary/20 rounded-xl p-6 transition-all duration-300 group-hover:shadow-lg">
                <div className="h-12 flex items-center justify-center mb-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-sm"></div>
                  </div>
                </div>
                <span className="text-gray-700 text-sm font-medium group-hover:text-primary transition-colors">
                  {customer}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fadeIn">
          <div className="inline-flex items-center space-x-8 text-gray-500">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Broadcasting
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              OTT & Streaming
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Telecom
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              Enterprise
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
