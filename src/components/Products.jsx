import React, { useState } from "react";

const Products = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetch("https://dummyjson.com/products?limit=20", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        setState(res.products);
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
          className="flex  bg-slate-100 rounded-lg  border flex-col items-center p-1 justify-center gap-y-2"
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
        </div>
      ))}
    </div>
  );
};

export default Products;
