
// import React, { useState } from 'react';
// import { FiArrowRight, FiShoppingCart } from 'react-icons/fi';

// const BestSellers = () => {
//   const [hoveredProduct, setHoveredProduct] = useState(null);
  
//   const products = [
//         {
//       id: 1,
//       name: "Dattes Mejhoul – 100% naturelles",
//       seller: "Coopérative Rissani",
//       price: "90.00DH",
//       image: "/images/datte-majhoul-01-jpg.webp"
//     },
//     {
//       id: 2,
//       name: "Accessories",
//       seller: "Coopérative Taroudant",
//       price: "120.00DH",
//       image: "/images/WhatsApp Image 2025-04-26 à 03.39.07_ee7be49b.jpg"
//     },
//     {
//       id: 3,
//       name: "Miel de Thym – 500g",
//       seller: "Coopérative Amalchil",
//       price: "80.00DH",
//       image: "/images/content_lg.jpg"
//     },
//     {
//       id: 4,
//       name: "Safran – 1g",
//       seller: "Coopérative Taliouine",
//       price: "50.00DH",
//       image: "/images/arrangement-nature-morte-au-safran-gros-plan_23-2149186973.avif"
//     },
//     {
//       id: 5,
//       name: "tenue traditionnelle",
//       seller: "Coopérative Errachidai",
//       price: "110.00DH",
//       image: "/images/WhatsApp Image 2025-04-26 à 03.38.53_9077c70c.jpg"
//     },
//     {
//       id: 6,
//       name: "Savon noir naturel – 200g",
//       seller: "Coopérative Tinghir",
//       price: "30.00DH",
//       image: "/images/e3bbd0e6-53f8-4a4f-bf71-8200fc314f2c_Savon+noir+bio.avif"
//     }

//   ];

//   return (
//     <div className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4 ">
//         {/* العنوان في المركز */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 hover:text-[#B5C18E] transition-colors duration-300 cursor-pointer">
//             Meilleures ventes
//           </h2>
//         </div>

//         {/* قائمة المنتجات */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
//         {products.map((product) => (
//             <div 
//               key={product.id}
//               className={`relative bg-white rounded-lg shadow overflow-hidden transition-all duration-300 ${
//                 hoveredProduct && hoveredProduct !== product.id 
//                   ? 'opacity-40 scale-95' 
//                   : 'opacity-100 scale-100'
//               }`}
//               onMouseEnter={() => setHoveredProduct(product.id)}
//               onMouseLeave={() => setHoveredProduct(null)}
//             >
//               {/* تأثير تألق عند Hover */}
//               {hoveredProduct === product.id && (
//                 <div className="absolute inset-0 border-2 border-green-400 rounded-lg pointer-events-none animate-pulse"></div>
//               )}
              
//               {/* صورة المنتج */}
//               <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
//                 <img 
//                   src={product.image} 
//                   alt={product.name}
//                   className={`w-full h-full object-cover transition-transform duration-500 ${
//                     hoveredProduct === product.id ? 'scale-110' : 'scale-100'
//                   }`}
//                 />
//               </div>
              
//               {/* معلومات المنتج */}
//               <div className="p-4">
//                 <h3 className="font-semibold text-lg">{product.name}</h3>
//                 <p className="text-sm text-gray-600 mt-1">Vendu par : {product.seller}</p>
//                 <p className="text-lg font-bold mt-2">{product.price}</p>
                
//                 {/* زر الإضافة إلى السلة مع تأثيرات متقدمة */}
//                 <button 
//                   className={`mt-4 w-full py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center space-x-2 ${
//                     hoveredProduct === product.id
//                       ? 'bg-green-700 text-white shadow-lg'
//                       : 'bg-green-600 text-white hover:bg-green-700 hover:shadow-md'
//                   }`}
//                 >
//                   <span>Ajouter au panier</span>
//                   <FiShoppingCart className={`transition-transform duration-300 ${
//                     hoveredProduct === product.id ? 'scale-125' : 'scale-100'
//                   }`} />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* زر Voir plus في المركز */}
//         <div className="text-center mt-8">
//           <a 
//             href="#" 
//             className="text-green-600 hover:text-green-800 inline-flex items-center transition-colors"
//           >
//             Voir plus <FiArrowRight className="ml-1" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestSellers;










