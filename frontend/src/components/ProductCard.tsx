"use client";

import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import NextWeekOutlinedIcon from "@mui/icons-material/NextWeekOutlined";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import CartViewDialogue from "./HomePage/NewArrival/CartViewDialogue";
// import { CartItemContext } from "../app/_page";
import { CartItemContext } from "@/app/context";
import OrderSuccess from "./OrderSuccess";

interface ProductCardProps {
  id: number | string;
  title: string;
  description: string;
  price: number;
  stock: number;
  qty: number;
  image_url: string;
}

function ProductCard(props: ProductCardProps) {
  const { id, title, description, price, image_url } = props;
  const [favourite, setFavourite] = React.useState(false);
  const [view, setView] = React.useState(false);
  const [cartItems, setCartItems] = React.useState<ProductCardProps[]>([]);

  const { contextValue, increaseContextValue } = useContext(CartItemContext);

  const onHandleFavourite = () => {
    setFavourite((prevState) => !prevState);
  };
  const onHandleViewOpen = () => {
    setView(true);
  };
  const onHandleViewClose = () => {
    setView(false);
  };
  const onHandleClick = (props: ProductCardProps) => {
    // setCartItems((prevState: ProductCardProps[]) => [...prevState, props]);
    increaseContextValue(props);
  };

  return (
    <div className="min-w-[270px] mb-8">
      <div
        className="card relative"
        onMouseEnter={onHandleViewOpen}
        onMouseLeave={onHandleViewClose}
      >
        <div className="absolute right-2 top-1 p-2 bg-white rounded-full">
          {!favourite && (
            <FavoriteBorderRoundedIcon onClick={onHandleFavourite} />
          )}
          {favourite && (
            <FavoriteRoundedIcon
              sx={{ color: "red" }}
              onClick={onHandleFavourite}
            />
          )}
        </div>
        {view && (
          <div className="absolute bottom-4 w-full">
            <div className="px-2 flex justify-around">
              <OrderSuccess
                type="btn"
                onHandleClick={onHandleClick}
                product={props}
              />

              <CartViewDialogue
                // key={props.key}
                title={props.title}
                description={props.description}
                stock={props.stock}
                price={props.price}
                image_url={props.image_url}
              />
            </div>
          </div>
        )}
        <div className="p-5 bg-blue-50 rounded-lg flex justify-center items-center">
          <Image
            style={{
              height: "250px",
              width: "250px",
            }}
            src={image_url}
            alt=""
            width={230}
            height={230}
            className="pt-5 h-[280px] object-contain"
          />
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-gray-800 text-lg font-semibold"> {title}</h3>
        <p className="text-gray-400">{description}</p>
        <div className="mt-5 flex justify-between items-center">
          <p className="px-3 text-center py-1 border-2 border-green-600 rounded-lg">
            TK {price}
          </p>
          <p className="text-gray-500 font-medium">
            <StarIcon className="text-yellow-600 mt-[-3px]" />
            <span>4.9 (98 reviews)</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

// export const ProductCard = React.memo(Card);
