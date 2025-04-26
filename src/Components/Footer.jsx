// import React from 'react';
// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { FiArrowRight } from 'react-icons/fi';

// const Footer = () => {
//   // بيانات الفئات
//   const productCategories = [
//     "Dattes & produits dérivés",
//     "Miel & produits de la ruche",
//     "Huiles naturelles",
//     "Épices & haches aromatiques",
//     "Cosmétiques artisanaux",
//     "Plantes médicinales"
//   ];

//   // بيانات قسم À propos
//   const aboutLinks = [
//     "À propos de nous",
//     "Notre mission",
//     "Nos coopératives",
//     "Contacter nous"
//   ];

//   // بيانات قسم Aide
//   const helpLinks = [
//     "Nous contacter",
//     "Paiement",
//     "Modes et frais de livraison",
//     "Politique de Retour",
//     "FAQ",
//     "Accès espace vendeur"
//   ];

//   return (
//     <footer className="bg-gray-100">
//       <div className="py-8 bg-white border-t border-gray-200">
//         <div className="container mx-auto px-4">
//           {/* العنوان */}
//           <h2 className="text-xl font-bold mb-4">Trouvez-nous sur</h2>

//           {/* أيقونات التواصل الاجتماعي */}
//           <div className="flex space-x-4 mb-4">
//             <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
//               <FaFacebook className="text-2xl" />
//             </a>
//             <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
//               <FaInstagram className="text-2xl" />
//             </a>
//             <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
//               <FaTwitter className="text-2xl" />
//             </a>
//             <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
//               <FaYoutube className="text-2xl" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* الأقسام الثلاثة الرئيسية */}
//       <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* قسم Catégories */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">Catégories de produits</h3>
//           <ul className="space-y-2">
//             {productCategories.map((category, index) => (
//               <li key={index}>
//                 <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
//                   {category}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* قسم À propos */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">À propos</h3>
//           <ul className="space-y-2">
//             {aboutLinks.map((link, index) => (
//               <li key={index}>
//                 <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
//                   {link}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* قسم Aide */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">Aide</h3>
//           <ul className="space-y-2">
//             {helpLinks.map((link, index) => (
//               <li key={index}>
//                 <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
//                   {link}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* قسم طرق الدفع */}
//       <div className="bg-white py-6 border-t border-gray-200">
//         <div className="container mx-auto px-4">
//           <h3 className="text-lg font-bold mb-4">Modes de paiement</h3>
//           <div className="flex items-center space-x-4">
//             <span className="font-semibold">VISA</span>
//             {/* يمكن إضافة أيقونات أخرى لطرق الدفع هنا */}
//             <img src="/images/mastercard-logo.png" alt="Mastercard" className="h-8" />
//             <img src="/images/paypal-logo.png" alt="PayPal" className="h-8" />
//           </div>
//         </div>
//       </div>

//       {/* حقوق النشر */}
//       <div className="bg-gray-800 text-white py-6">
//         <div className="container mx-auto px-4 text-center">
//           <p>© 2025 - Souk Bladi - Tous droits réservés.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
























import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const Footer = () => {

  const productCategories = [
    "Dattes & produits dérivés",
    "Miel & produits de la ruche",
    "Huiles naturelles",
    "Épices & haches aromatiques",
    "Cosmétiques artisanaux",
    "Plantes médicinales"
  ];


  const aboutLinks = [
    "À propos de nous",
    "Notre mission",
    "Nos coopératives",
    "Contacter nous"
  ];


  const helpLinks = [
    "Nous contacter",
    "Paiement",
    "Modes et frais de livraison",
    "Politique de Retour",
    "FAQ",
    "Accès espace vendeur"
  ];

  return (
    <footer className="bg-[#B5C18E] ">
      <div className="py-8 bg-[#DEAC80] border-t border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h2 className="text-xl font-bold mb-4">Trouvez-nous sur</h2>

          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* قسم Catégories */}
        <div>
          <h3 className="text-xl font-bold mb-4">Catégories de produits</h3>
          <ul className="space-y-2">
            {productCategories.map((category, index) => (
              <li key={index}>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-bold mb-4">À propos</h3>
          <ul className="space-y-2">
            {aboutLinks.map((link, index) => (
              <li key={index}>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-bold mb-4">Aide</h3>
          <ul className="space-y-2">
            {helpLinks.map((link, index) => (
              <li key={index}>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-bold mb-4">Modes de paiement</h3>
          <div className="flex items-center space-x-4">
            <span className="font-semibold">VISA</span>
            <img src="/images/mastercard-logo.png" alt="Mastercard" className="h-8" />
            <img src="/images/paypal-logo.png" alt="PayPal" className="h-8" />
          </div>
        </div>
      </div>


      <div className="bg-[#B5C18E]  text-black py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 - Souk Bladi - Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
