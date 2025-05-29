

import React, { useState } from 'react';
// import { FiShoppingCart } from 'react-icons/fi';
// import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import ProductGrid from './ProductGrid';
import FilterSidebar from './FilterSidebar (1)';
import Breadcrumb from './Breadcrumb';
import Pagination from './Pagination';
import Footer from '../Components/Footer';


function ProductPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      <main className="flex-grow bg-[#FFFFFF]">
        {/* Breadcrumb and Sort Bar in a full-width block */}
        <div className="w-full bg-[#b8c18b] px-4 py-2 border-b border-brown-300">
          <div className="container mx-auto flex items-center justify-between">
            <Breadcrumb
              paths={[
                { name: 'Accueil', path: '/' },
                { name: 'Dattes', path: '/dattes' },
              ]}
            />
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-1">
              <span className="text-sm">Trier par</span>
              <select
                className="bg-transparent text-sm focus:outline-none cursor-pointer"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="">Popularité</option>
                <option value="price-asc">Prix: Croissant</option>
                <option value="price-desc">Prix: Décroissant</option>
                <option value="name-asc">Nom: A-Z</option>
                <option value="name-desc">Nom: Z-A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row py-4 gap-6">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 lg:w-1/5 flex flex-col pr-0 gap-4">
              <FilterSidebar />
            </div>

            {/* Product Grid */}
            <div className="w-full md:w-3/4 lg:w-4/5">
              <ProductGrid />

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={6}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </main>
    <Footer ></Footer>
    </>
  );
}

export default ProductPage;    
