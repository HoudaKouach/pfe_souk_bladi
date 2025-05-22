




import React, { useState, useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FavoritesContext } from '../Components/FavoritesContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, routePrefix = '' }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [hovered, setHovered] = useState(false);

  const handleFavoriteToggle = (e) => {
    e.preventDefault(); 
    toggleFavorite(product.id_produit);
  };

  return (
    <Link
      to={`/${routePrefix}/product/${product.id_produit}`}
      className="block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="min-h-[240px] flex flex-col justify-between bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">

        {/* Image */}
        <div className="h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={`/dattes/${product.image_principale}`}
            alt={product.nom}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              hovered ? 'scale-105' : 'scale-100'
            }`}
          />
        </div>

        {/* Infos */}
        <div className="p-3 bg-[#DEAC80] flex flex-col h-40">
          <p className="font-semibold text-sm mb-1 text-left line-clamp-2 text-black">{product.nom}</p>
          <p className="text-xs text-gray-700 text-left truncate">Vendu par: {product.vendeur}</p>

          {/* Prix + Favori */}
          <div className="flex justify-between items-center mt-auto mb-2">
            <p className="text-md font-bold text-[#404d16]">{product.prix} DH</p>
            <button
              onClick={handleFavoriteToggle}
              className="text-[#404d16] hover:text-black text-xl"
            >
              {favorites.includes(product.id_produit)
                ? <AiFillHeart />
                : <AiOutlineHeart />}
            </button>
          </div>

          {/* Bouton Ajouter */}
          <button
            onClick={(e) => e.preventDefault()}
            className={`w-full py-2 px-3 text-sm rounded-md flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'bg-[#B5C18E] text-white shadow-md' : 'bg-gray-800 text-white hover:bg-[#B5C18E]'
            }`}
          >
            <span>Ajouter</span>
            <FiShoppingCart
              className={`transition-transform duration-300 ${
                hovered ? 'scale-110' : 'scale-100'
              }`}
            />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
