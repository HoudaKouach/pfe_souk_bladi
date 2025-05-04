import React from 'react';
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

const Navbar = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white antialiased">
      <div className="max-w-screen-xl mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <a href="#" title="Home">
                <img
                  className="w-[200px] h-auto object-contain dark:hidden"
                  src="Souq bladi.svg"
                  alt="Logo"
                />
              </a>
            </div>
          </div>

          {/* Search bar */}
          {/* <div className="relative text-black">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="h-10 px-5 pr-10 rounded-full placeholder-black text-sm focus:outline-none focus:w-80 transition-all duration-300 border border-black "
              style={{ backgroundColor: '#DEAC80' }}
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56.966 56.966"
                width="512px"
                height="512px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786 c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436, 13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982, 56.293,53.08,55.146,51.887z M23.984,6c9.374,0, 17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
          </div> */}
          {/* <div class="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block" >
            <div class="search-bar row  p-2 my-2 rounded-full text-sm focus:outline-none focus:w-80 transition-all  w-10/12 mx-auto" style={{ backgroundColor: '#DEAC80' }}>
              <div class="hidden md:block w-1/3">
                <select class="form-select w-full border-0 bg-transparent focus:outline-none focus:ring-0 shadow-none">
                  <option>Toutes les catégories</option>
                  <option>Groceries</option>
                  <option>Drinks</option>
                  <option>Chocolates</option>
                </select>
              </div>
              <div class="col-11 col-md-7">
                <form id="search-form" class="text-center" action="index.html" method="post">
                  <input type="text" class="form-control border-0 bg-transparent focus:outline-none focus:ring-0 shadow-none" placeholder="Recherche" />
                </form>
              </div>
              <div class="col-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/></svg>
              </div>
            </div>
          </div> */}
          <div className="hidden lg:block w-1/3 ">
            <div className="flex h-10 items-center justify-between bg-[#DEAC80]  p-2 my-2 rounded-full text-sm w-10/12 mx-auto ">
              {/* Le SELECT corrigé */}
              <div className="hidden md:block ">
              <select className="w-full bg-transparent border-0 p-2 text-center focus:outline-none focus:ring-0 shadow-none">
                <option>Toutes les catégories</option>
                {Categories.filter(c => c.id <= 10).map((cat) => (
                  <option key={cat.id}>{cat.name}</option>
                ))}
              </select>
              </div>
              {/* Le INPUT corrigé */}
              <div className="flex-1 px-2 w-1/3">
                <form id="search-form" action="index.html" method="post">
                  <input
                    type="text"
                    className=" h-10 bg-transparent border-0 focus:outline-none focus:ring-0 shadow-none placeholder:text-gray-700"
                    placeholder="Recherche"
                  />
                </form>
              </div>
              {/* L'icone loupe */}
              <div className="flex items-center justify-center w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                  />
                </svg>
              </div>

            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button
              type="button"
              class="inline-flex items-center rounded-lg p-2 text-gray-900 dark:text-white transform transition-transform duration-400 active:scale-125"
              >
              <span className="sr-only">Cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" class="size-6">
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
            </button>

            {/* Favorite */}
            <button
              type="button"
              class="inline-flex items-center rounded-lg p-2 text-gray-900 dark:text-white transform transition-transform duration-400 active:scale-125"
            >
              <span className="sr-only">Favorites</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>

            {/* Profile */}
            <button
              type="button"
              class="inline-flex items-center rounded-lg p-2 text-gray-900 dark:text-white transform transition-transform duration-400 active:scale-125"
            >
              <span className="sr-only">Profile</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="relative flex items-center py-4">
        <button
          className="absolute left-0 z-10 p-2 bg-white shadow rounded-full"
          onClick={() => scrollRef.current.scrollBy({ left: -100, behavior: 'smooth' })}
        >
          <ChevronLeft size={10} />
        </button>
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-scroll px-8 no-scrollbar"
          >
            {Categories.map((category) => (
              <div key={category.id} className="shrink-0 text-sm text-gray-700 hover:text-[#DEAC80] cursor-pointer whitespace-nowrap">
                {category.name}
              </div>
            ))}
          </div>
        <button
          className="absolute right-0 z-10 p-2 bg-white shadow rounded-full"
          onClick={() => scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' })}
        >
        <ChevronRight size={10} />
      </button>
    </div>

      
    </nav>
  );
};

export default Navbar;
