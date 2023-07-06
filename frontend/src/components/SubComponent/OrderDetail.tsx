import React from "react";
import { Button, Fade, Modal } from "@mui/material";
import Image from "next/image";
import { CartItemContext } from "@/app/context";
import { useContext } from "react";

function OrderDetail({
  open,
  setOpen,
  product,
  shippingAddress,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product: string;
  shippingAddress: string;
}) {
  const { isDarkTheme } = useContext(CartItemContext);

  const handleClose = () => {
    setOpen(false);
  };

  const productArray = JSON.parse(product);
  const address = JSON.parse(shippingAddress);
  console.log("address: ", address);

  return (
    <div>
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
          <div className="flex justify-center items-center h-screen">
            <div className=" bg-slate-100 p-3 rounded-lg  w-[40%]">
              <h1 className="text-black text-2xl font-semibold text-center my-3">
                Ordered Products
              </h1>
              <div className="flex justify-center items-center">
                <table className="mt-3 w-full text-gray-500 sm:mt-3">
                  <caption className="sr-only">Products</caption>
                  <thead className="sr-only text-left text-md text-gray-500 sm:not-sr-only">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 pl-16 font-normal sm:w-1/3 md:w-full"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="py-3 pr-8 font-normal sm:w-1/3 md:w-full"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className=" py-3 pr-8 font-normal sm:table-cell"
                      >
                        Quantity
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
                    {productArray.map((product: any) => (
                      <tr key={product.id}>
                        <td className="py-3 pr-16">
                          <div className="flex items-center">
                            <Image
                              src={product.image_url}
                              alt={product.title}
                              width={50}
                              height={50}
                            />
                            <div>
                              <div className="font-medium text-gray-900">
                                {product.title}
                              </div>
                              <div className="mt-1 sm:hidden">
                                {product.price}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className=" py-3 pr-40 sm:table-cell inline-block">
                          {`${product.price} TK`}
                        </td>
                        <td className="hidden py-6 pl-6 sm:table-cell">
                          {product.qty}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <span className="w-full my-4 flex justify-center items-center">
                <Button
                  className="hover:bg-red-600 hover:text-white"
                  variant="outlined"
                  color="error"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </span>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default OrderDetail;
