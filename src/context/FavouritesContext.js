import { useState, createContext } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = (props) => {
  const [favouriteProducts, setFavouriteProducts] = useState([]);

  const setFavouriteIds = (id) => {
    let ids = [...favouriteProducts];

    if (!ids.includes(id)) {
      ids.push(id);
      setFavouriteProducts(ids);
      return;
    }

    if (ids.includes(id)) {
      ids = ids.filter((favouriteId) => {
        return favouriteId !== id;
      });
      setFavouriteProducts(ids);
      return;
    }

    return;
  };

  const favourites = {
    setFavouriteProducts,
    favouriteProducts,
    setFavouriteIds,
  };

  return (
    <FavouritesContext.Provider value={favourites}>
      {props.children}
    </FavouritesContext.Provider>
  );
};
