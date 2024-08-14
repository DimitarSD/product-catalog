import React from "react";
import "./ProductCard.css";

function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <img src={product.image} alt={product.name} loading="lazy" />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;
