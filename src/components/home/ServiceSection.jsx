import Link from "next/link";
import ServiceCard from "../cards/ServiceCard";
import { useCar } from "@/store/CarStore";

const ServiceSection = () => {
  const { cars } = useCar();
  const homeCars = cars.slice(0, 6);
  return (
    <section>
      <div className="flex flex-col gap-4 p-8">
        <h1 className="text-sm text-defined-blue">
          That’s the Mintu Garage Promise!
        </h1>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl text-defined-blue">
            Expert <span className="text-defined-orange">Mechanics</span>,
            Honest <span className="text-defined-orange">Service</span>
          </h1>
          <h1 className="text-base md:text-xl text-defined-blue hover:underline hover:cursor-pointer">
            <Link href="/services">View All {">>>"}</Link>
          </h1>
        </div>
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {homeCars.map((car, index) => (
            <ServiceCard
              key={index}
              img={car.img}
              title={car.title}
              desc={car.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
