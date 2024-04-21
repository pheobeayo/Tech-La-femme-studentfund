import React from "react";
import heroimage1 from "../../assets/heroimage1.svg";
import heroimage2 from "../../assets/heroimage2.svg";
import stud from "../../assets/stud.svg";
import { Link } from "react-router-dom";
import useIsStudent from "../../hooks/useIsStudent";

const Hero = () => {
  const isReg = useIsStudent();

  return (
    
       <div className='w-100 md:w-[100%] lg:p-16 p-4  grid lg:grid-cols-2 h-[100vh] lg:gap-0 gap-4'>
        <div className="flex flex-col gap-4">
          <img src={stud} alt="stud" className="md:mx-40 lg:mx-40" />
          <h1 className="text-[40px] md:text-[40px] font-serif font-extrabold capitalize  text-[#091913]">
            Fueling Education's Next 
          </h1>
          <h2 className="text-[40px] md:text-[40px] font-serif font-extrabold capitalize  text-[#091913] md:mx-44 lg:mx-44">
            Frontier
          </h2>
          <h3 className="text-[20px] md:text-[18px] font-serif font-semibold text-[#091913]">
            Where Boundaries Blur and Innovations Thrive:
            <br />
            Transforming Education Through Blockchain
          </h3>
          <div className="flex item-centre gap-8 ">
            <Link
              to={isReg ?
                "/login"
                :
                "/create-proposal"
              }
              style={{ textDecoration: "none", color: "white" }}
            >

              <button class="bg-[#2B7C5F] hover:bg-[#DBE1D4] text-white font-bold py-2 px-4  rounded">
                Submit Proposal
              </button>
            </Link>
            <Link
              to="/proposals"
              style={{ textDecoration: "none", color: "#427142" }}
            >
              {" "}
              <button class="bg-[#E6CB55] hover:bg-[#2B7C5F] text-[#091913] font-bold py-2 px-4 border border-[#E6CB55] rounded">
                Fund a Proposal{" "}
              </button>
            </Link>
          </div>
        </div>
     

      <div className="grid grid-cols-2 gap-0 h-max">
        <div className="h-[300px] w-[250px] mt-36"><img src={heroimage2} alt="heroimage1" /></div>
        <div className="h-[400px] w-[400px]"><img src={heroimage1} alt="heroimage2"  /></div>
      </div>
      </div>
    
  );
};

export default Hero;
