"use client";

import { Alert, Button, Divider, IconButton, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckoutLeftDiv from "./CheckoutLeftDiv";

function CheckoutPage() {
  const [counter, setCounter] = React.useState(0);

  const [cartItems, setCartItems] = React.useState([]);

  const handleRemove = (product: any) => {
    // deleteContextValue(product);
  };

  React.useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      try {
        const parsedData = JSON.parse(cartData);
        setCartItems(parsedData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, []);

  console.log("Cart Items: ", cartItems);

  const allCartItems = cartItems.map((product: any) => {
    return (
      <div key={product.id}>
        <div id="single-product" className="my-5 flex justify-between">
          <div className="min-w-[70%] flex">
            <Image
              // src="/img/cart/shoe.jpg"
              src={product.image_url}
              alt="shopbag"
              width={90}
              height={50}
              className="bg-blue-50 rounded-md h-[100px] object-cover my-auto mr-5"
            />
            <div>
              <h3 className="font-semibold text-gray-700 text-lg">
                {product.title}
              </h3>
              <p className="text-gray-400 font-medium mb-5">
                <span>Price: {product.price}</span>
                <span className="mx-2">|</span>
                <span>Qty: {product.qty}</span>
              </p>
              <div className="flex items-center">
                <IconButton
                  color="primary"
                  aria-label="delete"
                  className="bg-blue-50"
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
                <p className="px-5">{counter}</p>

                <IconButton
                  color="primary"
                  aria-label="delete"
                  className="bg-blue-50"
                  onClick={() => setCounter((prevState) => prevState + 1)}
                >
                  <AddIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-8 text-center py-1 px-2 border-2 border-green-600 rounded-lg">
              {product.price * product.qty} TK
            </p>
            <Button
              size="medium"
              color="error"
              className="rounded-md bg-red-50"
              onClick={() => handleRemove(product)}
            >
              Remove
            </Button>
          </div>
        </div>
        <Divider />
      </div>
    );
  });
  return (
    <div className="w-full p-16 border-y-2">
      {/* Magic headline */}
      <div className="mb-16">
        <div className="flex justify-start">
          <div className="border-4 border-gradient w-[30vw]"></div>
        </div>
        <h1 className="text-4xl font-medium text-center">Checkout Page</h1>
        <div className="flex justify-end">
          <div className="border-4 border-gradient w-[30vw]"></div>
        </div>
      </div>

      {/* Checkout Data */}

      <div className="w-full flex justify-between gap-5">
        {/* Left Side */}
        <CheckoutLeftDiv />

        {/* Right Side */}
        <div className="w-[50%] border border-slate-200  rounded-xl p-5">
          <div className="rounded-lg bg-white">{allCartItems}</div>
          <div className="mt-5">
            <p className="font-medium text-lg">Discount code</p>
            <div className="mt-3 flex gap-3">
              <TextField
                size="small"
                id="outlined-basic"
                label="Enter code here"
                variant="outlined"
                className="w-full rounded-full"
              />
              <Button
                variant="contained"
                color="success"
                className=" bg-black rounded-full"
              >
                Apply
              </Button>
            </div>
            <div className="mt-8 w-full font-semibold flex flex-col gap-3">
              <div className="flex justify-between">
                <p className="text-gray-400">Subtotal</p>
                <p>350 TK</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400">Shipping estimate</p>
                <p>100 TK</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400">Tax</p>
                <p>20 TK</p>
              </div>
              <div className="flex justify-between text-md text-blue-400">
                <p className="">Order Total</p>
                <p className="text-blue-400">400 TK</p>
              </div>

              <Button
                variant="contained"
                className="mt-5 bg-black rounded-full"
              >
                Confirm Order
              </Button>
              <Alert severity="info" className="bg-blue-50 rounded-full">
                Learn more
                <a href="/" className="mx-1 underline hover:text-red-500">
                  Taxes
                </a>
                and
                <a href="/" className="mx-1 underline hover:text-red-500">
                  Shipping
                </a>
                infomation
              </Alert>
            </div>
          </div>
        </div>
      </div>
      {/* End */}
    </div>
  );
}

export default CheckoutPage;
