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
  description: string;
  price: number;
  stock: number;
  qty: number;
  image_url: string;
}

export const demoProductCard: ProductCardProps = {
  id: 1,
  title: "Demo Product",
  description: "Demo Product Description",
  price: 100,
  stock: 10,
  qty: 1,
  image_url: "/img/cart/sshoe.png",
};

export interface UserDetailInterface {
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
  image_url: string | null;
}

export const initialUserDetail: UserDetailInterface = {
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
  image_url: null,
};
