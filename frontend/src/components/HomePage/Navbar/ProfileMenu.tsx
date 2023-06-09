"use client";

import { GlobalStates } from "@/app/context";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useContext } from "react";
import { initialUserDetail } from "../../../../interfaces";

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

export default function MenuBarIcon({
  openHeadline,
  setOpenHeadline,
  name,
}: {
  openHeadline: boolean;
  setOpenHeadline: any;
  name: string;
}) {
  const router = useRouter();

  const {
    isDarkTheme,
    toggleTab,
    isLoginComplete,
    checkLogin,
    checkSignUp,
    accessToken,
    checkLogout,
    updateUserprofile,
    setToken,
    userProfile,
  } = useContext(GlobalStates);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Get user Profile data
  React.useEffect(() => {
    const userProdileData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/account/profile/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("userData", JSON.stringify(data));
          updateUserprofile(data);
        } else {
        }
      } catch (error) {}
    };
    userProdileData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, isLoginComplete]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    updateUserprofile(initialUserDetail);
    setToken("", "logout");
    checkLogin(false);
    checkSignUp(false);
    checkLogout(true);
    router.push("/");
  };

  const handleTabs = (value: number) => {
    handleClose();
    toggleTab(value);
    router.push("/dashboard");
  };

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, color: isDarkTheme ? "white" : "gray" }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {userProfile.image_url ? (
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
            ) : (
              <AccountCircleIcon fontSize="large" />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            background: isDarkTheme ? "#111827" : "#fff",
            color: isDarkTheme ? "#fff" : "#111827",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 16,
              width: 14,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <div className="w-full flex justify-between ">
            <div className="mr-2">
              <Image
                // src="/img/me.jpg"
                src={
                  userProfile.image_url
                    ? `${apiUrl}${userProfile.image_url}`
                    : "/img/icon.png"
                }
                alt="shopbag"
                width={45}
                height={45}
                className="rounded-full"
              />
            </div>
            <div className="w-[90%] flex flex-col items-start ">
              <p className="text-lg font-semibold">
                {userProfile.first_name
                  ? `${userProfile.first_name}, ${userProfile.last_name}`
                  : "Unknown User"}
              </p>
              <p className="text-sm">
                {userProfile.country
                  ? `${userProfile.city} | ${userProfile.country}`
                  : "Unknown Location"}
              </p>
            </div>
          </div>
        </MenuItem>
        <Divider />
        {name === "home" && (
          <MenuItem onClick={() => handleTabs(0)}>
            <Avatar /> My account
          </MenuItem>
        )}

        {name === "home" && (
          <MenuItem onClick={() => handleTabs(3)}>
            <ListAltOutlinedIcon /> <p className="ml-3">My Order</p>
          </MenuItem>
        )}
        {name === "home" && (
          <MenuItem onClick={() => handleTabs(2)}>
            <FavoriteBorderIcon /> <p className="ml-3">Wishlist</p>
          </MenuItem>
        )}
        {name === "home" && (
          <MenuItem
            onClick={() => {
              setOpenHeadline((prevState: any) => !prevState);
            }}
          >
            {openHeadline ? (
              <div className="flex">
                <LockOutlinedIcon /> <p className="ml-3">Close Headline Bar</p>
              </div>
            ) : (
              <div className="flex">
                <LockOpenIcon /> <p className="ml-3">Open Headline Bar</p>
              </div>
            )}
          </MenuItem>
        )}
        {name === "home" && (
          <MenuItem onClick={() => handleTabs(1)}>
            <PersonAdd fontSize="small" sx={{ mr: 2 }} />
            Update Account
          </MenuItem>
        )}

        {name === "home" && (
          <MenuItem onClick={() => handleTabs(4)}>
            <Settings fontSize="small" sx={{ mr: 2 }} />
            Change Password
          </MenuItem>
        )}

        <MenuItem onClick={handleLogout}>
          <Logout fontSize="small" sx={{ mr: 2 }} />
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
