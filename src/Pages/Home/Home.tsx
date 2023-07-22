import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";

import Banner from "../../Components/Banner";
import AboutSmall from "../../Components/AboutSmall";
import AboutBig from "../../Components/AboutBig";

import useWindowWidth from "../../hooks/useWindowWidth";
import ServicesSmall from "../../Components/ServicesSmall";
import ServicesBig from "../../Components/ServicesBig";

const Home: React.FC = () => {
  const windowWidth = useWindowWidth();

  useEffect(() => {
    document.title = "AYN Services";
  }, []);
  return (
    <section className=" mx-auto">
      <Navbar />
      <Banner />
      {windowWidth < 1024 ? <AboutSmall /> : <AboutBig />}
      {windowWidth < 1024 ? <ServicesSmall /> : <ServicesBig />}
    </section>
  );
};

export default Home;
