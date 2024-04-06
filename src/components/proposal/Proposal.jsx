import React from "react";
import urgent from "../../assets/urgent.svg";
import research1 from "../../assets/research1.svg";
import research2 from "../../assets/research2.svg";

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
                  <button class="bg-[#D5E5DF] hover:bg-[#427142] text-[#091913] font-bold py-2 px-4 border border-[#AAAAAA] rounded w-1/2 md:mx-16 mt-4 mb-4">
                    View details
                  </button>
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
                <button class="bg-[#D5E5DF] hover:bg-[#427142] text-[#091913] font-bold py-2 px-4 border border-[#AAAAAA] rounded w-1/2  md:mx-16">
                  View details
                </button>
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
                <button class="bg-[#D5E5DF] hover:bg-[#427142] text-[#091913] font-bold py-2 px-4 border border-[#AAAAAA] rounded w-1/2 md:mx-16">
                  View details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
