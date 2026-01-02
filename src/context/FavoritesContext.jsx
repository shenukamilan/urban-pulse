import { createContext, useEffect, useState } from 'react';

const FavoritesContext = createContext();

// Load initial state from Local Storage
const getInitialState = () => {
  try {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error("Error loading favorites:", error);
    return [];
  }
}

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(getInitialState);
  // Sync favorites to Local Storage when state changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

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