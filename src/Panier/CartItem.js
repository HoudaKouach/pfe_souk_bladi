// // // import React from 'react';

// // // function CartItem({ product }) {
// // //     return (
// // //       <div className="flex items-center border border-[#d9d3c9] rounded mb-3 p-2 space-x-3">
// // //         <img
// // //           src={product.img}
// // //           alt={product.alt}
// // //           className="w-20 h-20 object-cover rounded"
// // //           width={80}
// // //           height={80}
// // //         />
// // //         <div className="flex-1">
// // //           <p className="text-sm font-normal">{product.name}</p>
// // //           <p className="text-xs">
// // //             Vendu par : <strong>{product.seller}</strong>
// // //           </p>
// // //         </div>
// // //         <div className="flex items-center border border-[#d9d3c9] rounded text-sm font-semibold">
// // //           <button aria-label="Diminuer quantité" className="px-2 py-0.5 text-black">
// // //             -
// // //           </button>
// // //           <input
// // //             type="text"
// // //             readOnly
// // //             value="01"
// // //             className="w-8 text-center border-x border-[#d9d3c9] py-0.5"
// // //           />
// // //           <button aria-label="Augmenter quantité" className="px-2 py-0.5 text-black">
// // //             +
// // //           </button>
// // //         </div>
// // //         <div className="text-sm font-bold text-right w-20">{product.price.toFixed(2)} Dh</div>
// // //         <button aria-label="Supprimer produit" className="text-[#a6b57a] hover:text-[#8a9a4e] ml-2">
// // //           <i className="fas fa-trash-alt"></i>
// // //         </button>
// // //       </div>
// // //     );
// // //   }

// // // export default CartItem;



// import React, { useState } from 'react';

// function CartItem({ product, onRemove }) {
//   const [quantity, setQuantity] = useState(1);

//   const incrementQuantity = () => {
//     setQuantity(prev => prev + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(prev => prev - 1);
//     }
//   };

//   const handleRemove = () => {
//     onRemove(product.id); // on suppose que chaque produit a un ID unique
//   };

//   return (
//     <div className="flex items-center border border-[#d9d3c9] rounded mb-3 p-2 space-x-3">
//       <img
//         src={product.img}
//         alt={product.alt}
//         className="w-20 h-20 object-cover rounded"
//         width={80}
//         height={80}
//       />
//       <div className="flex-1">
//         <p className="text-sm font-normal">{product.name}</p>
//         <p className="text-xs">
//           Vendu par : <strong>{product.seller}</strong>
//         </p>
//       </div>
//       <div className="flex items-center border border-[#d9d3c9] rounded text-sm font-semibold">
//         <button
//           aria-label="Diminuer quantité"
//           onClick={decrementQuantity}
//           className="px-2 py-0.5 text-black"
//         >
//           -
//         </button>
//         <input
//           type="text"
//           readOnly
//           value={quantity.toString().padStart(2, '0')}
//           className="w-8 text-center border-x border-[#d9d3c9] py-0.5"
//         />
//         <button
//           aria-label="Augmenter quantité"
//           onClick={incrementQuantity}
//           className="px-2 py-0.5 text-black"
//         >
//           +
//         </button>
//       </div>
//       <div className="text-sm font-bold text-right w-20">
//         {(product.price * quantity).toFixed(2)} Dh
//       </div>
//       <button
//         aria-label="Supprimer produit"
//         onClick={handleRemove}
//         className="text-[#a6b57a] hover:text-[#8a9a4e] ml-2"
//       >
//         Supprimer
//       </button>
//     </div>
//   );
// }

// // export default CartItem;

// function CartItem({ product, onRemove, onQuantityChange }) {
//   const { quantite, id_produit } = product;

//   const incrementQuantity = () => onQuantityChange(id_produit, quantite + 1);
//   const decrementQuantity = () => {
//     if (quantite > 1) onQuantityChange(id_produit, quantite - 1);
//   };

//   return (
//     <div>
//       <button onClick={decrementQuantity}>-</button>
//       <span>{quantite}</span>
//       <button onClick={incrementQuantity}>+</button>
//       <button onClick={() => onRemove(id_produit)}>Supprimer</button>
//     </div>
//   );
// }
// export default CartItem;

// import React from 'react';

// function CartItem({ product, onRemove, onQuantityChange }) {
//   const incrementQuantity = () => {
//     onQuantityChange(product.id, product.quantity + 1);
//   };

//   const decrementQuantity = () => {
//     if (product.quantity > 1) {
//       onQuantityChange(product.id, product.quantity - 1);
//     }
//   };

//   const handleRemove = () => {
//     onRemove(product.id);
//   };

