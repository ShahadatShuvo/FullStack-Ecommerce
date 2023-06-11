"use client";

import HomePage from "@/components/HomePage";
import React, { createContext, useState } from "react";

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
  increaseContextValue: (newValue: ProductCardProps) => void;
  deleteContextValue: (newValue: ProductCardProps) => void;
}

export const CartItemContext = createContext<ContextValue>({
  contextValue: [],
  increaseContextValue: () => {},
  deleteContextValue: () => {},
});

function AllPages() {
  const [contextValue, setContextValue] = useState([]);
  const [check, setCheck] = useState(false);

  React.useEffect(() => {
    // const check = JSON.parse(localStorage.getItem("check") || "true");

    if (contextValue.length > 0) {
      localStorage.setItem("cart", JSON.stringify(contextValue));
    } else {
      const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
      if (cartData.length === 1 && check === true) {
        localStorage.removeItem("cart");
      }
    }
  }, [contextValue, check]);

  React.useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      try {
        const parsedData = JSON.parse(cartData);
        setContextValue(parsedData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, []);

  const increaseContextValue = (newValue: ProductCardProps) => {
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

    if (contextValue.length === 1) {
      setCheck(true);
    }
  };
  return (
    <div>
      <CartItemContext.Provider
        value={{ contextValue, increaseContextValue, deleteContextValue }}
      >
        <HomePage />
      </CartItemContext.Provider>
    </div>
  );
}

export default AllPages;
