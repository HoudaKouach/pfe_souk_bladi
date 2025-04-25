import React, { useState } from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white  antialiased">
      <div className="max-w-screen-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <a href="#" title="">
              <img className=" w-[150px] h-auto object-contain mx-5 dark:hidden" src="Souq bladi.svg" alt="Logo" />

              </a>
            </div>

          </div>
          <div className="relative text-black ">
            <input
              type="search"
              name="search"
              placeholder="Search"
              style={{ backgroundColor: '#DEAC80' }}
              className=" h-10 px-5 pr-10 rounded-full placeholder-black text-sm focus:outline-none"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56.966 56.966"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786 
                c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,
                13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  
                c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,
                56.293,53.08,55.146,51.887z M23.984,6c9.374,0,
                17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>
            </button>
          </div>

          <div className="flex items-center lg:space-x-2">
            <button
              type="button"
              className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900 dark:text-white"
            >
              <span className="sr-only">Cart</span>
              <svg className="w-5 h-5 lg:me-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
              </svg>
              <span className="hidden sm:flex">My Cart</span>
              <svg className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
              </svg>
            </button>
          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
