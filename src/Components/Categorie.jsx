import React, { useState } from "react";
import CategoryCard from './CategoryCard';

const produit = [
  { id: 1, name: 'Fleurs', country: 'Maroc', img: 'images/fleur.jpg' },
  { id: 2, name: 'Dattes', country: 'Maroc', img: 'images/Tamr.jpg' },
  { id: 3, name: 'Produits cosmetiques naturels', country: 'Maroc', img: 'images/pront.jpg' },
  { id: 4, name: 'Epices Aromates', country: 'Maroc', img: 'images/Tawa.jpg' },
  { id: 5, name: 'Produits derives de dattes', country: 'Maroc', img: 'images/ProTm.jpg' },
  { id: 6, name: 'Miel', country: 'Maroc', img: 'images/Miel.jpg' },
  {
    id: 1,
    name: 'Fleurs',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1617554867990-6db7b0b27c65',
  },
  {
    id: 2,
    name: 'Dattes',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1603077075203-f63c50e072c2',
  },
  {
    id: 3,
    name: 'Produits cosmétiques naturels',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1627913938335-4c703b8d75f5',
  },
  {
    id: 4,
    name: 'Épices Aromates',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1608032076980-f64c74b0075d',
  },
  {
    id: 5,
    name: 'Miel',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1505575972945-9e9c3dc62b76',
  },
  {
    id: 6,
    name: 'Huile d\'Argan',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1588666309998-5c0b6a78d678',
  },
  {
    id: 7,
    name: 'Thé Vert',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1609840112778-321c1be849d8',
  },
  {
    id: 8,
    name: 'Tapis Artisanaux',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1621447780610-5aa6e3420396',
  },
  {
    id: 9,
    name: 'Poterie',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1611734932402-2b0e48a0e3e0',
  },
  {
    id: 10,
    name: 'Babouches',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1582015753575-31c1b5b6dfa8',
  },
  {
    id: 11,
    name: 'Bijoux berbères',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1592397340995-573c5e46d61b',
  },
  {
    id: 12,
    name: 'Zellige',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1617379398486-c0c71181c853',
  },
  {
    id: 13,
    name: 'Cuir artisanal',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1611162617213-8df9ef6ed9a0',
  },
  {
    id: 14,
    name: 'Couscous',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1651223143795-d9ba65fb8a15',
  },
  {
    id: 15,
    name: 'Pastilla',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1657220641318-59093f7db59e',
  },
  {
    id: 16,
    name: 'Amlou',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1673624044927-9bb9dcedc2d8',
  },
  {
    id: 17,
    name: 'Tajine',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1628768279943-c5cdd3e6e9d2',
  },
  {
    id: 18,
    name: 'Khobz',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1642419986665-f00d8c96b7bc',
  },
  {
    id: 19,
    name: 'Djellaba',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1642419986665-f00d8c96b7bc',
  },
  {
    id: 20,
    name: 'Poufs en cuir',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1610036314363-d4b9a5eac6db',
  },
  {
    id: 21,
    name: 'Céramique',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1611734932402-2b0e48a0e3e0',
  },
  {
    id: 22,
    name: 'Savon noir',
    country: 'Maroc',
    img: 'https://images.unsplash.com/photo-1627913938335-4c703b8d75f5',
  },
];

