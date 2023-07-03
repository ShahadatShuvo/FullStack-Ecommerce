"use client";

import "./globals.css";
import Footer from "@/components/HomePage/Footer";
import { CartItemContext } from "./context";
import React, { useEffect, useState } from "react";
import { ProductCardProps, initialUserDetail } from "../../interfaces";

const metadata = {
  title: "FullStack Ecommerce",
  description: "A fullstack ecommerce application built with React and Django",
  icons: {
    icon: "/img/ecom.svg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Function to update the context value
  const [contextValue, setContextValue] = useState([]);
  const [userProfile, setUserProfile] = useState(initialUserDetail);

  useEffect(() => {
    // Check if localStorage is available before accessing it
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUserProfile(JSON.parse(userData));
    }
  }, []);

  const [isSignUpComplete, setIsSignUpComplete] = useState(false);
  const [accessToken, setAccessToken] = useState(
    typeof localStorage !== "undefined"
      ? localStorage.getItem("accessToken") || ""
      : ""
  );

  console.log("accessToken11", accessToken);
  const [isLoginComplete, setIsLoginComplete] = useState(
    typeof localStorage !== "undefined" && localStorage.getItem("accessToken")
      ? true
      : false
  );
  const [isLogoutComplete, setIsLogoutComplete] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);
  const [check, setCheck] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme((prevTheme: boolean) => !prevTheme);
  };

  const updateUserprofile = (data: any) => {
    setUserProfile(data);
  };

  const setToken = (value: string) => {
    setAccessToken(value);
  };
  const checkSignUp = (value: boolean) => {
    setIsSignUpComplete(value);
  };
  const checkLogin = (value: any) => {
    setIsLoginComplete(value);
  };
  const checkLogout = (value: boolean) => {
    setIsLogoutComplete(value);
  };

  React.useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        // const parsedData = JSON.parse(token);
        setAccessToken(token);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, []);

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

  const decreaseContextValue = (newValue: ProductCardProps) => {
    setContextValue((prevState: ProductCardProps[] | any) => {
      const isExist = prevState.find(
        (item: ProductCardProps) => item.id === newValue.id
      );
      if (isExist) {
        return prevState.map((item: ProductCardProps) => {
          if (item.id === newValue.id) {
            if (item.qty > 1) {
              return {
                ...item,
                qty: item.qty - 1,
              };
            } else {
              return {
                ...item,
                qty: 1,
              };
            }
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
    <html lang="en">
      <head>
        <title>FullStack Ecommerce</title>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body className="text-black" suppressHydrationWarning={true}>
        <CartItemContext.Provider
          value={{
            userProfile,
            updateUserprofile,
            isLightTheme,
            toggleTheme,
            isSignUpComplete,
            isLoginComplete,
            accessToken,
            isLogoutComplete,
            checkLogout,
            setToken,
            checkSignUp,
            checkLogin,
            contextValue,
            increaseContextValue,
            decreaseContextValue,
            deleteContextValue,
          }}
        >
          {children}
        </CartItemContext.Provider>
        <Footer />
      </body>
    </html>
  );
}
