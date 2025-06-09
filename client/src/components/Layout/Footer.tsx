import { Link } from "wouter";
import { Mail, MapPin, Phone, Globe, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";

export default function Footer() {
  const solutions = [
    { name: "PayTV Solutions", href: "/solutions" },
    { name: "OTT & Streaming", href: "/solutions" },
    { name: "Broadband ISP", href: "/solutions" },
    { name: "Healthcare", href: "/solutions" },
    { name: "B2B Enterprise", href: "/solutions" },
    { name: "Media & Publications", href: "/solutions" }
  ];

  const company = [
    { name: "About Magnaquest", href: "/about" },
    { name: "Leadership Team", href: "/about" },
    { name: "Global Offices", href: "/about" },
    { name: "Careers", href: "/about" },
    { name: "Press & Media", href: "/about" }
  ];

  const resources = [
    { name: "Case Studies", href: "/resources" },
    { name: "Implementation Guide", href: "/resources" },
    { name: "API Documentation", href: "/resources" },
    { name: "Developer Hub", href: "/resources" },
    { name: "Support Center", href: "/resources" }
  ];

  const globalOffices = [
    { city: "New York", country: "USA", phone: "+1 (555) 123-4567" },
    { city: "London", country: "UK", phone: "+44 20 7123 4567" },
    { city: "Singapore", country: "APAC", phone: "+65 6123 4567" },
    { city: "Hyderabad", country: "India", phone: "+91 40 1234 5678" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-primary/20">
      {/* Top Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Newsletter CTA */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Stay Ahead of the Subscription Economy
                </h3>
                <p className="text-blue-100 text-lg">
                  Get industry insights, platform updates, and best practices delivered to your inbox monthly.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 px-6 py-4 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center justify-center">
                  Subscribe
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div className="text-3xl font-bold text-white">Magnaquest</div>
              </div>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Pioneering subscription management for 25+ years. We empower enterprises to monetize, 
                scale, and optimize their subscription businesses across 50+ countries.
              </p>
              
              {/* Global Presence */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">Global Presence</h4>
                <div className="grid grid-cols-2 gap-4">
                  {globalOffices.map((office, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="text-white font-medium">{office.city}</div>
                      <div className="text-gray-400 text-sm">{office.country}</div>
                      <div className="text-gray-400 text-sm">{office.phone}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Solutions */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Solutions</h3>
              <ul className="space-y-3">
                {solutions.map((item, index) => (
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

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>sales@magnaquest.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>24/7 Global Support</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Globe className="w-5 h-5 text-primary" />
                    <span>magnaquest.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <p className="text-gray-400">© 2025 Magnaquest. All rights reserved.</p>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy">
                  <span className="text-gray-400 hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                </Link>
                <Link href="/terms">
                  <span className="text-gray-400 hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                </Link>
                <Link href="/security">
                  <span className="text-gray-400 hover:text-white cursor-pointer transition-colors">Security</span>
                </Link>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group">
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
