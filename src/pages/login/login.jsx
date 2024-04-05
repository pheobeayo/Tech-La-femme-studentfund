import React from 'react';
import { Link } from 'react-router-dom';





const Login = () => {

    return (
        <main class="w-[100vw] h-[100vh]">
        <section class="w-screen h-full">
        <div className="grid grid-cols-2 ">
            <div className="bg-[#D5E5DF]">
                <h1 className="text-[#091913] font-extrabold leading-10">
                Login to continue
                
                </h1>
            </div>
            <div>
                <form className=" mx-20 mt-8 w-3/4" >
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
                        > </input>
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
                    <div className="mt-4">
                    <button
                        type="submit"
                        className="w-full px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#2B7C5F] hover:bg-blue-700"
                    >
                        Next
                    </button>
                    </div>
                    <p className='text-[#091913] font-normal'>Don’t have an account? <Link to='/create-proposal'>Sign up</Link> </p>
                </form>
            </div>
        </div>
        </section>
        </main>






    );
};

export default Login;