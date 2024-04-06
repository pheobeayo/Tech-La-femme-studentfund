import React from "react";
import Footer from "../../components/footer/Footer";
import urgent from "../../assets/urgent.svg";
import laptop from "../../assets/laptop.svg";

const ProjectDetails = () => {
  return (
    <main class="w-[100vw] h-[100vh]">
      <section class="w-screen h-full">
        <div className="grid grid-cols-2 h-full mt-20">
          <div className="mx-16">
            <img src={laptop} alt="laptop" />
            <p className="text-[#091913] text-base font-normal mt-4">
              Description: Hi, my name is Sarah, and I'm a second-year student
              majoring in Biology. Unfortunately, my family is facing financial
              difficulties, and I urgently need assistance to pay for my tuition
              fees for this semester. Without this support, I may not be able to
              continue my studies and pursue my dream of becoming a medical
              researcher. Any contribution towards my tuition fees would mean
              the world to me and help me stay on track with my education. Thank
              you for considering my proposal.
            </p>
            <h1 className="text-[#091913] text-base font-bold">
              Matric Number: CCM/4567{" "}
            </h1>
            <h1 className="text-[#091913] text-base font-bold">
              School Name: Obafemi Awolowo University{" "}
            </h1>
            <h1 className="text-[#091913] text-base font-bold">
              National Identity Number: 348870927432{" "}
            </h1>
            <h1 className="text-[#091913] text-base font-bold">
              Wallet Address: 1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX
            </h1>
            <h1 className="text-[#091913] text-base font-bold">
              Picture of Transcript:
            </h1>
          </div>
          <div className="mx-16">
            <div className="max-w-sm rounded overflow-hidden shadow-lg w-full md:w-3/4 mb-5 h-3/4">
              <img src={urgent} alt="urgent" className="w-full" />

              <h3 className="font-bold text-[#091913] text-sm ">
                Urgent Tuition Assistance Needed
              </h3>

              <div>
                <div className=" mx-12 w-3/4 h-full bg-[#D5E5DF] ">
                  <div className="w-full h-full bg-[#D5E5DF] mt-4">
                    <h1 className="text-[#091913] text-justify font-bold text-xs p-2 mt-4">
                      25 USDT<span className="mx-16 ">4</span><span className="mx-8">30</span>
                    </h1>
                    <h1 className="text-[#091913] text-justify font-normal text-xs p-2">
                      Goal<span className="mx-16">Funders</span><span>Days left</span>
                    </h1>
                    <div class=" bg-[#2B7C5F]  grid grid-cols-2 divide-x divide-[#2B7C5F] divide-solid h-full border border-white rounded-2xl w-3/4 mt-2 mx-8 ">
                      <div className=" ">1</div>
                      <div className=" ">2</div>
                      
                    </div>
                    <h2 className="text-[#091913] text-justify font-normal text-sm mx-8">
                      10 USDT Amount raised
                      <br />
                      20 USDT Amount needed
                    </h2>
                    
                    <button class="bg-[#2B7C5F] hover:bg-[#2B7C5F] text-white font-bold py-2 px-4 border border-[#AAAAAA] rounded w-3/4 md:mx-8 mb-4">
                      Fund
                    </button>
                  </div>
                </div>
              </div>
              <div className="mx-12">
                <h1 className='font-bold text-xs'>Funders</h1>
                <h2 className='font-normal text-xs'>Maxcom <span class='mx-24'>$3 </span></h2>
                <h2 className='font-normal text-xs'>Philip Stone <span class='mx-24'>$2</span></h2>
                <h2 className='font-normal text-xs'>Naiomi Roberts<span class='mx-24'>$2</span></h2>
                <h2 className='font-normal text-xs mb-2'>Fisher Cod<span class='mx-24'>$3</span></h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectDetails;
