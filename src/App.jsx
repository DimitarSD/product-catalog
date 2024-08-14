import React, { useState } from "react";
import CategoryList from "./components/CategoryList/CategoryList";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";

import { useFetchCategories } from "./hooks/useFetchCategories";

function App() {
  const { categories, visibleProducts, setVisibleProducts } = useFetchCategories();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const loadMoreProducts = (categoryName) => {
    setVisibleProducts((prev) => ({
      ...prev,
      [categoryName]: prev[categoryName] + 2,
    }));
  };

  return (
    <div className="App">
      <CategoryList
        categories={categories}
        onSelectCategory={handleCategorySelect}
      />
      {selectedCategory && (
        <ProductList
          category={selectedCategory}
          visibleCount={visibleProducts[selectedCategory.name]}
          loadMore={() => loadMoreProducts(selectedCategory.name)}
        />
      )}
    </div>
  );
}

export default App;
