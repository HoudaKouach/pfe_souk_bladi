import React, { useEffect, useState, useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../Components/FavoritesContext'

const ProduitsVendeur = ({ vendeurId }) => {
  const [products, setProducts] = useState([]);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (vendeurId) {
      fetch(`http://localhost/back-end_PFE/get_products_Vendeur.php?vendeur_id=${vendeurId}`)
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            setError(data.error);
          } else {
            setProducts(data);
          }
          setLoading(false);
        })
        .catch(err => {
          console.error('Erreur:', err);
          setError('Erreur lors de la récupération des produits.');
          setLoading(false);
        });
    }
  }, [vendeurId]);

  const handleFavoriteToggle = (e, productId) => {
    e.preventDefault();
    toggleFavorite(productId);
  };

  if (loading) return <p className="text-center mt-10">Chargement des produits...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-black mb-10 hover:text-[#B5C18E] transition-colors duration-300 cursor-pointer">
          Produits du vendeur
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-4">
          {products.map((product) => (
            <div key={product.id_produit} className="relative">
              <Link to={`/PlusRecents/product/${product.id_produit}`}>
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

                    {/* Conteneur avec icône de favoris et prix */}
                    <div className="flex justify-between items-center mt-auto mb-2">
                      <p className="text-md font-bold text-[#B5C18E]">{product.prix} DH</p>
                      <button
                        className="text-[#B5C18E] hover:text-black text-xl"
                        onClick={(e) => handleFavoriteToggle(e, product.id_produit)}
                      >
                        {favorites.includes(product.id_produit) ? <AiFillHeart /> : <AiOutlineHeart />}
                      </button>
                    </div>

                    <div className="w-full mt-4">
                      <button className="w-full py-1 text-sm rounded-md flex items-center justify-center space-x-1 bg-[#B5C18E] text-white hover:bg-[#9AA86E] transition-all duration-300">
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
      </div>
    </div>
  );
};

export default ProduitsVendeur;
