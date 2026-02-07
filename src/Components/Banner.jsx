import { useState, useEffect } from "react";
import Pic1 from "./../assets/Banner/Phuket.jpg";
import Pic2 from "./../assets/Banner/Taj Mahal.jpg";
import Pic3 from "./../assets/Banner/Bali.jpg";
import Pic4 from "./../assets/Banner/Rajasthan.jpg";
import Pic5 from "./../assets/Banner/Bali2.jpg";
import Pic6 from "./../assets/Banner/Kashmir.jpg";

const Banner = () => {

  const images = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-6 overflow-hidden rounded-xl">
      
      {/* Image */}
      <img
        src={images[current]}
        alt="slide"
        className="w-full h-[300px] md:h-[400px] object-cover transition-all duration-500"
      />

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${current === i ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;