// import React, { useState } from 'react';
// import { FiArrowRight, FiShoppingCart } from 'react-icons/fi';

// const BestSellers = () => {
//   const [hoveredProduct, setHoveredProduct] = useState(null);
  
//   const products = [
//     {
//       id: 1,
//       name: "Dattes Mejhoul – 100% naturelles",
//       seller: "Coopérative Rissani",
//       price: "90.00DH",
//       image: "/images/datte-majhoul-01-jpg.webp"
//     },
//     {
//       id: 2,
//       name: "Accessoires artisanaux",
//       seller: "Coopérative Taroudant",
//       price: "120.00DH",
//       image: "/images/WhatsApp Image 2025-04-26 à 03.39.07_ee7be49b.jpg"
//     },
//     {
//       id: 3,
//       name: "Miel de Thym – 500g",
//       seller: "Coopérative Amalchil",
//       price: "80.00DH",
//       image: "/images/content_lg.jpg"
//     },
//     {
//       id: 4,
//       name: "Safran – 1g",
//       seller: "Coopérative Taliouine",
//       price: "50.00DH",
//       image: "/images/arrangement-nature-morte-au-safran-gros-plan_23-2149186973.avif"
//     },
//     {
//       id: 5,
//       name: "Tenue traditionnelle",
//       seller: "Coopérative Errachidia",
//       price: "110.00DH",
//       image: "/images/WhatsApp Image 2025-04-26 à 03.38.53_9077c70c.jpg"
//     },
//     {
//       id: 6,
//       name: "Savon noir naturel – 200g",
//       seller: "Coopérative Tinghir",
//       price: "30.00DH",
//       image: "/images/e3bbd0e6-53f8-4a4f-bf71-8200fc314f2c_Savon+noir+bio.avif"
//     }
//   ];

//   return (
//     <div className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* العنوان في المركز */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block">
//             Meilleures ventes
//             <span className="absolute bottom-0 left-0 right-0 mx-auto w-1/4 h-1 bg-[#B5C18E] rounded-full"></span>
//           </h2>
//         </div>

//         {/* قائمة المنتجات */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
//           {products.map((product) => (
//             <div 
//               key={product.id}
//               className={`relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
//                 hoveredProduct && hoveredProduct !== product.id 
//                   ? 'opacity-60 scale-[0.98]' 
//                   : 'opacity-100 scale-100'
//               }`}
//               onMouseEnter={() => setHoveredProduct(product.id)}
//               onMouseLeave={() => setHoveredProduct(null)}
//             >
//               {/* تأثير تألق عند Hover */}
//               {hoveredProduct === product.id && (
//                 <div className="absolute inset-0 border-2 border-[#B5C18E] rounded-lg pointer-events-none animate-pulse"></div>
//               )}
              
//               {/* صورة المنتج */}
//               <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
//                 <img 
//                   src={product.image} 
//                   alt={product.name}
//                   className={`w-full h-full object-cover transition-transform duration-500 ${
//                     hoveredProduct === product.id ? 'scale-105' : 'scale-100'
//                   }`}
//                 />
//               </div>
              
//               {/* معلومات المنتج */}
//               <div className="p-4 flex flex-col h-48">
//                 <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
//                 <p className="text-sm text-gray-600 mb-2">Vendu par: {product.seller}</p>
//                 <p className="text-lg font-bold text-[#B5C18E] mt-auto mb-3">{product.price}</p>
                
//                 {/* زر الإضافة إلى السلة */}
//                 <button 
//                   className={`w-full py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center space-x-2 ${
//                     hoveredProduct === product.id
//                       ? 'bg-[#B5C18E] text-white shadow-md'
//                       : 'bg-gray-800 text-white hover:bg-[#B5C18E]'
//                   }`}
//                 >
//                   <span className="text-sm">Ajouter</span>
//                   <FiShoppingCart className={`transition-transform duration-300 ${
//                     hoveredProduct === product.id ? 'scale-110' : 'scale-100'
//                   }`} />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* زر Voir plus في المركز */}
//         <div className="text-center mt-10">
//           <a 
//             href="#" 
//             className="inline-flex items-center text-gray-700 hover:text-[#B5C18E] transition-colors border border-[#B5C18E] hover:bg-[#B5C18E] hover:text-white py-2 px-6 rounded-full"
//           >
//             <span className="mr-2">Voir plus</span>
//             <FiArrowRight />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestSellers;




























