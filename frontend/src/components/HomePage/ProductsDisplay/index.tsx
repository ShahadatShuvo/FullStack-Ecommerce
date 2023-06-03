"use client";

import { Pagination } from "@mui/material";
import ProductCard from "../NewArrival/ProductCard";
import { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const USERNAME = "shahadat"; // Replace with your username
const PASSWORD = "bangladesh7860"; // Replace with your password

function ProductDisplay() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null || "Error");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`, {
          headers: {
            Authorization: `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`, // Base64 encoded username:password
          },
        });

        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log("data: ", data);

  const displayProducts = data?.map((product: any) => {
    return (
      <ProductCard
        key={product.id}
        title={product.title}
        description={product.description}
        price={product.price}
        image_url={product.image_url}
      />
    );
  });

  return (
    <div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mx-16">
        {displayProducts}
        {/* <ProductCard />  */}
      </div>
      <div className="my-5 mb-12 w-full flex justify-center items-center select-none">
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </div>
    </div>
  );
}

export default ProductDisplay;
