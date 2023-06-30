// React useContext decleared here

import { createContext } from "react";

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
  isSignUpComplete: boolean;
  isLoginComplete: boolean;
  checkSignUp: (value: boolean) => void;
  checkLogin: (value: boolean) => void;
  increaseContextValue: (newValue: ProductCardProps) => void;
  decreaseContextValue: (newValue: ProductCardProps) => void;
  deleteContextValue: (newValue: ProductCardProps) => void;
}

export const CartItemContext = createContext<ContextValue>({
  contextValue: [],
  isSignUpComplete: false,
  isLoginComplete: false,
  checkSignUp: () => {},
  checkLogin: () => {},
  increaseContextValue: () => {},
  decreaseContextValue: () => {},
  deleteContextValue: () => {},
});