import React, { useState } from 'react';
import { FiArrowRight, FiShoppingCart } from 'react-icons/fi';

const BestSellers = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  
  const products = [
    {
      id: 1,
      name: "Dattes Mejhoul – 100% naturelles",
      seller: "Coopérative Rissani",
      price: "90.00DH",
      image: "/images/datte-majhoul-01-jpg.webp"
    },
    {
      id: 2,
      name: "Accessoires artisanaux",
      seller: "Coopérative Taroudant",
      price: "120.00DH",
      image: "/images/WhatsApp Image 2025-04-26 à 03.39.07_ee7be49b.jpg"
    },
    {
      id: 3,
      name: "Miel de Thym – 500g",
      seller: "Coopérative Amalchil",
      price: "80.00DH",
      image: "/images/content_lg.jpg"
    },
    {
      id: 4,
      name: "Safran – 1g",
      seller: "Coopérative Taliouine",
      price: "50.00DH",
      image: "/images/arrangement-nature-morte-au-safran-gros-plan_23-2149186973.avif"
    },
    {
      id: 5,
      name: "Tenue traditionnelle",
      seller: "Coopérative Errachidia",
      price: "110.00DH",
      image: "/images/WhatsApp Image 2025-04-26 à 03.38.53_9077c70c.jpg"
    },
    {
      id: 6,
      name: "Savon noir naturel – 200g",
      seller: "Coopérative Tinghir",
      price: "30.00DH",
      image: "/images/e3bbd0e6-53f8-4a4f-bf71-8200fc314f2c_Savon+noir+bio.avif"
    },
    // المنتجين الجديدين
    {
      id: 7,
      name: "Rosa Damascena",
      seller: "Coopérative Kelaat M'Gouna",
      price: "150.00DH",
      image: "/images/view-rose-buds_23-2150718813.jpg"
    },
    {
      id: 8,
      name: "Poterie berbère",
      seller: "Coopérative Tamagrout",
      price: "75.00DH",
      image: "/images/20230801020859.jpg"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* العنوان في المركز */}
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 hover:text-[#B5C18E] transition-colors duration-300 cursor-pointer">
            Meilleures ventes 
        </h2>
        </div>

        {/* Liste de produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
            <div 
                key={product.id}
                className={`relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
                hoveredProduct && hoveredProduct !== product.id 
                    ? 'opacity-60 scale-[0.98]' 
                    : 'opacity-100 scale-100'
                }`}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Effet scintillant au survol */}
                {hoveredProduct === product.id && (
                <div className="absolute inset-0 border-2 border-[#B5C18E] rounded-lg pointer-events-none animate-pulse"></div>
                )}

                {/* Image du produit */}
                <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                    src={product.image} 
                    alt={product.name}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredProduct === product.id ? 'scale-105' : 'scale-100'
                    }`}
                />
        </div>

              {/* Informations sur le produit */}
            <div className="p-4 flex flex-col h-48">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">Vendu par: {product.seller}</p>
                <p className="text-lg font-bold text-[#B5C18E] mt-auto mb-3">{product.price}</p>
                
                {/* Bouton Ajouter au panier */}
                <button 
                    className={`w-full py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center space-x-2 ${
                    hoveredProduct === product.id
                        ? 'bg-[#B5C18E] text-white shadow-md'
                        : 'bg-gray-800 text-white hover:bg-[#B5C18E]'
                    }`}
                >
                    <span className="text-sm">Ajouter</span>
                    <FiShoppingCart className={`transition-transform duration-300 ${
                    hoveredProduct === product.id ? 'scale-110' : 'scale-100'
                    }`} />
                </button>
            </div>
        </div>
        ))}
        </div>

        {/* Voir le bouton plus au centre */}
        <div className="text-center mt-10">
            <a 
            href="#" 
            className="inline-flex items-center text-gray-700 hover:text-[#B5C18E] transition-colors border border-[#B5C18E] hover:bg-[#B5C18E] hover:text-white py-2 px-6 rounded-full"
            >
            <span className="mr-2">Voir plus</span>
            <FiArrowRight />
            </a>
        </div>
    </div>
    </div>
);
};

export default BestSellers;