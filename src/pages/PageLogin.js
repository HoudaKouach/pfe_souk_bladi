import React from 'react';
import '../index.css';
import Navbar from '../Composants/NavBar';
import BackgroundImages from '../Composants/BackgroundImages';
import Footer from '../Composants/Footer';

const Login = ({ onLogin }) => {

  return (
    <div>
    <Navbar />
        <BackgroundImages >
                {/* <div className=" mx-4  p-8 rounded-lg shadow-xl w-full md:w-1/2 lg:w-1/3" style={{ backgroundColor: '#DEAC80' }}> */}
                <div  className="mx-4 p-8 rounded-lg shadow-xl w-full md:w-1/2 lg:w-1/3 bg-white border"  >
                    <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="mb-2 text-black text-lg">Email</label>
                        <input
                        id="email"
                        className="border p-3 dark:text-gray-300 shadow-md placeholder:text-base focus:border-[#DEAC80] focus:scale-105 ease-in-out duration-300 border-gray-300  rounded-lg w-full"
                        type="email"
                        placeholder="Email"
                        style={{ borderColor: '#DEAC80' }}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="mb-2 dark:text-gray-400 text-lg">Password</label>
                        <input
                        id="password"
                        className="border p-3 shadow-md dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                        type="password"
                        placeholder="Password"
                        style={{ borderColor: '#DEAC80' }}
                        required
                        />
                    </div>
                    <a className="group text-[#DEAC80] transition-all duration-100 ease-in-out" href="#">
                        <span className="bg-left-bottom bg-gradient-to-r text-sm from-[#DEAC80] to-[#DEAC80] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out" >
                        Forget your password?
                        </span>
                    </a>
                    <button
                        className=" shadow-lg mt-6 p-2 text-black rounded-lg w-full hover:scale-105 transition duration-300 ease-in-out"
                        type="submit"
                        style={{ backgroundColor: '#DEAC80' }}
                        onClick={onLogin}

                    >
                        LOG IN
                    </button>
                    </form>
                    <div className="flex flex-col mt-4 items-center justify-center text-sm">
                        <h3 className="dark:text-gray-300">
                            Don't have an account?
                            <a className="group text-[#DEAC80] transition-all duration-100 ease-in-out" href="#">
                            <span className="bg-left-bottom bg-gradient-to-r text-sm from-[#DEAC80] to-[#DEAC80] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out" >
                                Sign Up
                            </span>
                            </a>
                        </h3>
                    </div>
                </div>
        </BackgroundImages> 
        <Footer />   
    </div>
  );
};

export default Login;
