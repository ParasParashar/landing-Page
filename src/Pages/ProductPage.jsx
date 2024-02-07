import React from "react";
import Products from "../components/Products";
import Header from "../components/Header";
import Cart from "../components/Cart";

const ProductPage = () => {
  return (
    <div className="bg-zinc-100 ">
      <Header />
      <div className="p-20">
        <Products />
        <Cart />
      </div>
    </div>
  );
};

export default ProductPage;
