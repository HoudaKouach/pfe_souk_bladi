
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FilterCategory from './FilterCategory.js';
// import Categories from './CategoriesData';

// const FilterSidebar = () => {
//   const navigate = useNavigate();
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [expandedFilters, setExpandedFilters] = useState({
//   Taille: false,
//   Couleur: false,
//   TypeDeMotif: false,
//   Marque: false, 
// });

//   const tailles = [
//     'Taille Unique', 'XS', 'M', 'XXS', 'S', 'L', 'XL', 'XXL', 'XXXL', 'XXXXL',
//     '0XL', '1XL', '2XL', '3XL', '4XL', '5XL', '6XL', '27', '28', '29', '30',
//     '31', '32', '33', '34', '35', '36', '38', '40', '42', '44', '46', '48',
//     '52', '56', '100', '110', '120', 'EUR35', 'EUR36', 'EUR36-37', 'EUR37',
//     'EUR38', 'EUR38-39', 'EUR39', 'EUR40', 'EUR40-41', 'EUR41', 'EUR42',
//     'EUR42-43', 'EUR43', 'EUR44', 'EUR44-45'
//   ];

//   const couleurs = [
//     { name: 'Rouge', color: 'bg-red-500' },
//     { name: 'Kaki', color: 'bg-yellow-800' },
//     { name: 'Bleu', color: 'bg-blue-500' },
//     { name: 'Vert', color: 'bg-green-500' },
//     { name: 'Multicolore', color: 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500' },
//     { name: 'Violet', color: 'bg-purple-500' },
//     { name: 'Noir', color: 'bg-black' },
//     { name: 'Brun', color: 'bg-orange-900' },
//     { name: 'Rose', color: 'bg-pink-500' },
//     { name: 'Gris', color: 'bg-gray-500' },
//     { name: 'Orange', color: 'bg-orange-500' },
//     { name: 'Blanc/Bk', color: 'bg-white border border-gray-300' },
//     { name: 'Jaune', color: 'bg-yellow-400' }
//   ];
//   const marques = [
//   'Adidas', 'Nike', 'Zara', 'H&M', 'Pull&Bear', 'Stradivarius',
//   'Puma', 'Reebok', 'Bershka', 'Levi’s', 'New Balance', 'Guess',
//   'Lacoste', 'Tommy Hilfiger', 'Mango', 'Asics', 'Under Armour',
//   'Calvin Klein', 'Uniqlo', 'Diesel'
// ];


//   const motifs = [
//     'Carreau', 'Ombré', 'Imprimé chaîne', 'Pois', 'Rayure zébrée', 'Blocs de couleur',
//     'Fleurs', 'Abstrait', 'Animaux', 'Camouflage', 'Lignes', 'Papillon'
//   ];

//   const toggleFilterExpansion = (filter) => {
//     setExpandedFilters(prev => ({
//       ...prev,
//       [filter]: !prev[filter]
//     }));
//   };

//   const handleFilterClick = (category) => {
//     const routes = {
//       Marque: '/marques',
//       Vendeur: '/vendeurs',
//       Taille: '/tailles',
//       Prix: '/prix',
//       Évaluation: '/evaluation',
//       Couleur: '/couleurs',
//       TypePublic: '/public',
//       Genre: '/genre',
//     };

//     navigate(routes[category] || `/category/${category.toLowerCase()}`);
//   };

//   const handleCategorySelect = (link) => {
//     setShowDropdown(false);
//     navigate(link);
//   };

//   return (
//     <aside className="bg-[#B5C18E] p-4 h-full flex flex-col items-center justify-start gap-2 relative">

//       {/* Dropdown Catégorie */}
//       <div className="w-full relative">
//         <button
//           onClick={() => setShowDropdown(!showDropdown)}
//           className="w-full bg-white py-2 px-4 mb-2 rounded-full text-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
//         >
//           Catégorie
//         </button>

//         {showDropdown && (
//           <div className="absolute top-full left-0 w-[300px] bg-white mt-2 rounded-xl shadow-lg z-20 max-h-96 overflow-y-auto border border-gray-200">
//             {Categories.map((cat) => (
//               <button
//                 key={cat.id}
//                 onClick={() => handleCategorySelect(cat.link)}
//                 className="w-full text-left px-6 py-3 text-[15px] hover:bg-green-50 transition-colors border-b border-gray-100 last:border-b-0"
//               >
//                 {cat.name}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

// {/* Taille */}
// <div className="w-full relative">
//   <button
//     onClick={() => toggleFilterExpansion('Taille')}
// className="w-full bg-white py-2 px-4 mb-2 rounded-full text-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
//   >
//     Taille
//   </button>

//   {expandedFilters.Taille && (
//     <div className="absolute top-full left-0 w-full bg-white mt-2 rounded-xl shadow-lg z-20 max-h-64 overflow-y-auto border border-gray-200 p-4">
//       <div className="grid grid-cols-2 gap-2">
//         {tailles.map((taille) => (
//           <label key={taille} className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               className="rounded-full h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
//             />
//             <span>{taille}</span>
//           </label>
//         ))}
//       </div>
//     </div>
//   )}
// </div>



//       {/* Couleur */}
//       <div className="w-full relative">
//   <button
//     onClick={() => toggleFilterExpansion('Couleur')}
// className="w-full bg-white py-2 px-4 mb-2 rounded-full text-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
//   >
//     Couleur
//   </button>

//   {expandedFilters.Couleur && (
//     <div className="absolute top-full left-0 w-full bg-white mt-2 rounded-xl shadow-lg z-20 max-h-64 overflow-y-auto border border-gray-200 p-4">
//       <div className="grid grid-cols-3 gap-3">
//         {couleurs.map((couleur) => (
//           <label key={couleur.name} className="flex flex-col items-center space-y-1">
//             <div className={`h-8 w-8 rounded-full ${couleur.color} border border-gray-300 flex items-center justify-center`}>
//               <input
//                 type="checkbox"
//                 className="opacity-0 absolute h-6 w-6 rounded-full cursor-pointer"
//               />
//             </div>
//             <span className="text-xs text-center">{couleur.name}</span>
//           </label>
//         ))}
//       </div>
//     </div>
//   )}
// </div>


//       {/* Type de Motif */}
//   <div className="w-full relative">
//   <button
//     onClick={() => toggleFilterExpansion('TypeDeMotif')}
// className="w-full bg-white py-2 px-4 mb-2 rounded-full text-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
//   >
//     Type De Motif
//   </button>

//   {expandedFilters.TypeDeMotif && (
//     <div className="absolute top-full left-0 w-full bg-white mt-2 rounded-xl shadow-lg z-20 max-h-64 overflow-y-auto border border-gray-200 p-4">
//       <div className="grid grid-cols-1 gap-2">
//         {motifs.map((motif) => (
//           <label key={motif} className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               className="rounded h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
//             />
//             <span>{motif}</span>
//           </label>
//         ))}
//       </div>
//     </div>
//   )}
// </div>


// <div className="w-full relative">
//   <button
//     onClick={() => toggleFilterExpansion('Marque')}
// className="w-full bg-white py-2 px-4 mb-2 rounded-full text-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
//   >
//     Marque
//   </button>

//   {expandedFilters.Marque && (
//     <div className="absolute top-full left-0 w-full bg-white mt-2 rounded-xl shadow-lg z-20 max-h-64 overflow-y-auto border border-gray-200 p-4">
//       <div className="grid grid-cols-1 gap-2">
//         {marques.map((marque) => (
//           <label key={marque} className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               className="rounded h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
//             />
//             <span>{marque}</span>
//           </label>
//         ))}
//       </div>
//     </div>
//   )}
// </div>


      
//       <FilterCategory title="Vendeur" onClick={() => handleFilterClick('Vendeur')} />
//       <FilterCategory title="Prix" onClick={() => handleFilterClick('Prix')} />
//       <FilterCategory title="Évaluation" onClick={() => handleFilterClick('Évaluation')} />
//       <FilterCategory title="Type de public" onClick={() => handleFilterClick('TypePublic')} />
//       <FilterCategory title="Genre" onClick={() => handleFilterClick('Genre')} />
//     </aside>
//   );
// };

// export default FilterSidebar;






import React, { useEffect, useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import ProductCard from './ProductCard';

const FilterSidebar = () => {
  // 1) état des sections ouvertes
  const [expanded, setExpanded] = useState({
    categorie: false,
    pointure: false,
    taille: false,
    couleur: false,
    volume: false,
    vendeur: false,
    evaluation: false,
    prix: false,
    genre: false,
  });

  // 2) données de filtres initialisées à des tableaux vides
  const [data, setData] = useState({
    categories: [],
    pointures: [],
    tailles: [],
    couleurs: [],
    volumes: [],
    vendeurs: [],
    evaluations: [],
    prixMin: 0,
    prixMax: 0,
    genre: [],
  });

  // 3) filtres actifs
  const [active, setActive] = useState({
    categorie: [],
    pointure: [],
    taille: [],
    couleur: [],
    volume: [],
    vendeur: [],
    evaluation: [],
    genre: [],
    prix: { min: '', max: '' },
  });

  // 4) produits filtrés
  const [products, setProducts] = useState([]);

  // charge les données de filtres
  useEffect(() => {
    fetch('http://localhost/back-end_PFE/filters.php')
      .then(r => r.json())
      .then(d => {
        setData({
          categories: d.categories || [],
          pointures:  d.pointures  || [],
          tailles:    d.tailles    || [],
          couleurs:   d.couleurs   || [],
          volumes:    d.volumes    || [],
          vendeurs:   d.vendeurs   || [],
          evaluations:d.evaluations?.length ? d.evaluations : [5,4,3,2,1],
          prixMin:    d.prixMin    ?? 0,
          prixMax:    d.prixMax    ?? 0,
          genre:      d.genre      || [],
        });
        setActive(a => ({
          ...a,
          prix: { min: d.prixMin, max: d.prixMax }
        }));
      })
      .catch(console.error);
  }, []);

  // recalcule products dès que active change
  // useEffect(() => {
  //   fetch('http://localhost/back-end_PFE/get_Product_Filtre.php')
  //     .then(r => r.json())
  //     .then(arr => {
  //       const filt = arr.filter(p => {
  //         const checks = {
  //           categorie:   !active.categorie.length   || active.categorie.includes(p.id_categorie),
  //           pointure:    !active.pointure.length    || active.pointure.includes(p.pointure),
  //           taille:      !active.taille.length      || active.taille.includes(p.taille),
  //           couleur:     !active.couleur.length     || active.couleur.includes(p.couleur),
  //           volume:      !active.volume.length      || active.volume.includes(p.volume),
  //           vendeur:     !active.vendeur.length     || active.vendeur.includes(p.id_vendeur),
  //           genre:       !active.genre.length       || active.genre.includes(p.genre),
  //           evaluation:  !active.evaluation.length  || active.evaluation.includes(p.note),
  //           prix: (!active.prix.min || p.prix >= +active.prix.min)
  //              && (!active.prix.max || p.prix <= +active.prix.max),
  //         };
  //         return Object.values(checks).every(Boolean);
  //       });
  //       setProducts(filt);
  //     })
  //     .catch(console.error);
  // }, [active]);
  useEffect(() => {
    fetch('http://localhost/back-end_PFE/get_Product_Filtre.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(active)
    })
      .then(r => r.json())
      .then(arr => {
        setProducts(arr);
      })
      .catch(console.error);
  }, [active]);

  const toggleSection = key =>
    setExpanded(e => ({ ...e, [key]: !e[key] }));

  const toggleFilter = (key, value) => {
    setActive(a => {
      const arr = a[key] || [];
      return {
        ...a,
        [key]: arr.includes(value)
          ? arr.filter(x => x !== value)
          : [...arr, value]
      };
    });
  };

  const changePrix = (field, v) =>
    setActive(a => ({
      ...a,
      prix: { ...a.prix, [field]: v }
    }));

  const Stars = ({ count }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) =>
        i < count
          ? <FaStar key={i} className="text-yellow-500" />
          : <FaRegStar key={i} className="text-gray-300" />
      )}
    </div>
  );

  // définition des sections
  const sections = [
    { key: 'categorie',   label: 'Catégorie',   items: data.categories,   isObj: true },
    { key: 'pointure',    label: 'Pointure',    items: data.pointures,    isObj: true },
    { key: 'taille',      label: 'Taille',      items: data.tailles,      isObj: true },
    { key: 'couleur',     label: 'Couleur',     items: data.couleurs,     isObj: false },
    { key: 'volume',      label: 'Volume',      items: data.volumes,      isObj: true },
    { key: 'vendeur',     label: 'Vendeur',     items: data.vendeurs,     isObj: true },
    { key: 'evaluation',  label: 'Évaluation',  items: data.evaluations,  isObj: false },
    { key: 'genre',       label: 'Genre',       items: data.genre,        isObj: true },
    { key: 'prix',        label: 'Prix',        items: [],                isObj: false },
  ];

  return (
    <div className="flex">
      {/* SIDEBAR */}
      <aside className="w-[280px] p-4 bg-white space-y-4">
        {sections.map(({ key, label, items, isObj }) => (
          <div key={key} className="border-b pb-2">
            <button
              onClick={() => toggleSection(key)}
              className="w-full flex justify-between items-center font-medium"
            >
              {label} {expanded[key] ? '▴' : '▾'}
            </button>

            {expanded[key] && (
              <div className="mt-2 space-y-2 max-h-60 overflow-y-auto">
                {/* Prix */}
                {key === 'prix' ? (
                  <>
                    <div className="flex space-x-2">
                      <input
                        type="number"
                        className="w-1/2 border p-1 rounded"
                        value={active.prix.min}
                        onChange={e => changePrix('min', e.target.value)}
                        placeholder={data.prixMin}
                      />
                      <input
                        type="number"
                        className="w-1/2 border p-1 rounded"
                        value={active.prix.max}
                        onChange={e => changePrix('max', e.target.value)}
                        placeholder={data.prixMax}
                      />
                    </div>
                    <button
                      onClick={() => {}}
                      className="w-full bg-green-600 text-white py-2 rounded-full"
                    >
                      Filtrer
                    </button>
                  </>
                ) : (
                  // toutes les autres sections
                  (items || []).map((it, i) => {
                    const val   = isObj ? (it.value ?? it.id) : it;
                    const text  = isObj ? (it.nom   ?? it.value) : it;
                    const count = it.count ?? 0;
                    return (
                      <div key={i} className="flex justify-between">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={active[key].includes(val)}
                            onChange={() => toggleFilter(key, val)}
                          />
                          {key === 'evaluation'
                            ? <Stars count={val} />
                            : key === 'couleur'
                              ? <div
                                  className="h-5 w-5 rounded-full border"
                                  style={{ backgroundColor: val }}
                                />
                              : <span>{text}</span>
                          }
                        </label>
                        {count > 0 && (
                          <span className="text-sm text-gray-500">({count})</span>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </div>
        ))}
      </aside>

      {/* GRILLE PRODUITS */}
      <main className="flex-1 p-6 grid grid-cols-3 gap-4">
        {products.map(p => (
          <ProductCard key={p.id_produit} product={p} />
        ))}
      </main>
    </div>
  );
};

export default FilterSidebar;
