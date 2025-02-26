import ServiceCard from "../cards/ServiceCard";
import { useCar } from "@/store/CarStore";

const ServicePageSection = () => {
const { cars } = useCar();
  return (
    <section>
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        {cars.map((car, index) => (
          <ServiceCard
            key={index}
            img={car.img}
            title={car.title}
            desc={car.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicePageSection