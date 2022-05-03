import React, { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import useFetch from "../useFetch";

const Products = () => {
  const { category } = useContext(CategoriesContext);
  let url;

  if (category === "all") {
    url = "https://fakestoreapi.com/products";
  } else {
    url = `https://fakestoreapi.com/products/category/${category}`;
  }

  const { data, isLoading, error } = useFetch(url);

  return (
    <ul className="products-container">
      {isLoading === true && <Loading />}
      {error !== null && <div>{error}</div>}
      {isLoading === false &&
        data !== null &&
        data.map((eachProduct, index) => {
          return <ProductCard key={index + 1} productInfo={eachProduct} />;
        })}
    </ul>
  );
};

export default Products;
