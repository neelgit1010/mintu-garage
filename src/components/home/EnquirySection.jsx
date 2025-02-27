import Image from "next/image";
import { useState } from "react";

const EnquirySection = () => {

    const [formData, setFormData] = useState({});
   const handleFormSubmit = (e) => {
     e.preventDefault();

     if (!formData.name || !formData.mobile || !formData.service) {
       alert("Please fill all the fields");
       return;
     }

     if (formData.mobile.length !== 10) {
       alert("Please enter a valid mobile number");
       return;
     }

     const dest = "+919563211411";
     let message = `*Name:* ${formData.name}
  *Phone:* ${formData.mobile}
  *Service needed:* ${formData.service}
  `;
     message = encodeURIComponent(message);
     // Check if user is on mobile
     const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
     const baseUrl = isMobile
       ? "https://api.whatsapp.com/send"
       : "https://web.whatsapp.com/send";

     const url = `${baseUrl}?phone=${dest}&text=${message}`;
     window.open(url, "_blank").focus();
   };
  return (
    <section className="p-8">
      <div className="flex flex-col rounded-lg bg-defined-white p-6 gap-4 text-center md:text-left">
        <h1 className="text-base md:text-2xl font-semibold text-defined-blue">
          Quick, Hassle-Free Booking Process With Flexible Service Options.
        </h1>
        <div className="flex gap-4 flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2">
            <form
              className="flex flex-col justify-center w-full h-full"
              onSubmit={handleFormSubmit}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-8 w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="p-4 rounded-lg opacity-80 w-full"
                  />
                  <input
                    type="number"
                    placeholder="Mobile Number(10-digit)"
                    name="mobile"
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    className="p-4 rounded-lg opacity-80 w-full"
                  />
                </div>
                <div className="flex flex-col gap-8 w-full">
                  <select
                    className="p-4 rounded-lg opacity-80 w-full"
                    name="service"
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                  >
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
                    <option value="Car Wax Polish">Car Wax Polish</option>
                    <option value="Teflon Polish">Teflon Polish</option>
                    <option value="Key Repair">Key Repair</option>
                    <option value="Meter Repair">Meter Repair</option>
                    <option value="Car Antirust Coating">
                      Car Antirust Coating
                    </option>
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
