"use client";

import { GlobalStates } from "@/app/context";
import CheckoutLeftDiv from "@/components/Checkout/CheckoutLeftDiv";
import CheckoutRightDiv from "@/components/Checkout/CheckoutRightDiv";
import Navbar from "@/components/HomePage/Navbar";
import { useRouter } from "next/navigation";
import { SnackbarProvider } from "notistack";
import { useContext, useEffect } from "react";

function Checkout() {
  const router = useRouter();

  const { accessToken } = useContext(GlobalStates);

  useEffect(() => {
    // Access the router object and perform logic
    let url = window.location.href;
    if (url.includes("/checkout") && !accessToken) {
      router.push("/account/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return (
    <div>
      <Navbar />
      <div className=" py-10 px-5  md:py-16 md:px-16 border-y-2">
        <SnackbarProvider />
        {/* Magic headline */}
        <div className="mb-16">
          <div className="flex justify-start">
            <div className="border-2 md:border-4 border-gradient w-[30vw]"></div>
          </div>
          <h1 className="text-xl py-2 md:py-0 md:text-4xl font-medium text-center">
            Checkout Page
          </h1>
          <div className="flex justify-end">
            <div className="border-2 md:border-4 border-gradient w-[30vw]"></div>
          </div>
        </div>

        {/* Checkout Data */}

        <div className="w-full flex flex-col md:flex-row justify-between gap-5">
          {/* Left Side */}
          <CheckoutLeftDiv />

          {/* Right Side */}
          <CheckoutRightDiv />
        </div>
        {/* End */}
      </div>
    </div>
  );
}

export default Checkout;
