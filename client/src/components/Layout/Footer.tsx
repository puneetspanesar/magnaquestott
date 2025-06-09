import { Link } from "wouter";
import { Mail, Phone, Globe, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";

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

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="text-3xl font-bold text-white">Magnaquest</div>
            </div>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Pioneering subscription management for 25+ years. We empower enterprises to monetize, 
              scale, and optimize their subscription businesses across 50+ countries.
            </p>
            
            {/* Global HQ */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Global Headquarters</h4>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-white font-medium">Hyderabad</div>
                <div className="text-gray-400 text-sm">India</div>
                <div className="text-gray-400 text-sm">+91 40 1234 5678</div>
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
                  <span>+91 40 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>Hyderabad, India</span>
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