"use client";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import ProductCard from "../ProductCard";
import Button from "../SubComponent/Button";
import DateInput from "../SubComponent/Input/DateInput";
import Input from "../SubComponent/Input/Input";
import SelectInput from "../SubComponent/Input/SelectInput";
import PreviewOrder from "../SubComponent/PreviewOrder";

export default function DashboardHome() {
  const [value, setValue] = React.useState(0);
  const options = ["Male", "Female", "Other"];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="w-[100vw] bg-white h-screen">
      <div>
        <div className="flex justify-start">
          <div className="border-4 border-gradient w-[30vw]"></div>
        </div>
        <h1 className="text-4xl font-semibold text-center">My Account Page</h1>
      </div>
      <div className=" border-y-2 border-gray-100  border-dotted my-4">
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Account info" />
            <Tab label="Save lists" />
            <Tab label="My order" />
            <Tab label="Change password" />
          </Tabs>
        </Box>
      </div>

      <div className=" w-[100%] my-8 ">
        {value === 0 && (
          <div className="grid grid-cols-1 place-items-center gap-3 ">
            <span className=" flex justify-center items-center">
              <img
                className="w-32 rounded-full h-32 my-2"
                src="https://media.istockphoto.com/id/1179420343/photo/smiling-man-outdoors-in-the-city.jpg?s=612x612&w=0&k=20&c=8l-gOboGEFSyCFXr09EguDmV0E0bFT5usAms1wyFBh8="
                alt=""
              />
            </span>
            <Input labelName="Name" type="text" id="name-input" />
            <Input labelName="Email" type="email" id="email-input" />
            <DateInput />
            <Input labelName="Addess" type="text" id="address-input" />
            <SelectInput labelName="Select Gender" options={options} />
            <Input labelName="Phone No" type="number" id="phone-input" />
            <span className=" text-center">
              <Button btnTitle="Update" />
            </span>
          </div>
        )}
        {value === 1 && (
          <div className="grid grid-cols-3 w-screen place-items-center ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        )}
        {value === 2 && (
          <div className="w-full flex flex-col items-center space-y-4 justify-center ">
            <PreviewOrder />
            <PreviewOrder />
          </div>
        )}
        {value === 3 && (
          <div className="grid grid-cols-1 place-items-center gap-3 ">
            <Input labelName="Current password" type="text" id="name-input" />
            <Input labelName="New password" type="text" id="name-input" />
            <Input labelName="Confirm password" type="text" id="name-input" />
            <span className=" text-center">
              <Button btnTitle="Update Password" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
