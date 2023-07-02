import React from "react";
import ProductCard from "../ProductCard";
import { demoProductCard } from "../../../interfaces";

function SaveLists() {
  return (
    <div className="py-24">
      <div className="flex flex-wrap justify-center items-center gap-5 px-16">
        <ProductCard {...demoProductCard} />
        <ProductCard {...demoProductCard} />
        <ProductCard {...demoProductCard} />
        <ProductCard {...demoProductCard} />
        <ProductCard {...demoProductCard} />
        <ProductCard {...demoProductCard} />
        <ProductCard {...demoProductCard} />
      </div>
    </div>
  );
}

export default SaveLists;