//   return (
//     <div className="flex items-center border border-[#d9d3c9] rounded mb-3 p-2 space-x-3">
//       <img
//         src={product.img}
//         alt={product.alt}
//         className="w-20 h-20 object-cover rounded"
//         width={80}
//         height={80}
//       />
//       <div className="flex-1">
//         <p className="text-sm font-normal">{product.name}</p>
//         <p className="text-xs">
//           Vendu par : <strong>{product.seller}</strong>
//         </p>
//       </div>
//       <div className="flex items-center border border-[#d9d3c9] rounded text-sm font-semibold">
//         <button
//           aria-label="Diminuer quantité"
//           onClick={decrementQuantity}
//           className="px-2 py-0.5 text-black"
//         >
//           -
//         </button>
//         <input
//           type="text"
//           readOnly
//           value={product.quantity.toString().padStart(2, '0')}
//           className="w-8 text-center border-x border-[#d9d3c9] py-0.5"
//         />
//         <button
//           aria-label="Augmenter quantité"
//           onClick={incrementQuantity}
//           className="px-2 py-0.5 text-black"
//         >
//           +
//         </button>
//       </div>
//       <div className="text-sm font-bold text-right w-20">
//         {(product.price * product.quantity).toFixed(2)} Dh
//       </div>
//       <button
//         aria-label="Supprimer produit"
//         onClick={handleRemove}
//         className="text-[#a6b57a] hover:text-[#8a9a4e] ml-2"
//       >
//         Supprimer
//       </button>
//     </div>
//   );
// }

// export default CartItem;


// import React from 'react';

// function CartItem({ product, onRemove, onQuantityChange }) {
//   const incrementQuantity = () => {
//     onQuantityChange(product.quantity + 1);
//   };

//   const decrementQuantity = () => {
//     if (product.quantity > 1) {
//       onQuantityChange(product.quantity - 1);
//     }
//   };

//   const handleRemove = () => {
//     onRemove(); // Pas besoin de passer product.id car il est déjà dans la fonction parent
//   };

//   return (
//     <div className="flex items-center border border-[#DEAC80] rounded mb-3 p-2 space-x-3">
//       <img
//         src={product.img}
//         alt={product.alt}
//         className="w-20 h-20 object-cover rounded"
//         width={80}
//         height={80}
//       />
//       <div className="flex-1">
//         <p className="text-sm font-normal">{product.name}</p>
//         <p className="text-xs">
//           Vendu par : <strong>{product.seller}</strong>
//         </p>
//       </div>
//       <div className="flex items-center border border-[#DEAC80] rounded text-sm font-semibold">
//         <button
//           aria-label="Diminuer quantité"
//           onClick={decrementQuantity}
//           className="px-2 py-0.5 text-black"
//         >
//           -
//         </button>
//         <input
//           type="text"
//           readOnly
//           value={product.quantity.toString().padStart(2, '0')}
//           className="w-8 text-center border-x border-[#d9d3c9] py-0.5"
//         />
//         <button
//           aria-label="Augmenter quantité"
//           onClick={incrementQuantity}
//           className="px-2 py-0.5 text-black"
//         >
//           +
//         </button>
//       </div>
//       <div className="text-sm font-bold text-right w-20">
//         {(product.price) } Dh
//       </div>
//       <button 
//         onClick={onRemove} 
//         title="Supprimer" 
//         className="text-[#DEAC80] hover:text-black"
//       >
//         {/* Icône supprimer (exemple : croix) */}
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//         </svg>
//       </button>
//     </div>
//   );
// }

// export default CartItem;


import React from 'react';

function CartItem({ product, onRemove, onQuantityChange }) {
  const incrementQuantity = () => {
    onQuantityChange(product.quantity + 1);
  };

  const decrementQuantity = () => {
    if (product.quantity > 1) {
      onQuantityChange(product.quantity - 1);
    }
  };

  const handleRemove = () => {
    onRemove(); // Pas besoin de passer product.id car il est déjà dans la fonction parent
  };

  return (
    <div className="flex items-center border border-[#DEAC80] rounded mb-3 p-2 space-x-3">
    <img
      src={`http://localhost/back-end_PFE/uploads/${product.img}`}
      alt={product.alt || product.name}
      className="w-20 h-20 object-cover rounded"
      width={80}
      height={80}
    />
      <div className="flex-1">
        <p className="text-sm font-normal">{product.name}</p>
        <p className="text-xs">
          Vendu par : <strong>{product.seller}</strong>
        </p>
      </div>
      <div className="flex items-center border border-[#DEAC80] rounded text-sm font-semibold">
        <button
          aria-label="Diminuer quantité"
          onClick={decrementQuantity}
          className="px-2 py-0.5 text-black"
        >
          -
        </button>
        <input
          type="text"
          readOnly
          value={product.quantity.toString().padStart(2, '0')}
          className="w-8 text-center border-x border-[#d9d3c9] py-0.5"
        />
        <button
          aria-label="Augmenter quantité"
          onClick={incrementQuantity}
          className="px-2 py-0.5 text-black"
        >
          +
        </button>
      </div>
      <div className="text-sm font-bold text-right w-20">
        {product.price} Dh
      </div>
      <button 
        onClick={handleRemove} 
        title="Supprimer" 
        className="text-[#DEAC80] hover:text-black"
      >
        {/* Icône supprimer (exemple : croix) */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
