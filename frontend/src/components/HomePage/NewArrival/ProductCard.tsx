import Image from "next/image";
import React from "react";

function ProductCard() {
  return (
    <div>
      <div className="card">
        <div>
          <Image src="/img/cart/shoe.jpg" alt="" width={300} height={300} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
