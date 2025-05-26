import React, { useContext, useState } from 'react';
import { CartContext } from '../Panier/CartContext';

const LogoPanier = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantite, 0);
  const [showMiniCart, setShowMiniCart] = useState(false);

  return (
    <div 
      className="relative cursor-pointer"
      onMouseEnter={() => setShowMiniCart(true)}
      onMouseLeave={() => setShowMiniCart(false)}
    >
      {/* Icône panier (exemple simple) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13l-1.5-7M7 13h10M9 21a1 1 0 11-2 0 1 1 0 012 0zm10 0a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>

      {/* Badge nombre produits */}
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold">
          {totalItems}
        </span>
      )}

    </div>
  );
};

export default LogoPanier;
