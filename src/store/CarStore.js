import { createContext, useContext } from "react";

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const cars = [
    {
      img: "/services/CarServicing.jpg",
      title: "Car Servicing",
      desc: "Comprehensive maintenance to ensure your vehicle runs smoothly, enhancing performance, efficiency, and overall lifespan.",
    },
    {
      img: "/services/CarRepair.jpg",
      title: "Car Repair",
      desc: "Expert repairs to fix mechanical, electrical, and structural issues, restoring your car’s performance and reliability.",
    },
    {
      img: "/services/CarEngineRepair.jpg",
      title: "Car Engine Repair",
      desc: "Diagnosing and repairing engine problems to maintain power, fuel efficiency, and smooth operation.",
    },
    {
      img: "/services/gallery4.jpg",
      title: "Suspension Repairing",
      desc: "Restoring suspension systems for improved handling, stability, and driving comfort on all road conditions.",
    },
    {
      img: "/services/GearBoxRepairing.jpg",
      title: "Gear Box Repairing",
      desc: "Repairing manual and automatic gearboxes for seamless gear shifting and optimal vehicle performance.",
    },
    {
      img: "/services/CarACRepairing.jpg",
      title: "Car AC Repairing",
      desc: "Fixing air conditioning systems to ensure effective cooling and comfortable driving in all weather conditions.",
    },
    {
      img: "/services/DentingPainting.jpg",
      title: "Denting Painting",
      desc: "Comprehensive maintenance to ensure your vehicle runs smoothly, enhancing performance, efficiency, and overall lifespan.",
    },
    {
      img: "/services/CarComputerCheckup.jpg",
      title: "Car Computer Checkup",
      desc: "We use advanced computer systems to analyze your car’s performance, ensuring optimal functionality and detecting potential issues.",
    },
    {
      img: "/services/CarDiagnosis.jpg",
      title: "Car Scanning",
      desc: "Our expert technicians accurately diagnose mechanical, electrical, and performance issues, ensuring efficient repairs and improved vehicle reliability.",
    },
    {
      img: "/services/CarScanning.jpg",
      title: "Car Scanning",
      desc: "We perform comprehensive car scanning using advanced tools to identify hidden faults, ensuring precise repairs and enhanced vehicle performance.",
    },
    {
      img: "/services/CarWashing.jpg",
      title: "Car Washing",
      desc: "Our professional car wash service removes dirt, grime, and stains, leaving your vehicle sparkling clean and refreshed inside and out.",
    },
    {
      img: "/services/CarDetailing.jpg",
      title: "Car Detailing",
      desc: "We provide meticulous interior and exterior detailing, restoring your vehicle’s appearance, enhancing shine, and preserving its long-lasting beauty.",
    },
    {
      img: "/services/CarWearing.jpg",
      title: "Car Wearing",
      desc: "Our skilled team handles all types of car wiring, ensuring secure connections, optimal functionality, and reliable performance of electrical components.",
    },
  ];
  return <CarContext.Provider value={{ cars }}>
    {children}
    </CarContext.Provider>;
};

export const useCar = () => useContext(CarContext)
