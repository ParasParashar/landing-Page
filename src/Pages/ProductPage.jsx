import React from "react";
import Products from "../components/Products";
import Header from "../components/Header";

const ProductPage = () => {
  return (
    <div className="bg-zinc-100 ">
      <Header />
      <div className="p-20">
        <Products />
      </div>
    </div>
  );
};

export default ProductPage;
