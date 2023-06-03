import ProductCard from "../NewArrival/ProductCard";

function ProductDisplay() {
  return (
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
  );
}

export default ProductDisplay;
