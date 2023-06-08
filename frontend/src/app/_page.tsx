"use client";

import React, { createContext, useState } from "react";
import HomePage from "@/components/HomePage";

interface ProductCardProps {
  id: number | string;
  title: string;
  description: string;
  price: number;
  stock: number;
  qty: number;
  image_url: string;
}

interface ContextValue {
  contextValue: ProductCardProps[];
  increateContextValue: (newValue: ProductCardProps) => void;
  deleteContextValue: (newValue: ProductCardProps) => void;
}

export const CartItemContext = createContext<ContextValue>({
  contextValue: [],
  increateContextValue: () => {},
  deleteContextValue: () => {},
});

function AllPages() {
  const [contextValue, setContextValue] = useState([]);

  //   console.log("contextValue:", contextValue);

  const increateContextValue = (newValue: ProductCardProps) => {
    setContextValue((prevState: ProductCardProps[] | any) => {
      const isExist = prevState.find(
        (item: ProductCardProps) => item.id === newValue.id
      );
      if (isExist) {
        return prevState.map((item: ProductCardProps) => {
          if (item.id === newValue.id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          }
          return item;
        });
      }
      return [...prevState, { ...newValue, qty: 1 }];
    });
  };

  const deleteContextValue = (newValue: ProductCardProps) => {
    setContextValue((prevState) => {
      // Search for the index of the product to delete
      const index = prevState.findIndex(
        (product: ProductCardProps) => product.id === newValue.id
      );

      if (index !== -1) {
        // Create a new array without the product at the found index
        const newArray = [
          ...prevState.slice(0, index),
          ...prevState.slice(index + 1),
        ];
        return newArray;
      }

      // If the product is not found, return the previous state as is
      return prevState;
    });
  };
  return (
    <div>
      <CartItemContext.Provider
        value={{ contextValue, increateContextValue, deleteContextValue }}
      >
        <HomePage />
      </CartItemContext.Provider>
    </div>
  );
}

export default AllPages;
