import React, { useEffect } from "react";

type Props = {};

const Home: React.FC = (props: Props) => {
  useEffect(() => {
    document.title = "AYN Services"; // Change "New Tab Title" to whatever you want the new title to be.
  }, []);
  return <div>Home</div>;
};

export default Home;
