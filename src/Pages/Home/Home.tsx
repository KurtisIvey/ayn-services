import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";

import Banner from "../../Components/Banner";
import AboutSmall from "../../Components/AboutSmall";
import AboutBig from "../../Components/AboutBig";

import useWindowWidth from "../../hooks/useWindowWidth";
import ServicesSmall from "../../Components/ServicesSmall";
import ServicesBig from "../../Components/ServicesBig";
import Subservices from "../../Components/Subservices";
import Footer from "../../Components/Footer";
import Contact from "../../Components/Contact";

const Home: React.FC = () => {
  const windowWidth = useWindowWidth();

  useEffect(() => {
    document.title = "AYN Services";
  }, []);
  return (
    <section className=" mx-auto scroll-smooth ">
      <Navbar />
      <Banner />
      <div id="about">{windowWidth < 1024 ? <AboutSmall /> : <AboutBig />}</div>
      <div id="services">
        {windowWidth < 1024 ? (
          <ServicesSmall />
        ) : (
          <>
            <ServicesBig />
            <Subservices />
          </>
        )}
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
