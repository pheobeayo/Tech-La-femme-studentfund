import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Login = () => {
    const navigate = useNavigate();

    const routeToNextPage = () => {
        navigate("/secondcreate-proposal");
    };

    return (
        <main class="w-[100vw] h-[100vh]">
            <section class="w-screen h-full">
                <div className="grid grid-cols-2 ">
                    <div className="bg-[#D5E5DF]">
                        <div className="mt-48 mx-20">
                            <h1 className="text-[#091913] font-extrabold leading-10">
                                Login to continue

                            </h1>
                            <div className=" bg-white border-[#2B7C5F]  rounded-full w-3/4 h-2 mt-2 ">
                                <div className=" bg-[#2B7C5F] border-[#2B7C5F]  rounded-full w-1/2 h-2 "></div>
                            </div>
                            <h3 className="text-[#091913] font-normal text-base mt-2">
                                Step 1 of 3
                            </h3>
                        </div>
                    </div>
                    <div>
                        <form className=" mx-20 mt-48 w-3/4" >
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
                                />
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
                            <p className='text-[#091913] font-normal'>Don’t have an account? <Link to='/create-proposal'>Sign up</Link> </p>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </main>






    );
};

export default Login;