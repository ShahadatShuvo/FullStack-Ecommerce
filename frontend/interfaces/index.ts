import { string } from "yup";

export interface SingleStepInterface {
  step: {
    id: number;
    image: string;
    step: string;
    title: string;
    description: string;
    extraStyle: string;
  };
}

export interface ProductCardProps {
  id: number | string;
  title: string;
  intro: string;
  description: string;
  features: string;
  price: number;
  stock: number;
  qty: number;
  image_url: string;
}

export const demoProductCard: ProductCardProps = {
  id: 1,
  title: "Demo Product",
  intro: "Demo Product Intro",
  description: "Demo Product Description",
  features: "Demo Product Features",
  price: 100,
  stock: 10,
  qty: 1,
  image_url: "/img/cart/sshoe.png",
};

export interface UserDetailInterface {
  id: number | null;
  email: string;
  first_name: string;
  last_name: string;
  gender: string;
  phone_number: string;
  country: string;
  state: string;
  city: string;
  zip_code: string;
  date_of_birth: string;
  created_at: string;
  image_url: string | null;
}

export const initialUserDetail: UserDetailInterface = {
  id: null,
  email: "",
  first_name: "",
  last_name: "",
  gender: "",
  phone_number: "",
  country: "",
  state: "",
  city: "",
  zip_code: "",
  date_of_birth: "",
  created_at: "",
  image_url: null,
};

export interface ShippingAddressInterface {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  country: string;
  state: string;
  city: string;
  zip_code: string;
  address_type: string;
  detail: string;
}

export const initialShippingAddress: ShippingAddressInterface = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  country: "",
  state: "",
  city: "",
  zip_code: "",
  address_type: "home",
  detail: "",
};

export interface OrsdersInterface {
  id: number;
  complete: boolean;
  customer: number;
  ordered_products: string;
  shipping_address: string;
  transaction_id: string;
  date_ordered: string;
}
