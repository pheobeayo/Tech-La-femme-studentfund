import React from "react";

const CreateProposal = () => {
  return (
    <main class="w-[100vw] h-[100vh]">
      <section class="w-screen h-full">
        <div className="grid grid-cols-2 mt-4 ">
          <div className="bg-[#D5E5DF]">
            <div className="mt-48 mx-20">
              <h1 className="text-[#091913] font-extrabold leading-10">
                Create an account to
                <br />
                get started
              </h1>
              <div class=" bg-[#2B7C5F]  grid grid-cols-3 divide-x divide-[#2B7C5F] divide-solid h-full border border-white rounded-2xl w-1/2 mt-2 ">
                <div className=" ">1</div>
                <div className=" ">2</div>
                <div className=" ">3</div>
              </div>
              <h3 className="text-[#091913] font-normal text-base mt-2">
                Step 1 of 3
              </h3>
            </div>
          </div>
          <div>
            <form className=" mx-20 mt-8 w-3/4">
              <div class="mb-2">
                <label
                  class="block text-[#06214A] text-base font-bold mb-2"
                  for="emailaddress"
                >
                  Email address
                </label>
                <input
                  class="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="emailaddress"
                  type="email"
                  placeholder="Add your email address"
                  required
                >
                  {" "}
                </input>
              </div>
              <div class="mb-2">
                <label
                  class="block text-[#06214A] text-base font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                >
                  {" "}
                </input>
              </div>
              <div class="mb-2">
                <label
                  class="block text-[#06214A] text-base font-bold mb-2"
                  for="name"
                >
                  Name
                </label>
                <input
                  class="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="E.g Naomi Roberts"
                  required
                ></input>
              </div>
              <div class="mb-2">
                <label
                  class="block text-[#06214A] text-base font-bold mb-2"
                  for="country"
                >
                  Country of residence
                </label>
                <input
                  class="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="country"
                  type="text"
                  placeholder="E.g Ghana"
                  required
                ></input>
              </div>
              <div class="mb-2">
                <label
                  class="block text-white text-base font-bold mb-2"
                  for="school"
                >
                  Name of school
                </label>
                <input
                  class="bg-[#E6DDF8] border-[#E6DDF8] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="school"
                  type="text"
                  placeholder="E.g Obafemi Awolowo University"
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

export default CreateProposal;
