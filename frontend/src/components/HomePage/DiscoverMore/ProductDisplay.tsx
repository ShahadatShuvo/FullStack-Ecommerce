"use client";

import { useEffect, useState } from "react";
import ProductCard from "../NewArrival/ProductCard";

interface ProductDataProps {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
}

function ProductDisplay({
  data,
  resultMap,
}: {
  data: any;
  resultMap: boolean;
}) {
  let Data = resultMap ? data?.results : data;
  const displayProducts = Array.isArray(Data)
    ? Data.map((product: any) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          stock={product.stock}
          image_url={
            product.image_url[0] === "/"
              ? `http://127.0.0.1:8000${product.image_url}`
              : product.image_url
          }
        />
      ))
    : null;
  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mx-16">
      {displayProducts}
    </div>
  );
}

export default ProductDisplay;
