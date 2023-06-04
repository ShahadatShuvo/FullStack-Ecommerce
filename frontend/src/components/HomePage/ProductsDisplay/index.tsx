"use client";

import React, { useEffect, useState } from "react";
import ProductDisplay from "./ProductDisplay";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const USERNAME = "shahadat"; // Replace with your username
const PASSWORD = "bangladesh7860"; // Replace with your password

interface ProductDataProps {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
}

function ProductContainer() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null || "Error");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products`, {
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

  return (
    <div>
      <ProductDisplay data={data} />
    </div>
  );
}

export default ProductContainer;
