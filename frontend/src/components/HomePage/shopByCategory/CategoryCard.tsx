"use client";

import { GlobalStates } from "@/app/context";
import { useContext } from "react";

import Image from "next/image";
import React from "react";
import OrderSuccess from "./Ordersuccess";
import CartViewDialogue from "./CartViewDialogue";
import { ProductCardProps } from "../../../../interfaces";

function CategoryCard({ product }: { product: ProductCardProps }) {
  const { increaseCartData } = useContext(GlobalStates);

  const onHandleClick = (props: ProductCardProps) => {
    // setCartItems((prevState: ProductCardProps[]) => [...prevState, props]);
    increaseCartData(props);
  };
  return (
    <div>
      <div className="p-3 border-2 rounded-xl hover:shadow-xl w-[250px] min-h-[200px]">
        <div className="pb-5 bg-blue-50 rounded-lg flex justify-center items-center">
          <Image
            src={product.image_url || "/img/order.svg"}
            alt=""
            width={230}
            height={230}
            className="h-[130px] w-[130px]  md:w-[230px] md:h-[230px] object-contain"
          />
        </div>
        <p className="mt-3 font-bold truncate">{product.title}</p>

        <div className="mt-5 flex justify-between items-center">
          <p>$ {product.price}</p>

          <div className="flex items-center">
            <CartViewDialogue
              // key={props.key}
              product={product}
            />
            <OrderSuccess
              type="icon"
              onHandleClick={onHandleClick}
              product={product}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
