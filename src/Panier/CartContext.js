// import { createContext, useState, useEffect } from 'react';
// import Cookies from 'js-cookie';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const panier = Cookies.get('panier');
//     if (panier) {
//       setCartItems(JSON.parse(panier));
//     }
//   }, []);

//   const ajouterAuPanier = (produit) => {
//     const produits = [...cartItems];
//     const produitExistant = produits.find(p => p.id_produit === produit.id_produit);

//     if (!produitExistant) {
//       produits.push({ ...produit, quantite: 1 });
//     } else {
//       produitExistant.quantite += 1;
//     }

//     setCartItems(produits);
//     Cookies.set('panier', JSON.stringify(produits), { expires: 7 });
//     alert('Produit ajouté au panier !');

    
//   };

//   return (
//     <CartContext.Provider value={{ panier, setPanier, ajouterAuPanier }}>
//         {children}
//     </CartContext.Provider>
//   );
// };

// import { createContext, useState, useEffect } from 'react';
// import Cookies from 'js-cookie';

// export const CartContext = createContext();
// const [cartItems, setCartItems] = useState([]); // chaque item a une propriété `quantite`

// const modifierQuantite = (idProduit, nouvelleQuantite) => {
//   const updatedItems = cartItems.map(item => 
//     item.id_produit === idProduit ? { ...item, quantite: nouvelleQuantite } : item
//   );
//   setCartItems(updatedItems);
//   Cookies.set('panier', JSON.stringify(updatedItems), { expires: 7 });
// };
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(() => {
//     const panier = Cookies.get('panier');
//     return panier ? JSON.parse(panier) : [];
//   });

//   // Fonction pour modifier le panier et le cookie en même temps
//   const setCartEtCookie = (nouveauPanier) => {
//     setCartItems(nouveauPanier);
//     Cookies.set('panier', JSON.stringify(nouveauPanier), { expires: 7 });
//   };

//   const ajouterAuPanier = (produit) => {
//     const produits = [...cartItems];
//     const produitExistant = produits.find(p => p.id_produit === produit.id_produit);

//     if (!produitExistant) {
//       produits.push({ ...produit, quantite: 1 });
//     } else {
//       produitExistant.quantite += 1;
//     }

//     setCartEtCookie(produits);
//     alert('Produit ajouté au panier !');
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, setCartItems: setCartEtCookie, ajouterAuPanier }}>
//       {children}
//     </CartContext.Provider>
//   );
// };



// import { createContext, useState, useEffect } from 'react';
// import Cookies from 'js-cookie';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const panier = Cookies.get('panier');
//     if (panier) {
//       setCartItems(JSON.parse(panier));
//     }
//   }, []);

//   const ajouterAuPanier = (produit) => {
//     const produits = [...cartItems];
//     const produitExistant = produits.find(p => p.id_produit === produit.id_produit);

//     if (!produitExistant) {
//       produits.push({ ...produit, quantite: 1 });
//     } else {
//       produitExistant.quantite += 1;
//     }

//     setCartItems(produits);
//     Cookies.set('panier', JSON.stringify(produits), { expires: 7 });
//     alert('Produit ajouté au panier !');
//   };

//   const modifierQuantite = (id_produit, nouvelleQuantite) => {
//     const produits = cartItems.map(p =>
//       p.id_produit === id_produit ? { ...p, quantite: nouvelleQuantite } : p
//     );
//     setCartItems(produits);
//     Cookies.set('panier', JSON.stringify(produits), { expires: 7 });
//   };

//   const supprimerProduit = (id_produit) => {
//     const produits = cartItems.filter(p => p.id_produit !== id_produit);
//     setCartItems(produits);
//     Cookies.set('panier', JSON.stringify(produits), { expires: 7 });
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, ajouterAuPanier, modifierQuantite, supprimerProduit }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


// CartProvider.jsx
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import CustomAlert from '../Components/CustomAlert'; // adapte le chemin si besoin

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const panier = Cookies.get('panier');
    if (panier) {
      setCartItems(JSON.parse(panier));
    }
  }, []);

  const showAlert = (message) => {
    setAlertMessage(message);
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
  };

  const ajouterAuPanier = (produit) => {
    const produits = [...cartItems];
    const produitExistant = produits.find(p => p.id_produit === produit.id_produit);

    if (!produitExistant) {
      produits.push({ ...produit, quantite: 1 });
    } else {
      produitExistant.quantite += 1;
    }

    setCartItems(produits);
    Cookies.set('panier', JSON.stringify(produits), { expires: 7 });

    showAlert('Produit ajouté au panier !');
  };

  const modifierQuantite = (id_produit, nouvelleQuantite) => {
    const produits = cartItems.map(p =>
      p.id_produit === id_produit ? { ...p, quantite: nouvelleQuantite } : p
    );
    setCartItems(produits);
    Cookies.set('panier', JSON.stringify(produits), { expires: 7 });
  };

  const supprimerProduit = (id_produit) => {
    const produits = cartItems.filter(p => p.id_produit !== id_produit);
    setCartItems(produits);
    Cookies.set('panier', JSON.stringify(produits), { expires: 7 });
  };

  return (
    <CartContext.Provider value={{ cartItems, ajouterAuPanier, modifierQuantite, supprimerProduit }}>
      {children}
      {alertVisible && (
        <CustomAlert message={alertMessage} onClose={() => setAlertVisible(false)} />
      )}
    </CartContext.Provider>
  );
};
