import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Pagination = ({ 
  productsPerPage, 
  totalProducts, 
  currentPage, 
  paginate 
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center">
      {pageNumbers.slice(0, 6).map(number => (
        <button
  key={number}
  onClick={() => paginate(number)}
  className={`mx-1 w-8 h-8 flex items-center justify-center rounded
    ${currentPage === number 
      ? 'bg-[#b9c889] text-white' 
      : 'bg-[#e8edd9] hover:bg-[#d4dcb8] text-gray-700'}`}
>
  {number}
</button>

      ))}
      
      {pageNumbers.length > 6 && (
        <>
          <span className="mx-2">
            <span className="mx-1 w-2 h-2 bg-gray-600 rounded-full inline-block"></span>
            <span className="mx-1 w-2 h-2 bg-gray-600 rounded-full inline-block"></span>
            <span className="mx-1 w-2 h-2 bg-gray-600 rounded-full inline-block"></span>
          </span>
          <button className="ml-1 w-8 h-8 flex items-center justify-center rounded bg-[#e8edd9] hover:bg-[#d4dcb8]">
            <ChevronRight size={16} className="text-gray-700" />
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination; 




// import React, { useState } from 'react';
// import ProductCard from './ProductCard'; 

// function ProductList({ products }) {
//   const itemsPerPage = 6;
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     window.scrollTo({ top: 0, behavior: 'smooth' }); 
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {/* Grid ديال المنتجات */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {currentProducts.map((product) => (
//           <ProductCard key={product.id_produit} product={product} />
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-6 space-x-2">
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             className={`px-3 py-1 rounded-md border text-sm font-medium transition ${
//               currentPage === index + 1
//                 ? 'bg-[#DEAC80] text-white'
//                 : 'bg-white text-gray-700 border-gray-300 hover:bg-[#f5deb3]'
//             }`}
//             onClick={() => handlePageChange(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductList;
