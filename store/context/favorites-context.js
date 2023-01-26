import { useState } from "react";
import { createContext } from "react";

// act like a blueprint of the context
// even there is no value here, it help provide an autocompletion later in IDE
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => {
      return [...currentFavIds, id];
    });
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) => {
      return currentFavIds.filter((mealId) => mealId !== id);
    });
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContextProvider;
