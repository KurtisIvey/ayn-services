import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const ServicesSmall: React.FC = () => {
  const checkCircle = "mt-[5px] mr-3 md:mt-[2px]";

  return (
    <section className="mx-auto w-full ">
      <div className="  mx-auto px-4 py-2   flex flex-col text-left">
        <h2 className="text-2xl md:text-3xl  font-semibold mt-5">
          Our Services
        </h2>
        {/*first section */}
        <p
          style={{ lineHeight: "25px" }}
          className="text-sm md:text-base leading-5 tracking-wider mt-5 text-[#08406f] mb-1"
        >
          We provide a broad range of professional services in building cleaning
          and maintenance
        </p>
        <div
          id="choosing-services"
          className=" text-[#08406f] text-xs md:text-sm leading-7 tracking-wider"
        >
          <div id="bullets" className="ml-2">
            <p className="mt-1 md:mt-3 flex flex-row ">
              <span className={`${checkCircle}`}>
                <AiFillCheckCircle size={16} />
              </span>
              General building maintenance
            </p>
            <p className="mt-1 md:mt-3 flex flex-row ">
              <span className={`${checkCircle}`}>
                <AiFillCheckCircle size={16} />
              </span>
              Minor repairs of facilities
            </p>
            <p className="mt-1 md:mt-3 flex flex-row ">
              <span className={`${checkCircle}`}>
                <AiFillCheckCircle size={16} />
              </span>
              Scheduled maintenance or inspection
            </p>
            <p className="mt-1 md:mt-3 flex flex-row ">
              <span className={`${checkCircle}`}>
                <AiFillCheckCircle size={16} />
              </span>
              Assembling of office equipment
            </p>
            <p className="mt-1 md:mt-3 flex flex-row ">
              <span className={`${checkCircle}`}>
                <AiFillCheckCircle size={16} />
              </span>
              Cleaning and maintenance of all floor types
            </p>
            <p className="mt-1 md:mt-3 flex flex-row ">
              <span className={`${checkCircle}`}>
                <AiFillCheckCircle size={16} />
              </span>
              Cleaning of all types of fabric
            </p>
          </div>
        </div>

        {/*second section */}
        <p
          style={{ lineHeight: "25px" }}
          className="text-sm md:text-base  tracking-wider mt-5 text-[#08406f] mb-1"
        >
          We also provide a variety of specialty cleaning services
        </p>
        <div
          id="choosing-services"
          className=" text-[#08406f] text-xs md:text-sm leading-7 tracking-wider"
        >
          <div id="bullets" className="ml-2">
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
            <p className="mt-1 md:mt-3 flex flex-row ">
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
            <p className="mt-1 md:mt-3 flex flex-row ">
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
        <p
          style={{ lineHeight: "25px" }}
          className="text-xs md:text-sm tracking-wider mt-5 text-[#08406f] "
        >
          At AYN SERVICES, we understand the urgency customers often face, & our
          team of professionals is committed to providing prompt and efficient
          service. We prioritize the needs of businesses & organizations of all
          sizes, making every effort to accommodate their needs.
        </p>
        <h3 className="text-lg md:text-xl  font-semibold mt-5">
          Management of Projects
        </h3>
        <p
          style={{ lineHeight: "25px" }}
          className="text-sm md:text-md tracking-wider mt-5 text-[#08406f] "
        >
          Tap into our pool of qualified licensed professionals to handle
          multiple projects encompassing AC, plumbing, electrical, and
          remodeling. Experience comprehensive project management and top-notch
          service tailored to your specific requirements.
        </p>
      </div>
    </section>
  );
};

export default ServicesSmall;
