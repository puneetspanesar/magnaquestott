export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Among the world's leading subscription lifecycle management software solutions
          </h2>
          <p className="text-xl text-gray-600">
            Our flagship product, Sure, offers competitive subscription lifecycle management 
            software capabilities that are trusted by enterprises across the globe
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center animate-fadeIn">
            <div className="text-5xl font-bold text-primary mb-2">25+</div>
            <div className="text-gray-700 font-medium">
              Years of enabling subscription businesses across the world
            </div>
          </div>
          <div className="text-center animate-fadeIn">
            <div className="text-5xl font-bold text-primary mb-2">250+</div>
            <div className="text-gray-700 font-medium">
              Customers serving 300 million+ subscribers every month
            </div>
          </div>
          <div className="text-center animate-fadeIn">
            <div className="text-5xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-700 font-medium">
              Countries including India, South East Asia, Africa, LATAM, JAPAC and Europe
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
