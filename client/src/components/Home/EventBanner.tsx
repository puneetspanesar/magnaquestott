import { useState, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { Link } from 'wouter';

export default function EventBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Store in localStorage to not show again for this session
    localStorage.setItem('eventBannerClosed', 'true');
  };

  // Don't show if already closed this session
  useEffect(() => {
    const wasClosed = localStorage.getItem('eventBannerClosed');
    if (wasClosed) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full mx-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
        >
          <X className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
        </button>

        {/* Banner Container */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
          {/* Banner Image */}
          <div className="relative">
            <img
              src="https://www.magnaquest.com/wp-content/uploads/2025/04/Magnaquest-CABSAT-Web-Banner-V2-scaled.jpg"
              alt="Magnaquest CABSAT Event"
              className="w-full h-auto"
            />
            
            {/* Overlay with CTA */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
              <div className="p-8 w-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Join Us at CABSAT 2025</h3>
                    <p className="text-blue-100 text-lg">Discover the future of subscription management</p>
                  </div>
                  
                  <Link href="/contact">
                    <button
                      onClick={handleClose}
                      className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group flex items-center whitespace-nowrap"
                    >
                      <Calendar className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                      Schedule Meeting
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}