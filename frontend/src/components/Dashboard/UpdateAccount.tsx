"use client";

import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useContext } from "react";
import dayjs, { Dayjs } from "dayjs";
import { GlobalStates } from "@/app/context";

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
import { setFips } from "crypto";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function UpdateAccount() {
  const { userProfile, accessToken, updateUserprofile, isDarkTheme } =
    useContext(GlobalStates);

  const [snackbar, setSnackbar] = React.useState(0);
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));

  const [show, setShow] = React.useState(false);

  const today = new Date();

  const year = today.getFullYear(); // Get the full year (e.g., 2023)
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Get the month (0-11) and add leading zero if needed
  const day = String(today.getDate()).padStart(2, "0"); // Get the day of the month and add leading zero if needed

  const formattedDate = `${year}-${month}-${day}`;

  const [formData, setformData] = React.useState({
    first_name: `${userProfile?.first_name}`,
    last_name: `${userProfile?.last_name}`,
    phone_number: `${userProfile?.phone_number}`,
    gender: `${userProfile?.gender}`,
    country: `${userProfile?.country}`,
    state: `${userProfile?.state}`,
    city: `${userProfile?.city}`,
    zip_code: `${userProfile?.zip_code}`,
    date_of_birth: `${formattedDate}`,
  });

  const handleformData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
    setShow(false);
  };

  const handleDate = (newValue: any) => {
    setValue(newValue);
    setformData((prevState) => ({
      ...prevState,
      date_of_birth: newValue.format("YYYY-MM-DD"),
    }));
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
        } else if (response.status === 401) {
        } else {
          const error = await response.json();
        }
      } catch (error) {}
    };

    handleSubmit();
    setSnackbar((prevData) => prevData + 1);
    setShow(true);
  };

  return (
    <div className="md:ml-0 w-[75vw] md:w-[65vw] min-h-[55vh] flex justify-start items-center">
      {show && (
        <div>
          <AuthSuccess
            msg="Profile Successfully Updated!"
            type="success"
            show={snackbar}
          />
        </div>
      )}
      <div className="ml-5 w-[80%] md:w-[60%] flex flex-col gap-3 ">
        <div className="w-full flex flex-col md:flex-row gap-3 md:gap-5">
          <TextField
            fullWidth
            size="small"
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
            label="Last Name"
            variant="outlined"
            name="last_name"
            onChange={handleformData}
            value={formData.last_name}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-3 md:gap-5">
          <TextField
            fullWidth
            size="small"
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
            name="phone_number"
            onChange={handleformData}
            value={formData.phone_number}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-3 md:gap-5">
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
              label="Gender"
              value={formData.gender}
              onChange={handleGenderSelect}
              style={{ color: isDarkTheme ? "white" : "black" }}
              inputProps={{
                style: {
                  color: isDarkTheme ? "white" : "black",
                },
              }}
            >
              <NativeSelect defaultValue={formData.gender} />
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-3 md:gap-5">
          <TextField
            fullWidth
            size="small"
            type="text"
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
            label="State"
            variant="outlined"
            name="state"
            onChange={handleformData}
            value={formData.state}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-3 md:gap-5">
          <TextField
            fullWidth
            size="small"
            type="text"
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
            label="Zip Code"
            variant="outlined"
            name="zip_code"
            onChange={handleformData}
            value={formData.zip_code}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-3 md:gap-5">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]} sx={{ width: "100%" }}>
              <DatePicker
                label="Controlled picker"
                value={value}
                onChange={(newValue) => handleDate(newValue)}
                sx={{
                  width: "100%",
                  "& .MuiInputBase-root": {
                    color: isDarkTheme ? "white" : "black",
                  },
                  "& .MuiInputLabel-root": {
                    color: isDarkTheme ? "white" : "gray",
                  },
                  "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                    borderBottomColor: isDarkTheme ? "white" : "gray",
                  },
                  "& .MuiIconButton-root": {
                    color: isDarkTheme ? "white" : "black",
                  },
                  "& .MuiPickersDay-daySelected": {
                    backgroundColor: isDarkTheme ? "white" : "black",
                    color: isDarkTheme ? "black" : "white",
                  },
                  "& .MuiPickersToolbar-toolbar": {
                    backgroundColor: isDarkTheme ? "white" : "black",
                    color: isDarkTheme ? "black" : "white",
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div
          className={
            isDarkTheme
              ? "w-full flex gap-5 bg-gray-500 rounded-md"
              : "w-full flex gap-5 bg-black rounded-md"
          }
        >
          <Button fullWidth variant="contained" onClick={handleFormSubmit}>
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UpdateAccount;
