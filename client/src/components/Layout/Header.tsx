import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Globe, Building2, Users, Award, Phone, Tv, Radio, Hospital, GraduationCap, Calendar } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  const solutionsMenu = [
    {
      title: "OTT Monetization",
      items: [
        { name: "SVOD Management", icon: Tv, description: "Subscription video on demand solutions" },
        { name: "AVOD Solutions", icon: Users, description: "Ad-supported video monetization" },
        { name: "TVOD Platform", icon: Radio, description: "Transactional video on demand" },
        { name: "Hybrid Models", icon: Building2, description: "Mixed monetization strategies" }
      ]
    },
    {
      title: "Core Features",
      items: [
        { name: "Churn Prevention", icon: Building2, description: "Reduce subscriber churn with smart analytics" },
        { name: "Revenue Optimization", icon: Globe, description: "Maximize ARPU and LTV" },
        { name: "Global Scaling", icon: Users, description: "Multi-currency and compliance" },
        { name: "Content Entitlements", icon: Award, description: "Manage user access and permissions" }
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
    <header className="bg-white backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-gray-200">
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
          <nav className="hidden lg:flex items-center ml-12">
            {/* Problem */}
            <button
              onClick={() => {
                document.getElementById('problem-section')?.scrollIntoView({ behavior: 'smooth' });
                setActiveDropdown(null);
              }}
              className="relative px-5 py-4 text-base font-medium transition-all duration-300 text-gray-700 hover:text-primary cursor-pointer"
            >
              The Challenge
            </button>

            {/* Divider */}
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-1"></div>

            {/* Solutions */}
            <button
              onClick={() => {
                document.getElementById('solutions-section')?.scrollIntoView({ behavior: 'smooth' });
                setActiveDropdown(null);
              }}
              className="relative px-5 py-4 text-base font-medium transition-all duration-300 text-gray-700 hover:text-primary cursor-pointer"
            >
              OTT Solutions
            </button>

            {/* Divider */}
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-1"></div>

            {/* Benefits */}
            <button
              onClick={() => {
                document.getElementById('benefits-section')?.scrollIntoView({ behavior: 'smooth' });
                setActiveDropdown(null);
              }}
              className="relative px-5 py-4 text-base font-medium transition-all duration-300 text-gray-700 hover:text-primary cursor-pointer"
            >
              Benefits
            </button>


          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block ml-12">
            <button
              onClick={() => {
                document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 mr-2 inline group-hover:animate-pulse" />
              Schedule a Demo
            </button>
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
              <button
                onClick={() => {
                  document.getElementById('problem-section')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-semibold cursor-pointer text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                The Challenge
              </button>
              
              <button
                onClick={() => {
                  document.getElementById('solutions-section')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-semibold cursor-pointer text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                OTT Solutions
              </button>
              
              <button
                onClick={() => {
                  document.getElementById('benefits-section')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-semibold cursor-pointer text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                Benefits
              </button>
              
              <button
                onClick={() => {
                  document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="w-full mt-6 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold shadow-lg"
              >
                <Calendar className="w-4 h-4 mr-2 inline" />
                Schedule a Demo
              </button>
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