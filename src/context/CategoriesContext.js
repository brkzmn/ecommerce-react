import { useState, createContext } from "react";

export const CategoriesContext = createContext();

export const CategoriesProvider = (props) => {
  const [category, setCategory] = useState("all");
  const categories = {
    category,
    setCategory,
  };

  return (
    <CategoriesContext.Provider value={categories}>
      {props.children}
    </CategoriesContext.Provider>
  );
};
