"use client";

import React, { createContext, useState } from "react";
import HomePage from "@/components/HomePage";

interface ProductCardProps {
  id: number | string;
  title: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
}

interface ContextValue {
  contextValue: ProductCardProps[];
  increateContextValue: (newValue: ProductCardProps) => void;
}

export const CartItemContext = createContext<ContextValue>({
  contextValue: [],
  increateContextValue: () => {},
});

function AllPages() {
  const [contextValue, setContextValue] = useState([]);

  //   console.log("contextValue:", contextValue);

  const increateContextValue = (newValue: ProductCardProps) => {
    setContextValue((prevState: ProductCardProps[]) => [
      ...prevState,
      newValue,
    ]);
  };

  return (
    <div>
      <CartItemContext.Provider value={{ contextValue, increateContextValue }}>
        <HomePage />
      </CartItemContext.Provider>
    </div>
  );
}

export default AllPages;
