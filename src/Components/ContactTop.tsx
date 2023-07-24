import React from "react";
import config from "../config";
import generateMailtoLink from "../functions/generateMailToLink";

const medium = "md:text-base md: p-5";

const ContactTop: React.FC = () => {
  return (
    <div className="w-full lg:w-screen ">
      <div
        className={`container max-w-screen-xl mx-auto flex justify-between items-center text-[#08406f]
       font-semibold border-b p-2.5 text-[.75rem]  ${medium} z-50 `}
      >
        <a href={`tel:${config.phoneNumber}`} aria-label="Phone number">
          {config.phoneNumber}
        </a>
        <div className="flex flex-col items-end">
          <a href={generateMailtoLink()} aria-label="Email address">
            {config.email}
          </a>
          <a
            href="https://www.google.com/maps/search/16527+Addison+Road,+Addison,+TX+75001"
            target="_blank"
            aria-label="address"
          >
            {config.address}, {config.cityStateZip}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactTop;
