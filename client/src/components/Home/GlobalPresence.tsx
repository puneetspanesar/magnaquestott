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
        <div className="bg-white rounded-lg border border-gray-200 p-8 animate-fadeIn">
          <div className="relative w-full h-80 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg overflow-hidden">
            {/* Detailed World Map SVG */}
            <svg 
              viewBox="0 0 1000 500" 
              className="absolute inset-0 w-full h-full"
              style={{ fill: '#e5e7eb', stroke: '#d1d5db', strokeWidth: '1' }}
            >
              {/* North America */}
              <path d="M 150 120 L 300 120 L 320 180 L 280 240 L 200 260 L 150 200 Z" fill="#f3f4f6" />
              {/* South America */}
              <path d="M 250 280 L 300 280 L 320 380 L 280 420 L 240 400 L 220 320 Z" fill="#f3f4f6" />
              {/* Europe */}
              <path d="M 450 100 L 520 100 L 540 160 L 500 180 L 450 160 Z" fill="#f3f4f6" />
              {/* Africa */}
              <path d="M 480 200 L 580 200 L 600 340 L 520 380 L 480 320 Z" fill="#f3f4f6" />
              {/* Asia */}
              <path d="M 600 80 L 800 80 L 820 200 L 750 220 L 600 180 Z" fill="#f3f4f6" />
              {/* Australia */}
              <path d="M 720 320 L 800 320 L 820 360 L 780 380 L 720 360 Z" fill="#f3f4f6" />
            </svg>

            {/* Pulsing Region Markers */}
            {regions.map((region) => (
              <div
                key={region.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                style={{
                  left: `${region.position.x}%`,
                  top: `${region.position.y}%`
                }}
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
              >
                {/* Pulsing animation */}
                <div className="relative">
                  <div className="w-3 h-3 bg-primary rounded-full animate-ping absolute opacity-75"></div>
                  <div className="w-3 h-3 bg-primary rounded-full relative border-2 border-white shadow-lg"></div>
                </div>

                {/* Hover Tooltip */}
                {hoveredRegion === region.id && (
                  <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 bg-white rounded-lg border border-gray-200 p-4 w-72 z-30 shadow-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">{region.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{region.description}</p>
                    <div className="text-sm mb-3">
                      <span className="font-medium text-primary">{region.customers} customers</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
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
      </div>
    </section>
  );
}