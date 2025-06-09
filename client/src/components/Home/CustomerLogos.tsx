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

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Join Industry Leaders Worldwide</h3>
          <p className="text-xl mb-8 text-blue-100">
            Transform your subscription business with enterprise-grade solutions trusted by 250+ companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold">250+</div>
              <div className="text-blue-200 text-sm">Global Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-blue-200 text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">300M+</div>
              <div className="text-blue-200 text-sm">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-blue-200 text-sm">Uptime SLA</div>
            </div>
          </div>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}
