import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { FavouritesProvider } from "./context/FavouritesContext";
import { CategoriesProvider } from "./context/CategoriesContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  return (
    <FavouritesProvider>
      <CategoriesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>
        </Router>
      </CategoriesProvider>
    </FavouritesProvider>
  );
}

export default App;
