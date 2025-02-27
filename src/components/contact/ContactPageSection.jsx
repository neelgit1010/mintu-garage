import { useEffect, useState } from "react";
import useElementHeight from "@/hooks/useElementHeight";
import { AiFillInstagram } from "react-icons/ai";
import { LuAlarmClock } from "react-icons/lu";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebook, FaGoogle, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactPageSection = () => {
    const contents = [
      {
        icon: <FaWhatsapp size={20} className="text-defined-orange" />,
        text: "+91 9563 211411",
        link: /iPhone|Android|iPad|iPod/i.test(navigator.userAgent)
          ? "https://wa.me/919563211411"
          : "https://web.whatsapp.com/send?phone=919563211411",
      },
      {
        icon: <BiSolidPhoneCall size={20} className="text-defined-orange" />,
        text: "+91 9563 211411",
        link: "tel:+919563211411",
      },
      {
        icon: <MdEmail size={20} className="text-defined-orange" />,
        text: "mintugarage@gmail.com",
        link: "mailto:mintugarage@gmail.com",
      },
      {
        icon: <FaLocationDot size={40} className="text-defined-orange" />,
        text: "NH-31, Bypass Road, Beside City Hospital, Prakash Nagar, Near Gandhi Maidan, Ward No. 43, Siliguri, WB - 734003",
        link: null,
      },
      {
        icon: <FaGoogle size={20} className="text-defined-orange" />,
        text: "Mintu Garage On Google",
        link: "https://g.co/kgs/ftVFsS7",
      },
      {
        icon: <FaFacebook size={20} className="text-defined-orange" />,
        text: "Mintu Garage On Facebook",
        link: "https://www.facebook.com/profile.php?id=61560013924689",
      },
      {
        icon: <AiFillInstagram size={20} className="text-defined-orange" />,
        text: "Mintu Garage On Instagram",
        link: "https://www.instagram.com/mintugarage",
      },
      {
        icon: <FaYoutube size={20} className="text-defined-orange" />,
        text: "Mintu Garage On Youtube",
        link: "https://www.youtube.com/@mintugarage",
      },
    ];
    const [rightSideHeight, leftSideRef] = useElementHeight();
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 768);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    <section>
      <div className="w-full h-auto p-8 flex flex-col md:flex-row gap-8">
        {/* content */}
        <div className="flex flex-col gap-4 w-full md:w-1/2" ref={leftSideRef}>
          <h1 className="text-2xl text-defined-blue font-semibold">
            Get In <span className="text-defined-orange">Touch</span>
          </h1>
          <p className="text-defined-brown">
            Have questions or need a service estimate? Fill out our Enquiry Box
            Form and let us assist you! Whether it's car servicing, repairs,
            diagnostics, or detailing, our team at{" "}
            <span className="text-defined-blue">Mintu Garage</span> is ready to
            help. Simply provide your details, and we’ll get back to you with
            expert advice and solutions. We value your time and ensure quick
            responses to all inquiries. Stay stress-free and let us handle your
            car needs - reach out today for hassle-free assistance!
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4 w-full md:w-[60%]">
              <h1 className="text-defined-blue text-xl font-bold">
                Contact Information
              </h1>
              {contents.slice(0, 4).map((content, index) => (
                <div
                  className="flex md:flex-row gap-4 items-center text-defined-brown"
                  key={index}
                >
                  {content.icon}
                  <a
                    href={content.link !== null ? content.link : "/"}
                    target="_blank"
                  >
                    <p>{content.text}</p>
                  </a>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 w-full md:w-[40%]">
              <h1 className="text-defined-blue text-xl font-bold">
                Follow With Us
              </h1>
              <div className="flex gap-4 items-center text-defined-orange">
                {contents.slice(4, 8).map((content, index) => (
                  <a key={index} href={content.link} target="_blank">
                    {content.icon}
                  </a>
                ))}
              </div>
              <h1 className="text-defined-blue text-xl font-bold">
                Garage opening Time
              </h1>
              <div className="flex items-center gap-3">
                <LuAlarmClock size={25} className="text-defined-orange" />
                <span className="text-defined-brown">Opening Time 10:00 am</span>
              </div>
              <div className="flex items-center gap-3">
                <LuAlarmClock size={25} className="text-defined-orange" />
                <span className="text-defined-brown">Closing Time 08:00 pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* map */}
        <div
          className="w-full md:w-1/2"
          style={{
            height: isSmallScreen ? "auto" : `${rightSideHeight}px`,
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.98614385948!2d88.4269478748217!3d26.742589067381957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441c21a11e2cf%3A0xbda529d96d4997dc!2sMINTU%20GARAGE!5e1!3m2!1sen!2sin!4v1740579031453!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactPageSection