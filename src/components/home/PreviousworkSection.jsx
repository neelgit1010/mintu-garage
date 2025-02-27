"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const PreviousworkSection = () => {
  const gallery = [
    { slide: "/images/gallery0.jpg" },
    { slide: "/images/gallery1.jpg" },
    { slide: "/images/gallery2.jpg" },
    { slide: "/images/gallery3.jpg" },
    { slide: "/images/gallery4.jpg" },
    { slide: "/images/gallery5.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Center image index

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    }, 3000); // Auto-slide every 3 sec

    return () => clearInterval(interval);
  }, [gallery.length]);

  const getPositionStyle = (index) => {
    const totalImages = gallery.length;
    const relativeIndex = (index - currentIndex + totalImages) % totalImages;

    switch (relativeIndex) {
      case 0: // Center Image (biggest)
        return "scale-125 z-20 translate-x-0 opacity-100";
      case 1: // Near Right
        return "scale-100 rotate-y-6 translate-x-[16rem] z-10 opacity-85";
      case 2: // Far Right
        return "scale-50 rotate-y-12 translate-x-[30rem] opacity-50";
      case totalImages - 1: // Near Left
        return "scale-100 rotate-y-[-6deg] -translate-x-[16rem] z-10 opacity-85";
      case totalImages - 2: // Far Left
        return "scale-50 rotate-y-[-12deg] -translate-x-[30rem] opacity-50";
      default: // Hide extra images but keep them in the DOM
        return "hidden";
    }
  };

  return (
    <section className="flex flex-col items-center p-8 w-full">
      <h1 className="text-3xl font-semibold text-center">
        Some of Our <span className="text-defined-orange">Previous Work</span>
      </h1>
      <p className="text-sm text-defined-blue mb-6">
        Your Automotive Repair & Maintenance Service Specialist
      </p>

      {/* Full-width Carousel Container */}
      <div className="relative flex justify-center items-center w-screen h-[30rem] overflow-hidden">
        {gallery.map((g, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-700 ease-in-out transform perspective ${getPositionStyle(
              i
            )}`}
          >
            <Image
              className="w-[18rem] h-[18rem] md:w-[22rem] md:h-[22rem] object-cover rounded-lg shadow-lg"
              src={g.slide}
              alt="gallery"
              width={350}
              height={350}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviousworkSection;
