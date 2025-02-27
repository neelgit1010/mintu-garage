"use client";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaGoogle, FaWhatsapp } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
const TopHeader = () => {
  return (
    <div className="z-[60] w-full ">
      <div className=" bg-defined-blue h-[3rem] hidden md:flex justify-between sm:gap-2 md:gap-0 items-center  text-white">
        <div className="flex gap-4 w-full  sm:rounded-br-0 md:rounded-br-[4rem]  sm:px-4 md:px-6 sm:text-xs lg:text-sm xlg:text-base">
          <div className="flex md:gap-2 sm:gap-1 items-center sm:text-[10px] lg:text-sm xlg:text-base font-medium">
            <BiSolidPhoneCall size={20} className="text-defined-orange" />
            <Link href="tel:+919563211411">+91 9563 211411</Link>{","}
            <Link href="tel:+918637897776">+91 8637897776</Link>{" "}
            <FaWhatsapp size={20} className="text-defined-orange" />
            <span className="text-white">+91 9563 211411</span>{" "}
          </div>
        </div>
        <div className="flex gap-4 sm:px-4 md:px-6 sm:text-xs lg:text-sm xlg:text-base">
          <div className="flex items-center gap-4">
            <a target="_blank" href={"https://g.co/kgs/ftVFsS7"}>
              <FaGoogle size={20} className="text-white" />
            </a>
            <a
              target="_blank"
              href={"https://www.facebook.com/profile.php?id=61560013924689"}
            >
              <FaFacebook size={20} className="text-white" />
            </a>
            <a target="_blank" href={"https://www.instagram.com/mintugarage"}>
              <AiFillInstagram size={20} className="text-white" />
            </a>
            <a target="_blank" href={"tel:+919563211411"}>
              <FaWhatsapp size={20} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
