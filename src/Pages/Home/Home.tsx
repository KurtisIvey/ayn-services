import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";

import Banner from "../../Components/Banner";
import About from "../../Components/About";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "AYN Services";
  }, []);
  return (
    <section className=" mx-auto">
      <Navbar />
      <Banner />
      <About />
    </section>
  );
};

export default Home;
