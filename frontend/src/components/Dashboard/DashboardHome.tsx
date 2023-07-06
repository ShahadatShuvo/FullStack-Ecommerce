"use client";

import { GlobalStates } from "@/app/context";
import { Avatar } from "@mui/material";
import Badge from "@mui/material/Badge";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useContext } from "react";
import AccountInfo from "./AccountInfo";
import ChangePassword from "./ChangePassword";
import MyOrder from "./MyOrder";
import UpdateAccount from "./UpdateAccount";
import Wishlist from "./Wishlist";

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
  const { userProfile, activeTab, isDarkTheme } = useContext(GlobalStates);

  const [value, setValue] = React.useState(activeTab);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(activeTab);
  };

  const handleTabs = (value: string) => {
    setValue(value);
  };

  return (
    <div
      className={isDarkTheme ? "w-[100vw] bg-gray-900" : "w-[100vw] bg-white "}
    >
      <div
        className={
          isDarkTheme
            ? "flex justify-between items-center px-10 py-1 bg-gray-900"
            : "flex justify-between items-center px-10 py-1 bg-gray-50"
        }
      >
        <div>
          <Link href="/">
            <Image
              src={isDarkTheme ? "/img/logo_dark.svg" : "/img/logo_light.svg"}
              alt=""
              width={150}
              height={65}
              className="w-[150px] h-[65px]"
            />
          </Link>
        </div>

        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor=""
            indicatorColor="primary"
            centered
          >
            <Tab
              label="Account info"
              value="account_info"
              onClick={() => handleTabs("account_info")}
            />
            <Tab
              label="Update Account"
              value="update_account"
              onClick={() => handleTabs("update_account")}
            />
            <Tab
              label="Wishlist"
              value="wishlist"
              onClick={() => handleTabs("wishlist")}
            />
            <Tab
              label="My orders"
              value="my_orders"
              onClick={() => handleTabs("my_orders")}
            />
            <Tab
              label="Change password"
              onClick={() => handleTabs("change_password")}
            />
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
                  : userProfile.gender === "male"
                  ? "/img/male.svg"
                  : "/img/female.svg"
              }
            />
          </StyledBadge>
        </div>
      </div>

      <div className=" w-[100%]">
        {value === "account_info" && <AccountInfo />}
        {value === "update_account" && <UpdateAccount />}
        {value === "wishlist" && <Wishlist />}
        {value === "my_orders" && <MyOrder />}
        {value === "change_password" && <ChangePassword />}
      </div>
    </div>
  );
}
