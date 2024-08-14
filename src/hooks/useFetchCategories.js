import { useEffect, useState } from "react";

export function useFetchCategories() {
  const [categories, setCategories] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState({});

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);

        const initialVisibility = {};

        data.categories.forEach((category) => {
          initialVisibility[category.name] = 2;
        });

        setVisibleProducts(initialVisibility);
      });
  }, []);

  return { categories, visibleProducts, setVisibleProducts };
}