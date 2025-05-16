// import React, { useState } from 'react';
// import { FiShoppingCart } from 'react-icons/fi';

// function ProductCard({ product }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       key={product.id}
//       className={`relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform ${
//         hovered ? 'scale-105' : ''
//       }`}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Image */}
//       <div className="h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
//         <img
//           src={`/dattes/${product.image}`}
//           alt={product.title}
//           className={`w-full h-full object-cover transition-transform duration-500 ${
//             hovered ? 'scale-105' : 'scale-100'
//           }`}
//         />
//       </div>

//       {/* Infos produit */}
//       <div className="p-3 flex flex-col h-32 bg-[#DEAC80] text-center">
//         <p className="text-sm font-semibold text-gray-800 mb-1 truncate">{product.title}</p>
//         <p className="text-xs text-gray-600 mb-1">
//           Vendu par: <span className="font-medium">{product.seller}</span>
//         </p>
//         <p className="text-base font-bold text-[#90B77D] mb-2">{product.price} DH</p>

//         <button
//           className={`w-full py-1 text-sm rounded-md transition-all duration-300 flex items-center justify-center space-x-1 ${
//             hovered
//               ? 'bg-[#B5C18E] text-white shadow-md'
//               : 'bg-gray-800 text-white hover:bg-[#B5C18E]'
//           }`}
//         >
//           <span>Ajouter</span>
//           <FiShoppingCart
//             className={`transition-transform duration-300 ${
//               hovered ? 'scale-110' : 'scale-100'
//             }`}
//           />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;



// import React, { useState } from 'react';
// import { FiShoppingCart } from 'react-icons/fi';

// function ProductCard({ product }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       key={product.id}
//       className={`relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform ${
//         hovered ? 'scale-105' : ''
//       }`}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Image */}
//       <div className="h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
//         <img
//           src={`/dattes/${product.image}`}
//           alt={product.title}
//           className={`w-full h-full object-cover transition-transform duration-500 ${
//             hovered ? 'scale-105' : 'scale-100'
//           }`}
//         />
//       </div>

//       {/* Infos produit */}
//       <div className="p-4 flex flex-col bg-[#DEAC80]">
//         {/* Title */}
//         <p className="font-semibold text-sm mb-1 text-left">{product.title}</p>
        
//         {/* Seller */}
//         <p className="text-xs text-gray-700 text-left mb-2">Vendu par: {product.seller}</p>
        
//         {/* Price */}
//         <p className="text-md font-bold text-[#404d16] mb-3 text-left">{product.price} DH</p>

//         {/* Bouton */}
//         <button
//           className={`w-full py-2 px-4 text-sm rounded-md transition-all duration-300 flex items-center justify-center space-x-2 ${
//             hovered
//               ? 'bg-[#B5C18E] text-white shadow-md'
//               : 'bg-gray-800 text-white hover:bg-[#B5C18E]'
//           }`}
//         >
//           <span>Ajouter</span>
//           <FiShoppingCart
//             className={`transition-transform duration-300 ${
//               hovered ? 'scale-110' : 'scale-100'
//             }`}
//           />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      key={product.id_produit}
      className={`relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform ${
        hovered ? 'scale-105' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={`/dattes/${product.image_principale}`}
          alt={product.nom}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />
      </div>

      {/* Infos produit */}
      <div className="p-4 flex flex-col bg-[#DEAC80]">
        {/* Nom du produit */}
        <p className="font-semibold text-sm mb-1 text-left">{product.nom}</p>
        
        {/* Vendeur */}
        <p className="text-xs text-gray-700 text-left mb-2">Vendu par: {product.vendeur}</p>
        
        {/* Prix */}
        <p className="text-md font-bold text-[#404d16] mb-3 text-left">{product.prix} DH</p>

        {/* Bouton */}
        <button
          className={`w-full py-2 px-4 text-sm rounded-md transition-all duration-300 flex items-center justify-center space-x-2 ${
            hovered
              ? 'bg-[#B5C18E] text-white shadow-md'
              : 'bg-gray-800 text-white hover:bg-[#B5C18E]'
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
  );
}

export default ProductCard;
