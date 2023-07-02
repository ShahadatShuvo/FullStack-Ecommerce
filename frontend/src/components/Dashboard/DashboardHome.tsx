"use client";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Image from "next/image";
import { Avatar } from "@mui/material";
import { useContext } from "react";
import { CartItemContext } from "@/app/context";
import Link from "next/link";
import AccountInfo from "./AccountInfo";
import UpdateAccount from "./UpdateAccount";
import SaveLists from "./SaveLists";
import MyOrder from "./MyOrder";
import ChangePassword from "./ChangePassword";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

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
  const { userProfile } = useContext(CartItemContext);

  const [value, setValue] = React.useState(0);

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
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Account info" />
            <Tab label="Update Account" />
            <Tab label="Save lists" />
            <Tab label="My order" />
            <Tab label="Change password" />
          </Tabs>
        </div>

        <div>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              alt="Remy Sharp"
              src={
                userProfile.image_url
                  ? `${apiUrl}${userProfile.image_url}`
                  : "/img/me.jpg"
              }
            />
          </StyledBadge>
        </div>
      </div>

      <div className=" w-[100%]">
        {value === 0 && <AccountInfo />}
        {value === 1 && <UpdateAccount />}
        {value === 2 && <SaveLists />}
        {value === 3 && <MyOrder />}
        {value === 4 && <ChangePassword />}
      </div>
    </div>
  );
}
