import AddIcon from "@mui/icons-material/Add";
import { GlobalStates } from "@/app/context";
import { useContext } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import StarIcon from "@mui/icons-material/Star";
import { Button, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import Image from "next/image";
import React from "react";
import { sign } from "crypto";
import OrderSuccess from "./Ordersuccess";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

interface ProductCardProps {
  // key: number | string;
  id: number | string;
  title: string;
  intro: string | null;
  description: string;
  features: string | null;
  price: number;
  stock: number;
  qty: number;
  image_url: string | null;
}

// const { isDarkTheme } = useContext(GlobalStates);

function ProductDetails({ product }: { product: ProductCardProps }) {
  const { cartData, increaseCartData } = useContext(GlobalStates);
  const [counter, setCounter] = React.useState(
    cartData.find((item) => item.id === product.id)?.qty || 1
  );
  const [favourite, setFavourite] = React.useState(false);
  const [accordion1, setAccordion1] = React.useState(true);
  const [accordion2, setAccordion2] = React.useState(true);

  const onHandleFavourite = () => {
    setFavourite((prevState) => !prevState);
  };
  const onhandleAddCart = (product: any) => {
    increaseCartData({ ...product, qty: counter - 1 });
  };
  return (
    <div className=" h-[75vh] flex flex-col md:flex-row justify-between gap-5">
      <div className="md:w-[40%] card relative">
        <div className=" bg-blue-50 rounded-lg flex justify-center items-center">
          <Image
            style={{
              height: "auto",
              width: "auto",
            }}
            src={
              product?.image_url?.startsWith("/")
                ? `${apiUrl}${product.image_url}`
                : product.image_url || "/img/order.svg"
            }
            alt=""
            width={250}
            height={250}
            className="pt-5  object-cover"
          />
        </div>
      </div>
      <div className="md:w-[60%]">
        <h1 className="text-md md:text-3xl font-bold">{product.title}</h1>
        <div className="mt-3 flex justify-between">
          <p className="px-2 md:px-5 text-center text-sm py-1 border-2 border-green-600 rounded-lg">
            TK {product.price}
          </p>
          <p className="text-gray-500 font-semibold text-sm md:text-md">
            Available in stock: {product.stock}
          </p>
          <p className="text-gray-500 font-medium hidden md:block">
            <StarIcon className="text-yellow-600 mt-[-3px]" />
            <span>4.9 (98 reviews)</span>
          </p>
        </div>
        <div className="mt-6 w-full flex justify-around items-center gap-5">
          <div className="w-[40%] bg-blue-50 md:px-2 md:py-1 rounded-full flex items-center justify-around">
            <IconButton
              aria-label="delete"
              onClick={() =>
                setCounter((prevState) => {
                  if (prevState === 0) {
                    return prevState;
                  }
                  return prevState - 1;
                })
              }
            >
              <RemoveIcon />
            </IconButton>

            <p className="px-2 text-sm md:text-md">{counter}</p>
            <IconButton
              aria-label="counter"
              onClick={() => setCounter((prevState) => prevState + 1)}
            >
              <AddIcon />
            </IconButton>
          </div>

          <OrderSuccess
            product={product}
            type="view"
            onHandleClick={onhandleAddCart}
          />
        </div>
        <div className="mt-5 w-full">
          <div
            className="w-full justify-between bg-blue-50 hover:bg-blue-100 px-5 py-1 rounded-full flex items-center"
            onClick={() => setAccordion1((prevState) => !prevState)}
          >
            <p className="text-sm md:text-md">Description</p>
            {accordion1 ? <RemoveIcon /> : <AddIcon />}
          </div>
          {accordion1 && (
            <div className="mt-3 p-3 rounded-lg bg-gray-100 text-sm md:text-md">
              {product.description}
            </div>
          )}
        </div>
        <div className="mt-5 w-full">
          <div
            className="w-full justify-between bg-blue-50 hover:bg-blue-100 px-5 py-1 rounded-full flex items-center "
            onClick={() => setAccordion2((prevState) => !prevState)}
          >
            <p className="text-sm md:text-md">Features</p>
            {accordion2 ? <RemoveIcon /> : <AddIcon />}
          </div>
          {accordion2 && (
            <div className="mt-3 p-3 rounded-lg bg-gray-100 text-sm md:text-md">
              {product.features}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
