import { Link } from "wouter";
import { Mail, Phone, Globe, Linkedin, Twitter, Youtube, ArrowRight, Play, Download, Calendar } from "lucide-react";

export default function OTTFooter() {
  const ottSolutions = [
    { name: "SVOD Platform", href: "/solutions" },
    { name: "AVOD Monetization", href: "/solutions" },
    { name: "TVOD Solutions", href: "/solutions" },
    { name: "Hybrid Models", href: "/solutions" },
    { name: "Churn Prevention", href: "/solutions" },
    { name: "Revenue Analytics", href: "/solutions" }
  ];

  const company = [
    { name: "About Magnaquest", href: "/about" },
    { name: "Leadership Team", href: "/about" },
    { name: "Global Offices", href: "/about" },
    { name: "Careers", href: "/about" },
    { name: "Press & Media", href: "/about" }
  ];

  const resources = [
    { name: "OTT Monetization Guide", href: "/resources" },
    { name: "Case Studies", href: "/resources" },
    { name: "API Documentation", href: "/resources" },
    { name: "Developer Hub", href: "/resources" },
    { name: "Support Center", href: "/resources" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <img 
                src="https://www.magnaquest.com/wp-content/uploads/2024/04/MagnaQuest-Logo.png" 
                alt="Magnaquest" 
                className="h-12 mb-6 filter brightness-0 invert"
              />
              <h3 className="text-2xl font-bold text-white mb-4">
                Transform Your OTT Business with SURE
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                The world's most comprehensive OTT monetization platform. Reduce churn, increase revenue, and scale globally with confidence.
              </p>
              
              {/* Quick CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <button className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group flex items-center justify-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Demo
                  </button>
                </Link>
                <Link href="/resources">
                  <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 group flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Get Guide
                  </button>
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-primary mr-3" />
                <span className="text-gray-300">Global HQ: Hyderabad, India</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <a href="mailto:contact@magnaquest.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@magnaquest.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  +91 (40) 4031-2000
                </a>
              </div>
            </div>
          </div>
          
          {/* OTT Solutions */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">OTT Solutions</h3>
            <ul className="space-y-3">
              {ottSolutions.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <span className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center group">
                      {item.name}
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <span className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center group">
                      {item.name}
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Resources</h3>
            <ul className="space-y-3 mb-8">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <span className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center group">
                      {item.name}
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-primary p-3 rounded-xl transition-colors group">
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-primary p-3 rounded-xl transition-colors group">
                  <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-primary p-3 rounded-xl transition-colors group">
                  <Youtube className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary to-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated on OTT Monetization Trends
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get insights, case studies, and best practices delivered to your inbox monthly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="your.email@company.com"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Magnaquest. All rights reserved. | 25+ Years of Industry Leadership
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}