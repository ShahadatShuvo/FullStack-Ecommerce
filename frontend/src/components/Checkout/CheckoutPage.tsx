"use client";

import { SnackbarProvider } from "notistack";
import CheckoutLeftDiv from "./CheckoutLeftDiv";
import CheckoutRightDiv from "./CheckoutRightDiv";
import OrderSuccess from "./OrderSuccess";

function CheckoutPage() {
  return (
    <div className="w-full p-16 border-y-2">
      <SnackbarProvider />
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
        <CheckoutRightDiv />
      </div>
      {/* End */}
      <OrderSuccess />
    </div>
  );
}

export default CheckoutPage;
