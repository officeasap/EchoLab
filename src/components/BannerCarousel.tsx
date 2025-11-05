import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const bannerImages = [
  {
    id: 1,
    title: "SSD Chemical Laboratory",
    description: "Sovereign-grade transmutation technology",
  },
  {
    id: 2,
    title: "Black Note Cleansing",
    description: "Military-encrypted processing protocol",
  },
  {
    id: 3,
    title: "Liquidity Dispatch",
    description: "No trace. No return. Just results.",
  },
];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] mb-12 overflow-hidden rounded-lg border border-border button-emboss">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bannerImages.map((banner) => (
          <div
            key={banner.id}
            className="min-w-full h-full flex items-center justify-center bg-gradient-to-br from-card via-background to-card relative"
          >
            {/* 3D Placeholder with geometric pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-8 grid-rows-8 h-full">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-ritual-gray/20 animate-pulse"
                    style={{
                      animationDelay: `${i * 50}ms`,
                      animationDuration: "3s",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                {/* 3D cube placeholder */}
                <div className="absolute inset-0 bg-ritual-gray/30 rotate-45 transform-gpu animate-pulse rounded-lg button-emboss" />
                <div className="absolute inset-4 bg-granite-button rotate-12 transform-gpu rounded-lg button-emboss" />
                <div className="absolute inset-8 bg-card rotate-6 transform-gpu rounded-lg button-emboss" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-engraved">
                {banner.title}
              </h2>
              <p className="text-xl text-granite-text">{banner.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-granite-button p-3 rounded-full button-emboss hover:bg-ritual-gray transition-all z-20"
        aria-label="Previous banner"
      >
        <ChevronLeft className="text-granite-text" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-granite-button p-3 rounded-full button-emboss hover:bg-ritual-gray transition-all z-20"
        aria-label="Next banner"
      >
        <ChevronRight className="text-granite-text" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-ritual-gray w-8" : "bg-granite-button"
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
