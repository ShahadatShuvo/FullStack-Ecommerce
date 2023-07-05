"use client";

import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useContext } from "react";
import { CartItemContext } from "@/app/context";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  TextField,
} from "@mui/material";
import AuthSuccess from "../Accounts/AuthSuccess";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function UpdateAccount() {
  const { userProfile, accessToken, updateUserprofile } =
    useContext(CartItemContext);

  const [snackbar, setSnackbar] = React.useState(0);
  const [show, setShow] = React.useState(false);

  const [formData, setformData] = React.useState({
    first_name: `${userProfile?.first_name}`,
    last_name: `${userProfile?.last_name}`,
    phone_number: `${userProfile?.phone_number}`,
    gender: `${userProfile?.gender}`,
    country: `${userProfile?.country}`,
    state: `${userProfile?.state}`,
    city: `${userProfile?.city}`,
    zip_code: `${userProfile?.zip_code}`,
    date_of_birth: "1999-10-05",
  });

  const handleformData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
    setShow(false);
  };

  const handleGenderSelect = (event: any) => {
    setformData((prevState) => ({
      ...prevState,
      gender: event.target.value,
    }));
    setShow(false);
  };

  const handleFormSubmit = () => {
    const handleSubmit = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/account/profile/update/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("userData", JSON.stringify(data));
          updateUserprofile(data);
        } else {
          const error = await response.json();
          console.log(error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    handleSubmit();
    setSnackbar((prevData) => prevData + 1);
    setShow(true);
  };

  return (
    <div className="my-16 min-h-[55vh] flex justify-center items-center">
      {show && (
        <div>
          <AuthSuccess
            msg="Profile Successfully Updated!"
            type="success"
            show={snackbar}
          />
        </div>
      )}
      <div className="w-[50%] flex flex-col gap-3 ">
        <div className="w-full flex gap-5">
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            name="first_name"
            onChange={handleformData}
            value={formData.first_name}
          />
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            name="last_name"
            onChange={handleformData}
            value={formData.last_name}
          />
        </div>
        <div className="w-full flex gap-5">
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            name="phone_number"
            onChange={handleformData}
            value={formData.phone_number}
          />
        </div>
        <div className="flex flex-col gap-2">
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Gender"
              value={formData.gender}
              onChange={handleGenderSelect}
            >
              <NativeSelect defaultValue={formData.gender} />
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="w-full flex gap-5">
          <TextField
            fullWidth
            size="small"
            type="text"
            id="outlined-basic"
            label="Country"
            variant="outlined"
            name="country"
            onChange={handleformData}
            value={formData.country}
          />
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="State"
            variant="outlined"
            name="state"
            onChange={handleformData}
            value={formData.state}
          />
        </div>
        <div className="w-full flex gap-5">
          <TextField
            fullWidth
            size="small"
            type="text"
            id="outlined-basic"
            label="City"
            variant="outlined"
            name="city"
            onChange={handleformData}
            value={formData.city}
          />
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="Zip Code"
            variant="outlined"
            name="zip_code"
            onChange={handleformData}
            value={formData.zip_code}
          />
        </div>
        <div className="w-full flex gap-5">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]} sx={{ width: "100%" }}>
              <DatePicker label="Date of Birth" sx={{ width: "100%" }} />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className="w-full flex gap-5 bg-black rounded-md">
          <Button fullWidth variant="contained" onClick={handleFormSubmit}>
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UpdateAccount;
