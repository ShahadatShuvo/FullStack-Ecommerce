"use client";

import Image from "next/image";
import React from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import NextWeekOutlinedIcon from "@mui/icons-material/NextWeekOutlined";
import CartViewDialogue from "./CartViewDialogue";
import { Button } from "@mui/material";

function ProductCard() {
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

            <CartViewDialogue />
          </div>
        </div>
      )}
      <div className="p-5 bg-blue-50 rounded-lg flex justify-center items-center">
        <Image
          src="/img/cart/sshoe.png"
          alt=""
          width={230}
          height={230}
          className="pt-5"
        />
      </div>
    </div>
  );
}

export default ProductCard;
