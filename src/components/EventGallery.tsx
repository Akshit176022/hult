import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Placeholder images - replace with actual event images
const images = [
  "gallery/01.JPG",
  "gallery/02.JPG",
  "gallery/03.JPG",
  "gallery/04.JPG",
  "gallery/05.JPG",
  "gallery/06.JPG",
  "gallery/07.JPG",
  "gallery/08.JPG",
  "gallery/09.JPG",
  "gallery/10.JPG",
  "gallery/11.JPG",
];

const EventGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const getIndex = (index: number) => {
    const length = images.length;
    return ((index % length) + length) % length;
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const leftIndex = getIndex(currentIndex - 1);
  const centerIndex = getIndex(currentIndex);
  const rightIndex = getIndex(currentIndex + 1);

  return (
    <section className="py-20 bg-secondary overflow-hidden relative gallery-gradient">
      {/* Background Gradient Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/12 left-1/10 w-[500px] h-[500px] rounded-full blur-3xl gallery-radial-gradient" />
        <div className="absolute top-1/12 right-1/20 w-100 h-100 bg-gradient-to-br from-pink-400/15 to-purple-400/15 rounded-full blur-2xl" />
        <div className="absolute bottom-1/12 left-1/15 w-64 h-64 bg-gradient-to-tl from-purple-400/15 to-pink-400/15 rounded-full blur-2xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 text-foreground">
          <span className="section-badge mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Event Highlights
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Glimpses from our past events and competitions
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative flex items-center justify-center h-[300px] md:h-[400px] lg:h-[500px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-8 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-foreground hover:bg-background hover:scale-110 transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Images Container */}
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
            {/* Left Image */}
            <div
              className="absolute left-0 md:left-12 lg:left-20 w-[150px] md:w-[200px] lg:w-[280px] h-[180px] md:h-[240px] lg:h-[320px] transition-all duration-500 ease-out"
              style={{ transform: "translateX(0%)" }}
            >
              <img
                src={images[leftIndex]}
                alt={`Event ${leftIndex + 1}`}
                className="w-full h-full object-cover rounded-2xl opacity-40 scale-90 shadow-lg"
              />
            </div>

            {/* Center Image */}
            <div className="relative z-10 w-[220px] md:w-[320px] lg:w-[450px] h-[220px] md:h-[300px] lg:h-[400px] transition-all duration-500 ease-out">
              <img
                src={images[centerIndex]}
                alt={`Event ${centerIndex + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-2xl ring-4 ring-primary/20"
              />
            </div>

            {/* Right Image */}
            <div
              className="absolute right-0 md:right-12 lg:right-20 w-[150px] md:w-[200px] lg:w-[280px] h-[180px] md:h-[240px] lg:h-[320px] transition-all duration-500 ease-out"
              style={{ transform: "translateX(0%)" }}
            >
              <img
                src={images[rightIndex]}
                alt={`Event ${rightIndex + 1}`}
                className="w-full h-full object-cover rounded-2xl opacity-40 scale-90 shadow-lg"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-8 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-foreground hover:bg-background hover:scale-110 transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                getIndex(currentIndex) === index
                  ? "bg-white w-8"
                  : "bg-gray-400 hover:bg-primary/50"
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
