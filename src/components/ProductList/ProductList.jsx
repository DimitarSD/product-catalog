import React, { useState } from "react";
import ProductCard from "./../ProductCard/ProductCard";
import ProductPopup from "./../ProductPopup/ProductPopup";
import "./ProductList.css";

function ProductList({ category, visibleCount, loadMore }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-list">
      {category.products.slice(0, visibleCount).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={handleProductClick}
        />
      ))}
      {visibleCount < category.products.length && (
        <div className="load-more-container">
          <button onClick={loadMore}>Load More Products</button>
        </div>
      )}
      {selectedProduct && (
        <ProductPopup product={selectedProduct} onClose={closePopup} />
      )}
    </div>
  );
}

export default ProductList;
