import React from 'react';
import '../index.css';
import Navbar from '../Composants/NavBar';
import BackgroundImages from '../Composants/BackgroundImages';
import Footer from '../Composants/Footer';
import { Link } from 'react-router-dom';

const Signup = () => {

  return (
    <div>
    <Navbar />
        <BackgroundImages >
                {/* <div className=" mx-4  p-8 rounded-lg shadow-xl w-full md:w-1/2 lg:w-1/3" style={{ backgroundColor: '#DEAC80' }}> */}
                <div  className="mx-4 p-8 rounded-lg shadow-xl w-full md:w-1/2 lg:w-1/3 bg-white border"  >
                    <form className="space-y-4">
                    <div>
                        <label htmlFor="nomComplet" className="mb-2 text-black text-lg">Nom complet</label>
                        <input
                        id="nomComplet"
                        className="border p-3 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:border-[#DEAC80] focus:scale-105 ease-in-out duration-300 border-gray-300  rounded-lg w-full"
                        type="text"
                        placeholder="Nom Complet"
                        style={{ borderColor: '#DEAC80' }}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="mb-2 text-black text-lg">Adresse e-mail</label>
                        <input
                        id="email"
                        className="border p-3 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:border-[#DEAC80] focus:scale-105 ease-in-out duration-300 border-gray-300  rounded-lg w-full"
                        type="email"
                        placeholder="Adresse e-mail"
                        style={{ borderColor: '#DEAC80' }}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="mb-2 dark:text-gray-400 text-lg">Mot de passe</label>
                        <input
                        id="password"
                        className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                        type="password"
                        placeholder="Mot de passe"
                        style={{ borderColor: '#DEAC80' }}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="mb-2 dark:text-gray-400 text-lg">Confirmer le mot de passe</label>
                        <input
                        id="confirmPassword"
                        className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                        type="password"
                        placeholder="Confirmer le mot de passe"
                        style={{ borderColor: '#DEAC80' }}
                        required
                        />
                    </div>  
                    <div>
                        {/* Lien vers la page de connexion */}
                        <Link
                            to="/login"
                            className="group text-[#DEAC80] transition-all duration-100 ease-in-out"
                        >
                            <span className="bg-left-bottom bg-gradient-to-r text-sm from-[#DEAC80] to-[#DEAC80] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                            Avez-vous déjà un compte ?
                            </span>
                        </Link>
                    </div>                 
                    <button
                        className=" shadow-lg mt-6 p-2 text-black rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                        type="submit"
                        style={{ backgroundColor: '#DEAC80' }}
                    >
                        S'inscrire
                    </button>
                    </form>

                </div>
        </BackgroundImages> 
        <Footer />   
    </div>
  );
};

export default  Signup ;
