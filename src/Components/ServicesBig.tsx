import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import carpetWashing from "../assets/carpet-washing.jpg";

const AboutBig: React.FC = () => {
  const checkCircle = "mt-[5px] mr-3 md:mt-[2px]";

  return (
    <section className="mx-auto w-screen  ">
      <div className="grid grid-cols-2 max-w-screen-xl mx-auto py-12 bg-[#f1f1f1]">
        <img
          src={carpetWashing}
          className="h-full w-auto object-cover p-3 bg-inherit"
        />
        <div className="  mx-auto px-4 py-2   flex flex-col text-left justify-evenly bg-inherit">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold bg-inherit">
            Our Services
          </h2>
          <p
            style={{ lineHeight: "25px" }}
            className="text-sm md:text-base leading-5 tracking-wider mt-5 text-[#08406f] mb-1 bg-inherit "
          >
            We provide a broad range of professional services in building
            cleaning and maintenance
          </p>
          <div
            id="choosing-services"
            className="bg-inherit text-[#08406f] text-xs md:text-sm leading-7 tracking-wider"
          >
            <ul id="bullets" className="ml-2 bg-inherit mt-3 ">
              <li className=" flex flex-row bg-transparent">
                <span
                  className={`${checkCircle} bg-transparent aria-hidden="true"`}
                >
                  <AiFillCheckCircle size={16} className="icon" />
                </span>
                General building maintenance
              </li>
              <li className="mt-1 md:mt-3 flex flex-row bg-transparent">
                <span
                  className={`${checkCircle} bg-transparent aria-hidden="true"`}
                >
                  <AiFillCheckCircle size={16} className="icon" />
                </span>
                Minor repairs of facilities
              </li>
              <li className="mt-1 md:mt-3 flex flex-row bg-transparent">
                <span
                  className={`${checkCircle} bg-transparent aria-hidden="true"`}
                >
                  <AiFillCheckCircle size={16} className="icon" />
                </span>
                Scheduled maintenance or inspection
              </li>
              <li className="mt-1 md:mt-3 flex flex-row bg-transparent">
                <span
                  className={`${checkCircle} bg-transparent aria-hidden="true"`}
                >
                  <AiFillCheckCircle size={16} className="icon" />
                </span>
                Assembling of office equipment
              </li>
              <li className="mt-1 md:mt-3 flex flex-row bg-transparent">
                <span
                  className={`${checkCircle} bg-transparent aria-hidden="true"`}
                >
                  <AiFillCheckCircle size={16} className="icon" />
                </span>
                Cleaning and maintenance of all floor types
              </li>
              <li className="mt-1 md:mt-3 flex flex-row bg-transparent">
                <span
                  className={`${checkCircle} bg-transparent aria-hidden="true"`}
                >
                  <AiFillCheckCircle size={16} className="icon" />
                </span>
                Cleaning of all types of fabric
              </li>
            </ul>
            <p
              style={{ lineHeight: "25px" }}
              className="text-xs md:text-sm tracking-wider mt-5 text-[#08406f] "
            >
              At AYN SERVICES, we understand the urgency customers often face, &
              our team of professionals is committed to providing prompt and
              efficient service. We prioritize the needs of businesses &
              organizations of all sizes, making every effort to accommodate
              their needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBig;
