import React from "react";
import config from "../config";
import generateMailtoLink from "../functions/generateMailToLink";

const ContactTop: React.FC = () => {
  return (
    <header className="w-full lg:w-screen bg-white border-b">
      <div className="container max-w-screen-xl mx-auto flex justify-between items-center text-[#08406f] font-semibold p-2.5 text-[.75rem] md:text-base md:p-5 z-50">
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
            rel="noopener"
            aria-label="Address"
            title="Click to view address on Google Maps"
          >
            {config.address}, {config.cityStateZip}
          </a>
        </div>
      </div>
    </header>
  );
};

export default ContactTop;
