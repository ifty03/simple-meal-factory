import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => setProducts(data?.meals));
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 mx-8 mt-6">
        {products?.map((product) => (
          <Product key={product.idMeal} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
