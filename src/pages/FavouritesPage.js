import React, { useState, useEffect, useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

import TopNavbar from "../components/TopNavbar";
const FavouritesPage = () => {
  const { favouriteProducts } = useContext(FavouritesContext);
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = async (id) => {
    if (isLoading === false) {
      setIsLoading(true);
    }

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) throw "HTTP Error";
      const data = await response.json();

      setProductList((previousState) => [...previousState, data]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    setProductList([]);
    favouriteProducts.forEach((favouriteId) => {
      getProducts(favouriteId);
    });
  }, [favouriteProducts]);

  return (
    <div>
      <TopNavbar header={"Favourites"} />
      <ul className="products-container">
        {isLoading === true && <Loading />}
        {error !== null && <div>{error}</div>}
        {favouriteProducts.length === 0 && (
          <div>You haven't chosen any favourites yet!</div>
        )}
        {isLoading === false &&
          productList.map((eachProduct, index) => {
            return <ProductCard key={index + 1} productInfo={eachProduct} />;
          })}
      </ul>
    </div>
  );
};

export default FavouritesPage;
