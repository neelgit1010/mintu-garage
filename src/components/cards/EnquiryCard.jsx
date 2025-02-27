
const EnquiryCard = () => {
  return (
    <div className="w-full">
      <form className="flex flex-col justify-center w-full h-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-8 w-full">
            <input
              type="text"
              placeholder="Name"
              className="p-4 rounded-lg opacity-80 w-full border"
            />
            <input
              type="number"
              placeholder="Mobile Number(10-digit)"
              className="p-4 rounded-lg opacity-80 w-full border"
            />
          </div>
          <div className="flex flex-col gap-8 w-full">
            <select className="p-4 rounded-lg opacity-80 w-full border">
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