const categories = [
  { id: 1, name: 'Produits du Terroir', country: 'Maroc', img: 'images/terroir.jpg' },
  { id: 2, name: 'Huiles (huile d\'olive, huile d\'argan…)', country: 'Maroc', img: 'images/huiles.jpg' },
  { id: 3, name: 'Dattes & Dérivés', country: 'Maroc', img: 'images/dattes.jpg' },
  { id: 4, name: 'Miel & Produits de la Ruche', country: 'Maroc', img: 'images/miel.jpg' },
  { id: 5, name: 'Épices & Herbes', country: 'Maroc', img: 'images/epices.jpg' },
  { id: 6, name: 'Couscous & Céréales', country: 'Maroc', img: 'images/couscous.jpg' },
  { id: 7, name: 'Confitures & Produits Sucrés', country: 'Maroc', img: 'images/confitures.jpg' },
  { id: 8, name: 'Plantes Médicinales & Tisanes', country: 'Maroc', img: 'images/tisanes.jpg' },
  { id: 9, name: 'Artisanat', country: 'Maroc', img: 'images/artisanat.jpg' },
  { id: 10, name: 'Tapis & Tissages', country: 'Maroc', img: 'images/tapis.jpg' },
  { id: 11, name: 'Poterie & Céramique', country: 'Maroc', img: 'images/poterie.jpg' },
  { id: 12, name: 'Bijoux Traditionnels', country: 'Maroc', img: 'images/bijoux.jpg' },
  { id: 13, name: 'Articles en Bois', country: 'Maroc', img: 'images/bois.jpg' },
  { id: 14, name: 'Cuir (sacs, babouches…)', country: 'Maroc', img: 'images/cuir.jpg' },
  { id: 15, name: 'Vannerie (paniers, nattes…)', country: 'Maroc', img: 'images/vannerie.jpg' },
  { id: 16, name: 'Beauté & Bien-être', country: 'Maroc', img: 'images/beaute.jpg' },
  { id: 17, name: 'Produits à base d’Argan', country: 'Maroc', img: 'images/argan.jpg' },
  { id: 18, name: 'Savons & Soins Naturels', country: 'Maroc', img: 'images/savons.jpg' },
  { id: 19, name: 'Huiles Essentielles', country: 'Maroc', img: 'images/huiles_essentielles.jpg' },
  { id: 20, name: 'Parfums Traditionnels', country: 'Maroc', img: 'images/parfums.jpg' },
  { id: 21, name: 'Décoration', country: 'Maroc', img: 'images/decoration.jpg' },
  { id: 22, name: 'Objets Déco', country: 'Maroc', img: 'images/objets_deco.jpg' },
  { id: 23, name: 'Luminaires Artisanaux', country: 'Maroc', img: 'images/luminaires.jpg' },
  { id: 24, name: 'Peintures & Calligraphie', country: 'Maroc', img: 'images/peintures.jpg' },
  { id: 25, name: 'Articles de Table', country: 'Maroc', img: 'images/table.jpg' },
  { id: 26, name: 'Cadeaux & Coffrets', country: 'Maroc', img: 'images/coffrets.jpg' },
  { id: 27, name: 'Coffrets Gourmands', country: 'Maroc', img: 'images/coffrets_gourmands.jpg' },
  { id: 28, name: 'Packs Bien-être', country: 'Maroc', img: 'images/packs_bien_etre.jpg' },
  { id: 29, name: 'Idées Cadeaux Artisanaux', country: 'Maroc', img: 'images/idees_cadeaux.jpg' },
  { id: 30, name: 'Mode & Accessoires', country: 'Maroc', img: 'images/mode.jpg' },
  { id: 31, name: 'Écharpes & Châles', country: 'Maroc', img: 'images/echarpes.jpg' },
  { id: 32, name: 'Accessoires en Cuir', country: 'Maroc', img: 'images/accessoires_cuir.jpg' },
  { id: 33, name: 'Bijoux Modernes', country: 'Maroc', img: 'images/bijoux_modernes.jpg' },
  { id: 34, name: 'Nouveautés', country: 'Maroc', img: 'images/nouveautes.jpg' },
  { id: 35, name: 'Derniers Produits', country: 'Maroc', img: 'images/derniers_produits.jpg' },
  { id: 36, name: 'Promotions', country: 'Maroc', img: 'images/promotions.jpg' },
  { id: 37, name: 'Offres Spéciales', country: 'Maroc', img: 'images/offres_speciales.jpg' },
];

const Categorie = () => {
  const [visibleItems, setVisibleItems] = useState(8); // Montre 8 au début

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 8); // Ajoute 8 de plus à chaque fois
  };

  const handleShowLess = () => {
    setVisibleItems(8); // Remet à 8 items
  };

  return (
    <div className="container mx-auto pt-16 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 hover:text-[#B5C18E] transition-colors duration-300 cursor-pointer">
        Découvre nos catégories
      </h2>

      {/* Grille responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-8 gap-8">
        {produit.slice(0, visibleItems).map((item) => (
          <CategoryCard
            key={item.id}
            name={item.name}
            country={item.country}
            img={item.img}
          />
        ))}
      </div>

      {/* Bouton "Voir plus" */}
      {visibleItems < produit.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 bg-[#B5C18E] text-white rounded-lg shadow hover:bg-[#9AA86E] transition-colors"
          >
            Voir plus
          </button>
        </div>
      )}

      {/* Bouton "Voir moins" */}
      {visibleItems > 8 && (
        <div className="flex justify-center mt-2">
          <button
            onClick={handleShowLess}
            className="px-6 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500 transition-colors"
          >
            Voir moins
          </button>
        </div>
      )}
    </div>
  );
};

export default Categorie;