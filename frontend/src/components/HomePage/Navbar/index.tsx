"use client";

import React from "react";
import MenuIcon from "./ProfileMenu";
import CartMenu from "./CartMenu";
import ExploreMenu from "./Explore";
import { Badge, IconButton } from "@mui/material";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

interface insAtctiveInterface {
  men: boolean;
  women: boolean;
  beauty: boolean;
  sport: boolean;
}

function Navbar() {
  // const [search, setSearch] = React.useState(false);
  const [explore, setExplore] = React.useState(false);
  const [isActive, setIsActive] = React.useState("");

  const handleClick = (name: string) => {
    setIsActive((prevState: string) => name);
    console.log(isActive);
  };

  return (
    <div>
      <header className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900  md:mb-0"
          >
            <Image
              src="/img/title.png"
              alt=""
              width={100}
              height={200}
              className="w-[110px] h-[80px]"
            />
          </a>
          {/* search start*/}
          {/* {search && (
            <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center min-w-[42%]">
              <div className="w-full relative flex items-center">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Type your keywords here"
                  className="bg-blue-50 h-10 shadow-sm  block w-full pr-5 sm:text-sm rounded-md px-2 ps-10 focus:outline-none"
                />
                <div className="absolute left-2">
                  <SearchOutlinedIcon />
                </div>
                <div className="absolute right-0">
                  <IconButton aria-label="delete">
                    <CloseIcon
                      onClick={() =>
                        setSearch((prevState: boolean) => !prevState)
                      }
                    />
                  </IconButton>
                </div>
              </div>
            </div>
          )} */}
          {/* search end*/}

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold text-gray-500">
            <a
              className={
                isActive === "men"
                  ? "px-5 text-gray-900 bg-gray-200 py-1 rounded-full select-none	"
                  : "px-5  hover:text-gray-900 hover:bg-blue-50 hover:py-1 hover:rounded-full select-none	"
              }
              onClick={() => handleClick("men")}
            >
              Men
            </a>
            <a
              className={
                isActive === "women"
                  ? "px-5 text-gray-900 bg-gray-200 py-1 rounded-full select-none	"
                  : "px-5  hover:text-gray-900 hover:bg-blue-50 hover:py-1 hover:rounded-full select-none	"
              }
              onClick={() => handleClick("women")}
            >
              Women
            </a>
            <a
              className={
                isActive === "beauty"
                  ? "px-5 text-gray-900 bg-gray-200 py-1 rounded-full select-none	"
                  : "px-5  hover:text-gray-900 hover:bg-blue-50 hover:py-1 hover:rounded-full select-none	"
              }
              onClick={() => handleClick("beauty")}
            >
              Beauty
            </a>
            <a
              className={
                isActive === "sport"
                  ? "px-5 text-gray-900 bg-gray-200 py-1 rounded-full select-none	"
                  : "px-5  hover:text-gray-900 hover:bg-blue-50 hover:py-1 hover:rounded-full select-none	"
              }
              onClick={() => handleClick("sport")}
            >
              Sport
            </a>
            <a
              className={
                isActive === "explore"
                  ? "px-5 text-gray-900 bg-gray-200 py-1 rounded-full select-none	"
                  : "px-5 select-none	"
              }
              onClick={() => handleClick("explore")}
            >
              <ExploreMenu setExplore={setExplore} />
            </a>
          </nav>

          <div className="flex">
            {/* {!search && (
              <IconButton
                aria-label="search"
                onClick={() => setSearch((prevState: boolean) => !prevState)}
              >
                <SearchOutlinedIcon />
              </IconButton>
            )} */}
            <MenuIcon />

            <Badge
              badgeContent={4}
              color="primary"
              sx={{
                mt: "2px",
                ".css-106c1u2-MuiBadge-badge": {
                  borderRadius: "5px",
                },
              }}
            >
              {/* <MailIcon color="action" />  */}
              <CartMenu />
            </Badge>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
