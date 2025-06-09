import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="text-2xl font-bold text-primary cursor-pointer hover:text-primary/90 transition-colors">
                Magnaquest
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-primary">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4">
                      <div className="mb-3">
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">By Size</div>
                        <Link href="/solutions/startups">
                          <div className="block py-1 text-gray-700 hover:text-primary cursor-pointer">Startups</div>
                        </Link>
                        <Link href="/solutions/scaling-up">
                          <div className="block py-1 text-gray-700 hover:text-primary cursor-pointer">Scaling Up</div>
                        </Link>
                        <Link href="/solutions/enterprise">
                          <div className="block py-1 text-gray-700 hover:text-primary cursor-pointer">Enterprise</div>
                        </Link>
                      </div>
                      <div className="mb-3">
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">By Industry</div>
                        <Link href="/solutions/ott">
                          <div className="block py-1 text-gray-700 hover:text-primary cursor-pointer">OTT</div>
                        </Link>
                        <Link href="/solutions/paytv">
                          <div className="block py-1 text-gray-700 hover:text-primary cursor-pointer">PayTV</div>
                        </Link>
                        <Link href="/solutions/healthcare">
                          <div className="block py-1 text-gray-700 hover:text-primary cursor-pointer">Healthcare</div>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link href="/about">
              <span className={`cursor-pointer transition-colors ${
                isActive("/about") ? "text-primary" : "text-gray-700 hover:text-primary"
              }`}>
                About Us
              </span>
            </Link>
            
            <Link href="/resources">
              <span className={`cursor-pointer transition-colors ${
                isActive("/resources") ? "text-primary" : "text-gray-700 hover:text-primary"
              }`}>
                Resources
              </span>
            </Link>
            
            <Link href="/contact">
              <span className={`cursor-pointer transition-colors ${
                isActive("/contact") ? "text-primary" : "text-gray-700 hover:text-primary"
              }`}>
                Contact
              </span>
            </Link>
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <Button className="bg-primary text-white hover:bg-primary/90 font-medium">
                Schedule A Demo
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/solutions">
                    <div className="block py-2 text-gray-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                      Solutions
                    </div>
                  </Link>
                  <Link href="/about">
                    <div className="block py-2 text-gray-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                      About Us
                    </div>
                  </Link>
                  <Link href="/resources">
                    <div className="block py-2 text-gray-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                      Resources
                    </div>
                  </Link>
                  <Link href="/contact">
                    <div className="block py-2 text-gray-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                      Contact
                    </div>
                  </Link>
                  <Link href="/contact">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90 mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                      Schedule A Demo
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
