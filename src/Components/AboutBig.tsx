import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import handyMan from "../assets/handy-man.jpg";

const AboutBig = () => {
  const checkCircle = "mt-[5px] mr-3 md:mt-[2px]";

  return (
    <section className="mx-auto w-screen mt-12">
      <div className="grid grid-cols-2 max-w-screen-xl mx-auto">
        <div className="  mx-auto px-4 py-2   flex flex-col text-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-5">
            About Us
          </h2>
          <p className="text-xs md:text-sm leading-5 tracking-wider mt-5 text-[#08406f]">
            AYN SERVICES' mission is to deliver superior cleaning and building
            maintenance solutions to small and medium businesses and facilities,
            leveraging our extensive <strong>30 Plus Years</strong> of
            experience in the services industry.
          </p>
          <div
            id="choosing-services"
            className=" text-[#08406f] text-xs md:text-sm leading-7 tracking-widest"
          >
            <p className=" mt-5 md:mt-7">
              By choosing our services, you can look forward to:
            </p>
            <div id="bullets" className="ml-2">
              <p className="mt-1 md:mt-3 flex flex-row ">
                <span className={`${checkCircle}`}>
                  <AiFillCheckCircle size={16} />
                </span>
                Receiving reliable and outstanding cleaning solutions
              </p>
              <p className="mt-1 md:mt-3 flex flex-row ">
                <span className={`${checkCircle}`}>
                  <AiFillCheckCircle size={16} />
                </span>
                Having a personalized maintenance service to fit your needs
              </p>
              <p className="mt-1 md:mt-3 flex flex-row ">
                <span className={`${checkCircle}`}>
                  <AiFillCheckCircle size={16} />
                </span>
                Having a clean, safe, maintained, and healthy work environment
              </p>
              <p className="mt-1 md:mt-3 flex flex-row ">
                <span className={`${checkCircle}`}>
                  <AiFillCheckCircle size={16} />
                </span>
                Preventative maintenance that extends the life of your facility
              </p>
            </div>
            <button
              type="button"
              className="text-white bg-blue-700/90 hover:bg-blue-800 focus:ring-4
         focus:ring-blue-300 font-medium rounded-sm text-sm px-10 py-2.5 mr-2 mb-2
         mt-5 shadow-md"
            >
              Contact Us Today
            </button>
          </div>
        </div>{" "}
        <img src={handyMan} className="h-full w-auto object-cover" />
      </div>
    </section>
  );
};

export default AboutBig;
