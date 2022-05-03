import React, { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";

const NavbarButton = ({ eachCategory }) => {
  const { category, setCategory } = useContext(CategoriesContext);

  return (
    <li
      className={`navbar-item ${category === eachCategory ? "active" : null}`}
      onClick={() => {
        setCategory(eachCategory);
      }}
    >
      {eachCategory}
    </li>
  );
};

export default NavbarButton;
