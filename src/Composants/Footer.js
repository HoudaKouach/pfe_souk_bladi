import React from "react";

const Footer = () => {
  return (
      <footer className="bg-[#DEAC80] text-white">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2025 MonSite. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition">Accueil</a>
            <a href="#" className="hover:text-gray-300 transition">À propos</a>
            <a href="#" className="hover:text-gray-300 transition">Contact</a>
          </div>
        </div>
        <div className="bg-[#B5C18E] py-6">
          <div className="container mx-auto px-4 text-center text-sm">
            <p>Merci de votre visite !</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
