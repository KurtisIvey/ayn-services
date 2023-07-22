import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";

import Banner from "../../Components/Banner";
import AboutSmall from "../../Components/AboutSmall";
import useWindowWidth from "../../hooks/useWindowWidth";

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
    </section>
  );
};

export default Home;
