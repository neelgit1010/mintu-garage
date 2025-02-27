import Image from "next/image"
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import EnquiryCard from "../cards/EnquiryCard";

const BookAppointmentSection = () => {

    const [modalOpen, setModalOpen] = useState(false);
   const openModal = () => setModalOpen(true);
   const closeModal = () => setModalOpen(false);

  return (
    <section>
      <div className="w-full h-[24rem] md:h-[15rem] relative">
        <Image
          src={"/images/footer.jpg"}
          alt="footer"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 w-full h-auto flex flex-col justify-center items-center p-1 md:p-20 text-white gap-4">
          <h1 className="text-3xl font-bold text-center">
            Schedule Your Appointment Today
          </h1>
          <p className="text-center">
            Ensure your vehicle’s peak performance and safety by booking an
            appointment with Mintu Garage today! Our skilled technicians provide
            expert diagnostics, repairs, and maintenance using advanced tools.
            Avoid costly breakdowns, enhance fuel efficiency, and extend your
            car’s lifespan with our reliable services. Don’t wait - schedule
            your visit now for prompt, professional care!
          </p>
          <button className="bg-transparent border-2 text-white hover:bg-white hover:text-defined-blue hover:cursor-pointer py-2 px-4 rounded-lg transition-all duration-500 font-semibold"
          onClick={openModal}
          >
            Request Quote
          </button>
        </div>

        {modalOpen && (
          <div
            className="fixed inset-0 z-[1300] flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-lg bg-white rounded-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-1 right-4 text-defined-orange"
              >
                <MdCancel size={30} />
              </button>
              <div className="w-full p-4">
                <EnquiryCard />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default BookAppointmentSection