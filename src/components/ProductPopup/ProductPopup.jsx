import React from "react";
import "./ProductPopup.css";

import { capitalizeFirstLetter } from "./../../utils/utils";

function ProductPopup({ product, onClose }) {
  return (
    <>
      <div className="product-popup-overlay" onClick={onClose}></div>
      <div className="product-popup">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p className="price">${product.price}</p>
        <div className="popup-features">
          {Object.entries(product.features).map(([key, value]) => (
            <p key={key}>
              <strong>{capitalizeFirstLetter(key)}:</strong> {value}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductPopup;
