import React from "react";
import urgent from "../../assets/urgent.svg";
import research1 from "../../assets/research1.svg";
import research2 from "../../assets/research2.svg";
import { Link } from "react-router-dom";

const Proposal = () => {
  return (
    <div className="bg-white ">
      <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
        <h2 className="text-[#091913] text-3xl font-bold leading-10">
          Proposals available to be funded
        </h2>
        <div className="bg-white grid-cols-4 gap-4 md:flex md:flex-row">
          <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mt-10 mx-10">
            <img
              src={urgent}
              alt="urgent"
              className="object-fit-object h-2/3 w-full object-center rounded"
            />
            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
              <h3 className="font-bold text-[#091913] text-sm p-2">
                Urgent Tuition Assistance Needed
              </h3>
              <p className="font-normal text-justify text-[#091913] text-xs p-2">
                Sarah, a second-year Biology student, needs
                <br />
                urgent help with her tuition fees due to
                <br />
                financial difficulties. Your support could
                <br />
                make her dream of becoming a medical
                <br />
                researcher a reality.
              </p>
              <div>
                <div className="w-full h-full bg-[#D5E5DF]">
                  <h1 className="text-[#091913] text-justify font-bold text-xs p-2 mt-4">
                    25 USDT<span className="mx-12 ">4</span>
                    <span className="mx-8">30</span>
                  </h1>
                  <h1 className="text-[#091913] text-justify font-normal text-xs p-2">
                    Goal<span className="mx-12">Funders</span>
                    <span>Days left</span>
                  </h1>
                  <div className=" bg-white border-[#2B7C5F]  rounded-full w-3/4 h-2 mx-2 mt-2 ">
                    <div className=" bg-[#2B7C5F] border-[#2B7C5F]  rounded-full w-1/2 h-2 "></div>
                  </div>
                  <h2 className="text-[#091913] text-justify font-normal text-xs mx-4">
                    10 USDT Amount raised
                    <br />
                    20 USDT Amount needed
                  </h2>
                  <Link
                    to="/fund"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button class="bg-[#D5E5DF] hover:bg-[#427142] text-[#091913] font-bold py-2 px-4 border border-[#AAAAAA] rounded w-1/2 md:mx-16 mt-4 mb-4">
                      View details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mt-10">
            <img
              src={research1}
              alt="research1"
              className="object-fit-object h-2/3 w-full object-center rounded"
            />
            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
              <h3 className="font-bold text-[#091913] text-sm p-2">
                Research Materials Fund
              </h3>
              <p className="font-normal text-justify text-[#091913] text-xs p-2">
                David, a senior studying Environmental
                <br />
                Science, seeks funding for a research project
                <br />
                on local river water pollution. Your support
                <br />
                will help purchase essential materials for
                <br />
                accurate experiments.
              </p>
              <div className="w-full bg-[#D5E5DF]">
                <h1 className="text-[#091913] text-justify font-bold text-xs p-2 mt-4">
                  1500 USDT<span className="mx-9">4</span>
                  <span className="mx-8">30</span>
                </h1>
                <h1 className="text-[#091913] text-justify font-normal text-xs p-2">
                  Goal<span className="mx-12">Funders</span>
                  <span>Days left</span>
                </h1>
                <div className=" bg-white border-[#2B7C5F]  rounded-full w-3/4 h-2 mx-2 mt-2 ">
                  <div className=" bg-[#2B7C5F] border-[#2B7C5F]  rounded-full w-1/2 h-2 "></div>
                </div>
                <h2 className="text-[#091913] text-justify font-normal text-xs mx-4">
                  250 USDT Amount raised
                  <br />
                  1500 USDT Amount needed
                </h2>
                <Link
                  to="/fund"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <button class="bg-[#D5E5DF] hover:bg-[#427142] text-[#091913] font-bold py-2 px-4 border border-[#AAAAAA] rounded w-1/2 mt-4 mb-4 md:mx-16">
                    View details
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mt-10">
            <img
              src={research2}
              alt="research2"
              className="object-fit-object h-2/3 w-full object-center rounded"
            />
            <div className="w-full h-1/2 pb-5 p-2 shadow-md">
              <h3 className="font-bold text-[#091913] text-sm p-2">
                Research Materials Fund{" "}
              </h3>
              <p className="font-normal text-justify text-[#091913] text-xs p-2">
                Emily, a freshman in Computer Science,
                <br />
                seeks funding to replace her broken laptop.
                <br />
                Your support will ensure uninterrupted
                <br />
                learning and help her pursue her passion for
                <br />
                programming.
              </p>
              <div className="w-full bg-[#D5E5DF]">
                <h1 className="text-[#091913] text-justify font-bold text-xs p-2 mt-4">
                  800 USDT<span className="mx-9 ">4</span>
                  <span className="mx-8">30</span>
                </h1>
                <h1 className="text-[#091913] text-justify font-normal text-xs p-2">
                  Goal<span className="mx-12">Funders</span>
                  <span>Days left</span>
                </h1>
                <div className=" bg-white border-[#2B7C5F]  rounded-full w-3/4 h-2 mx-2 mt-2 ">
                  <div className=" bg-[#2B7C5F] border-[#2B7C5F]  rounded-full w-1/2 h-2 "></div>
                </div>
                <h2 className="text-[#091913] text-justify font-normal text-xs mx-4">
                  100 USDT Amount raised
                  <br />
                  800 USDT Amount needed
                </h2>
                <Link
                  to="/fund"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <button class="bg-[#D5E5DF] hover:bg-[#427142] text-[#091913] font-bold py-2 px-4 border border-[#AAAAAA] rounded w-1/2 mt-4 mb-4 md:mx-16">
                    View details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
