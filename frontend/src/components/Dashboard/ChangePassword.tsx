"use cleint";

import React from "react";
import Button from "@mui/material/Button";
import {
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useContext } from "react";
import { CartItemContext } from "@/app/context";
import AuthSuccess from "../Accounts/AuthSuccess";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const validationSchema = yup.object({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one digit"
    )
    .required("Password is required"),
  password2: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm Password is required"),
});

function ChangePassword() {
  const { checkSignUp, accessToken } = useContext(CartItemContext);

  const formik = useFormik({
    initialValues: {
      password: "",
      password2: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });
  const [alert, setAlert] = React.useState({
    msg: "",
    type: "",
    show: 0,
  });
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleFormSubmit = (data: any) => {
    const handleSubmit = async (formData: any) => {
      try {
        const response = await fetch(`${apiUrl}/api/account/change-password/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          setAlert((prevState) => ({
            ...prevState,
            msg: data.msg,
            type: "success",
            show: (prevState.show += 1),
          }));
        } else {
          const errorData = await response.json();
          console.log("Error:", errorData);
          setAlert((prevState) => ({
            ...prevState,
            msg: errorData.errors.email[0],
            type: "error",
            show: (prevState.show += 1),
          }));
        }
      } catch (error) {
        console.error("Error:", error);
        setAlert((prevState: any) => ({
          ...prevState,
          msg: error,
          type: "error",
          show: (prevState.show += 1),
        }));
      }
    };

    handleSubmit(data);
  };
  return (
    <div className="min-h-[60vh] flex justify-center items-center">
      <form
        className="w-[50%] flex flex-col gap-5"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <FormControl sx={{ width: "100%" }} variant="outlined" size="medium">
            <InputLabel htmlFor="password1">New Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
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
              label="New Password"
            />
            <p className="text-xs text-red-500 mt-1">
              {formik.touched.password && formik.errors.password}
            </p>
          </FormControl>
        </div>
        <div className="flex flex-col gap-2">
          <FormControl sx={{ width: "100%" }} variant="outlined" size="medium">
            <InputLabel htmlFor="password2">Confirm New Password</InputLabel>
            <OutlinedInput
              id="password2"
              type={showPassword ? "text" : "password"}
              name="password2"
              value={formik.values.password2}
              onChange={formik.handleChange}
              error={
                formik.touched.password2 && Boolean(formik.errors.password2)
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
              label="Confirm New Password"
            />
            <p className="text-xs text-red-500 mt-1">
              {formik.touched.password2 && formik.errors.password2}
            </p>
          </FormControl>
        </div>
        <div className="bg-black rounded-md">
          <Button fullWidth variant="contained" type="submit">
            Submit New password
          </Button>
        </div>
      </form>
      {alert.msg && (
        <div>
          <AuthSuccess msg={alert.msg} type={alert.type} show={alert.show} />
        </div>
      )}
    </div>
  );
}

export default ChangePassword;
