import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import TopNavbar from "../components/TopNavbar";
import { CategoriesContext } from "../context/CategoriesContext";

const HomePage = () => {
  const [allCategories, setAllCategories] = useState([]);
  const { category } = useContext(CategoriesContext);
  console.log(category, "category in HomePage");

  return (
    <div className="App">
      <TopNavbar header={"Products"} />
      <Navbar
        allCategories={allCategories}
        setAllCategories={setAllCategories}
      />
      <Products
        allCategories={allCategories}
        setAllCategories={setAllCategories}
      />
    </div>
  );
};

export default HomePage;
