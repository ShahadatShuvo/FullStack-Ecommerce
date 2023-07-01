"use client";

import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Image from "next/image";
import Link from "next/link";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CartItemContext } from "@/app/context";
import AuthSuccess from "./AuthSuccess";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function LoginForm() {
  const router = useRouter();

  const { isSignUpComplete, checkLogin, checkSignUp, checkLogout } =
    useContext(CartItemContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      handleLogin(values);
    },
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [show, setShow] = React.useState(0);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = (data: any) => {
    const formData = {
      email: data.email,
      password: data.password,
    };
    const handleSubmit = async (formData: any) => {
      try {
        const response = await fetch(`${apiUrl}/api/account/login/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          // Store the access token in localStorage or any other state management solution
          localStorage.setItem("accessToken", data.token.access);
          checkLogin(true);
          router.push("/");
        } else if (response.status === 404) {
          const errorData = await response.json();
          setErrorMsg(errorData.errors.non_field_errors[0]);
          setShow((prevData) => prevData + 1);
        } else if (response.status === 400) {
          const errorData = await response.json();
          setErrorMsg(errorData.errors.email[0]);
          setShow((prevData) => prevData + 1);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    handleSubmit(formData);
    checkSignUp(false);
    checkLogout(false);
  };

  return (
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

      <form
        className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              Email Address:
            </label>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password1" className="font-semibold">
              Password:
            </label>
            <FormControl sx={{ width: "100%" }} variant="outlined" size="small">
              <InputLabel htmlFor="password1">Password</InputLabel>
              <OutlinedInput
                id="password1"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <p className="text-xs text-red-500 mt-1">
                {formik.touched.password && formik.errors.password}
              </p>
            </FormControl>
          </div>

          <div className="flex flex-col gap-2 bg-black rounded-full">
            <Button
              variant="contained"
              className="rounded-full"
              // onClick={handleLogin}
              type="submit"
            >
              Log In
            </Button>
          </div>
        </div>
      </form>

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
  );
}

export default LoginForm;
