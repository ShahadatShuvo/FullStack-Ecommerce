import { GlobalStates } from "@/app/context";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Alert, Button, Divider, IconButton, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { enqueueSnackbar } from "notistack";
import React, { useContext, useEffect } from "react";
import ProgressBtn from "./ProgressBtn";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function CheckoutRightDiv() {
  const {
    isDarkTheme,
    userProfile,
    shippingAddress,
    cartData,
    increaseCartData,
    decreaseCartData,
    deleteCartData,
  } = useContext(GlobalStates);

  const [coupon, setCoupon] = React.useState({
    code: "",
    discount: 0,
    active: false,
    created_at: "",
    updated_at: "",
  });

  const [userCoupon, setUserCoupon] = React.useState("");

  const [discount, setDiscount] = React.useState(0);

  const subTotal = cartData.reduce(
    (acc: number, item: any) => acc + item.price * item.qty,
    0
  );

  const taxAmount = subTotal * 0.05;

  const orderTotal = subTotal - discount + taxAmount + 100;

  const onHandleIncreament = (product: any) => {
    increaseCartData(product);
  };

  const onHandleDecreament = (product: any) => {
    decreaseCartData(product);
  };

  const onHandleRemove = (product: any) => {
    deleteCartData(product);
  };

  const [showProgress, setShowProgress] = React.useState(false);
  const handleOrderConfirm = () => {
    if (shippingAddress.email === "") {
      alert("Please Confirm Your Shipping Address  [STEP:1]");
    } else if (cartData.length === 0) {
      alert("Sorry! Your Cart is Empty! First Add Some Product");
    } else {
      //Post request to backend
      const orderData = {
        customer: userProfile.id,
        complete: false,
        shipping_address: JSON.stringify(shippingAddress),
        ordered_products: JSON.stringify(cartData),
        amount: orderTotal,
        applied_coupon: coupon.code,
      };
      const handleSubmit = async (formData: any) => {
        try {
          const response = await fetch(`${apiUrl}/api/orders/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            const data = await response.json();
            // Store the access token in localStorage or any other state management solution
            // localStorage.setItem("accessToken", data.token);
            // checkSignUp(true);
            // router.push("/account/login");
          } else if (response.status === 400) {
            const errorData = await response.json();

            // Display error message to the user
            // You can use state or a UI library to show the error message else {
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

      handleSubmit(orderData);
      setShowProgress(true);
      //empty cart
      localStorage.setItem("cart", JSON.stringify([]));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`${apiUrl}/api/coupon/${userCoupon}/`);

        if (response.ok) {
          const result = await response.json();
          setCoupon(result);
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
  }, [userCoupon]);

  const takeCouponFromBackend = () => {
    if (userCoupon === coupon?.code) {
      enqueueSnackbar(`Congrats! you got ${coupon?.discount} TK discount!`, {
        variant: "success",
      });
    } else {
      enqueueSnackbar("Oops! Invalid Cupon Code", {
        variant: "error",
      });
    }
  };

  const allCartItems = cartData.map((product: any) => {
    return (
      <div key={product.id} className="space-y-5 w-full ">
        <div id="single-product" className="my-5 flex justify-between">
          <div className=" flex">
            <Image
              // src="/img/cart/shoe.jpg"
              src={product.image_url}
              alt="shopbag"
              width={90}
              height={50}
              className="bg-blue-50 rounded-md h-[100px] object-cover my-auto mr-5"
            />
            <div className="text-sm md:text-base">
              <h3
                className={
                  !isDarkTheme
                    ? "font-semibold text-gray-700 text-sm md:text-base"
                    : "font-semibold text-white text-sm md:text-base"
                }
              >
                {product.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base font-medium mb-5">
                <span>Price: {product.price}</span>
                <span className="mx-2">|</span>
                <span>Qty: {product.qty}</span>
              </p>
              <div className="flex items-center">
                <IconButton
                  color="primary"
                  aria-label="delete"
                  className="bg-blue-50 text-sm md:text-base"
                  onClick={() => onHandleDecreament(product)}
                >
                  <RemoveIcon />
                </IconButton>
                <p className="px-2 md:px-5">{product.qty}</p>

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
            <p className="mb-8 text-xs md:text-md text-center py-1 ml-2 border-2 border-green-600 rounded-lg">
              {product.price * product.qty} TK
            </p>
            <Button
              size="medium"
              color="error"
              className="rounded-md bg-red-50 text-xs md:text-md ml-2 mt-2"
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

  return (
    <div className="w-full md:w-[50%] border border-slate-200  rounded-xl p-3">
      <div className="rounded-lg">{allCartItems}</div>
      <div className="mt-5">
        <p className="font-medium text-md">Discount code</p>
        <div className="mt-3 flex gap-3">
          <TextField
            value={userCoupon}
            name="cupon"
            onChange={(e) => setUserCoupon(e.target.value)}
            size="small"
            id="outlined-basic"
            label="Enter code here"
            variant="outlined"
            fullWidth
            inputProps={{
              style: {
                color: isDarkTheme ? "white" : "black",
                background: isDarkTheme ? "#475569" : "white",
              },
            }}
            InputLabelProps={{
              style: {
                color: isDarkTheme ? "white" : "gray",
              },
            }}
            className="w-full rounded-full"
          />
          <Button
            onClick={takeCouponFromBackend}
            variant="contained"
            color="success"
            className={
              !isDarkTheme
                ? " bg-black rounded-full"
                : " bg-gray-50 text-black hover:text-white rounded-full"
            }
          >
            Apply
          </Button>
        </div>
        <div className="mt-8 w-full text-sm md:text-base font-semibold flex flex-col gap-2">
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
              className={
                !isDarkTheme
                  ? "mt-5 bg-black rounded-full"
                  : "mt-5 bg-gray-50 text-black hover:text-white rounded-full"
              }
            >
              step:2 -- Confirm Order
            </Button>
          ) : (
            <div className="flex justify-center">
              <ProgressBtn />
            </div>
          )}

          <Alert
            severity="info"
            className="text-sm md:text-base bg-blue-50 rounded-full px-4"
          >
            Learn more
            <Link
              href="/checkout/terms&conditions/tax"
              className="mx-1 underline hover:text-red-500"
            >
              Taxes
            </Link>
            and
            <a
              href="/checkout/terms&conditions/shipping"
              className="mx-1 underline hover:text-red-500"
            >
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
