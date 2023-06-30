"use client";

import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    console.log("login");
    router.push("/");
  };

  return (
    <div className="flex min-h-full flex-1 ] flex-col justify-center px-6 py-12 lg:px-8">
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

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
            </FormControl>
          </div>

          <div className="flex flex-col gap-2 bg-black rounded-full">
            <Button
              variant="contained"
              className="rounded-full"
              onClick={handleLogin}
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <Link href="/account/register">
          <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Register here
          </p>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
