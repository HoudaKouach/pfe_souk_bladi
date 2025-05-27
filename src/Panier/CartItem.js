import React , {useState} from 'react';
import AddToCartModal from '../Panier/AddToCartModal'; // Utilise bien ce nom


function CartItem({ product, onRemove, onQuantityChange }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  

  const incrementQuantity = () => {
    onQuantityChange(product.quantity + 1);
  };

  const decrementQuantity = () => {
    if (product.quantity > 1) {
      onQuantityChange(product.quantity - 1);
    }
  };

  const handleRemove = () => {
    onRemove();
  };


  // Protection des valeurs
  const idStr = product.id != null ? product.id.toString() : 'unknown-id';
  const couleurStr = product.couleur != null ? product.couleur.toString() : '#000000'; // couleur par défaut noir si absent
  const tailleStr = product.taille != null ? product.taille.toString() : 'N/A';
  const priceStr = product.price != null ? product.price.toString() : '0';
  const quantity = product.quantity != null ? product.quantity : 1;

  return (
    <div className="flex items-center border border-[#DEAC80] rounded mb-1 p-2 space-x-4">
      <img
        src={`http://localhost/back-end_PFE/uploads${product.img}`}
        alt={product.alt || product.name}
        className="w-30 h-30 object-cover rounded"
        width={100}
        height={100}
      />
      <div className="flex-1">
        <p className="text-xl font-bold pb-[10px] ">{product.name}</p>
        {/* Vendeur en lien */}
        <p className="text-l  pb-[10px]">
          Vendu par :
          <a
            href={`#vendeur-${product.seller}`} // tu peux modifier le href vers la vraie page vendeur
            className="text-[#DEAC80] hover:underline"
          >
            {product.seller}
          </a>
        </p>
         {/* lier avec modal */}

        <div  
            onClick={(e) => {e.preventDefault();
            setSelectedProduct(product);
            }} 
            className="text-xs text-gray-600 mt-1 flex items-center space-x-4"
        >
          {/* Couleur en input type color, readOnly */}
            <label className="flex items-center space-x-2">
              <span><strong>Couleur :</strong></span>
              <div
                className="w-6 h-6 rounded-full border border-gray-300"
                style={{ backgroundColor: couleurStr }}
              ></div>
            </label>

          {/* Taille en lien */}
          <p>
            <strong>Taille :</strong>{' '}
            <a
              href={`#taille-${tailleStr}`}
              className="text-[#DEAC80] hover:underline"
            >
              {tailleStr}
            </a>
          </p>
        </div>
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
          value={quantity.toString().padStart(2, '0')}
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
        {priceStr} Dh
      </div>

      <button
        onClick={handleRemove}
        title="Supprimer"
        className="text-[#DEAC80] hover:text-black"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
             fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
              {selectedProduct && (
          <AddToCartModal
            produit={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
    </div>
  );
}

export default CartItem;
