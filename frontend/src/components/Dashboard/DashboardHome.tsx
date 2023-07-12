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
        <Box>
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
    <div className={isDarkTheme ? "bg-gray-900 " : "w-full bg-white "}>
      <div
        className={
          isDarkTheme
            ? "px-10 w-full flex justify-between items-center  bg-gray-900"
            : "px-10 w-full flex justify-between items-center  bg-gray-50"
        }
      >
        <Link href="/">
          <Image
            src={isDarkTheme ? "/img/logo_dark.svg" : "/img/logo_light.svg"}
            alt=""
            width={150}
            height={65}
            className="w-[150px] h-[65px]"
          />
        </Link>

        <MenuBarIcon
          openHeadline={openHeadline}
          setOpenHeadline={setOpenHeadline}
          name="dashboard"
        />
      </div>
      <div className="w-[100vw] flex justify-between my-10">
        <div className="w-[23%] md:w-[15%]">
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
