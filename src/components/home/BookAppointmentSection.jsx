import Image from "next/image"

const BookAppointmentSection = () => {

  return (
    <section>
      <div className="w-full h-[50rem] md:h-[20rem] relative">
        <Image
          src={"/images/footer.jpg"}
          alt="footer"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 w-full h-auto flex flex-col justify-center items-center p-24 text-white gap-4">
          <h1 className="text-3xl font-bold text-center">Schedule Your Appointment Today</h1>
          <p className="text-center">
            Ensure your vehicle’s peak performance and safety by booking an
            appointment with Mintu Garage today! Our skilled technicians provide
            expert diagnostics, repairs, and maintenance using advanced tools.
            Avoid costly breakdowns, enhance fuel efficiency, and extend your
            car’s lifespan with our reliable services. Don’t wait - schedule
            your visit now for prompt, professional care!
          </p>
          <button className="bg-transparent border-2 text-white hover:bg-white hover:text-defined-blue hover:cursor-pointer py-2 px-4 rounded-lg transition-all duration-500 font-semibold">Request Quote</button>
        </div>
      </div>
    </section>
  );
}

export default BookAppointmentSection