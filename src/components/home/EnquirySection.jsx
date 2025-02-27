import Image from "next/image";

const EnquirySection = () => {
  return (
    <section className="p-8">
      <div className="flex flex-col rounded-lg bg-defined-white p-6 gap-4 text-center md:text-left">
        <h1 className="text-base md:text-2xl font-semibold text-defined-blue">
          Quick, Hassle-Free Booking Process With Flexible Service Options.
        </h1>
        <div className="flex gap-4 flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2">
            <form className="flex flex-col justify-center w-full h-full">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-8 w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    className="p-4 rounded-lg opacity-80 w-full"
                  />
                  <input
                    type="number"
                    placeholder="Mobile Number(10-digit)"
                    className="p-4 rounded-lg opacity-80 w-full"
                  />
                </div>
                <div className="flex flex-col gap-8 w-full">
                  <select className="p-4 rounded-lg opacity-80 w-full">
                    <option value="" disabled selected>
                      Select Services
                    </option>
                    <option value="Car Servicing ">Car Servicing</option>
                    <option value="Car Repair">Car Repair</option>
                    <option value="Car Engine Repair">Car Engine Repair</option>
                    <option value="Suspension Repairing">
                      Suspension Repairing
                    </option>
                    <option value="Gear Box Repairing">
                      Gear Box Repairing
                    </option>
                    <option value="Car AC Repairing"> Car AC Repairing</option>
                    <option value="Denting Painting">Denting Painting</option>
                    <option value="Car Computer Checkup">
                      Car Computer Checkup
                    </option>
                    <option value="Car Diagnosis">Car Diagnosis</option>
                    <option value="Car Scanning">Car Scanning</option>
                    <option value="Car Washing">Car Washing</option>
                    <option value="Car Detailing">Car Detailing</option>
                    <option value="Car Wearing ">Car Wearing</option>
                  </select>

                  <button
                    type="submit"
                    className="p-4 rounded-lg w-full bg-defined-orange text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/car.png"
              alt="car"
              height={500}
              width={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
