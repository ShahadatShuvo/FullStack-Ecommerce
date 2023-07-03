import React from "react";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import ChaletIcon from "@mui/icons-material/Chalet";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useContext } from "react";
import { CartItemContext } from "@/app/context";

function CheckoutLeftDiv() {
  const { userProfile } = useContext(CartItemContext);

  const [checked, setChecked] = React.useState(true);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const [formData, setformData] = React.useState({
    first_name: `${userProfile?.first_name}`,
    last_name: `${userProfile?.last_name}`,
    email: `${userProfile?.email}`,
    phone_number: `${userProfile?.phone_number}`,
    gender: `${userProfile?.gender}`,
    country: `${userProfile?.country}`,
    state: `${userProfile?.state}`,
    city: `${userProfile?.city}`,
    zip_code: `${userProfile?.zip_code}`,
    date_of_birth: "1999-10-05",
    detail: "Please enter your address in detail if needed.",
  });

  const handleformData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-5 w-[50%]">
      <div>
        <p className="text-center font-semibold p-3 border border-slate-200 rounded-xl">
          Default Billing Address
        </p>
      </div>
      {/* Contact Info */}
      <div className="p-6 text-gray-600 border border-slate-200 rounded-xl flex items-center ">
        <AccountCircleOutlinedIcon className=" text-3xl" />
        <div className="ml-5 ">
          <p className=" flex items-center">
            <span className="uppercase mr-2">Contact Info</span>
            <CheckOutlinedIcon />
          </p>
          <p className="text-black font-medium">
            <span>{`${userProfile.first_name} ${userProfile.last_name}`}</span>
            <span className="ml-4">{userProfile.email}</span>
            <span className="ml-4">{userProfile.phone_number}</span>
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
              <span>{`${userProfile.country}, ${userProfile.state}, ${userProfile.city} - ${userProfile.zip_code}`}</span>
            </p>
          </div>
        </div>

        <div className="border-t  border-slate-200  px-6 py-7 space-y-4 sm:space-y-6 block uppercase">
          <p className="pb-5 text-center font-semibold  rounded-xl capitalize">
            Change Billing Address
          </p>

          <div className="w-full flex justify-between gap-5">
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
              onChange={handleformData}
              value={formData.email}
            />
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
          <div className="w-full flex justify-between gap-5">
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
          <div className="w-full flex justify-between gap-5">
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
          <div className="w-full flex justify-between gap-5 pt-5">
            <TextField
              id="outlined-multiline-static"
              label="Detail Address"
              multiline
              rows={4}
              className="w-full"
              name="detail"
              onChange={handleformData}
              value={formData.detail}
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
        </div>
      </div>
    </div>
  );
}

export default CheckoutLeftDiv;
