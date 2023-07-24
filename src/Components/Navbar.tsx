import React, { useEffect, useState } from "react";
import logo from "../../src/assets/logo.jpg";
import useWindowWidth from "../hooks/useWindowWidth";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const windowWidth = useWindowWidth();

  const anchorNormal =
    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-[#e1e1e1] bg-gray-50";
  const anchorMed = " md:border-0 md:hover:text-blue-700 md:p-0 md:bg-white";
  const anchorHover = " md:hover:bg-transparent ";

  useEffect(() => {
    if (windowWidth > 768) setMenuOpen(false);
  }, [windowWidth]);

  return (
    <nav className=" bg-white mx-auto w-full lg:w-screen ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <img
          src={logo}
          className="h-14 mr-3 md:h-[4.5rem] xl:h-[5rem]"
          alt="Flowbite Logo"
        />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            menuOpen
              ? "block absolute inset-x-0 top-[7.5rem] bg-transparent md:relative md:bg-transparent md:w-auto md:top-auto md:mx-0 z-50 shadow-xl"
              : "hidden"
          } w-full md:block md:w-auto md:mx-0 md:bg-transparent`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-200 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:justify-end mx-4">
            <li>
              <a
                onClick={() => setMenuOpen(false)}
                href="#"
                className={`${anchorNormal} ${anchorMed}  bg-[#c4c4c4] md:hover:bg-transparent md:underline `}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => setMenuOpen(false)}
                href="#about"
                className={`${anchorNormal} ${anchorMed} ${anchorHover} `}
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => setMenuOpen(false)}
                href="#services"
                className={`${anchorNormal} ${anchorMed} ${anchorHover}`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => setMenuOpen(false)}
                href="#contact"
                className={`${anchorNormal} ${anchorMed} ${anchorHover}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
