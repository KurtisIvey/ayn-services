import React from "react";
import smallBanner from "../assets/small-banner.jpg";
import mediumBanner from "../assets/medium-banner.jpg";

const Banner: React.FC = () => {
  return (
    <div className="relative h-[190px] md:h-[250px] lg:h-[350px] w-full lg:w-screen bg-[#f1f1f1] lg:overflow-x-hidden">
      <div
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        className="relative text-[1.8rem] md:text-4xl xl:text-[3rem] z-2 text-[#ffffff]"
      >
        <h1
          className="absolute inset-0 bg-transparent flex items-center justify-center top-12"
          aria-hidden="true"
        >
          AYN Professional Services
        </h1>
        <h1
          className="absolute inset-x-0 bottom-0 bg-transparent flex items-center justify-center  top-[5.2rem] md:top-[5.7rem] xl:top-[6.3rem]"
          aria-hidden="true"
        >
          for You
        </h1>
      </div>
      <img
        className="object-cover w-full h-full z-3 max-w-screen-xl mx-auto z-1"
        srcSet={`${smallBanner} 200w , ${mediumBanner} 768w`}
        src={smallBanner}
        alt="Professional Services Banner"
      />
    </div>
  );
};

export default Banner;
