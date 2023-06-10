"use client";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import ProductCard from "../ProductCard";
import DateInput from "../SubComponent/Input/DateInput";
import Input from "../SubComponent/Input/Input";
import SelectInput from "../SubComponent/Input/SelectInput";

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
        <div className="flex justify-end">
          <div className="border-4 border-gradient w-[30vw]"></div>
        </div>
      </div>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Account info" />
          <Tab label="Save lists" />
          <Tab label="My order" />
          <Tab label="Change password" />
        </Tabs>
      </Box>

      <div className=" w-[100vw] my-8 ">
        {value === 0 && (
          <div className="grid grid-cols-1 place-items-center gap-3 ">
            <Input labelName="Name" type="text" id="name-input" />
            <Input labelName="Email" type="email" id="email-input" />
            <DateInput />
            <Input labelName="Addess" type="text" id="address-input" />
            <SelectInput labelName="Select Gender" options={options} />
            <Input labelName="Phone No" type="number" id="phone-input" />
          </div>
        )}
        {value === 1 && (
          <div className="grid grid-cols-3 place-items-center ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        )}
        {value === 3 && (
          <div className="grid grid-cols-1 place-items-center gap-3 ">
            <Input labelName="Current password" type="text" id="name-input" />
            <Input labelName="New password" type="text" id="name-input" />
            <Input labelName="Confirm password" type="text" id="name-input" />
          </div>
        )}
      </div>
    </div>
  );
}
