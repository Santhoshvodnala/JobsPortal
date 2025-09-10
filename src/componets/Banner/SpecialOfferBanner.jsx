const SpecialOfferBanner = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="bg-orange-500 text-white px-3 sm:px-4 py-3 relative w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-3">
        
        {/* Left Side Content */}
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 flex-wrap">
            <span className="text-lg sm:text-xl md:text-2xl">🏆</span>
            <span className="font-semibold text-sm sm:text-base md:text-lg leading-snug">
              SPECIAL OFFER: 90 Day Money Back Guarantee!
            </span>
            <span className="bg-white text-orange-500 px-2 py-1 rounded-lg text-[10px] sm:text-xs md:text-sm font-bold">
              47,240 Happy Customers ⭐
            </span>
          </div>
          <span className="text-[10px] sm:text-xs md:text-sm mt-1">
            Limited time offer for first 50,000 customers - Join now!
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-white hover:text-gray-200 transition-colors text-lg sm:text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default SpecialOfferBanner;
