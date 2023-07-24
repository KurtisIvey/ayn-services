import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Subservices: React.FC = () => {
  const checkCircle = "mt-[5px] mr-3 md:mt-[2px]";

  return (
    <section className="mx-auto w-full  max-w-7xl px-4 py-12">
      <p
        style={{ lineHeight: "25px" }}
        className="text-base md:text-lg  tracking-wider mt-5 text-[#08406f] mb-1 font-semibold"
      >
        We also provide a variety of specialty cleaning services
      </p>
      <div
        id="choosing-services"
        className=" text-[#08406f] text-xs md:text-sm leading-7 tracking-wider mt-2"
      >
        <div id="bullets" className="ml-2 grid grid-cols-3 ">
          <p className="mt-1 md:mt-3 flex flex-row ">
            <span className={`${checkCircle}`}>
              <AiFillCheckCircle size={16} />
            </span>
            Carpet maintenance and restoration
          </p>
          <p className="mt-1 md:mt-3 flex flex-row ">
            <span className={`${checkCircle}`}>
              <AiFillCheckCircle size={16} />
            </span>
            Polishing and honing marble, terrazzo and concrete
          </p>
          <p className="mt-1 md:mt-3 flex flex-row ml-12">
            <span className={`${checkCircle}`}>
              <AiFillCheckCircle size={16} />
            </span>
            Vct stripping and waxing
          </p>
          <p className="mt-1 md:mt-3 flex flex-row ">
            <span className={`${checkCircle}`}>
              <AiFillCheckCircle size={16} />
            </span>
            Concrete polishing and staining
          </p>
          <p className="mt-1 md:mt-3 flex flex-row ">
            <span className={`${checkCircle}`}>
              <AiFillCheckCircle size={16} />
            </span>
            Warehouse floor cleaning and maintenance
          </p>
          <p className="mt-1 md:mt-3 flex flex-row  ml-12">
            <span className={`${checkCircle}`}>
              <AiFillCheckCircle size={16} />
            </span>
            Cleaning windows
          </p>
          <p className="mt-1 md:mt-3 flex flex-row ">
            <span className={`${checkCircle}`}>
              <AiFillCheckCircle size={16} />
            </span>
            Power washing
          </p>
        </div>
      </div>
      <h3 className="text-xl md:text-2xl  font-semibold mt-10">
        Management of Projects
      </h3>
      <p
        style={{ lineHeight: "25px" }}
        className="text-sm md:text-base tracking-wider mt-5 text-[#08406f] "
      >
        Tap into our pool of qualified licensed professionals to handle multiple
        projects encompassing AC, plumbing, electrical, and remodeling.
        Experience comprehensive project management and top-notch service
        tailored to your specific requirements.
      </p>
    </section>
  );
};

export default Subservices;
