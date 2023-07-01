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
  accessToken: string;
  isSignUpComplete: boolean;
  isLoginComplete: boolean;
  isLogoutComplete: boolean;
  isLightTheme: boolean;
  toggleTheme: () => void;
  setToken: (value: string) => void;
  checkSignUp: (value: boolean) => void;
  checkLogin: (value: boolean) => void;
  checkLogout: (value: boolean) => void;
  increaseContextValue: (newValue: ProductCardProps) => void;
  decreaseContextValue: (newValue: ProductCardProps) => void;
  deleteContextValue: (newValue: ProductCardProps) => void;
}

export const CartItemContext = createContext<ContextValue>({
  contextValue: [],
  isSignUpComplete: false,
  accessToken: "",
  isLoginComplete: false,
  isLogoutComplete: false,
  isLightTheme: true,
  toggleTheme: () => {},
  setToken: () => {},
  checkSignUp: () => {},
  checkLogin: () => {},
  checkLogout: () => {},
  increaseContextValue: () => {},
  decreaseContextValue: () => {},
  deleteContextValue: () => {},
});
