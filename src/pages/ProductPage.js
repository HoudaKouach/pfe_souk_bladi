// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Footer from '../Components/Footer';
// // import PlusVendus from './Components/plus_vendus';
// import { FiShoppingCart } from 'react-icons/fi';
// import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
// import { FavoritesContext } from '../Components/FavoritesContext';
// import { Link } from 'react-router-dom';
// import { useContext } from 'react';


// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [mainImage, setMainImage] = useState('');
//   const [loading, setLoading] = useState(true);
//   const { favorites, toggleFavorite } = useContext(FavoritesContext);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost/back-end_PFE/get_product.php?id=${id}`);
//         setProduct(res.data);
//         setMainImage(res.data.image_principale);
//       } catch (error) {
//         console.error('Erreur lors de la récupération du produit :', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);
//   const handleFavoriteToggle = (e, productId) => {
//     e.preventDefault();
//     toggleFavorite(productId);
//   };

//   if (loading) return <div className="text-center mt-10">Chargement...</div>;
//   if (!product) return <div className="text-center mt-10">Produit introuvable.</div>;

//   return (
//     <>
//       <div className="bg-white">
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex flex-wrap -mx-4">

//             {/* Images */}
//             <div className="w-full md:w-1/2 px-4 mb-8">
//               <img 
//                 src={`http://localhost/back-end_PFE/uploads/${mainImage}`}
//                 alt="Produit"
//                 className="w-full max-h-[500px] object-contain rounded-lg shadow-md mb-4"
//               />
//             <div className="flex gap-4 py-4 justify-center overflow-x-auto">
//               {product.thumbnails.map((src, idx) => {
//                 const imageFile = src.split('/').pop(); // nom du fichier uniquement
//                 return (
//                   <img
//                     key={idx}
//                     src={`http://localhost/back-end_PFE/${src}`}
//                     alt={`Miniature ${idx + 1}`}
//                     className={`
//                       w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-md cursor-pointer transition duration-300
//                       ${mainImage === imageFile ? 'opacity-100 border-2 border-[#DEAC80]' : 'opacity-60 hover:opacity-100'}
//                     `}
//                     onClick={() => setMainImage(imageFile)}
//                   />
//                 );
//               })}
//             </div>
//             </div>

//             {/* Détails produit */}
//             <div className="w-full md:w-1/2 px-4">
//               <h2 className="text-3xl text-black font-bold mb-2">{product.nom}</h2>
//               <p className="text-gray-600 mb-4">SKU: {product.sku || 'N/A'}</p>
//               <div className="mb-4">
//                 <span className="text-2xl font-bold mr-2">{parseFloat(product.prix).toFixed(2)} DH</span>
//                 {product.oldPrice && (
//                   <span className="text-gray-500 line-through">{parseFloat(product.oldPrice).toFixed(2)} DH</span>
//                 )}
//               </div>

//               <p className="text-gray-700 mb-6">{product.description}</p>

//               {/* Couleurs */}
//               {product.colors && product.colors.length > 0 && (
//                 <div className="mb-6">
//                   <h3 className="text-lg font-semibold mb-2">Couleur :</h3>
//                   <div className="flex space-x-2">
//                     {product.colors.map((color, idx) => (
//                       <div
//                         key={idx}
//                         className="w-8 h-8 rounded-full border border-gray-300"
//                         style={{ backgroundColor: color }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Tailles */}
//               {product.sizes && product.sizes.length > 0 && (
//                 <div className="mb-6">
//                   <h3 className="text-lg font-semibold mb-2">Taille :</h3>
//                   <div className="flex space-x-2">
//                     {product.sizes.map((size, idx) => (
//                       <span
//                         key={idx}
//                         className="px-3 py-1 border rounded-md bg-[#DEAC80] text-gray-700 cursor-pointer hover:bg-gray-100"
//                       >
//                         {size}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Volumes */}
//               {product.volumes && product.volumes.length > 0 && (
//                 <div className="mb-6">
//                   <h3 className="text-lg font-semibold mb-2">Volume :</h3>
//                   <div className="flex space-x-2">
//                     {product.volumes.map((volume, idx) => (
//                       <span
//                         key={idx}
//                         className="px-3 py-1 border rounded-md bg-[#DEAC80] text-gray-700 cursor-pointer hover:bg-gray-100"
//                       >
//                         {volume}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Quantité */}
//               <div className="mb-6">
//                 <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
//                   Quantité :
//                 </label>
//                 <input
//                   type="number"
//                   id="quantity"
//                   name="quantity"
//                   min="1"
//                   defaultValue="1"
//                   className="w-16 text-center rounded-md bg-[#DEAC80] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 />
//               </div>

//               {/* Ajouter au panier */}
//               <div className="flex space-x-4 mb-6">
//                 <button className="bg-[#DEAC80] flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//                   Ajouter au panier
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Avis clients */}
//       <div className="container mx-auto px-4 mt-10">
//         <h3 className="text-2xl font-semibold mb-4">Avis des clients</h3>
//         {product.reviews && product.reviews.length > 0 ? (
//           <div className="space-y-4">
//             {product.reviews.map((review, idx) => (
//               <div key={idx} className="border p-4 rounded-md shadow-sm bg-gray-50">
//                 <div className="flex items-center mb-2">
//                   <span className="text-yellow-500 font-bold mr-2">
//                     {'★'.repeat(review.note)}
//                     {'☆'.repeat(5 - review.note)}
//                   </span>
//                 </div>
//                 <p className="text-gray-700">{review.avis || 'Aucun commentaire rédigé.'}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500">Aucun avis pour ce produit.</p>
//         )}
//       </div>
//       {/* Produits similaires */}
//       <div className="container mx-auto px-4 mt-16">
//         <h3 className="text-2xl font-semibold mb-6 text-center">Produits similaires</h3>
//         <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-4">
//           {product.similar_products && product.similar_products.map((item) => (
//             <div div key={item.id_produit} className="relative">
//               <Link to={`/PlusRecents/product/${product.id_produit}`}>
//                 <div className="min-h-[240px] mb-[20px] flex flex-col justify-between bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
//                   <div className="h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
//                     <img
//                       src={`http://localhost/back-end_PFE/uploads/${product.image_principale}`}
//                       alt={product.nom}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   <div className="p-2 flex flex-col h-40">
//                     <p className="font-semibold text-black text-sm mb-1 line-clamp-2">{product.nom}</p>
//                     <p className="text-xs text-gray-800 truncate">Vendu par: {product.vendeur}</p>

