import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function UpdateAccount() {
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
          />
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
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
          />
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />
        </div>
        <div className="flex flex-col gap-2">
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Gender"
              name="gender"
            >
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
          />
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="State"
            variant="outlined"
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
          />
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="Zip Code"
            variant="outlined"
          />
        </div>
        <div className="w-full flex gap-5">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]} sx={{ width: "100%" }}>
              <DatePicker label="Date of Birth" sx={{ width: "100%" }} />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className="w-full flex gap-5">
          <Button fullWidth variant="contained">
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UpdateAccount;
