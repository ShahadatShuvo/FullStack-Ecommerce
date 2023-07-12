import React, { use, useEffect, useState } from "react";
import PreviewOrder from "./orders/PreviewOrder";
import { useContext } from "react";
import { GlobalStates } from "@/app/context";
import { useRouter } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function MyOrder() {
  const {
    userProfile,
    accessToken,
    catchErrorMsg,
    setToken,
    checkLogout,
    checkLogin,
  } = useContext(GlobalStates);

  const router = useRouter();

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
          router.push("/error/404");
          catchErrorMsg(JSON.stringify(errorData));
          setToken("", "logout");
          checkLogout(true);
          checkLogin(false);
        }
      } catch (error) {
        console.error("Error 2:", error);
        router.push("/error/404");
        catchErrorMsg(JSON.stringify(error));
        setToken("", "logout");
        checkLogout(true);
        checkLogin(false);
      }
    };
    handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="w-[70vw]">
      <div className="w-full flex flex-col items-start space-y-4 justify-center ">
        {showOrderList}
      </div>
    </div>
  );
}

export default MyOrder;
