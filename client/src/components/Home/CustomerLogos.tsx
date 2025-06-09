export default function CustomerLogos() {
  const logos = Array.from({ length: 8 }, (_, i) => `Logo ${i + 1}`);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies Worldwide
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
          {logos.map((logo, index) => (
            <div key={index} className="text-center animate-fadeIn">
              <div className="bg-gray-200 h-12 flex items-center justify-center rounded text-gray-500 text-sm font-medium hover:bg-gray-300 transition-colors">
                {logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
