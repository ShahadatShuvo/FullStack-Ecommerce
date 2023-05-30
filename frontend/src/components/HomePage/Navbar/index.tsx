"use client";

import React from "react";
import MenuIcon from "./ProfileMenu";
import CartMenu from "./CartMenu";
import ExploreMenu from "./Explore";
import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          {/* search start*/}
          <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center min-w-[35%]">
            <div className="w-full relative flex items-center">
              <input
                type="text"
                name="search"
                id="search"
                className="bg-blue-50 h-10 shadow-sm  block w-full pr-5 sm:text-sm rounded-md px-2 ps-8 focus:outline-none"
              />
              <div className="absolute left-1">
                <SearchOutlinedIcon />
              </div>
              <div className="absolute right-0">
                <IconButton aria-label="delete">
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
          </div>
          {/* search end*/}
          {/* <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold text-gray-500">
            <a className="px-5  hover:text-gray-900 hover:bg-gray-200 hover:py-1 hover:rounded-full">
              Men
            </a>
            <a className="px-5  hover:text-gray-900 hover:bg-gray-200 hover:py-1 hover:rounded-full">
              Women
            </a>
            <a className="px-5  hover:text-gray-900 hover:bg-gray-200 hover:py-1 hover:rounded-full">
              Beauty
            </a>
            <a className="px-5  hover:text-gray-900 hover:bg-gray-200 hover:py-1 hover:rounded-full">
              Sport
            </a>
            <a className="px-5  hover:text-gray-900 hover:bg-gray-200 hover:py-1 hover:rounded-full">
              <ExploreMenu />
            </a>
          </nav> */}
          <div className="flex">
            <IconButton aria-label="search">
              <SearchOutlinedIcon />
            </IconButton>
            <MenuIcon />
            <CartMenu />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