//                     {/* Conteneur avec icône de favoris et prix */}
//                     <div className="flex justify-between items-center mt-auto mb-2">
//                       <p className="text-md font-bold text-[#B5C18E]">{product.prix} DH</p>
//                       <button
//                         className="text-[#B5C18E] hover:text-black text-xl"
//                         onClick={(e) => handleFavoriteToggle(e, product.id_produit)}
//                       >
//                         {favorites.includes(product.id_produit) ? <AiFillHeart /> : <AiOutlineHeart />}
//                       </button>
//                     </div>

//                     <div className="w-full mt-4">
//                       <button className="w-full py-1 text-sm rounded-md flex items-center justify-center space-x-1 bg-[#B5C18E] text-white hover:bg-[#9AA86E] transition-all duration-300">
//                         <span>Ajouter</span>
//                         <FiShoppingCart />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </>  
//   );
// };

// export default ProductDetails;


import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FavoritesContext } from '../Components/FavoritesContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [loading, setLoading] = useState(true);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost/back-end_PFE/get_product.php?id=${id}`);
        setProduct(res.data);
        setMainImage(res.data.image_principale);
      } catch (error) {
        console.error('Erreur lors de la récupération du produit :', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

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
            {/* Image principale */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img 
                src={`http://localhost/back-end_PFE/uploads/${mainImage}`}
                alt="Produit"
                className="w-full max-h-[500px] object-contain rounded-lg shadow-md mb-4"
              />
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                {product.thumbnails && product.thumbnails.map((src, idx) => {
                  const imageFile = src.split('/').pop();
                  return (
                    <img
                      key={idx}
                      src={`http://localhost/back-end_PFE/${src}`}
                      alt={`Miniature ${idx + 1}`}
                      className={`w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-md cursor-pointer transition duration-300 ${
                        mainImage === imageFile ? 'opacity-100 border-2 border-[#DEAC80]' : 'opacity-60 hover:opacity-100'
                      }`}
                      onClick={() => setMainImage(imageFile)}
                    />
                  );
                })}
              </div>
            </div>

            {/* Détails */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl text-black font-bold mb-2">{product.nom}</h2>
              <p className="text-gray-600 mb-4">SKU: {product.sku || 'N/A'}</p>
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
                      <div key={idx} className="w-8 h-8 rounded-full border border-gray-300" style={{ backgroundColor: color }} />
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
                      <span key={idx} className="px-3 py-1 border rounded-md bg-[#DEAC80] text-gray-700 cursor-pointer hover:bg-gray-100">
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
                    {product.volumes.map((volume, idx) => (
                      <span key={idx} className="px-3 py-1 border rounded-md bg-[#DEAC80] text-gray-700 cursor-pointer hover:bg-gray-100">
                        {volume}
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
                  name="quantity"
                  min="1"
                  defaultValue="1"
                  className="w-16 text-center rounded-md bg-[#DEAC80] border-gray-300 shadow-sm"
                />
              </div>

              {/* Ajouter au panier */}
              <div className="flex space-x-4 mb-6">
                <button className="bg-[#DEAC80] flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Avis clients
      <div className="container mx-auto px-4 mt-10">
        <h3 className="text-2xl font-semibold mb-4">Avis des clients</h3>
        {product.reviews && product.reviews.length > 0 ? (
          <div className="space-y-4">
            {product.reviews.map((review, idx) => (
              <div key={idx} className="border p-4 rounded-md shadow-sm bg-gray-50">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 font-bold mr-2">
                    {'★'.repeat(review.note)}
                    {'☆'.repeat(5 - review.note)}
                  </span>
                </div>
                <p className="text-gray-700">{review.avis || 'Aucun commentaire rédigé.'}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Aucun avis pour ce produit.</p>
        )}
      </div> */}
      {/* Avis clients */}
      <div className="container mx-auto px-4 mt-10">
        <h3 className="text-2xl font-semibold mb-4">Avis des clients</h3>
        {product.reviews && product.reviews.length > 0 ? (
          <div className="space-y-4">
            {product.reviews.map((review, idx) => (
              <div key={idx} className="border p-4 rounded-md shadow-sm bg-gray-50">
                {/* Nom du client */}
                <div className="mb-1">
                  <span className="text-lg text-gray-800 font-semibold">
                    {review.client_nom || 'Client anonyme'}
                  </span>
                </div>

                {/* Étoiles */}
                <div className="mb-2">
                  <span className="text-yellow-500 text-lg font-bold">
                    {'★'.repeat(review.note)}
                    {'☆'.repeat(5 - review.note)}
                  </span>
                </div>

                {/* Commentaire */}
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          {product.similar_products && product.similar_products.map((item) => (
            <div key={item.id_produit} className="relative">
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
