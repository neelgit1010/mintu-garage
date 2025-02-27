"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CounterCard from "../cards/CounterCard";
import dynamic from "next/dynamic";
const Slide = dynamic(() => import("react-slick"), { ssr: false });

const CounterSection = () => {
  const cards = [
    {
      number: 10000,
      title: "Satisfied Customer",
      icon: "/home/person_play.png",
    },
    { number: 100, title: "Services", icon: "/home/family_star.png" },
    { number: 20, title: "Experienced", icon: "/home/group.png" },
    { number: 4, title: "Rating on Google", icon: "/home/handshake.png" },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => ((prevIndex + 1) % cards.length));
    }, 3000); // Slide every 3s

    return () => clearInterval(interval);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section ref={ref} className="w-full">
      {/* Desktop: All Cards Visible */}
      <div className="hidden md:flex justify-between items-center gap-6 p-8 w-full">
        {cards.map((card, index) => (
          <CounterCard key={index} {...card} inView={inView} />
        ))}
      </div>

      {/* Mobile & Tablet: Smooth Slideshow */}
      <div className="md:hidden w-full relative">
        <Slide {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="w-full flex justify-center shrink-0 p-4">
              <CounterCard {...card} inView={inView} />
            </div>
          ))}
        </Slide>
        </div>
    </section>
  );
};

export default CounterSection;
