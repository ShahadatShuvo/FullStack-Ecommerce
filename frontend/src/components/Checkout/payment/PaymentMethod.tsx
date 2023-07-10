"use client";

import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
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

  const [autoFill, setAutoFill] = React.useState(false);
  const handleAutofill = () => {
    setAutoFill(!autoFill);
  };

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
      <div className="flex ">
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
        </FormControl>

        <div className="capitalize select-none">
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={autoFill}
                onClick={handleAutofill}
              />
            }
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
          />
        </div>
        {autoFill && (
          <div>
            <Button
              variant="contained"
              className="bg-blue-500 mt-16"
              onClick={handlePayment}
            >
              Complete Payment
            </Button>
          </div>
        )}
      </div>
      <div className="mt-16 w-screen flex justify-center">
        <div className="w-[30%]">
          <PayPalScriptProvider
            options={{
              clientId:
                "AWYQ2vfyaBrCVHixp5SB5Bi47JrCFZzfDSTcnlL2alu2V9tDYpvQN4fGurXFTZ1O2n_ZazZltZkKN-AL",
            }}
          >
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => {
                return actions.order
                  .create({
                    purchase_units: [
                      {
                        amount: {
                          currency_code: "USD",
                          value: "100.00",
                        },
                      },
                    ],
                  })
                  .then((orderId) => {
                    // Your code here after create the order
                    alert("Order ID: " + orderId);
                    return orderId;
                  });
              }}
              // onApprove={function (data, actions) {
              //   return actions?.order?.capture().then(function () {
              //     // Your code here after capture the order
              //     alert(
              //       "Transaction completed by " + data?.payer?.name?.given_name
              //     );
              //   });
              // }}
            />
          </PayPalScriptProvider>
        </div>
      </div>

      {open && formData.payment_type && (
        <OrderConfirmed
          open={open}
          setOpen={setOpen}
          info={
            formData.payment_type === "cash_on"
              ? "Order Successfully Taken"
              : "Stripe"
          }
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
