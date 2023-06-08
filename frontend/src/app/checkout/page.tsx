import Link from "next/link";
import React from "react";

function Checkout() {
  return (
    <div className="bg-white h-screen py-8">
      Checkout
      <Link href="/">
        <p>Home</p>
      </Link>
    </div>
  );
}

export default Checkout;
