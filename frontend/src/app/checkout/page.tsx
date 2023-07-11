"use client";

import { SnackbarProvider } from "notistack";
import { GlobalStates } from "@/app/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/HomePage/Navbar";
import CheckoutLeftDiv from "@/components/Checkout/CheckoutLeftDiv";
import CheckoutRightDiv from "@/components/Checkout/CheckoutRightDiv";

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
      </div>
    </div>
  );
}

export default Checkout;
