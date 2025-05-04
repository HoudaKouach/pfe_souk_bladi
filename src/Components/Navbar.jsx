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

const Categories = [
    { id: 1, name: "Produits du Terroir", link: "/produits-du-terroir" },
    { id: 2, name: "Huiles (huile d'olive, huile d'argan…)", link: "/huiles" },
    { id: 3, name: "Dattes & Dérivés", link: "/dattes-derives" },
    { id: 4, name: "Miel & Produits de la Ruche", link: "/miel-ruche" },
    { id: 5, name: "Épices & Herbes", link: "/epices-herbes" },
    { id: 6, name: "Couscous & Céréales", link: "/couscous-cereales" },
    { id: 7, name: "Confitures & Produits Sucrés", link: "/confitures-sucres" },
    { id: 8, name: "Plantes Médicinales & Tisanes", link: "/plantes-tisanes" },
    { id: 9, name: "Artisanat", link: "/artisanat" },
    { id: 10, name: "Tapis & Tissages", link: "/tapis-tissages" },
    { id: 11, name: "Poterie & Céramique", link: "/poterie-ceramique" },
    { id: 12, name: "Bijoux Traditionnels", link: "/bijoux-traditionnels" },
    { id: 13, name: "Articles en Bois", link: "/articles-bois" },
    { id: 14, name: "Cuir (sacs, babouches…)", link: "/cuir" },
    { id: 15, name: "Vannerie (paniers, nattes…)", link: "/vannerie" },
    { id: 16, name: "Beauté & Bien-être", link: "/beaute-bien-etre" },
    { id: 17, name: "Produits à base d’Argan", link: "/produits-argan" },
    { id: 18, name: "Savons & Soins Naturels", link: "/savons-soins" },
    { id: 19, name: "Huiles Essentielles", link: "/huiles-essentielles" },
    { id: 20, name: "Parfums Traditionnels", link: "/parfums-traditionnels" },
    { id: 21, name: "Décoration", link: "/decoration" },
    { id: 22, name: "Objets Déco", link: "/objets-deco" },
    { id: 23, name: "Luminaires Artisanaux", link: "/luminaires-artisanaux" },
    { id: 24, name: "Peintures & Calligraphie", link: "/peintures-calligraphie" },
    { id: 25, name: "Articles de Table", link: "/articles-table" },
    { id: 26, name: "Cadeaux & Coffrets", link: "/cadeaux-coffrets" },
    { id: 27, name: "Coffrets Gourmands", link: "/coffrets-gourmands" },
    { id: 28, name: "Packs Bien-être", link: "/packs-bien-etre" },
    { id: 29, name: "Idées Cadeaux Artisanaux", link: "/idees-cadeaux-artisanaux" },
    { id: 30, name: "Mode & Accessoires", link: "/mode-accessoires" },
    { id: 31, name: "Écharpes & Châles", link: "/echarpes-chales" },
    { id: 32, name: "Accessoires en Cuir", link: "/accessoires-cuir" },
    { id: 33, name: "Bijoux Modernes", link: "/bijoux-modernes" },
    { id: 34, name: "Nouveautés", link: "/nouveautes" },
    { id: 35, name: "Derniers Produits", link: "/derniers-produits" },
    { id: 36, name: "Promotions", link: "/promotions" },
    { id: 37, name: "Offres Spéciales", link: "/offres-speciales" },
];

const Navbar =() =>{
    
    return (
        <div className="shadow-md bg-white  dark:text-black-900 duration-200 relative z-40 ">
            {/* barre de navigation supérieure */}

            <div className="40 py-2 ">
                <div className="Container flex justify-between items-center ">
                    <div className="flex-1">
                        <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2"> 
                        
                            <img src="/Souq bladi.svg" alt="logo"  className="w-3 sm:w-40 "/>
                        </a>
                    </div>

                    {/* barre de recherche et bouton de commande */}
                    <div className=" flex-1 flex justify-between items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <input type="text" placeholder="search" 
                            className="w-[200px] sm:w-[200px] group-hover:w-[300px] 
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

                     {/* Icônes : Cœur et Profil */}
                    <div className="  flex justify-end items-center gap-4 ml-auto">
                       {/* Bouton Cœur */}
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

                      {/* Bouton Profil */}

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
                    

                    {/* bouton de commande */}

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
                </div>
            </div>
            
            {/* barre de navigation inférieure */}

            <div className="flex justify-center">
            <ul className=" text-2xl font-bold text-center text-gray-800 mb-10 sm:flex hidden items-center gap-4">
                    {
                        Categories.map((data)=>(
                            <li key={data.id}>
                                <a href={data.link}
                                className="inline-block px-4 hover:text-secondary duration-200"
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