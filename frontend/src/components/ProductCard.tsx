"use client";

import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import React, { useContext } from "react";
import CartViewDialogue from "./HomePage/NewArrival/CartViewDialogue";
import { GlobalStates } from "@/app/context";
import OrderSuccess from "./OrderSuccess";
import { ProductCardProps } from "../../interfaces";
import AuthSuccess from "./Accounts/AuthSuccess";

function ProductCard(props: ProductCardProps) {
  const { id, title, intro, description, features, price, image_url } = props;

  const [favourite, setFavourite] = React.useState(false);
  const [view, setView] = React.useState(false);

  const { increaseCartData, isDarkTheme } = useContext(GlobalStates);

  const onHandleFavourite = () => {
    setFavourite((prevState) => !prevState);

    // Retrieve existing wishlist from localStorage
    const existingWishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );

    // Find the index of the current product in the wishlist
    const index = existingWishlist.findIndex(
      (item: ProductCardProps) => item.id === id
    );

    if (index === -1) {
      // If the product is not already in the wishlist, add it
      const updatedWishlist = [...existingWishlist, props];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    } else {
      // If the product is already in the wishlist, remove it
      const updatedWishlist = existingWishlist.filter(
        (item: ProductCardProps) => item.id !== id
      );
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  };
  const onHandleViewOpen = () => {
    setView(true);
  };
  const onHandleViewClose = () => {
    setView(false);
  };
  const onHandleClick = (props: ProductCardProps) => {
    // setCartItems((prevState: ProductCardProps[]) => [...prevState, props]);
    increaseCartData(props);
  };

  return (
    <div className="w-[150px] md:min-w-[270px] md:mb-8">
      {favourite && (
        <AuthSuccess
          msg="Product added to my faviorites"
          type="success"
          show={0}
        />
      )}
      <div
        className="card relative"
        onMouseEnter={onHandleViewOpen}
        onMouseLeave={onHandleViewClose}
      >
        <div className="absolute right-2 top-1 p-2 bg-white rounded-full">
          {!favourite && (
            <FavoriteBorderRoundedIcon
              sx={{ color: "black" }}
              onClick={onHandleFavourite}
            />
          )}
          {favourite && (
            <FavoriteRoundedIcon
              sx={{ color: "red" }}
              onClick={onHandleFavourite}
            />
          )}
        </div>
        {view && (
          <div className="hidden md:block absolute bottom-4 w-full">
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
                features={props.features || ""}
                stock={props.stock}
                price={props.price}
                image_url={props.image_url || "/img/order.svg"}
              />
            </div>
          </div>
        )}
        <div className="pb-5 bg-blue-50 rounded-lg flex justify-center items-center">
          <Image
            src={image_url || "/img/order.svg"}
            alt=""
            width={230}
            height={230}
            className="h-[130px] w-[130px]  md:w-[230px] md:h-[230px] object-contain"
          />
        </div>
      </div>
      <div className="mt-3">
        <h3
          className={
            isDarkTheme
              ? "text-white text-sm md:text-lg font-semibold"
              : "text-gray-800 text-sm md:text-lg font-semibold"
          }
        >
          {title}
        </h3>
        <p className="text-gray-400 text-xs md:text-base">{intro}</p>
        <div className="mt-2 md:mt-5 flex justify-between items-center text-xs md:text-base">
          <p className="px-3 text-center py-1 border md:border-2 border-green-600 rounded-lg">
            TK {price}
          </p>
          <p className="hidden md:block text-gray-500 font-medium ml-2">
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
