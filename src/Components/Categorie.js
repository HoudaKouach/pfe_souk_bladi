import React, { useState, useEffect } from "react";
import CategoryCard from './CategoryCard';

const Categorie = () => {
  const [categories, setCategories] = useState([]); // État pour stocker les catégories
  const [visibleItems, setVisibleItems] = useState(8); // Montre 8 catégories au début

  useEffect(() => {
    // Appel à l'API PHP pour récupérer les catégories
    fetch('http://localhost/back-end_PFE/getCategories.php') // Remplacez par le chemin correct vers le fichier PHP
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => console.error("Erreur de chargement des catégories :", error));
  }, []);

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 8); // Ajoute 8 de plus à chaque fois
  };

  const handleShowLess = () => {
    setVisibleItems(8); // Remet à 8 items
  };

  return (
    <div className="bg-[#DEAC80] px-16 w-full pb-16  pt-16 ">
      <h2 className="text-3xl font-bold text-center text-black mb-10 hover:text-[#B5C18E] transition-colors duration-300 cursor-pointer">
        Découvre nos catégories
      </h2>

      {/* Grille responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-8 gap-8">
        {categories.slice(0, visibleItems).map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            img={`http://localhost/back-end_PFE/uploads/${category.img}`}

          />
        ))}
      </div>

      {/* Bouton "Voir plus" */}
      {visibleItems < categories.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 text-[#DEAC80] bg-white rounded-lg shadow hover:bg-[#B99470] transition-colors"
          >
            Voir plus
          </button>
        </div>
      )}

      {/* Bouton "Voir moins" */}
      {visibleItems > 8 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowLess}
            className="px-6 py-2 text-[#DEAC80] bg-white rounded-lg shadow hover:bg-[#B99470] transition-colors"
          >
            Voir moins
          </button>
        </div>
      )}
    </div>
  );
};

export default Categorie;
