"use client";

import { GlobalStates } from "@/app/context";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import * as yup from "yup";

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

function LoginForm({
  setErrorMsg,
  setShow,
}: {
  errorMsg: string;
  setErrorMsg: any;
  show: number;
  setShow: any;
}) {
  const router = useRouter();

  const { checkLogin, checkSignUp, checkLogout, setToken, isDarkTheme } =
    useContext(GlobalStates);

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
          localStorage.setItem("refreshToken", data.token.refresh);
          setToken(data.token.access, "accessToken");
          setToken(data.token.refresh, "refreshToken");
          checkLogin(true);
          router.push("/");
          // window.location.href = "/";
        } else if (response.status === 404) {
          const errorData = await response.json();
          setErrorMsg(errorData.errors.non_field_errors[0]);
          setShow((prevData: any) => prevData + 1);
        } else if (response.status === 400) {
          const errorData = await response.json();
          setErrorMsg(errorData.errors.email[0]);
          setShow((prevData: any) => prevData + 1);
        }
      } catch (error) {}
    };

    handleSubmit(formData);
    checkSignUp(false);
    checkLogout(false);
  };

  return (
    <div>
      <form
        className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <TextField
              id="email"
              inputProps={{
                style: {
                  color: isDarkTheme ? "white" : "black",
                  background: isDarkTheme ? "#333" : "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: isDarkTheme ? "white" : "gray",
                },
              }}
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
            <FormControl sx={{ width: "100%" }} variant="outlined" size="small">
              <InputLabel htmlFor="password1">Password</InputLabel>
              <OutlinedInput
                id="password1"
                inputProps={{
                  style: {
                    color: isDarkTheme ? "white" : "black",
                    background: isDarkTheme ? "#333" : "white",
                  },
                }}
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
                      sx={{
                        color: "gray",
                      }}
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

          <div
            className={
              isDarkTheme
                ? "flex flex-col gap-2 bg-gray-500 text-black rounded-full"
                : "flex flex-col gap-2 bg-black rounded-full"
            }
          >
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
    </div>
  );
}

export default LoginForm;
