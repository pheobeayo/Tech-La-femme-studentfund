import React from "react";
import heroimage1 from "../../assets/heroimage1.svg";
import heroimage2 from "../../assets/heroimage2.svg";
import stud from "../../assets/stud.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-[100vw] md:w-[100%]   h-[100vh] bg-white">
    <div className="w-100 md:w-[100%] lg:p-16 p-4 h-[50vh] lg:gap-0 gap-4">
      <div className="flex flex-col gap-4 md:mx-60">
        <img src={stud} alt="stud" className="md:mx-72" />
        <h1 className="text-[40px] md:text-[40px] font-serif font-extrabold capitalize  text-[#091913]">
          Fueling Education's Next Frontier
        </h1>
        <h3 className="text-[20px] md:text-[18px] font-serif font-semibold text-[#091913] md:mx-32 ">
          Where Boundaries Blur and Innovations Thrive:
          <br />
          Transforming Education Through Blockchain
        </h3>
        <div className="grid grid-cols-2 gap-8 md:mx-40">
          <Link
            to="/create-proposal"
            style={{ textDecoration: "none", color: "white" }}
          >
            
            <button class="bg-[#2B7C5F] hover:bg-[#DBE1D4] text-white font-bold py-2 px-4  rounded">
              Submit Proposal
            </button>
          </Link>
          <Link
            to="/fund-proposal"
            style={{ textDecoration: "none", color: "#427142" }}
          >
            {" "}
            <button class="bg-[#E6CB55] hover:bg-[#2B7C5F] text-[#091913] font-bold py-2 px-4 border border-[#E6CB55] rounded">
              Fund a Proposal{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-10 md:mx-48 mt-16 md:flex md:flex-row">
      <img src={heroimage2} alt="heroimage1" className="md:mt-24" />
      <img src={heroimage1} alt="heroimage2" />
    </div>
  </section>
  );
};

export default Hero;
