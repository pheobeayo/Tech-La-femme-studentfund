import React from "react";
import Footer from "../../components/footer/Footer";

const SubmitProposal = () => {
  return (
    <main class="w-[100vw] h-[100vh]">
      <section class="w-screen h-full">
        <div className="grid grid-cols-2 h-full mt-4">
          <div className="bg-[#D5E5DF]">
            <div className="mt-48 mx-20">
              <h1 className="text-[#091913] font-extrabold text-4xl leading-10">
                You’re almost there
              </h1>
              <h2 className="text-[#091913] font-normal text-base">
                Please ensure that it is directly related
                <br />
                to your educational needs.
              </h2>
              <div className=" bg-[#2B7C5F] border-[#2B7C5F]  rounded-full w-3/4 mt-2 ">
                <h1 className='text-white mx-36'>Step 3 of 3</h1>
              </div>
              <h3 className="text-[#091913] font-normal text-base mt-2">
                Step 3 of 3
              </h3>
            </div>
          </div>
          <div>
            <form className=" mx-20 mt-8 w-3/4">
              <div class="mb-2">
                <label
                  class="block mb-2 text-base font-medium text-[#06214A] dark:text-[#06214A]"
                  for="large_size"
                >
                  Upload your picture
                </label>
                <input
                  class="block w-full text-lg text-[#020C17] border border-[#06214A] rounded-lg cursor-pointer bg-white dark:text-[#020C17] focus:outline-none dark:bg-white dark:border-gray-600 dark:placeholder-gray-400"
                  id="large_size"
                  type="file"
                  placeholder="Upload a photograph of yourself"
                ></input>
              </div>
              <div class="mb-2">
                <label
                  class="block mb-2 text-base font-medium text-[#06214A] dark:text-[#06214A]"
                  for="large_size"
                >
                  Upload your Transcript
                </label>
                <input
                  class="block w-full text-base text-[#020C17] border border-[#06214A] rounded-lg cursor-pointer bg-white dark:text-[#020C17] focus:outline-none dark:bg-white dark:border-gray-600 dark:placeholder-gray-400"
                  id="large_size"
                  type="file"
                  placeholder="Upload"
                ></input>
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
                ></input>
              </div>
              <p className="text-[#020C17] text-base">
                E.g For tuition fee (an invoice)
                <br />A broken laptop (add a picture)
                <br />
                Please note that this will be displayed on the landing page
              </p>
              <div class="mb-2">
                <label
                  class="block text-[#06214A] text-base font-bold mb-2"
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
                ></input>
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

      <Footer />
    </main>
  );
};

export default SubmitProposal;
