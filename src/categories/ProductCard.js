import React, { useContext ,useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../Components/FavoritesContext';
import AddToCartModal from '../Panier/AddToCartModal'; // Utilise bien ce nom


const ProductCard = ({ product, categoryId }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleFavoriteToggle = (e) => {
    e.preventDefault(); // empêche la redirection
    toggleFavorite(product.id_produit);
  };

  return (
    <div className="relative">
      <Link
        to={`/categorie/${categoryId}/product/${product.id_produit}`}
        className="block"
      >        
      <div className="min-h-[240px] flex flex-col justify-between bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
          {/* Image */}
          <div className="h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
            <img
              src={`http://localhost/back-end_PFE/uploads/${product.image_principale}`}
              alt={product.nom}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Infos */}
          <div className="p-2 flex flex-col h-40">
            <p className="font-semibold text-black text-sm mb-1 line-clamp-2">{product.nom}</p>
            <p className="text-xs text-gray-800 truncate">Vendu par: {product.vendeur}</p>

            {/* Prix + favori */}
            <div className="flex justify-between items-center mt-auto mb-2">
              <p className="text-md font-bold text-[#B5C18E]">{product.prix} DH</p>
              <button
                className="text-[#B5C18E] hover:text-black text-xl"
                onClick={handleFavoriteToggle}
              >
                {favorites.includes(product.id_produit)
                  ? <AiFillHeart />
                  : <AiOutlineHeart />}
              </button>
            </div>

            {/* Bouton Ajouter */}
            <div className="w-full mt-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedProduct(product);
                }}
                className="w-full py-1 text-sm rounded-md flex items-center justify-center space-x-1 bg-[#B5C18E] text-white hover:bg-[#9AA86E] transition-all duration-300"
              >
                <span>Ajouter</span>
                <FiShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </Link>
      
        {selectedProduct && (
          <AddToCartModal
            produit={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
    </div>
  );
};

export default ProductCard;

