"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import Image from "next/image";

interface ExploreInterface {
  setExplore: any;
}

export default function ExploreMenu(props: ExploreInterface) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    props.setExplore(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    props.setExplore(false);
  };
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <div className="flex" onMouseOver={handleClick}>
          <p>Explore</p>
          <KeyboardArrowDownIcon />
        </div>
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
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div
          onMouseLeave={handleClose}
          className="min-w-[60vw] p-5 flex justify-between pt-8"
        >
          <div className="mx-3">
            <h1 className="text-lg mb-2 font-bold">Home Pages</h1>
            <ul className="space-y-2">
              <li>
                <a href="/">Checkout Page</a>
              </li>
              <li></li>
              <li>
                <a href="/">Search Page</a>
              </li>
              <li>
                <a href="/">Search Page</a>
              </li>
            </ul>
          </div>
          <div className="mx-3">
            <h1 className="text-lg mb-2 font-bold">Shop Pages</h1>
            <ul className="space-y-2">
              <li>
                <a href="/">Checkout Page</a>
              </li>
              <li></li>
              <li>
                <a href="/">Search Page</a>
              </li>
              <li>
                <a href="/">Search Page</a>
              </li>
            </ul>
          </div>
          <div className="mx-3">
            <h1 className="text-lg mb-2 font-bold">Other Pages</h1>
            <ul className="space-y-2">
              <li>
                <a href="/">Checkout Page</a>
              </li>
              <li></li>
              <li>
                <a href="/">Search Page</a>
              </li>
              <li>
                <a href="/">Search Page</a>
              </li>
            </ul>
          </div>
          <div className="mx-3">
            <h1 className="text-lg mb-2 font-bold">Blog Pages</h1>
            <ul className="space-y-2">
              <li>
                <a href="/">Checkout Page</a>
              </li>
              <li></li>
              <li>
                <a href="/">Search Page</a>
              </li>
              <li>
                <a href="/">Search Page</a>
              </li>
            </ul>
          </div>
          {/* image  */}
          <div className="bg-blue-50 w-[40%] rounded-lg ml-6 p-5 flex justify-between">
            <div>
              <p>Sale Collection</p>
              <p className="font-bold text-2xl mt-2">Up to</p>
              <p className="font-bold text-2xl mb-4">80% off retail</p>
              <Button
                variant="contained"
                size="small"
                className="bg-black text-white"
              >
                Show me more
              </Button>
            </div>
            <div className="w-[45%] flex justify-end">
              <Image
                src="/img/shopbag.svg"
                alt="shopbag"
                width={250}
                height="50"
                className=""
              />
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
}
