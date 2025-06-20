import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function LiveChatCTA() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-sm">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 relative">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full shrink-0">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 mb-2">
              Not sure what suits your business?
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Chat with an expert to find the perfect solution for your needs.
            </p>
            
            <button className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 w-full">
              Start Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}