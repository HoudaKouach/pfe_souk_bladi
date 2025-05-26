// import React, { useEffect, useState, useContext } from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import { FiShoppingCart } from 'react-icons/fi';
// import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

// // Si tu as un contexte Panier/Favoris
// import { CartContext } from '../Panier/CartContext' // 👈 Importer le contexte du panier

// const SearchResults = () => {
//   const location = useLocation();
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [favorites, setFavorites] = useState([]); // Simule le favori

//   const { ajouterAuPanier } = useContext(CartContext); // 👈 Utiliser la fonction du contexte

//   const queryParams = new URLSearchParams(location.search);
//   const searchTerm = queryParams.get('q');

//   useEffect(() => {
//     if (!searchTerm) return;

//     setLoading(true);
//     fetch(`http://localhost/back-end_PFE/recherche.php?query=${encodeURIComponent(searchTerm)}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setResults(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Erreur lors de la recherche :', err);
//         setLoading(false);
//       });
//   }, [searchTerm]);

//   const handleFavoriteToggle = (e, id) => {
//     e.preventDefault();
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
//     );
//   };


//   return (
//     <div className="p-4 max-w-7xl mx-auto">
//       <h1 className="text-2xl font-semibold mb-4">
//         Résultats pour : "<span className="text-[#DEAC80]">{searchTerm}</span>"
//       </h1>

//       {loading ? (
//         <p>Chargement des résultats...</p>
//       ) : results.length > 0 ? (
//         <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-4">
//           {results.map((product) => (
//             <div key={product.id_produit} className="relative">
//               <Link to={`/PlusRecents/product/${product.id_produit}`}>
//                 <div className="min-h-[240px] flex flex-col justify-between bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
//                   <div className="h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
//                     <img
//                       src={`http://localhost/back-end_PFE/uploads/${product.image_principale}`}
//                       alt={product.nom}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   <div className="p-2 flex flex-col h-40">
//                     <p className="font-semibold text-black text-sm mb-1 line-clamp-2">{product.nom}</p>
//                     <p className="text-xs text-gray-800 truncate">Vendu par: {product.vendeur}</p>

//                     <div className="flex justify-between items-center mt-auto mb-2">
//                       <p className="text-md font-bold text-[#B5C18E]">{product.prix} DH</p>
//                       <button
//                         className="text-[#B5C18E] hover:text-black text-xl"
//                         onClick={(e) => handleFavoriteToggle(e, product.id_produit)}
//                       >
//                         {favorites.includes(product.id_produit) ? <AiFillHeart /> : <AiOutlineHeart />}
//                       </button>
//                     </div>

//                     <div className="w-full mt-4">
//                       <button
//                         onClick={(e) => {
//                           e.preventDefault();
//                           ajouterAuPanier(product); // 👈 Appel à la fonction du contexte
//                         }}
//                         className="w-full py-1 text-sm rounded-md transition-all duration-300 flex items-center justify-center space-x-1 bg-[#B5C18E] text-white hover:bg-[#9AA86E]"
//                       >
//                         <span>Ajouter</span>
//                         <FiShoppingCart />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Aucun résultat trouvé.</p>
//       )}
//     </div>
//   );
// };

// export default SearchResults;

import React, { useEffect, useState, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { CartContext } from '../Panier/CartContext';
import Footer from '../Components/Footer';
import Pagination from '../categories/Pagination';
import FilterSidebar from '../categories/FilterSidebar';

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('');

  const { ajouterAuPanier } = useContext(CartContext);

  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('q');

  // Pagination configuration
  const itemsPerPage = 12;
  const totalPages = Math.ceil(results.length / itemsPerPage);
  const paginatedResults = results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (!searchTerm) return;

    setLoading(true);
    fetch(`http://localhost/back-end_PFE/recherche.php?query=${encodeURIComponent(searchTerm)}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erreur lors de la recherche :', err);
        setLoading(false);
      });
  }, [searchTerm]);

  const handleFavoriteToggle = (e, id) => {
    e.preventDefault();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    // Ajoute ici une logique de tri si tu veux trier `results`
  };

  return (
    <>
      <main className="flex-grow bg-white">
        {/* Barre de tri */}
        <div className="w-full h-[50px] bg-white px-4 py-2 border-b ">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-xl font-semibold text-black">
              Résultats pour : "<span className="text-[#B5C18E]">{searchTerm}</span>"
            </h1>
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-1">
              <span className="text-sm">Trier par</span>
              <select
                className="bg-transparent text-sm focus:outline-none cursor-pointer"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="">Popularité</option>
                <option value="price-asc">Prix: Croissant</option>
                <option value="price-desc">Prix: Décroissant</option>
                <option value="name-asc">Nom: A-Z</option>
                <option value="name-desc">Nom: Z-A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="pr-0 ">
          <div className="flex flex-col md:flex-row  pr-0 gap-6">
            {/* Sidebar des filtres */}
            <div className="w-full md:w-1/4 lg:w-1/5 flex flex-col pr-0 gap-4">
              <FilterSidebar />
            </div>

            {/* Résultats */}
            <div className="w-full md:w-3/4 py-4 lg:w-4/5">
              {loading ? (
                <p>Chargement des résultats...</p>
              ) : paginatedResults.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                    {paginatedResults.map((product) => (
                      <div key={product.id_produit} className="relative">
                        <Link to={`/PlusRecents/product/${product.id_produit}`}>
                          <div className="min-h-[240px] flex flex-col justify-between bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                            <div className="h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                              <img
                                src={`http://localhost/back-end_PFE/uploads/${product.image_principale}`}
                                alt={product.nom}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <div className="p-2 flex flex-col h-40">
                              <p className="font-semibold text-black text-sm mb-1 line-clamp-2">
                                {product.nom}
                              </p>
                              <p className="text-xs text-gray-800 truncate">
                                Vendu par: {product.vendeur}
                              </p>

                              <div className="flex justify-between items-center mt-auto mb-2">
                                <p className="text-md font-bold text-[#B5C18E]">
                                  {product.prix} DH
                                </p>
                                <button
                                  className="text-[#B5C18E] hover:text-black text-xl"
                                  onClick={(e) => handleFavoriteToggle(e, product.id_produit)}
                                >
                                  {favorites.includes(product.id_produit) ? (
                                    <AiFillHeart />
                                  ) : (
                                    <AiOutlineHeart />
                                  )}
                                </button>
                              </div>

                              <div className="w-full mt-4">
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    ajouterAuPanier(product);
                                  }}
                                  className="w-full py-1 text-sm rounded-md transition-all duration-300 flex items-center justify-center space-x-1 bg-[#B5C18E] text-white hover:bg-[#9AA86E]"
                                >
                                  <span>Ajouter</span>
                                  <FiShoppingCart />
                                </button>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </>
              ) : (
                <p>Aucun résultat trouvé.</p>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SearchResults;
