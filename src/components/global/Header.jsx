"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import EnquiryCard from "../cards/EnquiryCard";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Car Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    const openModal = () => {
      setModalOpen(true);
    };

    const closeModal = () => {
      setModalOpen(false);
    };
    useEffect(() => {
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            setScrolled(window.scrollY > 60);
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <header>
      <div
        className={`flex justify-between items-center md:px-6 px-4 fixed lg:px-8 h-[4.5rem] md:h-[5rem] w-full z-[60] bg-white shadow-md ${
          scrolled ? "top-0 " : "md:top-[3rem] top-0"
        }`}
      >
        <Link href={"/"}>
          <div>
            <Image
              src="/images/logo.png"
              alt="logo"
              width={220}
              height={40}
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-5 lg:items-center font-semibold lg:text-sm">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="hover:text-defined-orange hover:cursor-pointer transition-all duration-500"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex lg:gap-5">
          <button
            onClick={openModal}
            className="bg-defined-orange hover:bg-defined-blue text-white py-2 px-8 rounded-md transition-all duration-700 font-semibold hover:cursor-pointer"
          >
            Get Estimate
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-3xl ml-auto mr-3"
          onClick={toggleMenu}
        >
          {isOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-16 left-0 w-full bg-black text-white shadow-md flex flex-col p-5 gap-4 transition-all duration-300 transform ${
            isOpen
              ? "opacity-85 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={toggleMenu}
              className="hover:text-defined-blue"
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={openModal}
            className="bg-defined-orange text-white py-2 px-8 rounded-full w-full transition-all duration-300 font-semibold hover:bg-gray-800"
          >
            Get Estimate
          </button>
          {modalOpen && (
            <div className="fixed top-0 z-[1300] left-0 w-full h-full flex items-center justify-center overflow-y-scroll bg-black bg-opacity-50">
              <div className=" w-full sm:h-[50vh] lg:h-[100vh] justify-center items-center flex flex-col  rounded-lg bg-white">
                <div className="w-full flex p-4 justify-end items-center relative">
                  <MdCancel
                    size={30}
                    onClick={closeModal}
                    className="lg:text-2xl sm:text-xl absolute z-[1400] top-0 lg:h-10 right-6 text-defined-orange"
                  />
                </div>
                <div className=" w-[95%] md:w-[60%] lg:w-[45%] xl:w-[40%] xxl:w-[30%] z-[1300] relative">
                  <EnquiryCard />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
