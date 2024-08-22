import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";

export const ProuductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    const url = `http://localhost:4000/products`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <ProductCard />
    </div>
  );
};
