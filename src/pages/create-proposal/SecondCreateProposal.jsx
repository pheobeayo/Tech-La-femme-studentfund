import React from "react";

const SecondCreateProposal = () => {
  return (
    <main class="w-[100vw] h-[100vh]">
      <section class="w-screen h-full">
        <div className="grid grid-cols-2 mt-4">
          <div className="bg-[#D5E5DF]">
            <div className="mt-48 mx-20">
              <h1 className="text-[#091913] font-extrabold leading-10">
                Let’s begin your
                <br />
                journey
              </h1>
              <h2 className="text-[#091913] font-normal text-base">
                Please ensure that it is directly related
                <br />
                to your educational needs.
              </h2>
              <div class=" bg-[#2B7C5F]  grid grid-cols-3 divide-x divide-[#2B7C5F] divide-solid h-full border border-white rounded-2xl w-1/2 mt-2 ">
                <div className=" ">1</div>
                <div className=" ">2</div>
                <div className=" ">3</div>
              </div>
              <h3 className="text-[#091913] font-normal text-base mt-2">
                Step 2 of 3
              </h3>
            </div>
          </div>
          <div>
            <form className=" mx-20 mt-8 w-3/4">
              <div class="mb-2">
                <label
                  class="block text-[#06214A] text-sm font-bold mb-2"
                  for="funding"
                >
                  Why are you seeking funding?
                </label>
                <input
                  class="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="fund"
                  type="text"
                  placeholder="E.g to pay my tuition fee"
                  required
                >
                  {" "}
                </input>
              </div>
              <div class="mb-2">
                <label
                  class="block text-[#06214A] text-sm font-bold mb-2"
                  for="description"
                >
                  Give a description why you need funding
                </label>
                <input
                  class="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  type="text"
                  placeholder="This should be a detail description"
                  required
                >
                  {" "}
                </input>
              </div>
              <div class="mb-2">
                <label
                  class="block text-[#06214A] text-base font-bold mb-2"
                  for="amount"
                >
                  Amount needed in USDT or e-naira
                </label>
                <input
                  class="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="amount"
                  type="amount"
                  placeholder="How much do you need ?"
                  required
                ></input>
              </div>
              <div class="mb-2">
                <label
                  class="block text-[#06214A] text-base font-bold mb-2"
                  for="matricnumber"
                >
                  Matric number
                </label>
                <input
                  class="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="matricnumber"
                  type="text"
                  placeholder="Add your identification number"
                  required
                ></input>
              </div>
              <div class="mb-2">
                <label
                  class="block text-white text-base font-bold mb-2"
                  for="nin"
                >
                  National Identity Number (this will not be made public)
                </label>
                <input
                  class="bg-[#E6DDF8] border-[#E6DDF8] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="nin"
                  type="number"
                  placeholder="Enter your NIN"
                  required
                ></input>
              </div>
              <div className="mt-4">
              <button
                type="submit"
                className="w-full px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#2B7C5F] hover:bg-blue-700"
              >
                Next
              </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SecondCreateProposal;
