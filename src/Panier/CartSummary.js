import React from 'react';

function CartSummary({ totalItems, totalPrice }) {
  return (
    <aside className="mt-6 md:mt-0 w-full md:w-[360px] bg-white rounded-xl p-6 border border-[#DEAC80]">
      <h2 className="font-semibold text-[#DEAC80] mb-4 text-base">Résumé de votre commande</h2>
      <div className="bg-[#B5C18E] rounded-lg p-6 text-base text-black font-semibold">
        <div className="flex justify-between border-b border-black border-opacity-50 pb-2 mb-2">
          <span>Total articles ({totalItems})</span>
          <span>{totalPrice.toFixed(2)} Dh</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-normal text-sm">Frais de livraison</span>
          <span className="font-normal text-sm text-right max-w-[140px]">
            Calculé après sélection d'adresse
          </span>
        </div>
        <div className="flex justify-between border-t border-black border-opacity-50 pt-2 font-bold">
          <span>Total à payer</span>
          <span>{totalPrice.toFixed(2)} Dh</span>
        </div>
      </div>
      <button  className="mt-6 bg-[#DEAC80] text-white text-sm rounded-md py-2 px-6 w-full hover:bg-[#B99470] transition-colors duration-300">
        Valider mon panier
      </button>
      <div className="mt-6 bg-[#B5C18E] rounded-lg p-3 space-y-3 text-xs text-black font-normal">
        <div className="flex items-center space-x-3 bg-white rounded-full py-2 px-3">
          <div className="bg-[#DEAC80] p-2 rounded-full flex justify-center items-center text-white">
            {/* Ici on retire les icônes FontAwesome <i> car on affiche des images */}
            <img
              src="national.png"
              alt="Coopératives locales"
              title="Produits issus de coopératives locales"
              className="w-8 h-auto hover:opacity-80 transition duration-200"
            />
          </div>
          <p>Les produits sont issus de coopératives locales</p>
        </div>
        <div className="flex items-center space-x-3 bg-white rounded-full py-2 px-3">
          <div className="bg-[#DEAC80] p-2 rounded-full flex justify-center items-center text-white">
            <img
              src="livraison.png"
              alt="Livraison rapide"
              title="Livraison sous 3 à 5 jours ouvrables"
              className="w-8 h-auto hover:opacity-80 transition duration-200"
            />
          </div>
          <p>Livraison sous 3 à 5 jours ouvrables</p>
        </div>
        <div className="flex items-center space-x-3 bg-white rounded-full py-2 px-3">
          <div className="bg-[#DEAC80] p-2 rounded-full flex justify-center items-center text-white">
            <img
              src="remboursement.png"
              alt="Politique de retour"
              title="Retours acceptés sous 7 jours"
              className="w-8 h-auto hover:opacity-80 transition duration-200"
            />
          </div>
          <p>Retours acceptés sous 7 jours</p>
        </div>
      </div>
    </aside>
  );
}

export default CartSummary;

// import React from 'react';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_test_51RTuy03k01OnyK934RiCk4COiYApKmi1etNineZS92TAJYtH3ezUvgTxJOKMSWvxm8RhS3QRMbN99kFyLbeyjeTS00BTdZhVBh'); // ta clé publique test Stripe

// function CartSummary({ totalItems, totalPrice, cartItems, address }) {
// const handleCheckout = async () => {
//   try {
//     const response = await fetch('http://localhost/back-end_PFE/checkout.php', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         cartItems: cartItems,
//         address: address,
//       }),
//     });

//     const data = await response.json();

//     if (data.sessionUrl) {

//       window.location.href = data.sessionUrl; // redirection vers Stripe Checkout
      
//     } else {
//       alert('Erreur lors de la création de la session de paiement.');
//     }
//   } catch (error) {
//     console.error('Erreur:', error);
//     alert('Erreur de paiement. Veuillez réessayer.');
//     console.log(JSON.stringify({ cartItems, address }));

//   }
// };

//   return (
//     <aside className="mt-6 md:mt-0 w-full md:w-[360px] bg-white rounded-xl p-6 border border-[#DEAC80]">
//       <h2 className="font-semibold text-[#DEAC80] mb-4 text-base">Résumé de votre commande</h2>
//       <div className="bg-[#B5C18E] rounded-lg p-6 text-base text-black font-semibold">
//         <div className="flex justify-between border-b border-black border-opacity-50 pb-2 mb-2">
//           <span>Total articles ({totalItems})</span>
//           <span>{totalPrice.toFixed(2)} Dh</span>
//         </div>
//         <div className="flex justify-between mb-2">
//           <span className="font-normal text-sm">Frais de livraison</span>
//           <span className="font-normal text-sm text-right max-w-[140px]">
//             Calculé après sélection d'adresse
//           </span>
//         </div>
//         <div className="flex justify-between border-t border-black border-opacity-50 pt-2 font-bold">
//           <span>Total à payer</span>
//           <span>{totalPrice.toFixed(2)} Dh</span>
//         </div>
//       </div>
//       <button
//         onClick={handleCheckout}
//         className="mt-6 bg-[#DEAC80] text-white text-sm rounded-md py-2 px-6 w-full hover:bg-[#B99470] transition-colors duration-300"
//       >
//         Valider mon panier
//       </button>

//       {/* Infos livraison */}
//       <div className="mt-6 bg-[#B5C18E] rounded-lg p-3 space-y-3 text-xs text-black font-normal">
//         <div className="flex items-center space-x-3 bg-white rounded-full py-2 px-3">
//           <div className="bg-[#DEAC80] p-2 rounded-full flex justify-center items-center text-white">
//             <img src="national.png" alt="Coopératives locales" className="w-8 h-auto" />
//           </div>
//           <p>Les produits sont issus de coopératives locales</p>
//         </div>
//         <div className="flex items-center space-x-3 bg-white rounded-full py-2 px-3">
//           <div className="bg-[#DEAC80] p-2 rounded-full flex justify-center items-center text-white">
//             <img src="livraison.png" alt="Livraison rapide" className="w-8 h-auto" />
//           </div>
//           <p>Livraison sous 3 à 5 jours ouvrables</p>
//         </div>
//         <div className="flex items-center space-x-3 bg-white rounded-full py-2 px-3">
//           <div className="bg-[#DEAC80] p-2 rounded-full flex justify-center items-center text-white">
//             <img src="remboursement.png" alt="Politique de retour" className="w-8 h-auto" />
//           </div>
//           <p>Retours acceptés sous 7 jours</p>
//         </div>
//       </div>
//     </aside>
//   );
// }

// export default CartSummary;
