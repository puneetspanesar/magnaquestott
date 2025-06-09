import { Building2, Tv, Globe, Radio, Monitor, Users } from "lucide-react";

export default function CustomerLogos() {
  const customersByRegion = [
    {
      region: "North America",
      customers: ["BGE Home", "Nagra TRANSAM", "International Hockey Federation", "Airecable", "Ultravision"]
    },
    {
      region: "Latin America", 
      customers: ["TRICO", "Airlink", "MAYARO", "Alinet"]
    },
    {
      region: "Africa",
      customers: ["Envivo", "Pipul TV", "Azam", "SITI Cable", "ISAT Africa", "Vipnet"]
    },
    {
      region: "Asia Pacific",
      customers: ["GTPL", "STAR", "NGC", "Link3", "Bengal Communications", "IMTV", "Mediascape"]
    },
    {
      region: "India",
      customers: ["Kal Media (Sun Distribution)", "UTV/Disney", "IndiaCast TV-18", "ETV", "Wishnet", "SITI Networks", "TV Today Network", "Times Network", "Discovery"]
    }
  ];

  const industryIcons = [
    { icon: Tv, label: "Broadcasting" },
    { icon: Monitor, label: "OTT & Streaming" },
    { icon: Radio, label: "Telecom" },
    { icon: Building2, label: "Enterprise" },
    { icon: Globe, label: "Multi-Service" },
    { icon: Users, label: "B2B Solutions" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders Across 50+ Countries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From global broadcasters to regional service providers, enterprises worldwide 
            rely on Magnaquest Sure for their subscription management needs
          </p>
        </div>

        {/* Industry Icons */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-16">
          {industryIcons.map((industry, index) => (
            <div key={index} className="text-center animate-fadeIn group">
              <div className="bg-gray-100 p-4 rounded-xl mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                <industry.icon className="w-8 h-8 mx-auto" />
              </div>
              <span className="text-gray-600 text-sm font-medium">{industry.label}</span>
            </div>
          ))}
        </div>

        {/* Customer Grid by Region */}
        <div className="space-y-12">
          {customersByRegion.map((region, regionIndex) => (
            <div key={regionIndex} className="animate-fadeIn">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{region.region}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {region.customers.map((customer, customerIndex) => (
                  <div key={customerIndex} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors group">
                    <div className="h-16 flex items-center justify-center mb-2">
                      <Building2 className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium leading-tight">{customer}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonials */}
        <div className="mt-20 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center animate-fadeIn">
          <h3 className="text-2xl font-bold mb-6">What Our Customers Say</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <p className="text-blue-100 mb-4 italic">
                "Magnaquest has had an immense impact on our digital strategy, allowing us to craft 
                targeted experiences for niche audiences, which led to a notable increase in customer retention."
              </p>
              <div className="font-semibold">MBC Group</div>
              <div className="text-blue-200 text-sm">Middle East Broadcasting</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <p className="text-blue-100 mb-4 italic">
                "The platform's flexibility and scalability have been crucial in managing our 
                10+ million subscribers across 800 cities with seamless operations."
              </p>
              <div className="font-semibold">GTPL Hathway</div>
              <div className="text-blue-200 text-sm">Top MSO in India</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
