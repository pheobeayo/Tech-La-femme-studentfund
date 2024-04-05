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
            Description: Hi, my name is Sarah, and I'm a second-year
             student majoring in Biology. Unfortunately, my 
            family is facing financial difficulties, and I 
            urgently need assistance to pay for my tuition 
            fees for this semester. Without this support, 
            I may not be able to continue my studies and 
            pursue my dream of becoming a medical researcher.
             Any contribution towards my tuition fees would 
            mean the world to me and help me stay on track 
            with my education. Thank you for considering my proposal.
            </p>
            <h1 className="text-[#091913] text-base font-bold">Matric Number: CCM/4567 </h1>
            <h1 className="text-[#091913] text-base font-bold">School Name: Obafemi Awolowo University </h1>
            <h1 className="text-[#091913] text-base font-bold">National Identity Number: 348870927432 </h1>
            <h1 className="text-[#091913] text-base font-bold">Wallet Address: 1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX</h1>
            <h1 className="text-[#091913] text-base font-bold">Picture of Transcript:</h1>
          </div>
          <div className="mx-16">
            <div className="content-card w-full md:w-3/4 mb-5 h-3/4 rounded-t-lg px-8  shadow-md">
              <img
                src={urgent}
                alt="urgent"
                className="object-fit-object h-2/3 w-full object-center rounded"
              />
              <div className="w-full h-1/2 pb-5 p-2 ">
                <h3 className="font-bold text-[#091913] text-sm p-2">
                  Urgent Tuition Assistance Needed
                </h3>
                
                <div>
                  <div className="w-full h-full bg-[#D5E5DF]">
                    <button class="bg-[#D5E5DF] hover:bg-[#427142] text-[#091913] font-bold py-2 px-4 border border-[#AAAAAA] rounded w-1/2 md:mx-16">
                      Fund
                    </button>
                  </div>
                </div>
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
