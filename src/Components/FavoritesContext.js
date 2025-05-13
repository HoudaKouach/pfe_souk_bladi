import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Lire les favoris depuis les cookies au premier chargement
  useEffect(() => {
    const savedFavorites = Cookies.get('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    } else {
      setFavorites([]); // Assurer qu'il n'y a pas de favoris vides
    }
  }, []);

  // Fonction pour ajouter ou supprimer un favori
  const toggleFavorite = (productId) => {
    let updatedFavorites;
    if (favorites.includes(productId)) {
      updatedFavorites = favorites.filter((id) => id !== productId); // Retirer du favoris
    } else {
      updatedFavorites = [...favorites, productId]; // Ajouter au favoris
    }
    setFavorites(updatedFavorites);
    
    // Sauvegarder les favoris dans les cookies
    Cookies.set('favorites', JSON.stringify(updatedFavorites), { path: '/', expires: 30 }); 
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
