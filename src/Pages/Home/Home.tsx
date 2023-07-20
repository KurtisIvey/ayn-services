import React, { useEffect } from "react";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "AYN Services";
  }, []);
  return <div>Home</div>;
};

export default Home;
