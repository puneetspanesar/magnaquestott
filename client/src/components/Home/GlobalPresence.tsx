import { useState } from "react";

export default function GlobalPresence() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const regions = [
    {
      id: "north-america",
      name: "North America",
      customers: 45,
      description: "Leading subscription businesses across US and Canada",
      industries: ["Enterprise SaaS", "Media & Entertainment", "Healthcare"],
      position: { x: 15, y: 35 }
    },
    {
      id: "europe",
      name: "Europe",
      customers: 68,
      description: "Powering digital transformation across European markets",
      industries: ["Fintech", "Telecommunications", "E-commerce"],
      position: { x: 50, y: 25 }
    },
    {
      id: "asia-pacific",
      name: "Asia Pacific",
      customers: 89,
      description: "Driving subscription growth in the world's fastest-growing region",
      industries: ["OTT Platforms", "Gaming", "EdTech"],
      position: { x: 75, y: 35 }
    },
    {
      id: "india",
      name: "India",
      customers: 52,
      description: "Supporting India's digital economy with localized solutions",
      industries: ["Broadcasting", "Telecom", "Digital Services"],
      position: { x: 65, y: 45 }
    },
    {
      id: "middle-east-africa",
      name: "Middle East & Africa",
      customers: 23,
      description: "Enabling subscription businesses across emerging markets",
      industries: ["Media", "Financial Services", "Technology"],
      position: { x: 55, y: 55 }
    },
    {
      id: "latin-america",
      name: "Latin America",
      customers: 18,
      description: "Facilitating growth in Latin American subscription economy",
      industries: ["Streaming", "Fintech", "SaaS"],
      position: { x: 25, y: 65 }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
            Global Presence, Local Excellence
          </h2>
          <p className="text-lg text-gray-600 font-normal">
            Serving 250+ customers across 50+ countries with 24/7 support
          </p>
        </div>

        {/* Interactive World Map */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12 animate-fadeIn">
          <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg overflow-hidden">
            {/* World Map SVG Background */}
            <svg 
              viewBox="0 0 100 60" 
              className="absolute inset-0 w-full h-full opacity-20"
              style={{ fill: '#1267a9' }}
            >
              {/* Simplified world map paths */}
              <path d="M10,20 L30,20 L30,40 L10,40 Z" /> {/* North America */}
              <path d="M45,15 L60,15 L60,35 L45,35 Z" /> {/* Europe */}
              <path d="M70,20 L90,20 L90,50 L70,50 Z" /> {/* Asia Pacific */}
              <path d="M50,40 L65,40 L65,60 L50,60 Z" /> {/* Africa/Middle East */}
              <path d="M20,50 L35,50 L35,70 L20,70 Z" /> {/* Latin America */}
            </svg>

            {/* Pulsing Region Markers */}
            {regions.map((region) => (
              <div
                key={region.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  left: `${region.position.x}%`,
                  top: `${region.position.y}%`
                }}
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
              >
                {/* Pulsing animation */}
                <div className="relative">
                  <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-primary rounded-full relative"></div>
                </div>

                {/* Hover Tooltip */}
                {hoveredRegion === region.id && (
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg border border-gray-200 p-4 min-w-64 z-10">
                    <h4 className="font-semibold text-gray-900 mb-2">{region.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{region.description}</p>
                    <div className="text-sm">
                      <span className="font-medium text-primary">{region.customers} customers</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {region.industries.map((industry, index) => (
                        <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fadeIn">
          <div className="text-center">
            <div className="text-3xl font-semibold text-gray-900 mb-2">250+</div>
            <div className="text-gray-600 font-normal">Global Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600 font-normal">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-gray-900 mb-2">300M+</div>
            <div className="text-gray-600 font-normal">Subscribers Managed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600 font-normal">Global Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}