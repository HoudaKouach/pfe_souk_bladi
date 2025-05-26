// src/Component/FilterCategory.jsx

import React from 'react';

function FilterCategory({ title, onClick }) {
  return (
    <button 
      className="w-full bg-white py-2 px-4 mb-2 rounded-full text-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default FilterCategory;
