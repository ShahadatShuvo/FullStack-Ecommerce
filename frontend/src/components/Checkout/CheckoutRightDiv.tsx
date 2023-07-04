import { Alert, Button, Divider, IconButton, TextField } from "@mui/material";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartItemContext } from "@/app/context";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import OrderConfirmed from "./OrderConfirmed";
import ProgressBtn from "./ProgressBtn";

interface CuponInterface {
  id: number;
  code: string;
  discount: number;
  created_at: string;
  updated_at: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function CheckoutRightDiv() {
  const {
    shippingAddress,
    contextValue,
    increaseContextValue,
    decreaseContextValue,
    deleteContextValue,
  } = useContext(CartItemContext);
  const [cupon, setCupon] = React.useState({
    id: 0,
    code: "",
    discount: 0,
    created_at: "",
    updated_at: "",
  });

  console.log("ordered products:", JSON.stringify(contextValue));
  console.log("Cupon:", JSON.stringify(cupon));
  console.log("shippingAddress:", shippingAddress);

  const [userCupon, setUserCupon] = React.useState("");

  const [discount, setDiscount] = React.useState(0);

  const subTotal = contextValue.reduce(
    (acc: number, item: any) => acc + item.price * item.qty,
    0
  );

  const taxAmount = subTotal * 0.05;

  const orderTotal = subTotal - discount + taxAmount + 100;

  const onHandleIncreament = (product: any) => {
    increaseContextValue(product);
  };

  const onHandleDecreament = (product: any) => {
    decreaseContextValue(product);
  };

  const onHandleRemove = (product: any) => {
    deleteContextValue(product);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`${apiUrl}/api/cupon/${userCupon}`);

        if (response.ok) {
          const result = await response.json();
          setCupon(result);
          setDiscount(result.discount);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        setDiscount(0);
        console.log("error:", error);
      }
    };
    fetchData();
  }, [userCupon]);

  const takeCuponFromBackend = () => {
    if (userCupon === cupon?.code) {
      enqueueSnackbar(`Congrats! you got ${cupon?.discount} TK discount!`, {
        variant: "success",
      });
    } else {
      enqueueSnackbar("Oops! Invalid Cupon Code", {
        variant: "error",
      });
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
                  onClick={() => onHandleDecreament(product)}
                >
                  <RemoveIcon />
                </IconButton>
                <p className="px-5">{product.qty}</p>

                <IconButton
                  color="primary"
                  aria-label="delete"
                  className="bg-blue-50"
                  onClick={() => onHandleIncreament(product)}
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
              onClick={() => onHandleRemove(product)}
            >
              Remove
            </Button>
          </div>
        </div>
        <Divider />
      </div>
    );
  });
  const [showProgress, setShowProgress] = React.useState(false);
  const handleOrderConfirm = () => {
    if (shippingAddress.email === "") {
      alert("Please Confirm Your Shipping Address  [STEP:1]");
    } else {
      console.log("Order Confirmed");
      //Post request to backend
      setShowProgress(true);
    }
  };
  return (
    <div className="w-[50%] border border-slate-200  rounded-xl p-5">
      <div className="rounded-lg bg-white">{allCartItems}</div>
      <div className="mt-5">
        <p className="font-medium text-lg">Discount code</p>
        <div className="mt-3 flex gap-3">
          <TextField
            value={userCupon}
            name="cupon"
            onChange={(e) => setUserCupon(e.target.value)}
            size="small"
            id="outlined-basic"
            label="Enter code here"
            variant="outlined"
            className="w-full rounded-full"
          />
          <Button
            onClick={takeCuponFromBackend}
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
            <p>{subTotal.toFixed(2)} TK</p>
          </div>
          {discount ? (
            <div className="flex justify-between">
              <p className="text-gray-400">Discount applied:</p>
              <p>{discount} TK</p>
            </div>
          ) : (
            ""
          )}
          <div className="flex justify-between">
            <p className="text-gray-400">Shipping estimate</p>
            <p>100 TK</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400">Tax(5%)</p>
            <p>{taxAmount.toFixed(2)} TK</p>
          </div>
          <div className="flex justify-between text-md text-blue-400">
            <p className="">Order Total</p>
            <p className="text-blue-400">{orderTotal.toFixed(2)} TK</p>
          </div>

          {/* <OrderConfirmed />  */}
          {!showProgress ? (
            <Button
              fullWidth
              variant="contained"
              onClick={handleOrderConfirm}
              className="mt-5 bg-black rounded-full"
            >
              step:2 -- Confirm Order
            </Button>
          ) : (
            <div className="flex justify-center">
              <ProgressBtn />
            </div>
          )}

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
  );
}

export default CheckoutRightDiv;
