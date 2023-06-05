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

function ProductDisplay({ data }: { data: any }) {
  const displayProducts = data?.results?.map((product: any) => {
    return (
      <ProductCard
        key={product.id}
        title={product.title}
        description={product.description}
        price={product.price}
        stock={product.stock}
        image_url={product.image_url}
      />
    );
  });

  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mx-16">
      {displayProducts}
    </div>
  );
}

export default ProductDisplay;
