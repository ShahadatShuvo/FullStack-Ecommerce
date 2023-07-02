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

function UpdateAccount() {
  const { userProfile } = useContext(CartItemContext);

  const [formdata, setFormdata] = React.useState({
    first_name: `${userProfile?.first_name}`,
    last_name: `${userProfile?.last_name}`,
    email: `${userProfile?.email}`,
    phone_number: `${userProfile?.phone_number}`,
    gender: `${userProfile?.gender}`,
    country: `${userProfile?.country}`,
    state: `${userProfile?.state}`,
    city: `${userProfile?.city}`,
    zip_code: `${userProfile?.zip_code}`,
    date_of_birth: `${userProfile?.date_of_birth}`,
  });

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleGenderSelect = (event: any) => {
    setFormdata((prevState) => ({
      ...prevState,
      gender: event.target.value,
    }));
  };

  return (
    <div className="my-16 min-h-[55vh] flex justify-center items-center">
      <div className="w-[50%] flex flex-col gap-3 ">
        <div className="w-full flex gap-5">
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            name="first_name"
            onChange={handleFormData}
            value={formdata.first_name}
          />
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            name="last_name"
            onChange={handleFormData}
            value={formdata.last_name}
          />
        </div>
        <div className="w-full flex gap-5">
          <TextField
            fullWidth
            size="small"
            type="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleFormData}
            value={formdata.email}
          />
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            name="phone_number"
            onChange={handleFormData}
            value={formdata.phone_number}
          />
        </div>
        <div className="flex flex-col gap-2">
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Gender"
              value={formdata.gender}
              onChange={handleGenderSelect}
            >
              <NativeSelect defaultValue={formdata.gender} />
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            <p className="text-xs text-red-500 mt-1">
              {/* {formik.touched.gender && formik.errors.gender}  */}
            </p>
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
            onChange={handleFormData}
            value={formdata.country}
          />
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="State"
            variant="outlined"
            name="state"
            onChange={handleFormData}
            value={formdata.state}
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
            onChange={handleFormData}
            value={formdata.city}
          />
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="Zip Code"
            variant="outlined"
            name="zip_code"
            onChange={handleFormData}
            value={formdata.zip_code}
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
          <Button fullWidth variant="contained">
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UpdateAccount;
