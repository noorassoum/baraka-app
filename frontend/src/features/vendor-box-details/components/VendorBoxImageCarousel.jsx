import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function BoxImageCarousel({ images, onBack }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      <img
        src={images[activeIndex]}
        alt="Box"
        className="w-full h-72 object-cover rounded-b-3xl"
      />

      {/* Back icon button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
      >
        <ArrowLeft className="w-5 h-5 text-teal-500" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full ${
              activeIndex === index ? "bg-teal-500" : "bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
