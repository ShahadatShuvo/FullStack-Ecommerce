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
import { useFormik } from "formik";
import * as yup from "yup";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { GlobalStates } from "@/app/context";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const validationSchema = yup.object({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  gender: yup.string().required("Gender is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password1: yup
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
    .oneOf([yup.ref("password1")], "Passwords do not match")
    .required("Confirm Password is required"),
});

function RegistrationForm({ setAlert }: { setAlert: any }) {
  const router = useRouter();

  const { checkSignUp, isDarkTheme } = useContext(GlobalStates);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      gender: "",
      email: "",
      password1: "",
      password2: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      handleSignUp(values);
    },
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSignUp = (data: any) => {
    const formData = {
      email: data.email,
      password: data.password1,
      password2: data.password2,
      first_name: data.first_name,
      last_name: data.last_name,
      gender: data.gender,
    };
    const handleSubmit = async (formData: any) => {
      try {
        const response = await fetch(`${apiUrl}/api/account/register/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          // Store the access token in localStorage or any other state management solution
          // localStorage.setItem("accessToken", data.token);
          checkSignUp(true);
          router.push("/account/login");
        } else if (response.status === 400) {
          const errorData = await response.json();
          setAlert((prevState: any) => ({
            ...prevState,
            msg: errorData.errors.email[0],
            type: "error",
            show: (prevState.show += 1),
          }));

          // Display error message to the user
          // You can use state or a UI library to show the error message else {
        }
      } catch (error) {}
    };

    handleSubmit(formData);
  };

  return (
    <div>
      <form
        className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-3">
          <div className="flex justify-between gap-2">
            <div className="flex flex-col gap-2">
              <TextField
                id="first_name"
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
                label="First Name"
                variant="outlined"
                size="small"
                name="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                error={
                  formik.touched.first_name && Boolean(formik.errors.first_name)
                }
                helperText={
                  formik.touched.first_name && formik.errors.first_name
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <TextField
                id="last_name"
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
                label="Last Name"
                variant="outlined"
                size="small"
                name="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                error={
                  formik.touched.last_name && Boolean(formik.errors.last_name)
                }
                helperText={formik.touched.last_name && formik.errors.last_name}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <FormControl fullWidth size="small">
              <InputLabel
                id="demo-simple-select-label"
                style={{ color: isDarkTheme ? "white" : "gray" }}
              >
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{ color: isDarkTheme ? "white" : "black" }}
                inputProps={{
                  style: {
                    color: isDarkTheme ? "white" : "black",
                  },
                }}
                label="Gender"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              <p className="text-xs text-red-500 mt-1">
                {formik.touched.gender && formik.errors.gender}
              </p>
            </FormControl>
          </div>
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
                name="password1"
                value={formik.values.password1}
                onChange={formik.handleChange}
                error={
                  formik.touched.password1 && Boolean(formik.errors.password1)
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      sx={{
                        color: "gray",
                      }}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <p className="text-xs text-red-500 mt-1">
                {formik.touched.password1 && formik.errors.password1}
              </p>
            </FormControl>
          </div>
          <div className="flex flex-col gap-2">
            <FormControl sx={{ width: "100%" }} variant="outlined" size="small">
              <InputLabel htmlFor="password2">Confirm Password</InputLabel>
              <OutlinedInput
                id="password2"
                inputProps={{
                  style: {
                    color: isDarkTheme ? "white" : "black",
                    background: isDarkTheme ? "#333" : "white",
                  },
                }}
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
                      sx={{
                        color: "gray",
                      }}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
              />
              <p className="text-xs text-red-500 mt-1">
                {formik.touched.password2 && formik.errors.password2}
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
            <Button variant="contained" className="rounded-full" type="submit">
              Sign Up
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
