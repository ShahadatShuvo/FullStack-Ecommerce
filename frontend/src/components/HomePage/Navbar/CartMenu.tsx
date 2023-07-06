"use client";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from "react";
// import { CartItemContext } from "@/app/_page";
import { CartItemContext } from "@/app/context";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { useRouter } from "next/navigation";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import * as React from "react";
import "../NewArrival/index.css";
import Link from "next/link";

export default function CartMenu() {
  const router = useRouter();

  const {
    contextValue,
    deleteContextValue,
    isLoginComplete,
    accessToken,
    isDarkTheme,
  } = useContext(CartItemContext);

  const handleRemove = (product: any) => {
    deleteContextValue(product);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const subTotal = contextValue.reduce(
    (acc: number, item: any) => acc + item.price * item.qty,
    0
  );

  const handleCheckout = () => {
    if (isLoginComplete || accessToken) {
      router.push("/checkout");
    } else {
      router.push("/account/login");
    }
  };

  const allCartItems = contextValue.map((product: any) => {
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
              className="rounded-md h-[88px] object-cover my-auto mr-3"
            />
            <div>
              <h3 className="font-semibold text-gray-700 text-lg">
                {product.title}
              </h3>
              <p className="text-gray-400 mb-5">{product.description}</p>
              <p className="text-gray-400 ">Price: {product.price}</p>
              <p className="text-gray-400">Qty: {product.qty}</p>
            </div>
          </div>
          <div>
            <p className="mb-8 text-center py-1 border-2 border-green-600 rounded-lg">
              {product.price * product.qty} TK
            </p>

            <Button
              size="medium"
              color="error"
              onClick={() => handleRemove(product)}
              className="bg-red-50"
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
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{
              ml: 2,
              mt: "4px",
              p: "4px",
            }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <AddShoppingCartIcon fontSize="medium" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            ".css-6hp17o-MuiList-root-MuiMenu-list": {
              p: 0,
            },
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className="w-[30vw]">
          <div className="px-5 pt-5 max-h-[65vh] overflow-y-scroll hide-scrollbar">
            <h1 className=" text-xl font-bold text-gray-500">Shopping Cart</h1>
            {allCartItems}
          </div>

          <div className="mt-3 pb-3 bg-blue-50">
            <div className="pt-3 px-5 font-bold flex justify-between">
              <p>Subtotal</p>
              <p>{subTotal} TK</p>
            </div>

            <div className="px-5 py-3 pt-5  flex justify-between gap-2">
              <p
                className="w-full px-6 py-2 rounded-full text-center drop-shadow-md hover:drop-shadow-xl bg-gray-800 hover:bg-gray-950 text-white font-semibold cursor-pointer"
                onClick={handleCheckout}
              >
                Check out
              </p>
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
}
