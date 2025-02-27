import Image from "next/image";
import { useEffect, useState } from "react";
import { MdFileDownloadDone } from "react-icons/md";
import useElementHeight from "@/hooks/useElementHeight";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
const AboutSection = () => {
  const content = [
    {
      title: "Expert mechanics ensure reliable vehicle servicing.",
    },
    {
      title: "Friendly, professional staff offering personalized assistance.",
    },
    {
      title: "Comprehensive services, from maintenance to repairs.",
    },
    {
      title: "Trusted local garage with a proven reputation.",
    },
  ];
  const [rightSideHeight, leftSideRef] = useElementHeight();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-4 p-8">
        {/* Images */}
        <div
          className="w-full lg:w-[60%] flex gap-4"
          style={{
            height: isSmallScreen ? "auto" : `${rightSideHeight}px`,
          }}
        >
          <div className="w-full h-auto">
            <Image
              src="/about/1.jpg"
              alt="about-1"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full h-auto flex flex-col gap-4">
            <div className="w-full h-3/4">
              <Image
                src="/about/2.jpg"
                alt="about-2"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div
              ref={ref}
              className="flex flex-col h-1/4 justify-center items-center bg-defined-orange rounded-lg text-white"
            >
              <h1 className="text-3xl font-semibold">
                0{inView ? <CountUp end={9} duration={2} /> : 0}+
              </h1>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>
        </div>
        {/* content */}
        <div
          className="flex flex-col gap-4 w-full lg:w-[40%]"
          ref={leftSideRef}
        >
          <h1 className="font-light text-defined-blue text-xl">
            About Mintu Garage
          </h1>
          <h1 className="text-defined-blue font-bold text-3xl">
            Car Trouble? Trust{" "}
            <span className="text-defined-orange">Mintu Garage</span> to Get You
            Back on the Road!
          </h1>
          <p className="text-defined-brown">
            Welcome to Mintu Garage, one of the oldest and most trusted car
            repair service providers in Siliguri. With over 15 years of
            experience, we are committed to delivering reliable and high-quality
            automotive solutions to keep your vehicle running smoothly. Our team
            of skilled technicians is equipped with advanced tools and
            diagnostic systems to accurately identify and fix any issues your
            car may have. We offer a comprehensive range of services, including
            car servicing, engine and suspension repairs, gearbox and AC
            repairs, denting and painting, computer checkups, car diagnostics,
            scanning, washing, detailing, and electrical wiring. <br /> At Mintu
            Garage, we prioritize customer satisfaction, ensuring that every
            vehicle receives expert care and attention. Our dedication to
            excellence, combined with our extensive industry experience, has
            earned us the trust and loyalty of countless customers across
            Siliguri. <br />
            Experience professional car care with Mintu Garage—where your
            vehicle’s performance and safety are our top priorities.
          </p>
          {content.map((c, i) => {
            return (
              <div key={i} className="flex gap-4 font-semibold">
                <MdFileDownloadDone size={30} className="text-defined-orange" />
                <p className="text-defined-blue">{c.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
