import React from "react";

const CategoryCard = ({ img, name, country }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      
      <div className="w-[100px] h-[100px] rounded-full overflow-hidden shadow-md border-2 border-gray-200 hover:scale-105 transition-transform">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="text-center">
        <h3 className="font-medium text-sm text-gray-800">{name}</h3>
        <p className="text-xs text-gray-500">{country}</p>
      </div>
    </div>
  );
};

export default CategoryCard;



