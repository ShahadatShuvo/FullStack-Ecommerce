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
              description={product.description}
              price={product.price}
              image_url={product.image_url}
            />
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
