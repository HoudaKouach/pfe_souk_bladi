import React from 'react';


function RecommendedProduct({ product }) {
    return (
      <div className="flex-shrink-0 w-32 bg-[#b1916a] rounded-lg overflow-hidden text-center text-xs text-black font-normal">
        <img
          src={product.img}
          alt={product.alt}
          className={`w-full h-24 object-cover ${
            product.id === 3 ? 'object-contain bg-white p-2' : ''
          }`}
          width={128}
          height={128}
        />
        <div className="p-2">
          <p>{product.name}</p>
          <p className="text-[10px]">
            Vendu par : <strong>{product.seller}</strong>
          </p>
          <p className="mt-1 font-semibold">{product.price}</p>
          <button
            aria-label="Ajouter au panier"
            className="mt-1 text-[#a6b57a] hover:text-[#8a9a4e]"
          >
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    );
  }

export default RecommendedProduct;
