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
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
            Trusted by Industry Leaders Worldwide
          </h2>
          <p className="text-lg text-gray-600 font-normal">
            250+ customers across 50+ countries rely on Magnaquest Sure
          </p>
        </div>

        {/* Customer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {featuredCustomers.slice(0, 12).map((customer, index) => (
            <div key={index} className="bg-gray-50 hover:bg-primary/5 border border-gray-100 hover:border-primary/20 rounded-lg p-4 transition-all duration-300 flex items-center justify-center">
              <span className="text-gray-700 text-sm font-medium text-center">
                {customer}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 text-center animate-fadeIn">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            From telecommunications giants to streaming platforms, our enterprise-grade solutions 
            power subscription businesses across diverse industries worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">250+ Customers</span>
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">50+ Countries</span>
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">25+ Years Experience</span>
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
