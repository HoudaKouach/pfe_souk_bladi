
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import CustomAlert from '../Components/CustomAlert';

export const CartContext = createContext();

export const CartProvider = ({ children, idClient }) => {
  const [cartItems, setCartItems] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const totalQuantite = cartItems.reduce((total, item) => total + item.quantity, 0);

  const cookieKey = `panier_${idClient}`;

  useEffect(() => {
    const panier = Cookies.get(cookieKey);
    if (panier) {
      setCartItems(JSON.parse(panier));
    } else {
      setCartItems([]);
    }
  }, [idClient]);

  const showAlert = (message) => {
    setAlertMessage(message);
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
  };

  const ajouterAuPanier = (produit) => {
    const produits = [...cartItems];

    const produitExistant = produits.find(p =>
      p.id_produit === produit.id_produit &&
      p.couleur === produit.couleur &&
      p.taille === produit.taille
    );

    if (!produitExistant) {
      produits.push({ ...produit });
    } else {
      produitExistant.quantity += produit.quantity;
    }

    setCartItems(produits);
    Cookies.set(cookieKey, JSON.stringify(produits), { expires: 7 });
    showAlert('Produit ajouté au panier !');
  };

  const modifierQuantite = (id_produit, couleur, taille, nouvelleQuantite) => {
    const produits = cartItems.map(p =>
      p.id_produit === id_produit && p.couleur === couleur && p.taille === taille
        ? { ...p, quantity: nouvelleQuantite }
        : p
    );
    setCartItems(produits);
    Cookies.set(cookieKey, JSON.stringify(produits), { expires: 7 });
  };

  const supprimerProduit = (id_produit, couleur, taille) => {
    const produits = cartItems.filter(p =>
      !(p.id_produit === id_produit && p.couleur === couleur && p.taille === taille)
    );
    setCartItems(produits);
    Cookies.set(cookieKey, JSON.stringify(produits), { expires: 7 });
  };

  // Fonction pour modifier un attribut (couleur, taille, volume)
  const modifierAttribut = (id_produit, attribut, nouvelleValeur, couleur, taille) => {
    const produits = cartItems.map(p => {
      if (p.id_produit === id_produit && p.couleur === couleur && p.taille === taille) {
        return {
          ...p,
          [attribut]: nouvelleValeur
        };
      }
      return p;
    });

    setCartItems(produits);
    Cookies.set(cookieKey, JSON.stringify(produits), { expires: 7 });
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      totalQuantite,
      ajouterAuPanier,
      modifierQuantite,
      supprimerProduit,
      modifierAttribut
    }}>
      {children}
      {alertVisible && (
        <CustomAlert message={alertMessage} onClose={() => setAlertVisible(false)} />
      )}
    </CartContext.Provider>
  );
};
