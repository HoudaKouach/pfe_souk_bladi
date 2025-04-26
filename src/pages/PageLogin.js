import {React , useState} from 'react';
import '../index.css';
import Navbar from '../Composants/NavBar';
import BackgroundImages from '../Composants/BackgroundImages';
import Footer from '../Composants/Footer';
import {Link} from 'react-router-dom' ;
const Login = ({ onLogin }) => {
    const handleLogin = () => {
        // vérifie les informations, etc.
        onLogin(); // 🔥 appeler cette fonction pour changer isLoggedIn à true
      };
return (
    <div>
    <Navbar />
        <BackgroundImages >
                {/* <div className=" mx-4  p-8 rounded-lg shadow-xl w-full md:w-1/2 lg:w-1/3" style={{ backgroundColor: '#DEAC80' }}> */}
                <div  className="mx-4 p-8 rounded-lg shadow-xl w-full md:w-1/2 lg:w-1/3 bg-white border"  >
                    <form className="space-y-4">
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
                        placeholder="Mot de passe"
                        type="password"
                        style={{ borderColor: '#DEAC80' }}
                        required
                        />

                    </div>
                    <a className="group text-[#DEAC80] transition-all duration-100 ease-in-out" href="#">
                        <span className="bg-left-bottom bg-gradient-to-r text-sm from-[#DEAC80] to-[#DEAC80] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out" >
                        Mot de passe oublié ?
                        </span>
                    </a>
                    <button
                        className=" shadow-lg mt-6 p-2 text-black rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                        type="submit"
                        style={{ backgroundColor: '#DEAC80' }}
                        onClick={handleLogin}
                    >
                        Créer un compte
                    </button>
                    </form>

                    <div className="flex flex-col mt-4 items-center justify-center text-sm">
                        {/* Lien vers la page de connexion */}
                        <Link
                            to="/signup"
                            className="group text-[#DEAC80] transition-all duration-100 ease-in-out"
                        >
                            <span className="bg-left-bottom bg-gradient-to-r text-sm from-[#DEAC80] to-[#DEAC80] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                            Don't have an account?
                            </span>
                        </Link>
                    </div>
                </div>
        </BackgroundImages> 
        <Footer />   
    </div>
  );
};

export default Login;