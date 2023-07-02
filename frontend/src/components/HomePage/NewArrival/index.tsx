"use client";

import ProductCard from "@/components/ProductCard";
import MagicLine from "@/components/SubComponent/MagicLine";
import { useEffect, useRef, useState } from "react";
import "./index.css";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function NewArrival() {
  const [newArrival, setNewArrival] = useState([]);
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
          ? `${apiUrl}${product.image_url}`
          : product.image_url
      }
    />
  ));

  return (
    <div className=" my-8 md:my-16 ">
      <MagicLine title="New Arrivals" />

      <div
        ref={containerRef}
        className="flex overflow-x-auto hide-scrollbar my-24  mx-16 justify-between gap-5"
        style={{ cursor: "grab" }}
      >
        {displayProducts}
      </div>
    </div>
  );
}

export default NewArrival;
