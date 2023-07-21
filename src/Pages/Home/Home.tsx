import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import smallBanner from "../../assets/smallBanner.jpg";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "AYN Services";
  }, []);
  return (
    <section>
      <Navbar />
      <div>
        <img srcSet={`${smallBanner} 768`} />
      </div>
    </section>
  );
};

export default Home;
