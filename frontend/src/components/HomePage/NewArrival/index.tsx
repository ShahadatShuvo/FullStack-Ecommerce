"use client";

import React from "react";
import ProductCard from "./ProductCard";
import "./index.css";

function NewArrival() {
  return (
    <div className="my-5 mx-16">
      <h2 className=" text-4xl font-semibold">
        New Arrivals.
        <span className="text-gray-500 ml-2">REY backpacks & bags</span>
      </h2>

      <div className="my-12 flex justify-between gap-3 overflow-x-scroll">
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
    </div>
  );
}

export default NewArrival;
