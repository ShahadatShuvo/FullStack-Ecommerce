"use client";

import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../NewArrival/ProductCard";

interface ProductDataProps {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
}

function ProductDisplay({ data }: { data: ProductDataProps[] }) {
  const displayProducts = data?.map((product: any) => {
    return (
      <ProductCard
        key={product.id}
        title={product.title}
        description={product.description}
        price={product.price}
        image_url={product.image_url}
      />
    );
  });

  return (
    <div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mx-16">
        {displayProducts}
      </div>
      <div className="my-5 mb-12 w-full flex justify-center items-center select-none">
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </div>
    </div>
  );
}

export default ProductDisplay;
