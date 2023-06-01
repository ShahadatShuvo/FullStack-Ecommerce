"use client";

import React from "react";
import ProductCard from "./ProductCard";

function NewArrival() {
  return (
    <div className="my-5 mx-16">
      <h2 className=" text-4xl font-semibold">
        New Arrivals.
        <span className="text-gray-500">REY backpacks & bags</span>
      </h2>
      <div className="my-12 flex justify-between">
        <ProductCard />
      </div>
    </div>
  );
}

export default NewArrival;
