"use client";

import React, { useRef } from "react";
import TrendingprodCard from "./prodCard";
import { MutableRefObject } from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { IconButton } from "@mui/material";
import "./card.css";
import { useContext } from "react";
import { GlobalStates } from "@/app/context";

const prodImg = [
  {
    id: 1,
    img: "/img/trending/bottle.svg",
  },
  {
    id: 2,
    img: "/img/trending/lotion.svg",
  },
  {
    id: 3,
    img: "/img/trending/watch.svg",
  },
  {
    id: 4,
    img: "/img/trending/table.svg",
  },
  {
    id: 5,
    img: "/img/trending/bottle.svg",
  },
  {
    id: 6,
    img: "/img/trending/lotion.svg",
  },
  {
    id: 7,
    img: "/img/trending/watch.svg",
  },
  {
    id: 8,
    img: "/img/trending/table.svg",
  },
];

function TrendingProducts() {
  const { isDarkTheme } = useContext(GlobalStates);

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

  const displayProducts = prodImg.map((prod) => (
    <TrendingprodCard key={prod.id} img={prod.img} />
  ));

  return (
    <div>
      <div className="px-5 md:px-0 py-10 md:py-0 md:w-screen md:h-[70vh] md:my-24">
        <div className="md:my-10 flex flex-col items-center">
          <h1 className="mb-3 md:mb-0 capitalize md:text-4xl font-bold md:font-semibold">
            Best Selling products
          </h1>
          <p className="md:mt-10 text-sm md:text-lg text-center">
            Innovation meets demand, creating irresistible bestsellers that
            redefine consumer experiences.
          </p>
        </div>
        <div className="md:pb-16 flex justify-center items-center relative">
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
        </div>
        <div className="mt-10 md:mt-0 flex justify-center">
          <div
            className="py-10 w-[90%] flex gap-5 overflow-x-auto space-x-4 custom-scrollbar"
            style={{
              scrollBehavior: "smooth",
            }}
            ref={scrollRef}
          >
            {/* cart start */}
            {displayProducts}
            {/* cart end */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
