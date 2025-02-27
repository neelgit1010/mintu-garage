import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const PreviousworkSection = () => {
  const [currentSlide, setCurrentSlide] = useState(2);

  const gallery = [
    { slide: "/images/gallery0.jpg" },
    { slide: "/images/gallery1.jpg" },
    { slide: "/images/gallery2.jpg" },
    { slide: "/images/gallery3.jpg" },
    { slide: "/images/gallery4.jpg" },
    { slide: "/images/gallery5.jpg" },
  ];

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section>
      <div className="flex flex-col p-8 gap-8 text-defined-blue justify-center items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold text-center">
            Some of Our{" "}
            <span className="text-defined-orange">Previous Work</span>
          </h1>
          <p>Your Automotive Repair & Maintenance Service Specialist</p>
        </div>

        {/* Gallery */}
        {Slider && (
          <div className="w-full">
            <Slider {...settings}>
              {gallery.map((g, i) => {
                const isActive = i === currentSlide;
                const isLeft = i === currentSlide - 1;
                const isRight = i === currentSlide + 1;
                const isFarLeft = i === currentSlide - 2;
                const isFarRight = i === currentSlide + 2;

                return (
                  <div
                    key={i}
                    className={`w-full flex gap-4 transition-all duration-700 ease-in-out transform perspective-[1000px] ${
                      isActive
                        ? "scale-110 rotate-z-0 translate-z-0 z-10 animate-none" // Center image straight
                        : isLeft
                        ? "-rotate-z-15 scale-95 translate-z-10 -translate-x-4 z-0 animate-spin-slow" // Left tilt
                        : isRight
                        ? "rotate-z-15 scale-95 translate-z-10 translate-x-4 z-0 animate-spin-slow" // Right tilt
                        : isFarLeft
                        ? "-rotate-z-30 scale-75 translate-z-20 -translate-x-6 opacity-50 animate-spin-slow" // More tilt left
                        : isFarRight
                        ? "rotate-z-30 scale-75 translate-z-20 translate-x-6 opacity-50 animate-spin-slow" // More tilt right
                        : "hidden"
                    }`}
                  >
                    <Image
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                      src={g.slide}
                      alt="gallery"
                      width={500}
                      height={500}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};

export default PreviousworkSection;
