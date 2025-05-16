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