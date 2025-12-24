import { createContext, useState } from 'react';

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Add ID
  const addFavorite = (id) => {
    const idString = String(id);
    setFavorites((prev) => {
      if (!prev.includes(idString)) {
        return [...prev, idString];
      }
      return prev;
    });
  };

  // Remove ID
  const removeFavorite = (id) => {
    const idString = String(id);
    setFavorites((prev) => prev.filter((item) => item !== idString));
  };

  // Clear All
  const clearFavorites = () => {
    setFavorites([]);
  };

  // Check if ID is in list
  const isFavorite = (id) => favorites.includes(String(id));

  return (
    <FavoritesContext.Provider 
      value={{ 
        favorites, 
        addFavorite, 
        removeFavorite, 
        clearFavorites, 
        isFavorite 
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesProvider, FavoritesContext };