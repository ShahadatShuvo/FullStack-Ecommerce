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
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useContext } from "react";
import AccountInfo from "./AccountInfo";
import ChangePassword from "./ChangePassword";
import MyOrder from "./MyOrder";
import UpdateAccount from "./UpdateAccount";
import Wishlist from "./Wishlist";
import MenuBarIcon from "../HomePage/Navbar/ProfileMenu";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function DashboardHome() {
  const { userProfile, activeTab, isDarkTheme } = useContext(GlobalStates);

  const [openHeadline, setOpenHeadline] = React.useState(true);

  const [value, setValue] = React.useState(activeTab);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
          {/* <StyledBadge
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
          </StyledBadge> */}
          <MenuBarIcon
            openHeadline={openHeadline}
            setOpenHeadline={setOpenHeadline}
            name="dashboard"
          />
        </div>
      </div>
      <div className="w-[100vw] flex justify-between my-10">
        <div className="w-[30%] md:w-[15%]">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab label="Account info" {...a11yProps(0)} />
            <Tab label="Update Account" {...a11yProps(1)} />
            <Tab label="Wishlist" {...a11yProps(2)} />
            <Tab label="My orders" {...a11yProps(3)} />
            <Tab label="Change password" {...a11yProps(4)} />
          </Tabs>
        </div>
        <TabPanel value={value} index={0}>
          <AccountInfo />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UpdateAccount />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Wishlist />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <MyOrder />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <ChangePassword />
        </TabPanel>
      </div>
    </div>
  );
}
