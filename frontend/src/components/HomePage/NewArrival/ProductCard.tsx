"use client";

import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import NextWeekOutlinedIcon from "@mui/icons-material/NextWeekOutlined";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import CartViewDialogue from "./CartViewDialogue";

interface ProductCardProps {
  // key: number | string;
  title: string;
  description: string;
  price: number;
  image_url: string;
}

function ProductCard(props: ProductCardProps) {
  const { title, description, price, image_url } = props;
  const [favourite, setFavourite] = React.useState(false);
  const [view, setView] = React.useState(false);

  const onHandleFavourite = () => {
    setFavourite((prevState) => !prevState);
  };
  const onHandleViewOpen = () => {
    setView(true);
  };
  const onHandleViewClose = () => {
    setView(false);
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
              <Button className="text-xs font-semibold py-1 rounded-full bg-black hover:bg-gray-600 text-white flex justify-center items-center drop-shadow-md hover:drop-shadow-xl">
                <NextWeekOutlinedIcon />
                <span className="ml-1">Add to bag</span>
              </Button>

              <CartViewDialogue
                // key={props.key}
                title={props.title}
                description={props.description}
                price={props.price}
                image_url={props.image_url}
              />
            </div>
          </div>
        )}
        <div className="p-5 bg-blue-50 rounded-lg flex justify-center items-center">
          <Image
            // src="/img/cart/sshoe.png"
            src={image_url || "/img/cart/sshoe.png"}
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
