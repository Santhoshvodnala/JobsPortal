const SpecialOfferBanner = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="bg-orange-500 text-white px-4 py-3 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-2 md:gap-4">
        
        {/* Left Side Content */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-col sm:flex-row items-center sm:justify-center md:justify-start gap-2">
            <span className="text-xl sm:text-2xl">🏆</span>
            <span className="font-semibold text-base sm:text-lg">
              SPECIAL OFFER: 90 Day Money Back Guarantee!
            </span>
            <span className="bg-white text-orange-500 px-2 py-1 rounded-lg text-xs sm:text-sm font-bold">
              47,240 Happy Customers ⭐
            </span>
          </div>
          <span className="text-xs sm:text-sm mt-1">
            Limited time offer for first 50,000 customers - Join now!
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute md:static right-4 top-3 md:top-auto md:right-auto text-white hover:text-gray-200 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default SpecialOfferBanner;
