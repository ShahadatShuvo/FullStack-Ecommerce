"use client";

import { useEffect, useRef, useState } from "react";
import "./index.css";
import ProductCard from "@/components/ProductCard";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function NewArrival() {
  const [newArrival, setNewArrival] = useState([]);
  console.log("newArrival:", newArrival);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseDown = (event: MouseEvent) => {
      event.preventDefault();
      if (!container) return;

      container.style.cursor = "grabbing";
      container.style.userSelect = "none";

      const scrollLeft = container.scrollLeft;
      const startX = event.pageX - container.offsetLeft;

      const handleMouseMove = (event: MouseEvent) => {
        if (!container) return;

        const x = event.pageX - container.offsetLeft;
        const walk = (x - startX) * 3;
        container.scrollLeft = scrollLeft - walk;
      };

      const handleMouseUp = () => {
        if (!container) return;

        container.style.cursor = "grab";
        container.style.removeProperty("user-select");

        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    if (container) {
      container.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`${apiUrl}/api/products/new-arrival`);

        if (response.ok) {
          const result = await response.json();
          setNewArrival(result);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, []);

  const displayProducts = newArrival.map((product: any) => (
    <ProductCard
      key={product.id}
      id={product.id}
      qty={product.qty}
      title={product.title}
      description={product.description}
      price={product.price}
      stock={product.stock}
      image_url={
        product.image_url[0] === "/"
          ? `http://127.0.0.1:8000${product.image_url}`
          : product.image_url
      }
    />
  ));

  return (
    <div className="my-16 mx-16">
      {/* Magic Line */}
      <div className="flex justify-start">
        <div className="border-4 border-gradient w-1/3"></div>
      </div>
      <h2 className="my-3 text-4xl font-semibold text-center">New Arrivals</h2>
      {/* Magic Line */}
      <div className="flex justify-end">
        <div className="border-4 border-gradient w-1/3"></div>
      </div>

      <div
        ref={containerRef}
        className="flex overflow-x-auto hide-scrollbar my-24 justify-between gap-5"
        style={{ cursor: "grab" }}
      >
        {displayProducts}
      </div>
    </div>
  );
}

export default NewArrival;
