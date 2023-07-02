// React useContext decleared here

import { createContext } from "react";
import {
  ProductCardProps,
  UserDetailInterface,
  initialUserDetail,
} from "../../interfaces";

interface ContextValue {
  contextValue: ProductCardProps[];
  userProfile: UserDetailInterface;
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
  updateUserprofile: (newValue: UserDetailInterface) => void;
  increaseContextValue: (newValue: ProductCardProps) => void;
  decreaseContextValue: (newValue: ProductCardProps) => void;
  deleteContextValue: (newValue: ProductCardProps) => void;
}

export const CartItemContext = createContext<ContextValue>({
  contextValue: [],
  userProfile: initialUserDetail,
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
  updateUserprofile: () => {},
  increaseContextValue: () => {},
  decreaseContextValue: () => {},
  deleteContextValue: () => {},
});
