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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders Worldwide
          </h2>
          <p className="text-lg text-gray-600">
            250+ customers across 50+ countries rely on Magnaquest Sure
          </p>
        </div>

        {/* Auto-scrolling Customer Logos */}
        <div className="relative">
          <div className="flex space-x-8 scroll-container">
            {doubledCustomers.map((customer, index) => (
              <div key={index} className="flex-shrink-0 group">
                <div className="bg-gray-50 hover:bg-primary/5 border border-gray-100 hover:border-primary/20 rounded-xl p-6 w-48 h-24 transition-all duration-300 group-hover:shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <div className="w-4 h-4 bg-primary rounded-sm"></div>
                    </div>
                    <span className="text-gray-700 text-sm font-medium group-hover:text-primary transition-colors">
                      {customer}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center animate-fadeIn">
          <p className="text-gray-500 text-sm">
            Hover over the logos to pause the animation
          </p>
        </div>
      </div>
    </section>
  );
}
