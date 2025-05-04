// // import React from "react";
// // import React, { useState } from "react";
// import CategoryCard from './CategoryCard';
// // import {swiper} from 'swiper/react' ;
// import React, { useState, useEffect } from "react";
// const produit = [
//   {
//     id: 1,
//     name: 'Fleurs',
//     country: 'Maroc',
//     img: 'images/fleur.jpg',
//   },
//   {
//     id: 2,
//     name: 'Dattes',
//     country: 'Maroc',
//     img: 'images/Tamr.jpg',
//   },
//   {
//     id: 3,
//     name: 'Produits cosmetiques naturels',
//     country: 'Maroc',
//     img: 'images/pront.jpg',
//   },
//   {
//     id: 4,
//     name: 'Epices Aromates',
//     country: 'Maroc',
//     img: 'images/Tawa.jpg',
//   },
//   {
//     id: 5,
//     name: 'Produits derives de dattes',
//     country: 'Maroc',
//     img: 'images/ProTm.jpg',
//   },
//   {
//     id: 6,
//     name: 'Miel',
//     country: 'Maroc',
//     img: 'images/Miel.jpg',
//   },
//   {
//     id: 7,
//     name: 'Produits derives de dattes',
//     country: 'Maroc',
//     img: 'images/ProTm.jpg',
//   },
//   {
//     id: 8,
//     name: 'Epices Aromates',
//     country: 'Maroc',
//     img: 'images/Tawa.jpg',
//   },
//   {
//     id: 7,
//     name: 'Produits derives de dattes',
//     country: 'Maroc',
//     img: 'images/Tahlawt.jpg',
//   },
//   {
//     id: 8,
//     name: 'Epices Aromates',
//     country: 'Maroc',
//     img: 'images/Tawa.jpg',
//   },
//   {
//     id: 1,
//     name: 'Fleurs',
//     country: 'Maroc',
//     img: 'images/fleur.jpg',
//   },
//   {
//     id: 2,
//     name: 'Dattes',
//     country: 'Maroc',
//     img: 'images/Tamr.jpg',
//   },
//   {
//     id: 3,
//     name: 'Produits cosmetiques naturels',
//     country: 'Maroc',
//     img: 'images/pront.jpg',
//   }
// ];

// // const Categorie = () => {
// //   return (
// //     <div className="container mx-auto pt-16 px-4">

        
// // <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 hover:text-[#B5C18E] transition-colors duration-300 cursor-pointer">
// //   Découvre nos catégories
// // </h2>

// //       {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"> */}
// //       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-6">

// //         {produit.map((item) => (
// //           <CategoryCard
// //             key={item.id}
// //             name={item.name}
// //             country={item.country}
// //             img={item.img}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Categorie;
// // const Categorie = () => {
// //   const [visibleCount, setVisibleCount] = useState(7); // On commence avec 6 produits

// //   const handleShowMore = () => {
// //     setVisibleCount((prevCount) => prevCount + 7);
// //   };

// //   const isAllShown = visibleCount >= produit.length;

// //   return (
// //     <div className="container mx-auto pt-16 px-4">
// //       <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 hover:text-[#B5C18E] transition-colors duration-300 cursor-pointer">
// //         Découvre nos catégories
// //       </h2>

// //       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-6">
// //         {produit.slice(0, visibleCount).map((item, index) => (
// //           <CategoryCard
// //             key={`${item.id}-${index}`}
// //             name={item.name}
// //             country={item.country}
// //             img={item.img}
// //           />
// //         ))}
// //       </div>

// //       {/* Bouton "Voir plus" */}
// //       {!isAllShown && (
// //         <div className="flex justify-center mt-8">
// //           <button
// //             onClick={handleShowMore}
// //             className="px-6 py-2 bg-[#B5C18E] text-white rounded hover:bg-[#9AAF73] transition-colors duration-300"
// //           >
// //             Voir plus
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Categorie;



// const Categorie = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1290); // sm: breakpoint de Tailwind (640px)
//     };

//     handleResize(); // check au départ
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const displayedItems = showAll || isMobile ? produit : produit.slice(0, 7); // Affiche tout sur mobile

//   return (
//     <div className="container mx-auto pt-16 px-4">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 hover:text-[#B5C18E] transition-colors duration-300 cursor-pointer">
//         Découvre nos catégories
//       </h2>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-6">
//         {displayedItems.map((item, index) => (
//           <CategoryCard
//             key={index}
//             name={item.name}
//             country={item.country}
//             img={item.img}
//           />
//         ))}
//       </div>

