"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { useRef, useEffect } from "react";
import "./index.css";

function NewArrival() {
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

  return (
    <div className="my-5 mx-16">
      <h2 className=" text-4xl font-semibold">
        New Arrivals.
        <span className="text-gray-500 ml-2">REY backpacks & bags</span>
      </h2>

      <div
        ref={containerRef}
        className="flex overflow-x-auto hide-scrollbar my-12 justify-between gap-5"
        style={{ cursor: "grab" }}
      >
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
    </div>
  );
}

export default NewArrival;
