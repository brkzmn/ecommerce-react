import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import FavouriteButton from "../components/FavouriteButton";
import TopNavbar from "../components/TopNavbar";
import useFetch from "../useFetch";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const { data, isLoading, error } = useFetch(url);

  return (
    <div>
      <TopNavbar header={"Product Details"} />
      {isLoading === true && <Loading />}
      {error !== null && <div>{error}</div>}
      {isLoading === false && (
        <div className="product-details">
          <div className="details-title-container">
            <h2 className="details-title">{data.title}</h2>
          </div>
          <div className="product-details-container">
            <FavouriteButton id={data.id} />
            <p className="product-details-description">{data.description}</p>
            <div className="product-image-container">
              <img
                className="product-image"
                src={data.image}
                alt={data.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
