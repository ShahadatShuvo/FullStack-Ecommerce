"use client";

import React from "react";
import RegistrationForm from "@/components/Accounts/RegistrationForm";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { GlobalStates } from "@/app/context";
import AuthSuccess from "@/components/Accounts/AuthSuccess";

function AccountRegister() {
  const { isDarkTheme } = useContext(GlobalStates);

  const [alert, setAlert] = React.useState({
    msg: "",
    type: "",
    show: 0,
  });

  return (
    <div className={isDarkTheme ? "bg-gray-900" : ""}>
      <div className="flex min-h-full flex-1 ] flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <span className="w-[200px]">
            <Image
              alt="shopping"
              src="/img/account/register.svg"
              width={200}
              height={200}
              priority={true}
              className="mx-auto w-1/2 md:w-[50vw]"
            />
          </span>

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
            Sign in to your account
          </h2>
        </div>

        <RegistrationForm setAlert={setAlert} />
        {alert.msg && (
          <AuthSuccess msg={alert.msg} type={alert.type} show={alert.show} />
        )}

        <h4 className="mt-10 text-center text-sm text-gray-500">
          Already have account?
          <Link
            href="/account/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2"
          >
            Log in
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default AccountRegister;
