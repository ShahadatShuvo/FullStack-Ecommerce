import React from "react";

import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ChaletIcon from "@mui/icons-material/Chalet";
import BusinessIcon from "@mui/icons-material/Business";

function CheckoutLeftDiv() {
  const [checked, setChecked] = React.useState(true);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="space-y-10 w-[50%]">
      <div className="p-6 text-gray-600 border border-slate-200 rounded-xl flex items-center ">
        <AccountCircleOutlinedIcon className=" text-3xl" />
        <div className="ml-5 ">
          <p className=" flex items-center">
            <span className="uppercase mr-2">Contact Info</span>
            <CheckOutlinedIcon />
          </p>
          <p className="text-black font-medium">
            <span>Shahadat Hossain</span>
            <span className="ml-4">+019 54677860</span>
          </p>
        </div>
      </div>

      {/* Shipping Info */}
      <div className="border border-slate-200  rounded-xl ">
        <div className="p-6 text-gray-600 flex flex-col sm:flex-row items-start">
          <LocalShippingOutlinedIcon className=" text-3xl" />
          <div className="ml-5 ">
            <p className=" flex items-center">
              <span className="uppercase mr-2">SHIPPING ADDRESS</span>
              <CheckOutlinedIcon />
            </p>
            <p className="text-black font-medium">
              <span>Cumilla, Chittagong, Cumilla-3500</span>
            </p>
          </div>
        </div>
        <div className="border-t  border-slate-200  px-6 py-7 space-y-4 sm:space-y-6 block uppercase">
          <div className="w-full flex justify-between gap-5">
            <TextField
              size="small"
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div className="w-full flex justify-between gap-5">
            <TextField
              size="small"
              id="outlined-basic"
              label="Country"
              variant="outlined"
              className="w-full"
            />
            <TextField
              size="small"
              id="outlined-basic"
              label="State"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div className="w-full flex justify-between gap-5">
            <TextField
              size="small"
              id="outlined-basic"
              label="City"
              variant="outlined"
              className="w-full"
            />
            <TextField
              size="small"
              id="outlined-basic"
              label="ZIP / Postal Code"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div className="w-full flex justify-between gap-5 pt-5">
            <TextField
              id="outlined-multiline-static"
              label="Detail Address"
              multiline
              rows={4}
              value="Please enter your address in detail if needed."
              className="w-full"
            />
          </div>

          <div className="w-full">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                <span className="text-black font-semibold">Address type:</span>
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="home"
                  // checked={true}
                  control={<Radio />}
                  label={
                    <div className="flex items-center">
                      <ChaletIcon className="text-3xl" />
                      <p className="ml-2">Home (all day delivery)</p>
                    </div>
                  }
                  className="text-gray-500 capitalize ml-32"
                />
                <FormControlLabel
                  value="office"
                  control={<Radio />}
                  label={
                    <div className="flex items-center">
                      <BusinessIcon className="text-3xl" />
                      <p className="ml-2">Office(Delivery 9AM - 5 PM)</p>
                    </div>
                  }
                  className="text-gray-500 capitalize ml-32"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="w-full flex gap-5 pt-6">
            <Button
              variant="contained"
              className="mt-5 bg-black rounded-full w-[60%]"
            >
              Save and next tp payment
            </Button>
            <Button
              variant="contained"
              className="mt-5 bg-black rounded-full hover:bg-red-600"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutLeftDiv;
