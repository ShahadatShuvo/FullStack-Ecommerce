import { GlobalStates } from "@/app/context";
import { Button, Fade, Modal } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";

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
  const { isDarkTheme } = useContext(GlobalStates);

  const handleClose = () => {
    setOpen(false);
  };

  const productArray = JSON.parse(product);
  let address;
  if (typeof shippingAddress === "string") {
    try {
      address = JSON.parse(shippingAddress); // valid JSON
    } catch (error) {
      address = shippingAddress; // not valid JSON
    }
  }

  return (
    <div>
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
          <div className="flex justify-center items-center md:h-screen overflow-auto">
            <div className=" bg-slate-100 p-3 rounded-lg  min-w-[40%] max-w-[90%] md:max-w-[60%]">
              <div className="md:flex ">
                <div>
                  <h1 className=" text-3xl bg-blue-600 text-white rounded-lg px-2 md:py-2 font-semibold text-center my-3">
                    Ordered Products
                  </h1>
                  <div className="flex justify-center ">
                    <table className="mt-3 w-full text-gray-500 sm:mt-3">
                      <caption className="sr-only">Products</caption>
                      <thead className="sr-only text-left text-md text-gray-500 sm:not-sr-only">
                        <tr>
                          <th
                            scope="col"
                            className="py-3 pl-10 font-normal sm:w-1/3 md:w-full"
                          >
                            Product
                          </th>
                          <th
                            scope="col"
                            className="py-3 pl-10 font-normal sm:w-2/5 md:w-full"
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
                            <td className=" py-3  pl-10 pr-20 sm:table-cell inline-block">
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
                </div>
                <div className="min-w-[70%] md:min-w-[35%] flex justify-center">
                  <div className="h-full border-l-2 border-gray-400 md:mx-4"></div>
                  <div className="text-gray-500">
                    <p className="w-full border-b mt-3 pb-2 text-2xl font-semibold bg-blue-600 text-white rounded-lg px-2 py-2">
                      Shipping Address
                    </p>
                    <div className="flex flex-col gap-2 mt-5 bg-orange-300 p-4 rounded-lg text-blue-900 font-semibold">
                      <p>
                        Full Name:
                        <span className="ml-1">
                          {address.first_name} {address.last_name}
                        </span>
                      </p>
                      <p>
                        Email:<span className="ml-1">{address.email}</span>
                      </p>
                      <p>
                        Phone Number:
                        <span className="ml-1">{address.phone_number}</span>
                      </p>
                      <p>
                        Country :<span>{address.country}</span>
                      </p>
                      <p>
                        State:<span className="ml-1">{address.state}</span>
                      </p>
                      <p>
                        City:<span className="ml-1">{address.city}</span>
                      </p>
                      <p>
                        Zip Code:
                        <span className="ml-1">{address.zip_code}</span>
                      </p>
                      <p>
                        Address type:
                        <span className="ml-1">{address.address_type}</span>
                      </p>
                      <p>
                        Detail address:
                        <span className="ml-1">{address.detail}</span>
                      </p>
                    </div>
                  </div>
                </div>
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
