import React, { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import heart from "../assets/heart-regular.svg";
import heartSelected from "../assets/heart-solid.svg";

const FavouriteButton = ({ id }) => {
  const { favouriteProducts, setFavouriteIds } = useContext(FavouritesContext);
  const isFavourite = favouriteProducts.includes(id);

  return (
    <div
      className="favourite-container"
      onClick={() => {
        setFavouriteIds(id);
      }}
    >
      <img
        className="favourite-icon"
        src={!isFavourite ? heart : heartSelected}
        alt="heart"
      />
    </div>
  );
};

export default FavouriteButton;
