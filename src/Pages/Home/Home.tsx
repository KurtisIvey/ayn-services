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
      <div className="h-[190px] md:h-[250px]  lg:h-[300px] w-full overflow-hidden">
        <img
          className="object-cover w-full h-full"
          srcSet={`${smallBanner} 768`}
          src={smallBanner}
        />
      </div>
    </section>
  );
};

export default Home;
