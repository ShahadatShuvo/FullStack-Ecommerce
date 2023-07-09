"use client";

import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import ChaletIcon from "@mui/icons-material/Chalet";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useContext } from "react";
import { GlobalStates } from "@/app/context";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import Image from "next/image";
import OrderConfirmed from "../OrderConfirmed";

function PaymentMethod() {
  const { isDarkTheme } = useContext(GlobalStates);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const [formData, setformData] = React.useState({
    payment_type: "",
  });
  console.log(formData);

  const handleformData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    console.log("Payment");
    console.log("formData", formData);
    handleOpen();
  };

  return (
    <div className="w-screen min-h-[50vh] my-16 flex flex-col items-center justify-center">
      <div className="">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            <span
              className={
                isDarkTheme
                  ? "text-white font-semibold"
                  : "text-black font-semibold"
              }
            >
              Choose Payment type:
            </span>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="payment_type"
            value={formData.payment_type}
            onChange={handleformData}
          >
            <FormControlLabel
              value="cash_on"
              // checked={true}
              control={<Radio />}
              label={
                <div className="flex items-center">
                  <Image
                    src="/img/payment/cash_on1.png"
                    alt=""
                    width={220}
                    height={150}
                  />
                </div>
              }
              className="text-gray-500 capitalize ml-32"
            />
            <FormControlLabel
              value="stripe"
              control={<Radio />}
              label={
                <div className="flex items-center">
                  {/* <BusinessIcon className="text-3xl" />
                  <p className="ml-2">Office(Delivery 9AM - 5 PM)</p> */}
                  <Image
                    src="/img/payment/stripe.svg"
                    alt=""
                    width={220}
                    height={100}
                  />
                </div>
              }
              className="text-gray-500 capitalize ml-32 mt-5"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <Button
        variant="contained"
        className="bg-blue-500 mt-16"
        onClick={handlePayment}
      >
        Make Payment
      </Button>
      {open && formData.payment_type && (
        <OrderConfirmed
          open={open}
          setOpen={setOpen}
          msg={
            formData.payment_type === "cash_on"
              ? "You Choose Cash On delivery for payment, Our delivery man will reach your location at a minimum time."
              : "Stripe"
          }
        />
      )}
    </div>
  );
}

export default PaymentMethod;
