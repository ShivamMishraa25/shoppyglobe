// src/components/ProductItem.jsx
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="p-4 border rounded-xl shadow hover:shadow-lg transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="mt-2 font-semibold">{product.title}</h2>
      <p>${product.price}</p>
      <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
