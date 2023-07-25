import React from "react";
import config from "../config";
import generateMailtoLink from "../functions/generateMailToLink";
import { FaHandshake, FaLinkedin } from "react-icons/fa";
const ContactTop: React.FC = () => {
  return (
    <header className="w-full lg:w-screen bg-white border-b">
      <div
        className="container max-w-screen-xl mx-auto flex justify-between items-center text-[#08406f] 
           p-2.5 text-[.75rem] md:text-sm font-medium md:p-5 z-50"
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
            rel="noopener"
            aria-label="Address"
            title="Click to view address on Google Maps"
          >
            {config.address}, {config.cityStateZip}
          </a>
          <div className="flex gap-3 items-center m-1 mr-0">
            <a
              href="https://www.thebluebook.com/iProView/1498706/ayn-services-llc/subcontractors/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit AYN Services on The Blue Book"
            >
              <span className="sr-only">AYN Services on The Blue Book</span>
              <FaHandshake size={25} />
            </a>
            <a
              href="https://www.linkedin.com/company/aynservices/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with AYN Services on LinkedIn"
            >
              <span className="sr-only">
                Connect with AYN Services on LinkedIn
              </span>
              <FaLinkedin size={25} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContactTop;
