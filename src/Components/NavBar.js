import React, { useState, useEffect } from 'react';
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [categories, setCategories] = useState([]);

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
  };
  useEffect(() => {
    // Récupérer les catégories depuis l'API PHP
    fetch('http://localhost/back-end_PFE/getCategories.php') // Remplacez par l'URL correcte de votre API
      .then(response => response.json())
      .then(data => {
        setCategories(data); // Mettre à jour l'état avec les catégories
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

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
                  src="/Souq bladi.svg"
                  alt="Logo"
                />
              </a>
            </div>
          </div>

          <div className="hidden lg:block w-1/3 ">
            <div className="flex h-10 items-center justify-between bg-[#DEAC80]  p-2 my-2 rounded-full text-sm w-10/12 mx-auto ">
            <div className="hidden md:block">
              <select
                className="w-full bg-transparent border-0 p-2 text-center focus:outline-none focus:ring-0 shadow-none"
                style={{ maxHeight: '200px', overflowY: 'auto' }} // Définir la hauteur max et activer le scroll
              >
                <option>Toutes les catégories</option>
                {categories.map((cat) => (
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
              className="inline-flex items-center rounded-lg p-2 text-gray-900 dark:text-white transform transition-transform duration-400 active:scale-125"
              >
              <span className="sr-only">Cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" className="size-6">
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
            </button>

            {/* Favorite */}
            <button
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-gray-900 dark:text-white transform transition-transform duration-400 active:scale-125"
            > 
            <Link to="/favoris" >
              <span className="sr-only">Favorites</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </Link>
            </button>

            {/* Profile */}
            <button
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-gray-900 dark:text-white transform transition-transform duration-400 active:scale-125"
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
            className="flex space-x-4 overflow-x-scroll px-10 no-scrollbar"
          >
            {categories.map((category) => (
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
