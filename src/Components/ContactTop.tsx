import React from "react";
import config from "../config";
import generateMailtoLink from "../functions/generateMailToLink";

const medium = "md:text-base md: p-5";

const ContactTop: React.FC = () => {
  return (
    <div
      className={`flex justify-between items-center text-[#08406f] font-semibold border-b p-2.5 text-[.75rem]  ${medium}`}
    >
      <a href={`tel:${config.phoneNumber}`}>{config.phoneNumber}</a>
      <a href={generateMailtoLink()}>{config.email}</a>
    </div>
  );
};

export default ContactTop;
