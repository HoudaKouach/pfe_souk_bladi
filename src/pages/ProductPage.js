
import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FavoritesContext } from '../Components/FavoritesContext';
import { CartContext } from '../Panier/CartContext'; // import du contexte panier

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [loading, setLoading] = useState(true);
  const { ajouterAuPanier } = useContext(CartContext); // on récupère la fonction d'ajout au panier
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedVolume, setSelectedVolume] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost/back-end_PFE/get_product.php?id=${id}`);
        setProduct(res.data);
        setMainImage(res.data.image_principale);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération du produit :', error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleImageClick = (clickedImage) => {
    if (clickedImage === mainImage) return;
    const updatedThumbnails = product.thumbnails.map((thumb) =>
      thumb === clickedImage ? mainImage : thumb
    );
    setMainImage(clickedImage);
    setProduct(prev => ({
      ...prev,
      thumbnails: updatedThumbnails
    }));
  };

  const handleAddToCart = () => {
    if (
      (product.colors?.length > 0 && !selectedColor) ||
      (product.sizes?.length > 0 && !selectedSize) ||
      (product.volumes?.length > 0 && !selectedVolume)
    ) {
      alert("Veuillez sélectionner toutes les options disponibles avant d'ajouter au panier.");
      return;
    }

    // Création de l'objet produit avec options et quantité
    const produitPanier = {
      id_produit: product.id,  // attention à l'attribut id selon ta donnée
      nom: product.nom,
      prix: product.prix,
      couleur: selectedColor,
      vendeur : product.vendeur,
      taille: selectedSize,
      volume: selectedVolume,
      quantity: quantity,
      image_principale: mainImage,
    };

    ajouterAuPanier(produitPanier);
    setShowModal(false);
  };

  const handleFavoriteToggle = (e, productId) => {
    e.preventDefault();
    toggleFavorite(productId);
  };
  if (loading) return <div className="text-center mt-10">Chargement...</div>;
  if (!product) return <div className="text-center mt-10">Produit introuvable.</div>;

  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              {mainImage && (
                <img
                  src={`http://localhost/back-end_PFE/uploads${mainImage}`}
                  alt="Image principale"
                  className="w-full max-h-[500px] object-contain rounded-lg shadow-md mb-4 cursor-pointer"
                  onClick={() => handleImageClick(mainImage)}
                />
              )}
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                {product.thumbnails && product.thumbnails.map((src, idx) => (
                  <img
                    key={idx}
                    src={`http://localhost/back-end_PFE/uploads${src}`}
                    alt={`Miniature ${idx + 1}`}
                    className={`w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-md cursor-pointer transition duration-300 ${
                      mainImage === src ? 'opacity-100 border-2 border-[#DEAC80]' : 'opacity-60 hover:opacity-100'
                    }`}
                    onClick={() => handleImageClick(src)}
                  />
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl text-black font-bold mb-2">{product.nom}</h2>
              <p className="text-gray-600 mb-4">SKU: {product.sku || 'N/A'}</p>
              <p className="text-gray-600 mb-4">Vendeur: {product.vendeur }</p>

              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">{parseFloat(product.prix).toFixed(2)} DH</span>
                {product.oldPrice && (
                  <span className="text-gray-500 line-through">{parseFloat(product.oldPrice).toFixed(2)} DH</span>
                )}
              </div>
              <p className="text-gray-700 mb-6">{product.description}</p>

              {/* Couleurs */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Couleur :</h3>
                  <div className="flex space-x-2">
                    {product.colors.map((color, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full border-2 cursor-pointer transition duration-200 ${selectedColor === color ? 'border-[#DEAC80] scale-110' : 'border-gray-300'}`}
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Tailles */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Taille :</h3>
                  <div className="flex space-x-2">
                    {product.sizes.map((size, idx) => (
                      <span
                        key={idx}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1 border rounded-md cursor-pointer hover:bg-gray-100 ${selectedSize === size ? 'bg-[#DEAC80] text-white' : ''}`}
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Volumes */}
              {product.volumes && product.volumes.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Volume :</h3>
                  <div className="flex space-x-2">
                    {product.volumes.map((vol, idx) => (
                      <span
                        key={idx}
                        onClick={() => setSelectedVolume(vol)}
                        className={`px-3 py-1 border rounded-md cursor-pointer hover:bg-gray-100 ${selectedVolume === vol ? 'bg-[#DEAC80] text-white' : ''}`}
                      >
                        {vol}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantité */}
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantité :
                </label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 px-3 py-1 text-center border rounded-md bg-white border-gray-300"
                />
              </div>

              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-[#DEAC80] flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-[#B99470] transition-colors duration-300"
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal d'options */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-[90%] max-w-md relative">
            <h2 className="text-xl font-bold mb-4">Choisissez vos options</h2>

            {/* Couleurs */}
            {product.colors?.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-1">Couleur :</h3>
                <div className="flex space-x-2">
                  {product.colors.map((color, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 cursor-pointer transition duration-200 ${selectedColor === color ? 'border-[#DEAC80] scale-110' : 'border-gray-300'}`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Tailles */}
            {product.sizes?.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-1">Taille :</h3>
                <div className="flex space-x-2">
                  {product.sizes.map((size, idx) => (
                    <span
                      key={idx}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 border rounded-md cursor-pointer hover:bg-gray-100 ${selectedSize === size ? 'bg-[#DEAC80] text-white' : ''}`}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Volumes */}
            {product.volumes?.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-1">Volume :</h3>
                <div className="flex space-x-2">
                  {product.volumes.map((vol, idx) => (
                    <span
                      key={idx}
                      onClick={() => setSelectedVolume(vol)}
                      className={`px-3 py-1 border rounded-md cursor-pointer hover:bg-gray-100 ${selectedVolume === vol ? 'bg-[#DEAC80] text-white' : ''}`}
                    >
                      {vol}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantité */}
            <div className="mb-6">
              <label htmlFor="modal-quantity" className="block text-sm font-medium text-gray-700 mb-1">
                Quantité :
              </label>
              <input
                type="number"
                id="modal-quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 px-3 py-1 text-center border rounded-md bg-white border-gray-300"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Annuler
              </button>
              <button
                onClick={handleAddToCart}
                className="bg-[#DEAC80] text-white px-4 py-2 rounded-md hover:bg-[#B99470]"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Avis clients */}
      <div className="container mx-auto px-4 mt-10">
        <h3 className="text-2xl font-semibold mb-4">Avis des clients</h3>
        {product.reviews && product.reviews.length > 0 ? (
          <div className="space-y-4">
            {product.reviews.map((review, idx) => (
              <div key={idx} className="border p-4 rounded-md shadow-sm bg-gray-50">
                <div className="mb-1">
                  <span className="text-lg text-gray-800 font-semibold">
                    {review.client_nom || 'Client anonyme'}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-yellow-500 text-lg font-bold">
                    {'★'.repeat(review.note)}
                    {'☆'.repeat(5 - review.note)}
                  </span>
                </div>
                <p className="text-gray-700 text-base">{review.avis || 'Aucun commentaire rédigé.'}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Aucun avis pour ce produit.</p>
        )}
      </div>

      {/* Produits similaires */}
      <div className="container mx-auto px-4 mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-center">Produits similaires</h3>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-4">
          {product.similar_products && product.similar_products.map((item) => (
            <div div key={item.id_produit} className="relative">
              <Link to={`/PlusRecents/product/${item.id_produit}`}>
                <div className="min-h-[240px] mb-[20px] flex flex-col justify-between bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={`http://localhost/back-end_PFE/uploads/${item.image_principale}`}
                      alt={item.nom}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-2 flex flex-col h-40">
                    <p className="font-semibold text-black text-sm mb-1 line-clamp-2">{item.nom}</p>
                    <p className="text-xs text-gray-800 truncate">Vendu par: {item.vendeur}</p>

                    {/* Conteneur avec icône de favoris et prix */}
                    <div className="flex justify-between items-center mt-auto mb-2">
                      <p className="text-md font-bold text-[#B5C18E]">{item.prix} DH</p>
                      <button
                        className="text-[#B5C18E] hover:text-black text-xl"
                        onClick={(e) => handleFavoriteToggle(e, item.id_produit)}
                      >
                        {favorites.includes(item.id_produit) ? <AiFillHeart /> : <AiOutlineHeart />}
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
      <Footer />
    </>
  );
};

export default ProductDetails;

