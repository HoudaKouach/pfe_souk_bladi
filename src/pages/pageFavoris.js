import React, { useEffect, useState, useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FavoritesContext } from '../Components/FavoritesContext';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const Favoris = () => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [products, setProducts] = useState([]);

  // Fonction pour récupérer les produits favoris
  useEffect(() => {
    if (favorites.length > 0) {
      const ids = favorites.join(',');
      fetch(`http://localhost/back-end_PFE/get_productsFavoris.php?ids=${ids}`)
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Erreur lors de la récupération des produits favoris :', error));
    }
  }, [favorites]);

  const handleFavoriteToggle = (e, productId) => {
    e.preventDefault();
    toggleFavorite(productId);
  };

  return (
    <>
      <div className="relative py-10 pb-4 bg-white min-h-screen">
        {/* Image de fond */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/docoratif_amazigh.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5,
            zIndex: 0,
          }}
        ></div> 
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-center text-black mb-10 hover:text-[#B5C18E] transition-colors duration-300 cursor-pointer">
              Mes produits favoris
            </h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-4">
            {products.length > 0 ? (
              products.map(product => (
                <div key={product.id_produit} className="relative">
                  <Link to={`/detail/${product.id_produit}`}>
                    <div className="min-h-[240px] flex flex-col justify-between bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <div className="h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                        <img
                          src={`http://localhost/back-end_PFE/${product.image_principale}`}
                          alt={product.nom}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="p-2 flex flex-col h-40">
                        <p className="font-semibold text-black text-sm mb-1 line-clamp-2">{product.nom}</p>
                        <p className="text-xs text-gray-800 truncate">Vendu par: {product.vendeur}</p>

                        <div className="flex justify-between items-center mt-auto mb-2">
                          <p className="text-md font-bold text-[#B5C18E]">{product.prix} DH</p>
                          <button
                            className="text-[#B5C18E] hover:text-black text-xl"
                            onClick={(e) => handleFavoriteToggle(e, product.id_produit)}
                          >
                            {favorites.includes(product.id_produit)
                              ? <AiFillHeart />
                              : <AiOutlineHeart />}
                          </button>
                        </div>

                        <div className="w-full mt-4">
                          <button className="w-full py-1 text-sm rounded-md transition-all duration-300 flex items-center justify-center space-x-1 bg-[#B5C18E] text-white hover:bg-[#9AA86E]">
                            <span>Ajouter</span>
                            <FiShoppingCart className="transition-transform duration-300" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full">Aucun produit favori pour l'instant.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favoris;
