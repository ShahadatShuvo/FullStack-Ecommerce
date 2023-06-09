import { GlobalStates } from "@/app/context";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import OrderDetail from "./OrderDetail";

function PreviewOrder({ ...props }) {
  const { isDarkTheme } = useContext(GlobalStates);

  const date = props.date_ordered.split("T")[0];
  const time = props.date_ordered.slice(date.length + 1, -11);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div
      className={
        isDarkTheme
          ? " w-[70vw] md:w-[50vw] border border-blue-400 p-4  rounded-lg"
          : " w-[90vw] md:w-[50vw] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4  rounded-lg"
      }
    >
      <div className="flex  sm:py-7 last:pb-0 first:pt-0">
        <div className="relative h-24 w-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <Image src="/img/order.svg" alt="" height={100} width={100} />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div>
                <h3 className="text-base font-medium line-clamp-1">
                  Transaction ID: {props.transaction_id}
                </h3>
                <h3 className="text-sm  line-clamp-1 text-slate-500 ">
                  Date: {`${date} | Time: ${time}`}
                </h3>
                <p className="mt-1 text-sm text-slate-500 ">
                  <span>Order ID:</span>
                  <span className="ml-1">{props.id}</span>
                </p>
              </div>
              <div className="mt-0.5 ml-2">
                <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                  <span className="text-green-500 !leading-none">
                    ${props.amount}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500  flex items-center mt-4">
              <span className="hidden sm:inline-block">Status:</span>
              <span className="ml-1">{props.complete ? "Paid" : "Unpaid"}</span>

              {!props.complete && (
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    marginLeft: "5px",
                    backgroundColor: "black",
                    fontSize: "12px",
                  }}
                  className="bg-black text-xs"
                >
                  <Link href={`/checkout/payment`}>
                    <span className="text-base">Pay</span>
                  </Link>
                </Button>
              )}
            </p>

            <div className="flex">
              <Button variant="text" size="small" onClick={handleOpen}>
                View More
              </Button>
              {open && (
                <OrderDetail
                  open={open}
                  setOpen={setOpen}
                  product={props.ordered_products}
                  shippingAddress={props.shipping_address}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewOrder;
