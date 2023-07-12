"use client";

import { GlobalStates } from "@/app/context";
import ProductCard from "@/components/ProductCard";
import MagicLine from "@/components/SubComponent/MagicLine";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { IconButton } from "@mui/material";
import {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./index.css";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function NewArrival() {
  const { isDarkTheme } = useContext(GlobalStates);

  const [newArrival, setNewArrival] = useState([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current !== null) {
      scrollRef.current.scrollLeft -= 400; // Adjust the scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current !== null) {
      scrollRef.current.scrollLeft += 400; // Adjust the scroll amount as needed
    }
  };

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
      } catch (error) {}
    };
    fetchData();
  }, []);

  const displayProducts = newArrival.map((product: any) => (
    <ProductCard
      key={product.id}
      id={product.id}
      qty={product.qty}
      title={product.title}
      intro={product.intro}
      description={product.description}
      features={product.features}
      price={product.price}
      stock={product.stock}
      image_url={
        product.image_url ? `${apiUrl}${product.image_url}` : "/img/order.svg"
      }
    />
  ));

  return (
    <div className="my-8  relative">
      <div className="py-5 md:py-10 mx-5 md:mx-16">
        <div className="mb-16">
          <div className="flex justify-start">
            <div className="border-2 md:border-4 border-gradient w-[30vw]"></div>
          </div>
          <h1 className="text-xl py-2 md:py-0 md:text-4xl font-bold text-center">
            New Arrival
          </h1>
          <div className="flex justify-end">
            <div className="border-2 md:border-4 border-gradient w-[30vw]"></div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute right-16">
        <IconButton
          aria-label="left"
          sx={{
            color: !isDarkTheme ? "gray" : "white",
          }}
          className={
            !isDarkTheme
              ? "active:text-blue-400"
              : "text-white active:text-blue-400"
          }
          onClick={scrollLeft}
        >
          <ArrowCircleLeftOutlinedIcon />
        </IconButton>
        <IconButton
          aria-label="right"
          sx={{
            color: !isDarkTheme ? "gray" : "white",
          }}
          className={
            !isDarkTheme
              ? "active:text-blue-400"
              : "text-white active:text-blue-400"
          }
          onClick={scrollRight}
        >
          <ArrowCircleRightOutlinedIcon />
        </IconButton>
      </div>

      <div
        // className="flex overflow-x-auto hide-scrollbar my-16 mx-16 justify-between gap-5 custom-scrollbar"
        className="flex flex-wrap md:flex-nowrap justify-center  gap-3  my-0  mx-5 pb-16 md:pb-0 md:flex overflow-x-auto hide-scrollbar md:my-16 md:mx-16 md:justify-between md:gap-5 custom-scrollbar"
        style={{
          scrollBehavior: "smooth",
        }}
        ref={scrollRef}
      >
        {displayProducts}
      </div>
    </div>
  );
}

export default NewArrival;
