import React from "react";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
