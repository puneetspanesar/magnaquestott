export default function ValuePropsSection() {
  const valueProps = [
    {
      number: "01",
      title: "Build Strong Relationships",
      description: "With cutting-edge capabilities, flexible packages and exciting offers, address customers' pain points, nurturing relationships with them and ensuring customer loyalty"
    },
    {
      number: "02", 
      title: "Churn Management",
      description: "Profitably manage churn by cross-selling and upselling products and services, maximizing average revenue per user"
    },
    {
      number: "03",
      title: "Customer Insights", 
      description: "Get access to deeper customer insights using our easy-to-use visualisation tools and deliver personalized experiences"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Magnaquest Sure: Why Companies Prefer Us
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {valueProps.map((prop, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-fadeIn">
              <div className="text-6xl font-bold text-primary mb-4">{prop.number}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{prop.title}</h3>
              <p className="text-gray-600">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
