import React, { useEffect, useState } from "react";
import logo from "../../src/assets/logo.jpg";
import useWindowWidth from "../hooks/useWindowWidth";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const windowWidth = useWindowWidth();

  const anchorNormal =
    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 bg-gray-50";
  const anchorMed = " md:border-0 md:hover:text-blue-700 md:p-0 ";
  const anchorHover = "hover:bg-gray-150 md:hover:bg-transparent ";

  useEffect(() => {
    if (windowWidth > 768) setMenuOpen(false);
  }, [windowWidth]);
  return (
    <nav className="bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <img src={logo} className="h-12 mr-3 md:h-16" alt="Flowbite Logo" />
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
            menuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:justify-end">
            <li>
              <a
                href="#"
                className={`${anchorNormal} ${anchorMed} ${anchorHover}`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${anchorNormal} ${anchorMed} ${anchorHover}`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${anchorNormal} ${anchorMed} ${anchorHover}`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${anchorNormal} ${anchorMed} ${anchorHover}`}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
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
