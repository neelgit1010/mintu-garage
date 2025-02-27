import Image from "next/image";
import CountUp from "react-countup";

const CounterCard = ({ title, icon, number, inView, index }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-4 w-full 
      transform transition-all duration-700 ease-out
      ${
        inView ? "translate-x-0 opacity-100" : "translate-x-[-50px] opacity-0"
      }`}
      style={{ transitionDelay: `${index * 500}ms` }} // Each card appears 500ms after the previous one
    >
      {/* Icon */}
      <div className="w-[4rem] h-[4rem] rounded-2xl bg-defined-orange flex justify-center items-center p-2">
        <Image
          src={icon}
          alt={title}
          width={100}
          height={100}
          className="w-[2.5rem] h-[2.5rem] object-contain"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-defined-blue">
          {inView ? <CountUp end={number} duration={2} /> : 0}+
        </h1>
        <p className="text-sm text-defined-brown">{title}</p>
      </div>
    </div>
  );
};

export default CounterCard;
