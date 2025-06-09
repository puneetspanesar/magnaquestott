import { MapPin, Building2, Globe2 } from "lucide-react";

export default function GlobalPresence() {
  const regions = [
    {
      name: "North America",
      countries: ["USA", "Canada", "Mexico"],
      customers: ["BGE Home", "Nagra TRANSAM", "International Hockey Federation", "Airecable", "Ultravision"],
      color: "bg-blue-500"
    },
    {
      name: "Latin America",
      countries: ["Trinidad & Tobago", "Guatemala", "Mexico"],
      customers: ["TRICO", "Airlink", "MAYARO", "Alinet"],
      color: "bg-green-500"
    },
    {
      name: "Europe",
      countries: ["United Kingdom", "Germany", "France"],
      customers: ["Various European Enterprises"],
      color: "bg-purple-500"
    },
    {
      name: "Africa",
      countries: ["Nigeria", "Tanzania", "Uganda", "Kenya", "Ivory Coast"],
      customers: ["Envivo", "Pipul TV", "Azam", "SITI Cable", "ISAT Africa", "Vipnet"],
      color: "bg-orange-500"
    },
    {
      name: "Asia Pacific",
      countries: ["India", "Bangladesh", "Indonesia", "Philippines", "Maldives"],
      customers: ["GTPL", "STAR", "NGC", "Link3", "Bengal Communications", "IMTV", "Mediascape"],
      color: "bg-red-500"
    },
    {
      name: "India",
      countries: ["India"],
      customers: ["Kal Media (Sun Distribution)", "UTV/Disney", "IndiaCast TV-18", "ETV", "Wishnet", "SITI Networks"],
      color: "bg-indigo-500"
    }
  ];

  const headquarters = {
    location: "Hyderabad, India",
    address: "Capital Park, #806, Madhapur, Hyderabad, Telangana, India",
    contact: "sales@magnaquest.com"
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4">
            Global Presence Across 50+ Countries
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Serving customers worldwide with localized solutions and 24/7 support 
            across multiple time zones and regions
          </p>
        </div>
        
        {/* World Map Visualization */}
        <div className="mb-16 animate-fadeIn">
          <div className="bg-gray-800 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <Globe2 className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Worldwide Coverage</h3>
                <p className="text-gray-300">Trusted by enterprises across 6 continents</p>
              </div>
              
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                {regions.map((region, index) => (
                  <div key={index} className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition-colors">
                    <div className={`w-4 h-4 ${region.color} rounded-full mb-3`}></div>
                    <h4 className="font-semibold mb-2">{region.name}</h4>
                    <p className="text-gray-300 text-sm">{region.countries.length} countries</p>
                    <p className="text-gray-400 text-xs">{region.customers.length}+ customers</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Regional Breakdown */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <MapPin className="w-6 h-6 mr-3 text-blue-400" />
              Key Markets & Customers
            </h3>
            <div className="space-y-6">
              {regions.slice(0, 3).map((region, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-3 h-3 ${region.color} rounded-full mr-3`}></div>
                    <h4 className="text-lg font-semibold">{region.name}</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {region.countries.map((country, countryIndex) => (
                      <span key={countryIndex} className="text-gray-300 text-sm bg-gray-700 px-2 py-1 rounded">
                        {country}
                      </span>
                    ))}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Notable customers: {region.customers.slice(0, 3).join(", ")}
                    {region.customers.length > 3 && ` +${region.customers.length - 3} more`}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Building2 className="w-6 h-6 mr-3 text-blue-400" />
              More Regional Coverage
            </h3>
            <div className="space-y-6">
              {regions.slice(3).map((region, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-3 h-3 ${region.color} rounded-full mr-3`}></div>
                    <h4 className="text-lg font-semibold">{region.name}</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {region.countries.slice(0, 4).map((country, countryIndex) => (
                      <span key={countryIndex} className="text-gray-300 text-sm bg-gray-700 px-2 py-1 rounded">
                        {country}
                      </span>
                    ))}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Notable customers: {region.customers.slice(0, 3).join(", ")}
                    {region.customers.length > 3 && ` +${region.customers.length - 3} more`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Headquarters */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center animate-fadeIn">
          <h3 className="text-2xl font-bold mb-4">Global Headquarters</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-200" />
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-blue-100">{headquarters.location}</p>
            </div>
            <div>
              <Building2 className="w-8 h-8 mx-auto mb-3 text-blue-200" />
              <h4 className="font-semibold mb-2">Address</h4>
              <p className="text-blue-100 text-sm">{headquarters.address}</p>
            </div>
            <div>
              <Globe2 className="w-8 h-8 mx-auto mb-3 text-blue-200" />
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-blue-100">{headquarters.contact}</p>
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}