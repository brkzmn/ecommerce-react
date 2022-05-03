import React from "react";
import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButton";

const ProductCard = ({ productInfo }) => {
  return (
    <li className="product-card">
      <Link to={`/product/${productInfo.id}`}>
        <div>
          <img
            className="product-image"
            src={productInfo.image}
            alt={productInfo.title}
          />
          <span className="product-title">{productInfo.title}</span>
        </div>
      </Link>
      <FavouriteButton id={productInfo.id} />
    </li>
  );
};

export default ProductCard;
