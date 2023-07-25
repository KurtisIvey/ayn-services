import React from "react";
import logo from "../../src/assets/logo.jpg";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white mx-auto w-full lg:w-screen">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <a href="/" tabIndex={0}>
          <img
            src={logo}
            className="h-14 mr-3 md:h-[4.5rem] xl:h-[5rem]"
            alt="AYN Services Logo"
            aria-label="Home - AYN Services"
          />
        </a>
        <a
          href="/"
          className={`block py-2 pl-3 pr-4 text-gray-900 hover:text-blue-700 font-medium `}
          aria-current="page"
        >
          Home
        </a>
      </div>
    </header>
  );
};

export default Navbar;
