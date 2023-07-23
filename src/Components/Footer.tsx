import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white  shadow  ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © AYN Services, LLC All Rights Reserved. 6841 Virginia Pkwy, McKinney,
          Texas US <span className="text-xs">Web Design by </span>
          <a
            target="_blank"
            className="inline text-xs hover:underline hover:text-blue-500"
            href="http://www.iveycoding.pro"
          >
            Ivey Software Solutions
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
