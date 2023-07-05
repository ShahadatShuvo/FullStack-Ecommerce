import React, { use, useEffect, useState } from "react";
import PreviewOrder from "../SubComponent/PreviewOrder";
import { useContext } from "react";
import { CartItemContext } from "@/app/context";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function MyOrder() {
  const { userProfile, accessToken } = useContext(CartItemContext);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/api/search/orders/${userProfile.email}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setOrderList(data.results);
        } else {
          const errorData = await response.json();
          console.log("Error  1:", errorData);
        }
      } catch (error) {
        console.error("Error 2:", error);
      }
    };
    handleSubmit();
  }, [userProfile, accessToken]);

  const showOrderList = orderList.length ? (
    orderList.map((order: any) => {
      return (
        <div key={order.id}>
          <PreviewOrder {...order} />
        </div>
      );
    })
  ) : (
    <div className="font-semibold text-2xl h-[30vh] flex items-center">
      Your order list is empthy!
    </div>
  );

  return (
    <div className="py-16">
      <div className="w-full flex flex-col items-center space-y-4 justify-center ">
        {showOrderList}
      </div>
    </div>
  );
}

export default MyOrder;
