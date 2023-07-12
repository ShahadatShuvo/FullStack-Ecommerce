import React from "react";
import CategoryCard from "./CategoryCard";
import Loading from "./Loading";

interface ProductCardProps {
  // key: number | string;
  id: number | string;
  title: string;
  intro: string | null;
  description: string;
  features: string | null;
  price: number;
  stock: number;
  qty: number;
  image_url: string | null;
}

function AllProductsDisplay({ data }: { data: ProductCardProps[] }) {
  const displayProducts = Array.isArray(data) ? (
    data.map((product: any) => (
      <CategoryCard key={product.id} product={product} />
    ))
  ) : (
    <Loading />
  );

  return (
    <div className="mt-16 w-[80vw] flex flex-wrap gap-7 flax-wrap justify-center">
      {displayProducts}
    </div>
  );
}

export default AllProductsDisplay;
