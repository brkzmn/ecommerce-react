import React, { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";

import { Link } from "react-router-dom";

const TopNavbar = ({ header }) => {
  const { category, setCategory } = useContext(CategoriesContext);

  return (
    <div className="header">
      <h1>{header}</h1>
      <Link
        to={"/"}
        className="nav-link"
        onClick={() => {
          if (category !== "all") {
            setCategory("all");
          }
        }}
      >
        Products
      </Link>
      <Link to={"/favourites"} className="nav-link">
        Favourites
      </Link>
    </div>
  );
};

export default TopNavbar;
