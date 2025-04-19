import React from "react";
import CategoryCard from './CategoryCard';

const produit = [
  {
    id: 1,
    name: 'Fleurs',
    country: 'Maroc',
    img: 'images/fleur.jpg',
  },
  {
    id: 2,
    name: 'Dattes',
    country: 'Maroc',
    img: 'images/Tamr.jpg',
  },
  {
    id: 3,
    name: 'Produits cosmetiques naturels',
    country: 'Maroc',
    img: 'images/pront.jpg',
  },
  {
    id: 4,
    name: 'Epices Aromates',
    country: 'Maroc',
    img: 'images/Tawa.jpg',
  },
  {
    id: 5,
    name: 'Produits derives de dattes',
    country: 'Maroc',
    img: 'images/ProTm.jpg',
  },
  {
    id: 6,
    name: 'Miel',
    country: 'Maroc',
    img: 'images/Miel.jpg',
  },
  {
    id: 7,
    name: 'Produits derives de dattes',
    country: 'Maroc',
    img: 'images/ProTm.jpg',
  },
  {
    id: 8,
    name: 'Epices Aromates',
    country: 'Maroc',
    img: 'images/Tawa.jpg',
  },
  {
    id: 7,
    name: 'Produits derives de dattes',
    country: 'Maroc',
    img: 'images/Tahlawt.jpg',
  },
  {
    id: 8,
    name: 'Epices Aromates',
    country: 'Maroc',
    img: 'images/Tawa.jpg',
  },
];

const Categorie = () => {
  return (
    <div className="container mx-auto pt-16 px-4">

        
<h2 className="text-3xl font-bold text-center text-gray-800 mb-10 hover:text-[#B5C18E] transition-colors duration-300 cursor-pointer">
  Découvre nos catégories
</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {produit.map((item) => (
          <CategoryCard
            key={item.id}
            name={item.name}
            country={item.country}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Categorie;
