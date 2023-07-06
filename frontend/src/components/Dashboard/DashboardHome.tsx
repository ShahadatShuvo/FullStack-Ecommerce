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

  const [tabvalue, setTabvalue] = React.useState(0);
  React.useEffect(() => {
    setTabvalue(
      activeTab === "account_info"
        ? 0
        : activeTab === "update_account"
        ? 1
        : activeTab === "wishlist"
        ? 2
        : activeTab === "my_orders"
        ? 3
        : 4
    );
  }, [activeTab]);

  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(activeTab);
  // };

  const handleTabs = (name: string) => {
    name === "account_info"
      ? setTabvalue(0)
      : name === "update_account"
      ? setTabvalue(1)
      : name === "wishlist"
      ? setTabvalue(2)
      : name === "my_orders"
      ? setTabvalue(3)
      : setTabvalue(4);
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
            value={tabvalue}
            // onChange={handleChange}
            indicatorColor="primary"
            centered
          >
            <Tab
              label="Account info"
              sx={{ color: isDarkTheme ? "#fff" : "#000" }}
              onClick={() => handleTabs("account_info")}
            />
            <Tab
              label="Update Account"
              sx={{ color: isDarkTheme ? "#fff" : "#000" }}
              onClick={() => handleTabs("update_account")}
            />
            <Tab
              label="Wishlist"
              sx={{ color: isDarkTheme ? "#fff" : "#000" }}
              onClick={() => handleTabs("wishlist")}
            />
            <Tab
              label="My orders"
              sx={{ color: isDarkTheme ? "#fff" : "#000" }}
              onClick={() => handleTabs("my_orders")}
            />
            <Tab
              label="Change password"
              sx={{ color: isDarkTheme ? "#fff" : "#000" }}
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
        {tabvalue === 0 && <AccountInfo />}
        {tabvalue === 1 && <UpdateAccount />}
        {tabvalue === 2 && <Wishlist />}
        {tabvalue === 3 && <MyOrder />}
        {tabvalue === 4 && <ChangePassword />}
      </div>
    </div>
  );
}
