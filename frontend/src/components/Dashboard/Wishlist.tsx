import { useEffect, useState } from "react";
import { ProductCardProps } from "../../../interfaces";
import ProductCard from "../ProductCard";

function Wishlist() {
  const [wishlist, setWishlist] = useState<ProductCardProps[]>([]);
  useEffect(() => {
    // Retrieve the wishlist from the localStorage
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);
  return (
    <div className="py-24">
      <div className="flex flex-wrap justify-center items-center gap-5 px-16">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              intro={product.intro}
              description={product.description}
              features={product.features}
              price={product.price}
              image_url={product.image_url || "/img/order.svg"}
              stock={product.stock}
              qty={product.qty}
            />
          ))
        ) : (
          <div className=" md:w-[70vw] font-semibold text-sm md:text-2xl flex items-center justify-start">
            Your Wishlist is empty!
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
