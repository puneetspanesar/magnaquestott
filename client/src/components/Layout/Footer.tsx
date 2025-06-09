import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">Magnaquest</div>
            <p className="text-gray-400 mb-4">
              We are the pioneers in the subscription and usage-based monetization mechanisms. 
              We continue to learn and evolve our solutions to enable a wide range of industries.
            </p>
            <div className="text-gray-400">
              <p>sales@magnaquest.com</p>
              <p>Hyderabad, India</p>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/solutions/paytv">
                  <span className="hover:text-white cursor-pointer transition-colors">PayTV</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions/ott">
                  <span className="hover:text-white cursor-pointer transition-colors">OTT</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions/multiplay">
                  <span className="hover:text-white cursor-pointer transition-colors">Multiplay</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions/healthcare">
                  <span className="hover:text-white cursor-pointer transition-colors">Healthcare</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions/b2c">
                  <span className="hover:text-white cursor-pointer transition-colors">B2C</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions/startups">
                  <span className="hover:text-white cursor-pointer transition-colors">Startups</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about">
                  <span className="hover:text-white cursor-pointer transition-colors">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/about/team">
                  <span className="hover:text-white cursor-pointer transition-colors">Team</span>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <span className="hover:text-white cursor-pointer transition-colors">Careers</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-white cursor-pointer transition-colors">Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/resources/blog">
                  <span className="hover:text-white cursor-pointer transition-colors">Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies">
                  <span className="hover:text-white cursor-pointer transition-colors">Case Studies</span>
                </Link>
              </li>
              <li>
                <Link href="/resources/whitepapers">
                  <span className="hover:text-white cursor-pointer transition-colors">Whitepapers</span>
                </Link>
              </li>
              <li>
                <Link href="/resources/news-events">
                  <span className="hover:text-white cursor-pointer transition-colors">News and Events</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>©2025 Magnaquest. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
