import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping} from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Menu = [
    {
    id: 1,
    name: "Accueil",
    link: "/",
    },
    {
    id: 2,
    name: "Produits",
    link: "/produits",
    },
    {
    id: 3,
    name: "Coopératives",
    link: "/cooperatives",
    },
    {
    id: 4,
    name: "À propos",
    link: "/apropos",
    },
    
];



const Navbar =() =>{
    
    return (
        <div className="shadow-md bg-white  dark:text-black-900 duration-200 relative z-40 ">
            {/* upper Navbar */}
            <div className="40 py-2 ">
                <div className="Container flex justify-between items-center ">
                    <div className="flex-1">
                        <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2"> 
                        
                            <img src="/Souq bladi.svg" alt="logo"  className="w-3 sm:w-40 "/>
                        </a>
                    </div>

                    {/* search bar and order button */}
                    <div className=" flex-1 flex justify-between items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <input type="text" placeholder="search" className="w-[200px] sm:w-[200px] group-hover:w-[300px] 
                            transition-all duration-300 rounded-full 
                            border border-gray-300 px-2 py-1 
                            bg-[#B5C18E] focus:outline-none 
                            focus:border-1 focus:border-primary" 
                            />
                            <IoMdSearch
                            className="text-gray-500 group-hover:text-primary absolute
                            top-1/2 -translate-y-1/2 right-3"
                            />
                        </div>
                    </div>

                     {/* Icons: Heart and Profile */}
                    <div className="  flex justify-end items-center gap-4 ml-auto">
                       {/* Heart Button */}
                    <button 
                        onClick={() => alert("Favorites not available yet")}
                        className="bg-gradient-to-r bg-[#B99470] from-[#B99470] to-[#B5C18E]
                    transition-all duration-200
                    text-white py-1 px-4 rounded-full flex 
                    items-center gap-3 group "
                        >
                            <span
                        className="group-hover:block
                        hidden transition-all duration-200"> 
                    
                        </span>
                    <FaHeart className="text-white text-lg drop-shadow-sm" />
                    </button>

                      {/* Profile Button */}
                        <button 
                        onClick={() => alert("Profile not available yet")}
                        className="bg-gradient-to-r bg-[#B99470] from-[#B99470] to-[#B5C18E]
                    transition-all duration-200
                    text-white py-1 px-4 rounded-full flex 
                    items-center gap-3 group "
                        >
                            <span
                        className="group-hover:block
                        hidden transition-all duration-200"> 
                            
                        </span>
                    <CgProfile className="text-white text-lg drop-shadow-sm" />
                    </button>
                    

                    {/* order button */}
                    <button 
                    onClick={()=> alert("Ordering not available yet")}
                    className="bg-gradient-to-r bg-[#B99470] from-[#B99470] to-[#B5C18E]
                    transition-all duration-200
                    text-white py-1 px-4 rounded-full flex 
                    items-center gap-3 group "
                    >
                        <span
                        className="group-hover:block
                        hidden transition-all duration-200"> 
                            
                        </span>
                        <FaCartShopping
                        className="text-white drop-shadow-sm cursor-pointer" 
                        />
                    </button>
                    </div>
                    {/* Darkmode Switch  */}
                    <div>
                        
                    </div>
                </div>
            </div>
            {/* lower navbar */}

            <div className="flex justify-center">
            <ul className=" text-2xl font-bold text-center text-gray-800 mb-10 sm:flex hidden items-center gap-4">
                    {
                        Menu.map((data)=>(
                            <li key={data.id}>
                                <a href={data.link}
                                className="inline-block px-4 hover:text-primary duration-200"
                                >
                                    {data.name}</a>
                            </li>
                        ))
                    }
            
            </ul>
            </div>
        </div>
    );
}
export default Navbar