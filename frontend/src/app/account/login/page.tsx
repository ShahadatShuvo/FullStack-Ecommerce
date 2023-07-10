"use client";

import { GlobalStates } from "@/app/context";
import AuthSuccess from "@/components/Accounts/AuthSuccess";
import LoginForm from "@/components/Accounts/LoginForm";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

function AccountLogin() {
  const { isSignUpComplete, isDarkTheme } = useContext(GlobalStates);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [show, setShow] = React.useState(0);

  return (
    <div className={isDarkTheme ? "bg-gray-900" : ""}>
      <div className="flex min-h-full flex-1 ] flex-col justify-center px-6 py-12 lg:px-8">
        {errorMsg && <AuthSuccess msg={errorMsg} type="error" show={show} />}
        {isSignUpComplete && (
          <AuthSuccess
            msg="Signup Successfully Completed!"
            type="success"
            show={0}
          />
        )}

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <span className="w-[200px]">
            <Image
              alt="shopping"
              src="/img/account/login1.svg"
              width={200}
              height={200}
              priority={true}
              className="mx-auto w-1/2 md:w-[60vw]"
            />
          </span>

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
            Sign in to your account
          </h2>
        </div>
        <LoginForm
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          show={show}
          setShow={setShow}
        />
        <div className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            href="/account/signup"
            className="ml-3 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccountLogin;
