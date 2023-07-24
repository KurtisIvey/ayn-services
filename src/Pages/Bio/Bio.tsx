import React from "react";
import Navbar from "../../Components/Navbar2";
import Banner from "../../Components/Banner";

const Bio: React.FC = () => {
  return (
    <section className=" min-h-[84vh] mb-[-200] flex flex-col">
      <Navbar />
      <Banner />
      <div className="max-w-6xl flex items-center justify-center mx-auto px-4 py-2 text-left ">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mt-5">
            Our Founder
          </h2>
          <p
            style={{ lineHeight: "26px" }}
            className="text-sm md:text-base tracking-wider mt-5 text-[#08406f]"
          >
            Our Founder, Scott Robertson, is a native Texan who grew up in
            Richardson and raised his 6 kids in McKinney. Over the last 30
            years, he has successfully managed multiple services companies,
            specializing in Janitorial, Carpet and floor restoration and
            maintenance, fire and flood restoration, and small building facility
            maintenance. Throughout his career, Scott has amassed tremendous
            experience and has built strong relationships with some of the most
            talented technicians in their respective industries. It has become
            apparent to him that smaller businesses and facilities often
            struggle to find reliable and outstanding cleaning and maintenance
            solutions.
          </p>

          <p
            style={{ lineHeight: "26px" }}
            className="text-sm md:text-base tracking-wider mt-7 text-[#08406f]"
          >
            Thanks to his exceptional leadership, AYN Services collaborates with
            renowned companies, including Blue Cross Blue Shield, Walmart, Tenet
            Healthcare Corporation, Foundation Place, Comerica Tower, Jones Lang
            LaSalle, Berkshire Hathaway, Under Armour, Kindercare, Barnes &
            Noble, Dick’s Sporting Goods, Fiat Chrysler America, CBRE, and all
            Follette Bookstores nationwide. - Scott Robertson, Founder of AYN
            Services
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
