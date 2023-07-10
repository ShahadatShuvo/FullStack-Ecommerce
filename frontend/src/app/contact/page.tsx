"use client";

import Image from "next/image";
import React from "react";
import { useContext } from "react";
import { GlobalStates } from "@/app/context";
import Navbar from "@/components/HomePage/Navbar";
import ContactForm from "@/components/contact/ContactForm";

function Contact() {
  const { isDarkTheme } = useContext(GlobalStates);

  return (
    <div>
      <Navbar />
      <div className={isDarkTheme ? "bg-gray-900" : ""}>
        <div className="flex min-h-full flex-1 ] flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <span className="w-[200px]">
              <Image
                alt="shopping"
                src="/img/contact.svg"
                width={200}
                height={200}
                priority={true}
                className="mx-auto w-1/2 md:w-[50vw]"
              />
            </span>

            <h2
              className={
                isDarkTheme
                  ? "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white"
                  : "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
              }
            >
              Contact with us
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
