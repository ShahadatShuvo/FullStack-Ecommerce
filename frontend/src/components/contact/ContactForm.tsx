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
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { GlobalStates } from "@/app/context";
import Navbar from "../HomePage/Navbar";
import { set } from "date-fns";
import AuthSuccess from "../Accounts/AuthSuccess";
// import AuthSuccess from "./AuthSuccess";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const validationSchema = yup.object({
  name: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .required("Phone Number is required")
    .min(11, "Phone Number must be 11 digits")
    .max(14, "Phone Number must be 11-14 digits")
    .matches(/^[0-9]+$/, "Must be only digits")
    .matches(
      /^01/,
      "Must start with 01 (enter BD number, no need to apply country code +88)"
    ),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

function ContactForm() {
  const { isDarkTheme, catchErrorMsg, userProfile } = useContext(GlobalStates);

  const router = useRouter();

  const [alert, setAlert] = React.useState({
    msg: "",
    type: "",
    show: 0,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (formData: any) => {
    if (userProfile.id) {
      formData.sender = userProfile.id;
    }
    console.log("contact detail:", formData);
    const handleSubmit = async (formData: any) => {
      try {
        const response = await fetch(`${apiUrl}/api/newsroom/contact/create/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          setAlert((prevState) => ({
            ...prevState,
            msg: "Your message has been sent successfully",
            type: "success",
            show: (prevState.show += 1),
          }));
          formik.resetForm();
        } else if (response.status === 400) {
          const errorData = await response.json();
          catchErrorMsg(errorData);
          router.push("/error/404");
        }
      } catch (error) {
        console.error("Error:", error);
        catchErrorMsg(JSON.stringify(error));
        router.push("/error/404");
      }
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
          <div className="flex flex-col gap-2">
            <TextField
              id="outlined-basic"
              inputProps={{
                style: {
                  color: isDarkTheme ? "white" : "black",
                  background: isDarkTheme ? "#475569" : "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: isDarkTheme ? "white" : "gray",
                },
              }}
              label="Full Name"
              variant="outlined"
              size="small"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <TextField
              id="outlined-basic"
              inputProps={{
                style: {
                  color: isDarkTheme ? "white" : "black",
                  background: isDarkTheme ? "#475569" : "white",
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
            <TextField
              id="outlined-basic"
              inputProps={{
                style: {
                  color: isDarkTheme ? "white" : "black",
                  background: isDarkTheme ? "#475569" : "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: isDarkTheme ? "white" : "gray",
                },
              }}
              label="Phone Number"
              variant="outlined"
              size="small"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </div>
          <div className="flex flex-col gap-2">
            <TextField
              id="subject"
              inputProps={{
                style: {
                  color: isDarkTheme ? "white" : "black",
                  background: isDarkTheme ? "#475569" : "white",
                },
              }}
              InputLabelProps={{
                style: {
                  color: isDarkTheme ? "white" : "gray",
                },
              }}
              label="Subject"
              variant="outlined"
              size="small"
              name="subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && formik.errors.subject}
            />
          </div>
          <div className="flex flex-col gap-2">
            <TextField
              id="outlined-multiline-static"
              sx={{
                background: isDarkTheme ? "#475569" : "white",
              }}
              inputProps={{
                style: {
                  color: isDarkTheme ? "white" : "black",
                },
              }}
              InputLabelProps={{
                style: {
                  color: isDarkTheme ? "white" : "gray",
                },
              }}
              label="Message"
              multiline
              rows={4}
              className="w-full"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </div>

          <div
            className={
              isDarkTheme
                ? "flex flex-col gap-2 bg-gray-500 text-black rounded-full"
                : "flex flex-col gap-2 bg-black rounded-full"
            }
          >
            <Button variant="contained" className="rounded-full" type="submit">
              Submit Message
            </Button>
          </div>
        </div>
        {alert.msg && (
          <AuthSuccess msg={alert.msg} type={alert.type} show={alert.show} />
        )}
      </form>
    </div>
  );
}

export default ContactForm;
