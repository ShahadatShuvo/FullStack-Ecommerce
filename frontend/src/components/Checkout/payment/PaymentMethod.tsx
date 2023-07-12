"use client";

import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import Confetti from "react-confetti";
import { useContext } from "react";
import { GlobalStates } from "@/app/context";
import Image from "next/image";
import OrderConfirmed from "../OrderConfirmed";

function PaymentMethod() {
  const { isDarkTheme } = useContext(GlobalStates);

  const [autoFill, setAutoFill] = React.useState(false);
  const handleAutofill = () => {
    setAutoFill(!autoFill);
  };

  const [open, setOpen] = React.useState(false);

  const handlePayment = () => {
    setOpen(true);
  };

  return (
    <div className="w-[80%] mx-auto my-auto md:w-screen min-h-[50vh] md:my-16 flex flex-col items-center justify-center">
      {open && <Confetti />}
      <div className="flex flex-col md:flex-row">
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
              size="small"
              variant="contained"
              className="bg-blue-500 mt-16"
              onClick={handlePayment}
            >
              <span className="text-sx md:text-base">Complete Payment</span>
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

      {open && (
        <OrderConfirmed
          open={open}
          setOpen={setOpen}
          info={"Order Successfully Taken"}
          msg={
            "You Choose Cash On delivery for payment, Our delivery man will reach your location at a minimum time."
          }
        />
      )}
    </div>
  );
}

export default PaymentMethod;
