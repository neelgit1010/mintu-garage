import Image from "next/image";
import CountUp from "react-countup";

const CounterCard = ({ title, icon, number, suffix, inView }) => {
  return (
    <div className="flex gap-4">
      <div className="w-[4rem] h-[4rem] rounded-2xl bg-defined-orange flex justify-center items-center p-4">
        <Image
          src={icon}
          alt="person_play"
          width={100}
          height={100}
          className="w-full h-auto object-cover"
        />
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-defined-blue">
          {inView ? <CountUp end={number} duration={2} /> : 0}{suffix}
        </h1>
        <p className="text-sm text-defined-brown">{title}</p>
      </div>
    </div>
  );
};

export default CounterCard