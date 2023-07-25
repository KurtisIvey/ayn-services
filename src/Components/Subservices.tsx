import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Subservices: React.FC = () => {
  const checkCircle = "mt-[5px] mr-3 md:mt-[2px]";
  const descriptionStyle = { lineHeight: "25px" };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 " role="region">
      <h2 className="text-xl md:text-2xl font-semibold text-[#08406f] mt-5 mb-1">
        Specialty Cleaning Services
      </h2>
      <p
        style={descriptionStyle}
        className="text-base md:text-lg tracking-wider mt-2 mb-5"
      >
        We also provide a variety of specialty cleaning services
      </p>
      <div
        id="choosing-services"
        className="text-[#08406f] text-xs md:text-sm leading-7 tracking-wider mt-2"
      >
        <ul id="bullets" className="ml-2 grid grid-cols-1 md:grid-cols-2">
          <li className="mt-1 md:mt-3 flex flex-row">
            <span className={checkCircle} aria-hidden="true">
              <AiFillCheckCircle size={16} />
            </span>
            Carpet maintenance and restoration
          </li>
          <li className="mt-1 md:mt-3 flex flex-row">
            <span className={checkCircle} aria-hidden="true">
              <AiFillCheckCircle size={16} />
            </span>
            Polishing and honing marble, terrazzo and concrete
          </li>
          <li className="mt-1 md:mt-3 flex flex-row">
            <span className={checkCircle} aria-hidden="true">
              <AiFillCheckCircle size={16} />
            </span>
            Vct stripping and waxing
          </li>
          <li className="mt-1 md:mt-3 flex flex-row">
            <span className={checkCircle} aria-hidden="true">
              <AiFillCheckCircle size={16} />
            </span>
            Concrete polishing and staining
          </li>
          <li className="mt-1 md:mt-3 flex flex-row">
            <span className={checkCircle} aria-hidden="true">
              <AiFillCheckCircle size={16} />
            </span>
            Warehouse floor cleaning and maintenance
          </li>
          <li className="mt-1 md:mt-3 flex flex-row">
            <span className={checkCircle} aria-hidden="true">
              <AiFillCheckCircle size={16} />
            </span>
            Cleaning windows
          </li>
          <li className="mt-1 md:mt-3 flex flex-row">
            <span className={checkCircle} aria-hidden="true">
              <AiFillCheckCircle size={16} />
            </span>
            Power washing
          </li>
        </ul>
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mt-14">
        Management of Projects
      </h3>
      <p
        style={descriptionStyle}
        className="text-sm md:text-base tracking-wider mt-5 text-[#08406f]"
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
