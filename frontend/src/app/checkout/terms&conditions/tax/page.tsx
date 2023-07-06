import Navbar from "@/components/HomePage/Navbar";
import Link from "next/link";
import React from "react";

function TaxTC() {
  return (
    <div>
      <Navbar />
      <div className="h-[70vh] flex justify-center items-center">
        <div className="h-[80%] w-[60vw]">
          <h1 className="text-xl font-semibold my-5">
            Terms and Conditions for Tax (5%)
          </h1>
          <ul className="list-decimal ml-5">
            <li>
              Tax Rate: The tax rate applied to all taxable items and services
              is 5%. This rate is subject to change based on government
              regulations or amendments.
            </li>
            <li>
              Calculation Method: The tax amount will be calculated as 5% of the
              taxable value of the item or service. The taxable value is
              determined based on the applicable rules and regulations.
            </li>
            <li>
              Tax Collection: The seller or service provider is responsible for
              collecting and remitting the tax amount to the appropriate tax
              authority as required by law.
            </li>
            <li>
              Inclusive Pricing: Unless explicitly stated otherwise, all prices
              mentioned on our platform or during transactions are exclusive of
              taxes. The applicable tax will be added to the final price during
              the checkout process.
            </li>
            <li>
              Tax Invoices: A tax invoice will be issued for all taxable
              transactions. The invoice will clearly indicate the tax amount
              charged and other relevant details as required by tax laws.
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-gray-400">
        See terms & conditions for
        <Link href="/checkout/terms&conditions/shipping">
          <span className="ml-1 text-blue-400 hover:font-semibold underline">
            Shipping
          </span>
        </Link>
      </p>
    </div>
  );
}

export default TaxTC;
