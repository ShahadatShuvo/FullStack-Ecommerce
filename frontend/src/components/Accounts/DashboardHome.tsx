"use client";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import ProductCard from "../ProductCard";
import Button from "../SubComponent/Button";
import DateInput from "../SubComponent/Input/DateInput";
import Input from "../SubComponent/Input/Input";
import SelectInput from "../SubComponent/Input/SelectInput";
import PreviewOrder from "../SubComponent/PreviewOrder";
import { demoProductCard } from "../../../interfaces";
import Image from "next/image";
import { Avatar } from "@mui/material";
import Link from "next/link";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function DashboardHome() {
  const [value, setValue] = React.useState(0);
  const options = ["Male", "Female", "Other"];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="w-[100vw] bg-white ">
      <div className="flex justify-between items-center px-10 py-1 bg-gray-50">
        <div>
          <Link href="/">
            <Image
              src="/img/VMi.png"
              alt=""
              width={150}
              height={65}
              className="w-[150px] h-[65px]"
            />
          </Link>
        </div>

        <div>
          <Box sx={{ width: "100%" }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Account info" />
              <Tab label="Save lists" />
              <Tab label="My order" />
              <Tab label="Change password" />
            </Tabs>
          </Box>
        </div>

        <div>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src="/img/me.jpg" />
          </StyledBadge>
        </div>
      </div>
      {/* <div className=" border-y-2 border-gray-100  border-dotted my-4">
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Account info" />
            <Tab label="Save lists" />
            <Tab label="My order" />
            <Tab label="Change password" />
          </Tabs>
        </Box>
      </div> */}

      <div className=" w-[100%] my-8 ">
        {value === 0 && (
          <div className="grid grid-cols-1 place-items-center gap-3 ">
            <span className=" flex justify-center items-center">
              <Image
                src="/img/me.jpg"
                alt="me"
                width={100}
                height={100}
                className="rounded-full"
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
          <div className="flex flex-wrap justify-center items-center gap-5 px-16">
            <ProductCard {...demoProductCard} />
            <ProductCard {...demoProductCard} />
            <ProductCard {...demoProductCard} />
            <ProductCard {...demoProductCard} />
            <ProductCard {...demoProductCard} />
            <ProductCard {...demoProductCard} />
            <ProductCard {...demoProductCard} />
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
