import Navbar from "@/components/HomePage/Navbar";
import Link from "next/link";
import React from "react";

function ShippingTC() {
  return (
    <div>
      <Navbar />
      <div className="min-h-[70vh] flex justify-center items-center my-10">
        <div className="h-[80%] w-[60vw]">
          <h1 className="text-xl font-semibold my-5">
            Shipping Terms and Conditions:
          </h1>
          <div className="mb-5">
            <p className="font-semibold text-gray-500">
              Shipping Methods and Services:
            </p>
            <ul className="list-decimal ml-5">
              <li>
                We offer shipping services through trusted carriers to deliver
                orders to the designated shipping address.
              </li>
              <li>
                The available shipping methods and associated costs will be
                displayed during the checkout process.
              </li>
              <li>
                We reserve the right to modify or update the shipping methods
                and services at any time without prior notice.
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <p className="font-semibold text-gray-500">
              Order Processing and Delivery Time:
            </p>
            <ul className="list-decimal ml-5">
              <li>
                We strive to process and ship orders promptly. Order processing
                times may vary depending on the availability of the product and
                other factors. Estimated processing times will be provided
                during the checkout process.
              </li>
              <li>
                Delivery times depend on the shipping method selected and the
                destination. Estimated delivery times will be displayed during
                the checkout process.
              </li>
              <li>
                Please note that delivery times provided are estimates and not
                guaranteed. Delays may occur due to unforeseen circumstances or
                events beyond our control.
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <p className="font-semibold text-gray-500">Shipping Eligibility:</p>
            <ul className="list-decimal ml-5">
              <li>
                We currently offer shipping within [list of eligible
                countries/regions].
              </li>
              <li>
                Please ensure that the shipping address provided is accurate and
                complete. We are not responsible for delays or failed deliveries
                resulting from incorrect or incomplete address details.
              </li>
              <li>
                We reserve the right to modify or update the shipping methods
                and services at any time without prior notice.
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <p className="font-semibold text-gray-500">
              Tracking and Order Status:
            </p>
            <ul className="list-decimal ml-5">
              <li>
                We currently offer shipping within [list of eligible
                countries/regions].
              </li>
              <li>
                Please ensure that the shipping address provided is accurate and
                complete. We are not responsible for delays or failed deliveries
                resulting from incorrect or incomplete address details.
              </li>
              <li>
                We reserve the right to modify or update the shipping methods
                and services at any time without prior notice.
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <p className="font-semibold text-gray-500">
              Lost or Damaged Packages:
            </p>
            <ul className="list-decimal ml-5">
              <li>
                We currently offer shipping within [list of eligible
                countries/regions].
              </li>
              <li>
                Please ensure that the shipping address provided is accurate and
                complete. We are not responsible for delays or failed deliveries
                resulting from incorrect or incomplete address details.
              </li>
              <li>
                We reserve the right to modify or update the shipping methods
                and services at any time without prior notice.
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <p className="font-semibold text-gray-500">Return to Sender:</p>
            <ul className="list-decimal ml-5">
              <li>
                We currently offer shipping within [list of eligible
                countries/regions].
              </li>
              <li>
                Please ensure that the shipping address provided is accurate and
                complete. We are not responsible for delays or failed deliveries
                resulting from incorrect or incomplete address details.
              </li>
              <li>
                We reserve the right to modify or update the shipping methods
                and services at any time without prior notice.
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <p className="font-semibold text-gray-500">
              Limitations and Liability:
            </p>
            <ul className="list-decimal ml-5">
              <li>
                We currently offer shipping within [list of eligible
                countries/regions].
              </li>
              <li>
                Please ensure that the shipping address provided is accurate and
                complete. We are not responsible for delays or failed deliveries
                resulting from incorrect or incomplete address details.
              </li>
              <li>
                We reserve the right to modify or update the shipping methods
                and services at any time without prior notice.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400">
        See terms & conditions for
        <Link href="/checkout/terms&conditions/tax">
          <span className="ml-1 text-blue-400 hover:font-semibold underline">
            Taxes
          </span>
        </Link>
      </p>
    </div>
  );
}

export default ShippingTC;
