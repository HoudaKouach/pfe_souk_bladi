
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterCategory from './FilterCategory.js';
import Categories from './CategoriesData';

const FilterSidebar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [expandedFilters, setExpandedFilters] = useState({
  Taille: false,
  Couleur: false,
  TypeDeMotif: false,
  Marque: false, 
});

  const tailles = [
    'Taille Unique', 'XS', 'M', 'XXS', 'S', 'L', 'XL', 'XXL', 'XXXL', 'XXXXL',
    '0XL', '1XL', '2XL', '3XL', '4XL', '5XL', '6XL', '27', '28', '29', '30',
    '31', '32', '33', '34', '35', '36', '38', '40', '42', '44', '46', '48',
    '52', '56', '100', '110', '120', 'EUR35', 'EUR36', 'EUR36-37', 'EUR37',
    'EUR38', 'EUR38-39', 'EUR39', 'EUR40', 'EUR40-41', 'EUR41', 'EUR42',
    'EUR42-43', 'EUR43', 'EUR44', 'EUR44-45'
  ];

  const couleurs = [
    { name: 'Rouge', color: 'bg-red-500' },
    { name: 'Kaki', color: 'bg-yellow-800' },
    { name: 'Bleu', color: 'bg-blue-500' },
    { name: 'Vert', color: 'bg-green-500' },
    { name: 'Multicolore', color: 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500' },
    { name: 'Violet', color: 'bg-purple-500' },
    { name: 'Noir', color: 'bg-black' },
    { name: 'Brun', color: 'bg-orange-900' },
    { name: 'Rose', color: 'bg-pink-500' },
    { name: 'Gris', color: 'bg-gray-500' },
    { name: 'Orange', color: 'bg-orange-500' },
    { name: 'Blanc/Bk', color: 'bg-white border border-gray-300' },
    { name: 'Jaune', color: 'bg-yellow-400' }
  ];
  const marques = [
  'Adidas', 'Nike', 'Zara', 'H&M', 'Pull&Bear', 'Stradivarius',
  'Puma', 'Reebok', 'Bershka', 'Levi’s', 'New Balance', 'Guess',
  'Lacoste', 'Tommy Hilfiger', 'Mango', 'Asics', 'Under Armour',
  'Calvin Klein', 'Uniqlo', 'Diesel'
];


  // const motifs = [
  //   'Carreau', 'Ombré', 'Imprimé chaîne', 'Pois', 'Rayure zébrée', 'Blocs de couleur',
  //   'Fleurs', 'Abstrait', 'Animaux', 'Camouflage', 'Lignes', 'Papillon'
  // ];

  const toggleFilterExpansion = (filter) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const handleFilterClick = (category) => {
    const routes = {
      Marque: '/marques',
      Vendeur: '/vendeurs',
      Taille: '/tailles',
      Prix: '/prix',
      Évaluation: '/evaluation',
      Couleur: '/couleurs',
      TypePublic: '/public',
      Genre: '/genre',
    };

    navigate(routes[category] || `/category/${category.toLowerCase()}`);
  };

  const handleCategorySelect = (link) => {
    setShowDropdown(false);
    navigate(link);
  };

  return (
    <aside className="bg-[#B5C18E] p-4 h-full flex flex-col items-center justify-start gap-2 relative">

      {/* Dropdown Catégorie */}
      <div className="w-full relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-full bg-white py-2 px-4 mb-2 rounded-full text-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Catégorie
        </button>

        {showDropdown && (
          <div className="absolute top-full left-0 w-[300px] bg-white mt-2 rounded-xl shadow-lg z-20 max-h-96 overflow-y-auto border border-gray-200">
            {Categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.link)}
                className="w-full text-left px-6 py-3 text-[15px] hover:bg-green-50 transition-colors border-b border-gray-100 last:border-b-0"
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}
      </div>

{/* Taille */}
<div className="w-full relative">
  <button
    onClick={() => toggleFilterExpansion('Taille')}
className="w-full bg-white py-2 px-4 mb-2 rounded-full text-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
  >
    Taille
  </button>

  {expandedFilters.Taille && (
    <div className="absolute top-full left-0 w-full bg-white mt-2 rounded-xl shadow-lg z-20 max-h-64 overflow-y-auto border border-gray-200 p-4">
      <div className="grid grid-cols-2 gap-2">
        {tailles.map((taille) => (
          <label key={taille} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded-full h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span>{taille}</span>
          </label>
        ))}
      </div>
    </div>
  )}
</div>



      {/* Couleur */}
      <div className="w-full relative">
  <button
    onClick={() => toggleFilterExpansion('Couleur')}
className="w-full bg-white py-2 px-4 mb-2 rounded-full text-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
  >
    Couleur
  </button>

  {expandedFilters.Couleur && (
    <div className="absolute top-full left-0 w-full bg-white mt-2 rounded-xl shadow-lg z-20 max-h-64 overflow-y-auto border border-gray-200 p-4">
      <div className="grid grid-cols-3 gap-3">
        {couleurs.map((couleur) => (
          <label key={couleur.name} className="flex flex-col items-center space-y-1">
            <div className={`h-8 w-8 rounded-full ${couleur.color} border border-gray-300 flex items-center justify-center`}>
              <input
                type="checkbox"
                className="opacity-0 absolute h-6 w-6 rounded-full cursor-pointer"
              />
            </div>
            <span className="text-xs text-center">{couleur.name}</span>
          </label>
        ))}
      </div>
    </div>
  )}
</div>


      {/* Type de Motif */}
  {/* <div className="w-full relative">
  <button
    onClick={() => toggleFilterExpansion('TypeDeMotif')}
className="w-full bg-white py-2 px-4 mb-2 rounded-full text-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
  >
    Type De Motif
  </button>

  {expandedFilters.TypeDeMotif && (
    <div className="absolute top-full left-0 w-full bg-white mt-2 rounded-xl shadow-lg z-20 max-h-64 overflow-y-auto border border-gray-200 p-4">
      <div className="grid grid-cols-1 gap-2">
        {motifs.map((motif) => (
          <label key={motif} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span>{motif}</span>
          </label>
        ))}
      </div>
    </div>
  )}
</div> */}


<div className="w-full relative">
  <button
    onClick={() => toggleFilterExpansion('Marque')}
className="w-full bg-white py-2 px-4 mb-2 rounded-full text-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
  >
    Marque
  </button>

  {expandedFilters.Marque && (
    <div className="absolute top-full left-0 w-full bg-white mt-2 rounded-xl shadow-lg z-20 max-h-64 overflow-y-auto border border-gray-200 p-4">
      <div className="grid grid-cols-1 gap-2">
        {marques.map((marque) => (
          <label key={marque} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
            />
            <span>{marque}</span>
          </label>
        ))}
      </div>
    </div>
  )}
</div>


      
      <FilterCategory title="Vendeur" onClick={() => handleFilterClick('Vendeur')} />
      <FilterCategory title="Prix" onClick={() => handleFilterClick('Prix')} />
      <FilterCategory title="Évaluation" onClick={() => handleFilterClick('Évaluation')} />
      <FilterCategory title="Type de public" onClick={() => handleFilterClick('TypePublic')} />
      <FilterCategory title="Genre" onClick={() => handleFilterClick('Genre')} />
    </aside>
  );
};

export default FilterSidebar;
