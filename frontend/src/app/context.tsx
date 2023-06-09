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
  accessToken: string;
  refreshToken: string;
  setToken: (value: string, name: string) => void;
  isDarkTheme: boolean;
  toggleTheme: () => void;
  activeTab: number;
  toggleTab: (value: number) => void;
  isSignUpComplete: boolean;
  isLoginComplete: boolean;
  isLogoutComplete: boolean;
  userProfile: UserDetailInterface;
  shippingAddress: ShippingAddressInterface;
  checkSignUp: (value: boolean) => void;
  checkLogin: (value: boolean) => void;
  checkLogout: (value: boolean) => void;
  updateUserprofile: (newValue: UserDetailInterface) => void;
  updateShippingAddress: (newValue: ShippingAddressInterface) => void;
  cartData: ProductCardProps[];
  increaseCartData: (newValue: ProductCardProps) => void;
  decreaseCartData: (newValue: ProductCardProps) => void;
  deleteCartData: (newValue: ProductCardProps) => void;
  errorMsg: string;
  catchErrorMsg: (value: string) => void;
}

export const GlobalStates = createContext<ContextValue>({
  accessToken: "",
  refreshToken: "",
  setToken: () => {},
  isDarkTheme: true,
  toggleTheme: () => {},
  activeTab: 0,
  toggleTab: () => {},
  isSignUpComplete: false,
  isLoginComplete: false,
  isLogoutComplete: false,
  userProfile: initialUserDetail,
  shippingAddress: initialShippingAddress,
  checkSignUp: () => {},
  checkLogin: () => {},
  checkLogout: () => {},
  updateUserprofile: () => {},
  updateShippingAddress: () => {},
  cartData: [],
  increaseCartData: () => {},
  decreaseCartData: () => {},
  deleteCartData: () => {},
  errorMsg: "",
  catchErrorMsg: () => {},
});
