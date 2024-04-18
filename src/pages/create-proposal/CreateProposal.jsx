import React, { useState } from "react";
import Checkbox from "../../components/checkbox/Checkbox";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const CreateProposal = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => {
    setChecked(!checked);
  };

  const navigate = useNavigate();

  const routeToNextPage = () => {
    navigate("/login");
  };

  return (
    <main className="relative w-[100vw] h-[100vh]">
      <section className="w-screen h-full">
        <div className="grid grid-cols-2 mt-4 md:flex md:flex-row sm:flex sm:flex-row">
          <div className="bg-[#D5E5DF] w-1/2">
            <div className="mt-48 mx-20">
              <h1 className="text-[#091913] font-extrabold text-4xl leading-10">
                Create an account to
                <br />
                get started
              </h1>
              <div className=" bg-white border-[#2B7C5F]  rounded-full w-3/4 h-2 mt-2 ">
                <div className=" bg-[#2B7C5F] border-[#2B7C5F]  rounded-full w-1/2 h-2 "></div>
              </div>
              <h3 className="text-[#091913] font-normal text-base mt-2">
                Step 1 of 2
              </h3>
            </div>
          </div>
          <div>
            <form className=" mx-20 md:28 mt-8 w-3/4">
           
              <div className="mb-2">
                <label
                  className="block text-[#06214A] text-base font-bold mb-2"
                  for="emailaddress"
                >
                  Email address
                </label>
                <input
                  className="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="emailaddress"
                  type="email"
                  placeholder="Add your email address"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-[#06214A] text-base font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                
                <input
                  className="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-[#06214A] text-base font-bold mb-2"
                  for="name"
                >
                  Name
                </label>
                <input
                  className="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="E.g Naomi Roberts"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-[#06214A] text-base font-bold mb-2"
                  for="country"
                >
                  Country of residence
                </label>
                <input
                  className="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="country"
                  type="text"
                  placeholder="E.g Ghana"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-[#06214A] text-base font-bold mb-2"
                  for="school"
                >
                  Name of school
                </label>
                <input
                  className="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="school"
                  type="text"
                  placeholder="E.g Obafemi Awolowo University"
                  required
                />
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
                />
              </div>
              <div>
                <Checkbox
                  id="checkbox"
                  label="I agree to StudentFund’s Terms of Service "
                  value={checked}
                  onChange={onChange}
                  fontSize="0.5rem"
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#2B7C5F] hover:bg-[#D5E5DF]"
                  onClick={routeToNextPage}
                >
                  Next
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

export default CreateProposal;
