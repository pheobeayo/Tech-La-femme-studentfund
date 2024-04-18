import React from "react";
import Footer from "../../components/footer/Footer";

const SubmitProposal = () => {
  

  return (
    <main class="relative w-[100vw] h-[100vh]">
      <section class="w-screen h-full">
        <div className="grid grid-cols-2 mt-4 md:flex md:flex-row sm:flex sm:flex-row">
          <div className="bg-[#D5E5DF] w-1/2 ">
            <div className="mt-48 mx-20">
              <h1 className="text-[#091913] font-extrabold text-4xl leading-10">
                Let’s begin your
                <br />
                journey
              </h1>
              <h2 className="text-[#091913] font-normal text-base">
                Please ensure that it is directly related
                <br />
                to your educational needs.
              </h2>
              <div className=" bg-white border-[#2B7C5F]  rounded-full w-3/4 h-2 mt-2 ">
                <div className=" bg-[#2B7C5F] border-[#2B7C5F]  rounded-full w-3/4 h-2 "></div>
              </div>
              <h3 className="text-[#091913] font-normal text-base mt-2">
                Step 2 of 2
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
                />
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
                />
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
                />
              </div>
              
              <div class="mb-2">
                <label
                  class="block text-[#06214A] text-base font-bold mb-2"
                  for="nin"
                >
                  National Identity Number (this will not be made public)
                </label>
                <input
                  class="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="nin"
                  type="number"
                  placeholder="Enter your NIN"
                  required
                />
              </div>
              <div class="mb-2">
                <label
                  class="block mb-2 text-base font-medium text-[#06214A] dark:text-[#06214A]"
                  for="large_size"
                >
                  Evidence of why you are seeking the fund
                </label>
                <input
                  class="block w-full text-lg text-[#020C17] border border-[#06214A] rounded-lg cursor-pointer bg-white dark:text-[#020C17] focus:outline-none dark:bg-white dark:border-gray-600 dark:placeholder-gray-400"
                  id="large_size"
                  type="file"
                  placeholder="Add a picture"
                />
              </div>
              <p className="text-[#020C17] text-base">
                E.g For tuition fee (an invoice)
                <br />A broken laptop (add a picture)
                <br />
                Please note that this will be displayed on the landing page
              </p>
              <div class="mb-2">
                <label
                  class="block text-[#06214A] text-base font-medium mb-2"
                  for="email"
                >
                  Email of an authority for confirmation
                </label>
                <input
                  class="bg-white border-[#06214A] border rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="The email could be that of HOD, Admin office, etc"
                  required
                />
              </div>
            <div className="mt-4">
                <button
                  type="submit"
                  className="w-full px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#2B7C5F] hover:bg-[#D5E5DF]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
};

export default SubmitProposal;
