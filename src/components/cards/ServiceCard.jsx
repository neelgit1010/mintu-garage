import Image from "next/image";

const ServiceCard = ({img, title, desc}) => {
  return (
    <div className="flex flex-col gap-4 justify-between flex-grow shadow-lg rounded-lg p-4 w-auto h-auto">
      <div className="h-auto rounded-lg">
        <Image
          src={img}
          alt="1"
          width={500}
          height={500}
          className="w-full h-[25rem] object-cover rounded-lg"
        />
      </div>
      <h1 className="text-defined-orange  text-center text-2xl font-semibold">
        {title}
      </h1>
      <p className="text-center text-defined-brown">
        {desc}
      </p>
      <button className="bg-defined-orange hover:bg-defined-blue hover:cursor-pointer text-white py-2 px-4 rounded-lg  transition-all duration-500">
        Request Quote
      </button>
    </div>
  );
};

export default ServiceCard;
