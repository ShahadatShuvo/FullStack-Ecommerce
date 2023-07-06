// React useContext decleared here

import { createContext } from "react";
import {
  ProductCardProps,
  UserDetailInterface,
  initialUserDetail,
  ShippingAddressInterface,
  initialShippingAddress,
} from "../../interfaces";

interface ContextValue {
  cartData: ProductCardProps[];
  shippingAddress: ShippingAddressInterface;
  userProfile: UserDetailInterface;
  accessToken: string;
  refreshToken: string;
  activeTab: string;
  isSignUpComplete: boolean;
  isLoginComplete: boolean;
  isLogoutComplete: boolean;
  isDarkTheme: boolean;
  toggleTheme: () => void;
  toggleTab: (value: string) => void;
  setToken: (value: string, name: string) => void;
  checkSignUp: (value: boolean) => void;
  checkLogin: (value: boolean) => void;
  checkLogout: (value: boolean) => void;
  updateUserprofile: (newValue: UserDetailInterface) => void;
  updateShippingAddress: (newValue: ShippingAddressInterface) => void;
  increaseCartData: (newValue: ProductCardProps) => void;
  decreaseCartData: (newValue: ProductCardProps) => void;
  deleteCartData: (newValue: ProductCardProps) => void;
}

export const GlobalStates = createContext<ContextValue>({
  cartData: [],
  shippingAddress: initialShippingAddress,
  userProfile: initialUserDetail,
  isSignUpComplete: false,
  activeTab: "",
  accessToken: "",
  refreshToken: "",
  isLoginComplete: false,
  isLogoutComplete: false,
  isDarkTheme: true,
  toggleTheme: () => {},
  toggleTab: () => {},
  setToken: () => {},
  checkSignUp: () => {},
  checkLogin: () => {},
  checkLogout: () => {},
  updateUserprofile: () => {},
  updateShippingAddress: () => {},
  increaseCartData: () => {},
  decreaseCartData: () => {},
  deleteCartData: () => {},
});
