import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Globe, Building2, Users, Award, Phone, Tv, Radio, Hospital, GraduationCap } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  const solutionsMenu = [
    {
      title: "By Industry",
      items: [
        { name: "Broadcasting & Media", icon: Tv, description: "Content monetization and subscriber management" },
        { name: "OTT & Streaming", icon: Users, description: "End-to-end streaming platform solutions" },
        { name: "Telecommunications", icon: Radio, description: "Telecom billing and subscriber lifecycle" },
        { name: "Enterprise Software", icon: Building2, description: "B2B subscription management platform" }
      ]
    },
    {
      title: "By Solution",
      items: [
        { name: "Subscription Management", icon: Building2, description: "Complete subscriber lifecycle management" },
        { name: "Revenue Analytics", icon: Globe, description: "Advanced insights and reporting" },
        { name: "Payment Processing", icon: Users, description: "Multi-gateway payment solutions" },
        { name: "Customer Experience", icon: Award, description: "360-degree customer engagement" }
      ]
    }
  ];

  const companyMenu = [
    { name: "About Magnaquest", href: "/about", description: "25+ years of industry leadership" },
    { name: "Global Presence", href: "/about#global", description: "Serving 50+ countries worldwide" },
    { name: "Leadership Team", href: "/about#team", description: "Meet our executive leadership" },
    { name: "Careers", href: "/careers", description: "Join our growing team" }
  ];

  const resourcesMenu = [
    { name: "Case Studies", href: "/resources#cases", description: "Customer success stories" },
    { name: "White Papers", href: "/resources#papers", description: "Industry insights and research" },
    { name: "Documentation", href: "/resources#docs", description: "Technical documentation" },
    { name: "API Reference", href: "/resources#api", description: "Developer resources" }
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white/98 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer group">
              <img 
                src="https://www.magnaquest.com/wp-content/uploads/2024/04/MagnaQuest-Logo.png" 
                alt="Magnaquest" 
                className="h-10 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {/* Home */}
            <Link href="/">
              <span className={`relative px-8 py-4 text-base font-medium transition-all duration-300 cursor-pointer ${
                isActive("/")
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}>
                Home
              </span>
            </Link>

            {/* Divider */}
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-2"></div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('solutions')}
                className={`relative flex items-center px-8 py-4 text-base font-medium transition-all duration-300 ${
                  isActive("/solutions") || activeDropdown === 'solutions'
                    ? "text-primary font-semibold"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50">
                  <div className="grid grid-cols-2 gap-8">
                    {solutionsMenu.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                          {section.title}
                        </h3>
                        <div className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <Link key={itemIndex} href="/solutions">
                              <div className="flex items-start p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                                <div className="bg-primary/10 p-2 rounded-lg mr-3 group-hover:bg-primary group-hover:text-white transition-all">
                                  <item.icon className="w-4 h-4 text-primary group-hover:text-white" />
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                    {item.name}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">
                                    {item.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-2"></div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('company')}
                className={`relative flex items-center px-8 py-4 text-base font-medium transition-all duration-300 ${
                  isActive("/about") || activeDropdown === 'company'
                    ? "text-primary font-semibold"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                Company
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50">
                  <div className="space-y-2">
                    {companyMenu.map((item, index) => (
                      <Link key={index} href={item.href}>
                        <div className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-2"></div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('resources')}
                className={`relative flex items-center px-8 py-4 text-base font-medium transition-all duration-300 ${
                  isActive("/resources") || activeDropdown === 'resources'
                    ? "text-primary font-semibold"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                Resources
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50">
                  <div className="space-y-2">
                    {resourcesMenu.map((item, index) => (
                      <Link key={index} href={item.href}>
                        <div className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-2"></div>

            {/* Contact */}
            <Link href="/contact">
              <span className={`relative px-8 py-4 text-base font-medium transition-all duration-300 cursor-pointer ${
                isActive("/contact")
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}>
                Contact
              </span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block ml-8">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                <Phone className="w-4 h-4 mr-2 inline group-hover:animate-pulse" />
                Schedule Demo
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-xl text-gray-700 hover:text-primary hover:bg-gray-100 transition-all"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-6">
            <div className="space-y-4">
              <Link href="/">
                <span className={`block px-4 py-3 rounded-xl text-base font-semibold cursor-pointer ${
                  isActive("/") ? "text-primary bg-primary/10" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`} onClick={() => setIsMenuOpen(false)}>
                  Home
                </span>
              </Link>
              
              <Link href="/solutions">
                <span className={`block px-4 py-3 rounded-xl text-base font-semibold cursor-pointer ${
                  isActive("/solutions") ? "text-primary bg-primary/10" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`} onClick={() => setIsMenuOpen(false)}>
                  Solutions
                </span>
              </Link>
              
              <Link href="/about">
                <span className={`block px-4 py-3 rounded-xl text-base font-semibold cursor-pointer ${
                  isActive("/about") ? "text-primary bg-primary/10" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`} onClick={() => setIsMenuOpen(false)}>
                  Company
                </span>
              </Link>
              
              <Link href="/resources">
                <span className={`block px-4 py-3 rounded-xl text-base font-semibold cursor-pointer ${
                  isActive("/resources") ? "text-primary bg-primary/10" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`} onClick={() => setIsMenuOpen(false)}>
                  Resources
                </span>
              </Link>
              
              <Link href="/contact">
                <span className={`block px-4 py-3 rounded-xl text-base font-semibold cursor-pointer ${
                  isActive("/contact") ? "text-primary bg-primary/10" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`} onClick={() => setIsMenuOpen(false)}>
                  Contact
                </span>
              </Link>
              
              <Link href="/contact">
                <button 
                  className="w-full mt-6 btn-premium text-white px-8 py-4 rounded-xl font-bold shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 mr-2 inline" />
                  Schedule Demo
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      
      {/* Backdrop for dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  );
}