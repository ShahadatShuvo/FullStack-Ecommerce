"use client";

import { Pagination } from "@mui/material";
import ProductCard from "../NewArrival/ProductCard";

function ProductDisplay() {
  return (
    <div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mx-16">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