//       {/* Bouton seulement si pas mobile */}
//       {!isMobile && (
//         <div className="flex justify-center mt-6">
//           <button
//             onClick={() => setShowAll(!showAll)}
//             className="px-6 py-2 bg-[#B5C18E] text-white rounded-lg shadow hover:bg-[#9AA86E] transition-colors"
//           >
//             {showAll ? "Voir moins" : "Voir plus"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Categorie;

// ///////////////valide
// import CategoryCard from './CategoryCard';
// import React, { useState } from "react";

// const produit = [
//   { id: 1, name: 'Fleurs', country: 'Maroc', img: 'images/fleur.jpg' },
//   { id: 2, name: 'Dattes', country: 'Maroc', img: 'images/Tamr.jpg' },
//   { id: 3, name: 'Produits cosmetiques naturels', country: 'Maroc', img: 'images/pront.jpg' },
//   { id: 4, name: 'Epices Aromates', country: 'Maroc', img: 'images/Tawa.jpg' },
//   { id: 5, name: 'Produits derives de dattes', country: 'Maroc', img: 'images/ProTm.jpg' },
//   { id: 6, name: 'Miel', country: 'Maroc', img: 'images/Miel.jpg' },
//   { id: 7, name: 'Produits derives de dattes', country: 'Maroc', img: 'images/ProTm.jpg' },
//   { id: 8, name: 'Epices Aromates', country: 'Maroc', img: 'images/Tawa.jpg' },
//   { id: 9, name: 'Produits derives de dattes', country: 'Maroc', img: 'images/Tahlawt.jpg' },
//   { id: 10, name: 'Epices Aromates', country: 'Maroc', img: 'images/Tawa.jpg' },
//   { id: 11, name: 'Fleurs', country: 'Maroc', img: 'images/fleur.jpg' },
//   { id: 12, name: 'Dattes', country: 'Maroc', img: 'images/Tamr.jpg' },
//   { id: 13, name: 'Produits cosmetiques naturels', country: 'Maroc', img: 'images/pront.jpg' },
//   { id: 7, name: 'Produits derives de dattes', country: 'Maroc', img: 'images/ProTm.jpg' },
//   { id: 8, name: 'Epices Aromates', country: 'Maroc', img: 'images/Tawa.jpg' },
//   { id: 9, name: 'Produits derives de dattes', country: 'Maroc', img: 'images/Tahlawt.jpg' },
//   { id: 10, name: 'Epices Aromates', country: 'Maroc', img: 'images/Tawa.jpg' },
//   { id: 11, name: 'Fleurs', country: 'Maroc', img: 'images/fleur.jpg' },
//   { id: 12, name: 'Dattes', country: 'Maroc', img: 'images/Tamr.jpg' },
//   { id: 13, name: 'Produits cosmetiques naturels', country: 'Maroc', img: 'images/pront.jpg' },
//   // Ajoute plus ici pour tester avec >20
// ];

// const Categorie = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 7;

//   const totalPages = Math.ceil(produit.length / itemsPerPage);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = produit.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <div className="container mx-auto pt-16 px-4">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 hover:text-[#B5C18E] transition-colors duration-300 cursor-pointer">
//         Découvre nos catégories
//       </h2>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-6">
//         {currentItems.map((item, index) => (
//           <CategoryCard
//             key={index}
//             name={item.name}
//             country={item.country}
//             img={item.img}
//           />
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-6 space-x-2">
//         <button
//           onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
//         >
//           Précédent
//         </button>

//         <span className="px-4 py-2 bg-gray-200 rounded text-gray-700">
//           Page {currentPage} / {totalPages}
//         </span>

//         <button
//           onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
//         >
//           Suivant
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Categorie;


// import React, { useState } from "react";
// import CategoryCard from './CategoryCard';

