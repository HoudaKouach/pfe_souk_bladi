// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [mainImage, setMainImage] = useState('');
//   const [loading, setLoading] = useState(true);

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

//   if (loading) return <div className="text-center mt-10">Chargement...</div>;
//   if (!product) return <div className="text-center mt-10">Produit introuvable.</div>;

//   return (
//     <div className="bg-white">
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-wrap -mx-4">
//           {/* Images */}
//           <div className="w-full md:w-1/2 px-4 mb-8">
//             <img 
//             src={`http://localhost/back-end_PFE/uploads/${mainImage}`}
//             alt="Produit" className="w-full h-auto rounded-lg shadow-md mb-4" />
//             <div className="flex gap-4 py-4 justify-center overflow-x-auto">
//               {product.thumbnails.map((src, idx) => (
//                 <img
//                   key={idx}
//                   src={`http://localhost/back-end_PFE/${src}`}
//                   alt={`Miniature ${idx + 1}`}
//                   className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
//                   onClick={() => setMainImage(src)}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Détails produit */}
//           <div className="w-full md:w-1/2 px-4">
//             <h2 className="text-3xl text-black font-bold mb-2">{product.nom}</h2>
//             <p className="text-gray-600 mb-4">SKU: {product.sku || 'N/A'}</p>
//             <div className="mb-4">
//               <span className="text-2xl font-bold mr-2">{parseFloat(product.prix).toFixed(2)} DH</span>
//               {product.oldPrice && (
//                 <span className="text-gray-500 line-through">{parseFloat(product.oldPrice).toFixed(2)} DH</span>
//               )}
//             </div>

//             <p className="text-gray-700 mb-6">{product.description}</p>

//             {/* Couleurs */}
//             {product.colors && product.colors.length > 0 && (
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold mb-2">Couleur :</h3>
//                 <div className="flex space-x-2">
//                   {product.colors.map((color, idx) => (
//                     <div
//                       key={idx}
//                       className="w-8 h-8 rounded-full border border-gray-300"
//                       style={{ backgroundColor: color }}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Tailles */}
//             {product.sizes && product.sizes.length > 0 && (
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold mb-2">Taille :</h3>
//                 <div className="flex space-x-2">
//                   {product.sizes.map((size, idx) => (
//                     <span
//                       key={idx}
//                       className="px-3 py-1 border rounded-md bg-[#DEAC80] text-gray-700 cursor-pointer hover:bg-gray-100"
//                     >
//                       {size}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Volumes */}
//             {product.volumes && product.volumes.length > 0 && (
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold mb-2">Volume :</h3>
//                 <div className="flex space-x-2">
//                   {product.volumes.map((volume, idx) => (
//                     <span
//                       key={idx}
//                       className="px-3 py-1 border rounded-md bg-[#DEAC80] text-gray-700 cursor-pointer hover:bg-gray-100"
//                     >
//                       {volume}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Quantité */}
//             <div className="mb-6">
//               <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
//                 Quantité :
//               </label>
//               <input
//                 type="number"
//                 id="quantity"
//                 name="quantity"
//                 min="1"
//                 defaultValue="1"
//                 className="w-16 text-center rounded-md bg-[#DEAC80] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>

//             {/* Ajouter au panier */}
//             <div className="flex space-x-4 mb-6">
//               <button className="bg-[#DEAC80] flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//                 Ajouter au panier
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer';
// import PlusVendus from './Components/plus_vendus';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div className="text-center mt-10">Chargement...</div>;
  if (!product) return <div className="text-center mt-10">Produit introuvable.</div>;

  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">

            {/* Images */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img 
                src={`http://localhost/back-end_PFE/uploads/${mainImage}`}
                alt="Produit"
                className="w-full h-auto rounded-lg shadow-md mb-4"
              />
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                {product.thumbnails.map((src, idx) => {
                  const imageFile = src.split('/').pop(); // nom du fichier uniquement
                  return (
                    <img
                      key={idx}
                      src={`http://localhost/back-end_PFE/${src}`}
                      alt={`Miniature ${idx + 1}`}
                      className={`size-16 sm:size-20 object-cover rounded-md cursor-pointer transition duration-300
                        ${mainImage === imageFile ? 'opacity-100 border-2 border-[#DEAC80]' : 'opacity-60 hover:opacity-100'}
                      `}
                      onClick={() => setMainImage(imageFile)}
                    />
                  );
                })}
              </div>
            </div>

            {/* Détails produit */}
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
                      <div
                        key={idx}
                        className="w-8 h-8 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
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
                        className="px-3 py-1 border rounded-md bg-[#DEAC80] text-gray-700 cursor-pointer hover:bg-gray-100"
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
                    {product.volumes.map((volume, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 border rounded-md bg-[#DEAC80] text-gray-700 cursor-pointer hover:bg-gray-100"
                      >
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
                  className="w-16 text-center rounded-md bg-[#DEAC80] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              {/* Ajouter au panier */}
              <div className="flex space-x-4 mb-6">
                <button className="bg-[#DEAC80] flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <PlusVendus /> */}
      <Footer />
    </>  
  );
};

export default ProductDetails;
