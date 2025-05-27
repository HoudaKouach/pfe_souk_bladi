import React, { useState, useEffect, useContext, useRef } from 'react'; 
import { ChevronDown } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../Panier/CartContext';

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantite, 0);
  const dropdownRef = useRef(null);
  const suggestionsRef = useRef(null);
  const { totalQuantite } = useContext(CartContext);


  // Fermer dropdown si clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        suggestionsRef.current && !suggestionsRef.current.contains(event.target)
      ) {
        setOpen(false);
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Chargement catégories
  useEffect(() => {
    fetch('http://localhost/back-end_PFE/getCategories.php')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  // Sélection catégorie
  const handleSelectCategory = (id) => {
    setOpen(false);
    if (id) navigate(`/categorie/${id}`);
    else navigate('/'); 
  };

  // Soumission recherche
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSuggestions([]);
    }
  };

  // Gestion changement input recherche et suggestions
  const handleChange = (e) => {
    const val = e.target.value;
    setSearchTerm(val);

    if (val.length >= 2) {
      fetch(`http://localhost/back-end_PFE/rechercheSuggestions.php?query=${encodeURIComponent(val)}`)
        .then(res => res.json())
        .then(data => setSuggestions(data))
        .catch(err => console.error(err));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.nom);  // Mettre le nom du produit dans l'input
    setSuggestions([]);             // Vider la liste des suggestions
  };

  return (
    <nav className="bg-white antialiased shadow-sm sticky top-0 z-50">
      <div className="w-full px-0 ">
        {/* <div className="flex items-center justify-between h-16"> */}
          <div className="flex items-center justify-between h-16 px-0 ">

          {/* Logo */}
          <Link to="/" aria-label="Accueil" 
          // className="flex items-center" 
          className="flex-shrink-0 flex items-center">
            <img
              src="/Souq bladi.svg"
              alt="Logo Souq Bladi"
              className="w-[220px] h-auto object-contain dark:hidden"
              draggable={false}
            />
          </Link>

          {/* Recherche + catégories (grand écran) */}
          {/* <div className="hidden lg:flex items-center space-x-6 w-1/2"> */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 max-w-2xl">

            {/* Dropdown catégories */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700"
                aria-haspopup="true"
                aria-expanded={open}
                aria-controls="categories-menu"
                type="button"
              >
                Catégories
                <ChevronDown className="ml-2 h-5 w-5" />
              </button>

              {open && (
                <div
                  id="categories-menu"
                  className="absolute left-0 mt-2 w-48 max-h-60 overflow-y-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <button
                      onClick={() => handleSelectCategory('')}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-[#DEAC80] hover:text-white"
                      role="menuitem"
                      tabIndex={0}
                    >
                      Toutes les catégories
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleSelectCategory(cat.id)}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-[#DEAC80] hover:text-white"
                        role="menuitem"
                        tabIndex={0}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Barre de recherche */}
            <form
              onSubmit={handleSearchSubmit}
              // className="flex flex-1 max-w-md items-center rounded-full bg-[#DEAC80] px-3 py-1 relative"
              className="flex flex-1 max-w-md items-center rounded-full bg-[#DEAC80] px-3 py-1 relative"
              role="search"
              aria-label="Recherche produits"
              autoComplete="off"
            >
              <input
                type="search"
                className="flex-grow bg-transparent border-none placeholder-gray-700 text-black focus:outline-none"
                placeholder="Recherche"
                value={searchTerm}
                onChange={handleChange}
                aria-label="Rechercher des produits"
                aria-haspopup="listbox"
                aria-expanded={suggestions.length > 0}
                aria-controls="search-suggestions"
              />
              <button
                type="submit"
                aria-label="Lancer la recherche"
                className="ml-2 p-1 rounded-full hover:bg-[#c79962] focus:outline-none focus:ring-2 focus:ring-[#a47d47]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" />
                </svg>
              </button>

              {suggestions.length > 0 && (
                <ul
                  id="search-suggestions"
                  role="listbox"
                  ref={suggestionsRef}
                  className="absolute top-full left-0 right-0 z-10 max-h-60 overflow-y-auto rounded-md bg-white shadow-lg border border-gray-300 mt-1 text-sm"
                >
                  {suggestions.map((item, index) => (
                    <li
                      key={item.id_produit || index}
                      role="option"
                      tabIndex={-1}
                      className="cursor-pointer px-4 py-2 hover:bg-[#DEAC80] hover:text-white"
                      onClick={() => handleSuggestionClick(item)}  // On passe l'objet item entier
                    >
                      {item.nom}
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </div>

          {/* Icônes droite */}
          {/* <div className="flex items-center space-x-2"> */}
          <div className="flex items-center space-x-2 flex-shrink-0 px-4">
            {/* Panier */}
            <Link
              to="/Panier"
              className="relative inline-flex items-center p-2 text-gray-900 hover:text-[#DEAC80] focus:outline-none focus:ring-2 focus:ring-[#DEAC80] rounded-lg"
              aria-label={`Panier avec ${totalItems} article(s)`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
              {totalQuantite > 0 && (
                <span className="absolute -top-1 -right-1 rounded-full bg-[#DEAC80] px-1.5 py-0.5 text-xs font-bold text-white">
                {totalQuantite} </span>
              )}
            </Link>
            {/* Favoris */}
            <Link
              to="/favoris"
              className="p-2 text-gray-900 hover:text-[#DEAC80] focus:outline-none focus:ring-2 focus:ring-[#DEAC80] rounded-lg"
              aria-label="Favoris"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </Link>

            {/* Profil */}
            <Link to="/login" >
              <button
                type="button"
                className="p-2 text-gray-900 hover:text-[#DEAC80] focus:outline-none focus:ring-2 focus:ring-[#DEAC80] rounded-lg"
                aria-label="Profil utilisateur"
                // TODO: ajouter navigation vers profil ou menu utilisateur
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