// const produit = [
//   { id: 1, name: 'Fleurs', country: 'Maroc', img: 'images/fleur.jpg' },
//   { id: 2, name: 'Dattes', country: 'Maroc', img: 'images/Tamr.jpg' },
//   { id: 3, name: 'Produits cosmetiques naturels', country: 'Maroc', img: 'images/pront.jpg' },
//   { id: 4, name: 'Epices Aromates', country: 'Maroc', img: 'images/Tawa.jpg' },
//   { id: 5, name: 'Produits derives de dattes', country: 'Maroc', img: 'images/ProTm.jpg' },
//   { id: 6, name: 'Miel', country: 'Maroc', img: 'images/Miel.jpg' },
//   {
//     id: 1,
//     name: 'Fleurs',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1617554867990-6db7b0b27c65',
//   },
//   {
//     id: 2,
//     name: 'Dattes',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1603077075203-f63c50e072c2',
//   },
//   {
//     id: 3,
//     name: 'Produits cosmétiques naturels',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1627913938335-4c703b8d75f5',
//   },
//   {
//     id: 4,
//     name: 'Épices Aromates',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1608032076980-f64c74b0075d',
//   },
//   {
//     id: 5,
//     name: 'Miel',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1505575972945-9e9c3dc62b76',
//   },
//   {
//     id: 6,
//     name: 'Huile d\'Argan',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1588666309998-5c0b6a78d678',
//   },
//   {
//     id: 7,
//     name: 'Thé Vert',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1609840112778-321c1be849d8',
//   },
//   {
//     id: 8,
//     name: 'Tapis Artisanaux',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1621447780610-5aa6e3420396',
//   },
//   {
//     id: 9,
//     name: 'Poterie',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1611734932402-2b0e48a0e3e0',
//   },
//   {
//     id: 10,
//     name: 'Babouches',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1582015753575-31c1b5b6dfa8',
//   },
//   {
//     id: 11,
//     name: 'Bijoux berbères',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1592397340995-573c5e46d61b',
//   },
//   {
//     id: 12,
//     name: 'Zellige',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1617379398486-c0c71181c853',
//   },
//   {
//     id: 13,
//     name: 'Cuir artisanal',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1611162617213-8df9ef6ed9a0',
//   },
//   {
//     id: 14,
//     name: 'Couscous',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1651223143795-d9ba65fb8a15',
//   },
//   {
//     id: 15,
//     name: 'Pastilla',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1657220641318-59093f7db59e',
//   },
//   {
//     id: 16,
//     name: 'Amlou',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1673624044927-9bb9dcedc2d8',
//   },
//   {
//     id: 17,
//     name: 'Tajine',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1628768279943-c5cdd3e6e9d2',
//   },
//   {
//     id: 18,
//     name: 'Khobz',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1642419986665-f00d8c96b7bc',
//   },
//   {
//     id: 19,
//     name: 'Djellaba',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1642419986665-f00d8c96b7bc',
//   },
//   {
//     id: 20,
//     name: 'Poufs en cuir',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1610036314363-d4b9a5eac6db',
//   },
//   {
//     id: 21,
//     name: 'Céramique',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1611734932402-2b0e48a0e3e0',
//   },
//   {
//     id: 22,
//     name: 'Savon noir',
//     country: 'Maroc',
//     img: 'https://images.unsplash.com/photo-1627913938335-4c703b8d75f5',
//   },
// ];

// const Categorie = () => {
//   const [visibleItems, setVisibleItems] = useState(8); // Montre 6 au début

//   const handleShowMore = () => {
//     setVisibleItems((prev) => prev + 8); // Ajoute 6 de plus à chaque fois
//   };

//   const handleShowLess = () => {
//     setVisibleItems(8); // Remet à 6 items
//   };

//   return (
//     <div className="container mx-auto pt-16 px-4">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 hover:text-[#B5C18E] transition-colors duration-300 cursor-pointer">
//         Découvre nos catégories
//       </h2>

//       <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
//         {produit.slice(0, visibleItems).map((item, index) => (
//           <CategoryCard
//             key={index}
//             name={item.name}
//             country={item.country}
//             img={item.img}
//           />
//         ))}
//       </div>

//       {/* Bouton "Voir plus" */}
//       {visibleItems < produit.length && (
//         <div className="flex justify-center mt-6">
//           <button
//             onClick={handleShowMore}
//             className="px-6 py-2 bg-[#B5C18E] text-white rounded-lg shadow hover:bg-[#9AA86E] transition-colors"
//           >
//             Voir plus
//           </button>
//         </div>
//       )}

//       {/* Bouton "Voir moins" */}
//       {visibleItems > 8 && (
//         <div className="flex justify-center mt-2">
//           <button
//             onClick={handleShowLess}
//             className="px-6 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500 transition-colors"
//           >
//             Voir moins
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Categorie;