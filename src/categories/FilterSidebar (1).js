import React, { useEffect, useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import ProductCard from './ProductCard';

const FilterSidebar = () => {
  // 1) état des sections ouvertes
  const [expanded, setExpanded] = useState({
    categorie: false,
    taille: false,
    couleur: false,
    volume: false,
    vendeur: false,
    evaluation: false,
    prix: false,
  });

  // 2) données de filtres initialisées à des tableaux vides
  const [data, setData] = useState({
    categories: [],
    tailles: [],
    couleurs: [],
    volumes: [],
    vendeurs: [],
    evaluations: [],
    prixMin: 0,
    prixMax: 0,
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
          tailles:    d.tailles    || [],
          couleurs:   d.couleurs   || [],
          volumes:    d.volumes    || [],
          vendeurs:   d.vendeurs   || [],
          evaluations:d.evaluations?.length ? d.evaluations : [5,4,3,2,1],
          prixMin:    d.prixMin    ?? 0,
          prixMax:    d.prixMax    ?? 0,
        });
        setActive(a => ({
          ...a,
          prix: { min: d.prixMin, max: d.prixMax }
        }));
      })
      .catch(console.error);
  }, []);

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
    { key: 'taille',      label: 'Taille',      items: data.tailles,      isObj: true },
    { key: 'couleur',     label: 'Couleur',     items: data.couleurs,     isObj: false },
    { key: 'volume',      label: 'Volume',      items: data.volumes,      isObj: true },
    { key: 'vendeur',     label: 'Vendeur',     items: data.vendeurs,     isObj: true },
    { key: 'evaluation',  label: 'Évaluation',  items: data.evaluations,  isObj: false },
    { key: 'prix',        label: 'Prix',        items: [],                isObj: false },
  ];

  return (
    <div className="flex">
      {/* SIDEBAR */}
      <aside className="w-[400px] p-4 space-y-6 bg-white border-r my-[30px] shadow-sm rounded-lg">
        {sections.map(({ key, label, items, isObj }) => (
          <div key={key} className="border-b pb-2">
            <button
              onClick={() => toggleSection(key)}
              className="w-full flex justify-between items-center font-semibold text-gray-700 hover:text-[#B5C18E]  transition-colors duration-200"
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
                        className="w-1/2 border border-gray-300 p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={active.prix.min}
                        onChange={e => changePrix('min', e.target.value)}
                        placeholder={data.prixMin}
                      />
                      <input
                        type="number"
                        className="w-1/2 border border-gray-300 p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={active.prix.max}
                        onChange={e => changePrix('max', e.target.value)}
                        placeholder={data.prixMax}
                      />
                    </div>
                    <button
                      onClick={() => {}}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full transition-all"
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
                      <div key={i} className="flex justify-between items-center px-2 py-1 hover:bg-gray-50 rounded transition-colors duration-150">
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
