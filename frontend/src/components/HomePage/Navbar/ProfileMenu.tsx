"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export default function MenuBarIcon({ setOpen }: { setOpen: any }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let fullName = "Shahadat Shuvo";
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <AccountCircleIcon fontSize="large" />
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
              right: 14,
              width: 10,
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
          <div className="w-full flex justify-between">
            <div className="mr-2">
              <Image
                src="/img/me.jpg"
                alt="shopbag"
                width={45}
                height={45}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">{fullName}</p>
              <p className="text-sm">Cumilla, Bangladesh</p>
            </div>
          </div>
        </MenuItem>
        <Divider />
        <Link href="/account">
          <MenuItem onClick={handleClose}>
            <Avatar /> My account
          </MenuItem>
        </Link>

        <MenuItem onClick={handleClose}>
          <ListAltOutlinedIcon /> <p className="ml-3">My Order</p>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FavoriteBorderIcon /> <p className="ml-3">Wishlist</p>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpen(true);
          }}
        >
          <LockOpenIcon /> <p className="ml-3">Re-open Headline Bar</p>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <Link href="/dashboard">
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
