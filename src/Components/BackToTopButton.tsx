import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const BackToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowButton(scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed flex items-center bg-blue-700/90 hover:bg-blue-800 text-white bottom-4 right-4 py-2 px-3 
      rounded-full shadow-md hover:shadow-lg
        ${showButton ? "block" : "hidden"}`}
      onClick={scrollToTop}
    >
      Back to Top
      <AiOutlineArrowUp size={22} className={"bg-transparent ml-2"} />
    </button>
  );
};

export default BackToTopButton;
