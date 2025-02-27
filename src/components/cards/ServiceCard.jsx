import Image from "next/image";

const ServiceCard = ({img, title, desc}) => {
  const handleRequestQuote = (title) => {
     const dest = "+919563211411";
     let message = `Hey! I need a *${title}* service.`;
     message = encodeURIComponent(message);

     const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
     const baseUrl = isMobile
       ? "https://api.whatsapp.com/send"
       : "https://web.whatsapp.com/send";

     const url = `${baseUrl}?phone=${dest}&text=${message}`;
     window.open(url, "_blank").focus();
  }
  return (
    <div className="flex flex-col gap-4 justify-between flex-grow shadow-lg rounded-lg p-4 w-auto h-auto">
      <div className="h-auto rounded-lg">
        <Image
          src={img}
          alt="1"
          width={500}
          height={500}
          className="w-full h-[18rem] object-cover rounded-lg"
        />
      </div>
      <h1 className="text-defined-orange  text-center text-2xl font-semibold">
        {title}
      </h1>
      <p className="text-center text-defined-brown">
        {desc}
      </p>
      <button className="bg-defined-orange hover:bg-defined-blue hover:cursor-pointer text-white py-2 px-4 rounded-lg  transition-all duration-500"
      onClick={() => handleRequestQuote(title)}
      >
        Request Quote
      </button>
    </div>
  );
};

export default ServiceCard;
