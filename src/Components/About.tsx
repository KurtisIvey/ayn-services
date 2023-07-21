import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
type Props = {};

const About = (props: Props) => {
  return (
    <section className="mx-auto w-screen ">
      <div className="max-w-screen-xl  mx-auto px-4 py-2 border border-blue-500 flex flex-col text-left">
        <h2 className="text-xl font-semibold mt-5">About Us</h2>
        <p className="text-xs leading-5 tracking-wider mt-5 text-[#08406f]">
          AYN SERVICES' mission is to deliver superior cleaning and building
          maintenance solutions to small and medium businesses and facilities,
          leveraging our extensive <strong>30 Plus Years</strong> of experience
          in the services industry.
        </p>
        <div className=" text-[#08406f] text-xs leading-5 tracking-wider">
          <p className=" mt-5">
            By choosing our services, you can look forward to:
          </p>
          <div>
            <p className="mt-1 flex flex-row ">
              <span className="mt-[2px] mr-2">
                <AiFillCheckCircle size={16} />
              </span>
              Receiving reliable and outstanding cleaning solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
