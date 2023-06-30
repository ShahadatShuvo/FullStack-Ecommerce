"use client";

import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@mui/material/Button";

function RegistrationForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const [gender, setGender] = React.useState("");

  const handleChangeGender = (event: any) => {
    setGender(event.target.value as string);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div>
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

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between gap-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="first_name" className="font-semibold">
                  First Name:
                </label>
                <TextField
                  id="first_name"
                  label="First Name"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="last_name" className="font-semibold">
                  Last Name:
                </label>
                <TextField
                  id="last_name"
                  label="Last Name"
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="gender" className="font-semibold">
                Gender:
              </label>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={handleChangeGender}
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                  <MenuItem value={"other"}>Other</MenuItem>
                </Select>
              </FormControl>
            </div>
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
              <FormControl
                sx={{ width: "100%" }}
                variant="outlined"
                size="small"
              >
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
            <div className="flex flex-col gap-2">
              <label htmlFor="password2" className="font-semibold">
                Confirm Password:
              </label>
              <FormControl
                sx={{ width: "100%" }}
                variant="outlined"
                size="small"
              >
                <InputLabel htmlFor="password2">Confirm Password</InputLabel>
                <OutlinedInput
                  id="password2"
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
                  label="Confirm Password"
                />
              </FormControl>
            </div>
            <div className="flex flex-col gap-2 bg-black rounded-full">
              <Button variant="contained" className="rounded-full">
                Sign Up
              </Button>
            </div>
          </div>

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
    </div>
  );
}

export default RegistrationForm;
