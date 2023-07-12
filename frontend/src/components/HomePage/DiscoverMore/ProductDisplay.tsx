"use client";

import ProductCard from "../../ProductCard";

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
    <div className="flex flex-wrap justify-center gap-5">{displayProducts}</div>
  );
}

export default ProductDisplay;
