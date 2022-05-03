import React from "react";
import NavbarButton from "./NavbarButton";
import useFetch from "../useFetch";
import Loading from "./Loading";

const Navbar = () => {
  const { data, error, isLoading } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  return (
    <nav className="navbar">
      <ul>
        {isLoading === true && <Loading />}
        {error !== null && <div>{error}</div>}
        {isLoading === false &&
          data !== null &&
          data.map((eachCategory) => {
            return (
              <NavbarButton key={eachCategory} eachCategory={eachCategory} />
            );
          })}
      </ul>
    </nav>
  );
};

export default Navbar;
