import React from "react";
import "./CategoryList.css";

function CategoryList({ categories, onSelectCategory }) {
  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  };

  return (
    <div className="category-list">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => handleCategoryClick(category)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;
