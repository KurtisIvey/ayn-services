import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import smallBanner from "../../assets/small-banner.jpg";
import mediumBanner from "../../assets/medium-banner.jpg";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "AYN Services";
  }, []);
  return (
    <section className="max-w-screen-xl mx-auto">
      <Navbar />
      <div className="relative"></div>
      <div className=" h-[190px] md:h-[250px]  lg:h-[300px] w-screen bg-red-500">
        <img
          className="object-cover w-full h-full z-3"
          srcSet={`${smallBanner} 200w , ${mediumBanner} 768w`}
          src={smallBanner}
        />
      </div>
    </section>
  );
};

export default Home;
