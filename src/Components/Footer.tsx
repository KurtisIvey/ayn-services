import React from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import config from "../config";

const Footer: React.FC = () => {
  const windowWidth = useWindowWidth();
  return (
    <footer className="bg-white  shadow  ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-3 border-gray-200 sm:mx-auto  lg:my-8" />
        {windowWidth > 1023 ? (
          <span className="block text-[xs] lg:text-sm text-gray-500 sm:text-center ">
            © AYN Services, LLC All Rights Reserved.{" "}
            <address className="not-italic inline">
              {config.address}, {config.cityStateZip}{" "}
            </address>
            <div className="text-[.6rem] text-gray-400/70">
              <span className="">Web Design by </span>
              <a
                target="_blank"
                className="inline  hover:underline hover:text-blue-500"
                href="http://www.iveycoding.pro"
              >
                Ivey Software Solutions
              </a>
            </div>
          </span>
        ) : (
          <div className="flex flex-col text-xs text-gray-500 space-y-2">
            <div>© AYN Services, LLC All Rights Reserved.</div>
            <address className="not-italic inline">
              {config.address}, {config.cityStateZip}
            </address>
            <div className="text-[.5rem] text-gray-400/70">
              Web Design by{" "}
              <a
                target="_blank"
                className="inline hover:underline hover:text-blue-500"
                href="http://www.iveycoding.pro"
              >
                Ivey Software Solutions
              </a>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
