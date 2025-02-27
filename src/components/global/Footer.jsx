import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaShop, FaShopSlash } from "react-icons/fa6";
import { FaFacebook, FaGoogle, FaMobile, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  const quickas = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Our Servicing", path: "/services" },
    { name: "Car AC Servicing", path: "/services" },
    { name: "Car Repair", path: "/services" },
    { name: "Gear Box Repair", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleBookingModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);
  return (
    <footer className="relative w-full p-6 lg:p-8 border-t-4">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer.jpg"
          alt="footer"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Section */}
            <div className="flex flex-col gap-4 w-full lg:w-[40%]">
              <Image
                src="/images/logo-white.png"
                alt="logo"
                width={186}
                height={52}
              />
              <p className="text-sm opacity-80">
                Experience reliable car care with expert repairs, advanced
                diagnostics, detailing, & maintenance - ensuring your vehicle
                runs flawlessly!
              </p>
              <h1 className="font-bold text-xl">Contact Information</h1>
              <div className=" text-white">
                <div className="flex items-center gap-2">
                  <FaWhatsapp />
                  <span>+91 9563 211411</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMobile />
                  <span>+91 9563 211411</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdEmail />
                  <span>mintugarage@gmail.com</span>
                </div>
                <div className="flex gap-2 w-full xl:w-[80%]">
                  <FaShop size={20} />
                  <span>Opens at 10:00AM</span>
                </div>
                <div className="flex gap-2 w-full xl:w-[80%]">
                  <FaShopSlash size={20} />
                  <span>Closes at 08:00PM</span>
                </div>
                <div className="flex gap-2 w-full xl:w-[80%]">
                  <IoLocationSharp size={30} />
                  <span>
                    NH-31, Bypass Road, Beside City Hospital, Prakash Nagar,
                    Near Gandhi Maidan, Ward No. 43, Siliguri, WB - 734003
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-[35%] lg:flex-row">
              {/* Quick as */}
              <div className="w-1/2">
                <h1 className="font-bold">Quick as</h1>
                <ul className="text-white text-sm">
                  {quickas.map((item, index) => (
                    <li key={index} className="py-2 hover:underline">
                      <Link href={item.path}>
                        {"> "}
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Best Rooms */}
              <div className="w-1/2">
                <h1 className="font-bold">Our Services</h1>
                <ul className="text-white text-sm">
                  {[
                    "Best Car Garage In Siliguri",
                    "Siliguri Best Car Garage",
                    "Siliguri Car AC Repair",
                    "Siliguri Best Car Service",
                    "Siliguri Car Denting Panting",
                    "Siliguri Best Car AC Repair",
                    "Car AC Repair In Siliguri",
                    "Best Car Garage In Siliguri",
                  ].map((item, index) => (
                    <li key={index} className="py-2 hover:underline">
                      <Link href="/services">
                        {">"}
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Right Section */}
            <div className="w-full lg:w-[30%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.98614385948!2d88.4269478748217!3d26.742589067381957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441c21a11e2cf%3A0xbda529d96d4997dc!2sMINTU%20GARAGE!5e1!3m2!1sen!2sin!4v1740579031453!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="rounded-lg w-full h-[10rem] md:h-[18rem]"
              ></iframe>

              <div className="flex items-center gap-4 p-2">
                <h1 className="text-xl">Find With Us</h1>
                <a
                  href={
                    "https://www.facebook.com/profile.php?id=61560013924689"
                  }
                  target="_blank"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href={"https://www.instagram.com/mintugarage"}
                  target="_blank"
                >
                  <AiFillInstagram className="text-xl" />
                </a>
                <a
                  href={"https://www.youtube.com/@mintugaragesiliguri"}
                  target="_blank"
                >
                  <FaYoutube className="text-xl" />
                </a>
                <a href={"https://g.co/kgs/ftVFsS7"} target="_blank">
                  <FaGoogle className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="bg-defined-gray w-full my-4" />
        <div className="text-sm text-white flex flex-col md:flex-row justify-between items-center">
          <h1>
            © 2025{" "}
            <span className="hover:underline font-bold">
              <Link href="/"> Mintu Garage</Link>
            </span>{" "}
            - All Rights Reserved
          </h1>
          <h1>
            Design & Developed By:{" "}
            <span className="font-semibold">
              <a
                target="_blank"
                href="https://rebootai.in/"
                className="hover:underline"
              >
                Reboot AI Pvt. Ltd.
              </a>
            </span>
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
