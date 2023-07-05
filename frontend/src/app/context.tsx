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
  contextValue: ProductCardProps[];
  shippingAddress: ShippingAddressInterface;
  userProfile: UserDetailInterface;
  accessToken: string;
  refreshToken: string;
  activeTab: string;
  isSignUpComplete: boolean;
  isLoginComplete: boolean;
  isLogoutComplete: boolean;
  isLightTheme: boolean;
  toggleTheme: () => void;
  toggleTab: (value: string) => void;
  setToken: (value: string, name: string) => void;
  checkSignUp: (value: boolean) => void;
  checkLogin: (value: boolean) => void;
  checkLogout: (value: boolean) => void;
  updateUserprofile: (newValue: UserDetailInterface) => void;
  updateShippingAddress: (newValue: ShippingAddressInterface) => void;
  increaseContextValue: (newValue: ProductCardProps) => void;
  decreaseContextValue: (newValue: ProductCardProps) => void;
  deleteContextValue: (newValue: ProductCardProps) => void;
}

export const CartItemContext = createContext<ContextValue>({
  contextValue: [],
  shippingAddress: initialShippingAddress,
  userProfile: initialUserDetail,
  isSignUpComplete: false,
  activeTab: "",
  accessToken: "",
  refreshToken: "",
  isLoginComplete: false,
  isLogoutComplete: false,
  isLightTheme: true,
  toggleTheme: () => {},
  toggleTab: () => {},
  setToken: () => {},
  checkSignUp: () => {},
  checkLogin: () => {},
  checkLogout: () => {},
  updateUserprofile: () => {},
  updateShippingAddress: () => {},
  increaseContextValue: () => {},
  decreaseContextValue: () => {},
  deleteContextValue: () => {},
});
