"use client";

import ProductCard from "../../ProductCard";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

interface ProductDataProps {
  id: number;
  title: string;
  qty: number;
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
          id={product.id}
          qty={product.qty}
          title={product.title}
          intro={product.intro}
          description={product.description}
          features={product.features}
          price={product.price}
          stock={product.stock}
          image_url={product.image_url || "/img/order.svg"}
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
