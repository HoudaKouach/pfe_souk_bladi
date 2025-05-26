import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';

// Composant pour un groupe de liens
const LinkSection = ({ title, links }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, idx) => (
        <li key={idx}>
          <Link to={link.url}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Composant pour un engagement
const Engagement = ({ imageSrc, text }) => (
  <div className="flex flex-col items-center">
    <img src={imageSrc} alt={text} className="w-10 h-10 mb-2" />
    <p className="text-sm font-medium text-center">{text}</p>
  </div>
);

const Footer = () => {
  const [categories, setCategories] = useState([]);
  const MAX_CATEGORIES = 15; // nombre max de catégories à afficher
  useEffect(() => {
    fetch('http://localhost/back-end_PFE/getCategories.php')
      .then(res => res.json())
      .then(data => {
        setCategories(data.slice(0, MAX_CATEGORIES));
      })
      .catch(err => console.error('Erreur chargement catégories :', err));
  }, []);

  const aboutLinks = [
    { label: "À propos de nous", url: "/a-propos" },
    { label: "Notre mission", url: "/mission" },
    // Ici, je passe en minuscules pour éviter problème de casse dans l'URL
    { label: "Nos coopératives", url: "/pagecooperatives" },
    { label: "Contactez-nous", url: "/contact" }
  ];

  const helpLinks = [
    { label: "Nous contacter", url: "/contact" },
    { label: "Paiement", url: "/paiement" },
    { label: "Modes et frais de livraison", url: "/livraison" },
    { label: "Politique de retour", url: "/retour" },
    { label: "FAQ", url: "/faq" },
    { label: "Espace vendeur", url: "/vendeur" }
  ];

  return (
    <footer className="bg-[#B5C18E] text-black">
      {/* Section Réseaux Sociaux */}
      <div className="bg-[#DEAC80] py-6 border-t border-gray-300">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-xl font-bold">Trouvez-nous sur</h2>
          <div className="flex space-x-4">
            <FaFacebook className="text-2xl hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-pink-600 cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-blue-400 cursor-pointer" />
            <FaYoutube className="text-2xl hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Catégories */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-bold">Catégories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
            {categories.map(cat => (
              <Link 
                to={`/categorie/${cat.id}`}
                key={cat.id}  // Clé unique pour React
              >
                {cat.name}
              </Link>
            ))}

          </div>
        </div>

        {/* Sections À propos et Aide */}
        <div className="space-y-8">
          <LinkSection title="À propos" links={aboutLinks} />
          <LinkSection title="Aide" links={helpLinks} />
        </div>

        {/* Paiement et Engagements */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Modes de paiement</h3>
            <div className="flex space-x-4 items-center">
              <img src="visa.png" alt="Visa" title="Visa" className="w-12 h-auto hover:opacity-80 transition duration-200" />
              <img src="mastercard.png" alt="Mastercard" title="Mastercard" className="w-12 h-auto hover:opacity-80 transition duration-200" />
              <img src="maestro.png" alt="Maestro" title="Maestro" className="w-12 h-auto hover:opacity-80 transition duration-200" />
              <img src="cash-on-delivery (2).png" alt="Cash on Delivery" title="Cash on Delivery" className="w-auto h-10 hover:opacity-80 transition duration-200" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Nos engagements</h3>
            <div className="grid grid-cols-2 gap-6 text-center">
              <Engagement imageSrc="authentique.png" text="Produits 100% authentiques" />
              <Engagement imageSrc="livraison.png" text="Livraison partout au Maroc" />
              <Engagement imageSrc="remboursement.png" text="Satisfait ou remboursé" />
              <Engagement imageSrc="national.png" text="Offre nationale" />
            </div>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="bg-[#B5C18E] text-center py-4 border-t border-gray-200">
        <p className="text-sm">&copy; 2025 - <span className="font-semibold">Souk Bladi</span> - Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
