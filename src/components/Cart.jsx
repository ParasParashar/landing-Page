import React, { useEffect, useState } from "react";
import axios from "axios";
const Cart = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("https://dummyjson.com/products?limit=20", {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res);
        setState(res.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    return () => controller.abort();
  }, []);
  return (
    <div className="grid md:grid-cols-2 gap-3 ">
      {state.map((item) => (
        <div
          key={item.id}
          className="flex  bg-blue-900 rounded-lg  border flex-col items-center p-1 justify-center gap-y-2"
        >
          <img
            className="object-cover p-1 rounded-lg w-[200px] h-[100px]"
            src={item.thumbnail}
            alt={item.name}
          />
          <h4 className="text-lg font-bold space-x-4">
            {item.title}
            <span className="text-xl font-bold italic text-blue-800">
              {item.price}$
            </span>
          </h4>
          <button>TExt byy</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
