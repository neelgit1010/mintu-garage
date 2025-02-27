import { useState } from "react";

const EnquiryCard = () => {

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
    <div className="w-full">
      <form
        className="flex flex-col justify-center w-full h-full"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-8 w-full">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="p-4 rounded-lg opacity-80 w-full border"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Mobile Number(10-digit)"
              name="mobile"
              className="p-4 rounded-lg opacity-80 w-full border"
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-8 w-full">
            <select
              className="p-4 rounded-lg opacity-80 w-full border"
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
              <option value="Suspension Repairing">Suspension Repairing</option>
              <option value="Gear Box Repairing">Gear Box Repairing</option>
              <option value="Car AC Repairing"> Car AC Repairing</option>
              <option value="Denting Painting">Denting Painting</option>
              <option value="Car Computer Checkup">Car Computer Checkup</option>
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
  );
}

export default EnquiryCard