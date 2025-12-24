import { useState, useEffect } from "react";
import { X } from "lucide-react";
import boxingDayImage from "@assets/BoxingDay.jpg";

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Always show popup on page load (removed localStorage check)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // 1 second delay after page load
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // REMOVED: localStorage.setItem('popupClosed', 'true');
  };

  // Don't render if not open
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/70 z-[100] backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Popup Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-[101] p-4">
        <div className="relative max-w-2xl w-full bg-transparent rounded-2xl overflow-hidden shadow-2xl">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Close popup"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Image */}
          <div className="relative">
            <img
              src={boxingDayImage}
              alt="Boxing Day Special Offer"
              className="w-full h-auto rounded-2xl"
            />
            
            {/* Optional: Add a clickable link/button on the image */}
            <a
              href="/products"
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#3A7BF7] hover:bg-[#3A7BF7]/90 text-white px-8 py-3 text-lg font-medium rounded-md shadow-lg shadow-[#3A7BF7]/30 transition-all duration-300 border border-[#3A7BF7]/50"
              onClick={(e) => {
                e.stopPropagation(); // Don't close popup when clicking this button
                handleClose(); // Close popup when clicking the CTA
              }}
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}