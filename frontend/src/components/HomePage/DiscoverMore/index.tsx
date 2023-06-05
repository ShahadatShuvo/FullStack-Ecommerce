"use client";

import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
import ProductDisplay from "../ProductsDisplay/ProductDisplay";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

interface ProductDataProps {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
}

function DiscoverMore() {
  const [search, setSearch] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const [activeCategory, setActiveCategory] = useState("");

  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null || "Error");

  function handleChange(event: any) {
    setSearchValue((prevState) => event.target.value);
  }

  // console.log("searchValue", searchValue);
  // console.log("getData", data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/api/products?search=${searchValue}`
        );

        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        console.log("error:", error);
      }
    };

    fetchData();
  }, [searchValue]);

  const handleCategoryClick = (category: any) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold text-center my-8">
          Start exploring.
        </h1>
      </div>

      <nav
        className="nc-Nav mb-8 lg:mb-8 relative flex justify-center w-full text-sm md:text-base"
        id="Nav"
      >
        <ul className="flex  p-1 bg-white  rounded-full shadow-lg overflow-x-auto hiddenScrollbar">
          <li className="nc-NavItem2 relative" id="NavItem2">
            <button
              onClick={() => handleCategoryClick("women")}
              className={`
              categoryBtn block font-medium whitespace-nowrap px-3.5 py-2 text-sm sm:px-7 sm:py-3 capitalize ${
                activeCategory === "women"
                  ? "rounded-full bg-slate-900 text-slate-50 focus:outline-none"
                  : ""
              }`}
            >
              <div className="flex items-center justify-center space-x-1.5 sm:space-x-2.5 text-xs sm:text-sm ">
                <span className="inline-block">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12 16V22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M15 19H9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span>Women</span>
              </div>
            </button>
          </li>
          <li className="nc-NavItem2 relative" id="NavItem2">
            <button
              onClick={() => handleCategoryClick("man")}
              className={`categoryBtn block font-medium whitespace-nowrap px-3.5 py-2 text-sm sm:px-7 sm:py-3 capitalize  ${
                activeCategory === "man"
                  ? "rounded-full bg-slate-900 text-slate-50 focus:outline-none"
                  : ""
              }`}
            >
              <div className="flex items-center justify-center space-x-1.5 sm:space-x-2.5 text-xs sm:text-sm ">
                <span className="inline-block">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.25 21.5C14.5302 21.5 18 18.0302 18 13.75C18 9.46979 14.5302 6 10.25 6C5.96979 6 2.5 9.46979 2.5 13.75C2.5 18.0302 5.96979 21.5 10.25 21.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M21.5 2.5L16 8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M15 2.5H21.5V9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span>Man</span>
              </div>
            </button>
          </li>
          <li className="nc-NavItem2 relative" id="NavItem2">
            <button
              onClick={() => handleCategoryClick("kids")}
              className={`categoryBtn block font-medium whitespace-nowrap px-3.5 py-2 text-sm sm:px-7 sm:py-3 capitalize ${
                activeCategory === "kids"
                  ? "rounded-full bg-slate-900 text-slate-50 focus:outline-none"
                  : ""
              }`}
            >
              <div className="flex items-center justify-center space-x-1.5 sm:space-x-2.5 text-xs sm:text-sm ">
                <span className="inline-block">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.08 8.58003V15.42C21.08 16.54 20.48 17.58 19.51 18.15L13.57 21.58C12.6 22.14 11.4 22.14 10.42 21.58L4.48003 18.15C3.51003 17.59 2.91003 16.55 2.91003 15.42V8.58003C2.91003 7.46003 3.51003 6.41999 4.48003 5.84999L10.42 2.42C11.39 1.86 12.59 1.86 13.57 2.42L19.51 5.84999C20.48 6.41999 21.08 7.45003 21.08 8.58003Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12 11.0001C13.2869 11.0001 14.33 9.95687 14.33 8.67004C14.33 7.38322 13.2869 6.34009 12 6.34009C10.7132 6.34009 9.67004 7.38322 9.67004 8.67004C9.67004 9.95687 10.7132 11.0001 12 11.0001Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M16 16.6601C16 14.8601 14.21 13.4001 12 13.4001C9.79 13.4001 8 14.8601 8 16.6601"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span>Kids</span>
              </div>
            </button>
          </li>
          <li className="nc-NavItem2 relative" id="NavItem2">
            <button
              onClick={() => handleCategoryClick("sports")}
              className={`categoryBtn block font-medium whitespace-nowrap px-3.5 py-2 text-sm sm:px-7 sm:py-3 capitalize ${
                activeCategory === "sports"
                  ? "rounded-full bg-slate-900 text-slate-50 focus:outline-none"
                  : ""
              }`}
            >
              <div className="flex items-center justify-center space-x-1.5 sm:space-x-2.5 text-xs sm:text-sm ">
                <span className="inline-block">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.1801 18C19.5801 18 20.1801 16.65 20.1801 15V9C20.1801 7.35 19.5801 6 17.1801 6C14.7801 6 14.1801 7.35 14.1801 9V15C14.1801 16.65 14.7801 18 17.1801 18Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M6.81995 18C4.41995 18 3.81995 16.65 3.81995 15V9C3.81995 7.35 4.41995 6 6.81995 6C9.21995 6 9.81995 7.35 9.81995 9V15C9.81995 16.65 9.21995 18 6.81995 18Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M9.81995 12H14.1799"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M22.5 14.5V9.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M1.5 14.5V9.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span>Sports</span>
              </div>
            </button>
          </li>
          <li className="nc-NavItem2 relative" id="NavItem2">
            <button
              onClick={() => handleCategoryClick("beauty")}
              className={`categoryBtn block font-medium whitespace-nowrap px-3.5 py-2 text-sm sm:px-7 sm:py-3 capitalize ${
                activeCategory === "beauty"
                  ? "rounded-full bg-slate-900 text-slate-50 focus:outline-none"
                  : ""
              }`}
            >
              <div className="flex items-center justify-center space-x-1.5 sm:space-x-2.5 text-xs sm:text-sm ">
                <span className="inline-block">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7 18.98H7.30002C6.88002 18.98 6.41002 18.65 6.27002 18.25L2.13002 6.66999C1.54002 5.00999 2.23002 4.49999 3.65002 5.51999L7.55002 8.30999C8.20002 8.75999 8.94002 8.52999 9.22002 7.79999L10.98 3.10999C11.54 1.60999 12.47 1.60999 13.03 3.10999L14.79 7.79999C15.07 8.52999 15.81 8.75999 16.45 8.30999L20.11 5.69999C21.67 4.57999 22.42 5.14999 21.78 6.95999L17.74 18.27C17.59 18.65 17.12 18.98 16.7 18.98Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M6.5 22H17.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M9.5 14H14.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span>Beauty</span>
              </div>
            </button>
          </li>
          <li className="nc-NavItem2 relative" id="NavItem2">
            <button
              onClick={() => handleCategoryClick("jewelry")}
              className={`categoryBtn block font-medium whitespace-nowrap px-3.5 py-2 text-sm sm:px-7 sm:py-3 capitalize ${
                activeCategory === "jewelry"
                  ? "rounded-full bg-slate-900 text-slate-50 focus:outline-none"
                  : ""
              }`}
            >
              <div className="flex items-center justify-center space-x-1.5 sm:space-x-2.5 text-xs sm:text-sm ">
                <span className="inline-block">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7998 3.40005L7.19982 7.70005C7.09982 7.90005 6.99982 8.20005 6.89982 8.40005L5.19982 17C5.09982 17.6 5.39982 18.3 5.89982 18.6L11.1998 21.6C11.5998 21.8 12.2998 21.8 12.6998 21.6L17.9998 18.6C18.4998 18.3 18.7998 17.6 18.6998 17L16.9998 8.40005C16.9998 8.20005 16.7998 7.90005 16.6998 7.70005L13.0998 3.40005C12.4998 2.60005 11.4998 2.60005 10.7998 3.40005Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M16.8002 8.5L12.5002 20.7C12.3002 21.1 11.7002 21.1 11.6002 20.7L7.2002 8.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span>Jewelry</span>
              </div>
            </button>
          </li>
          <li
            className="nc-NavItem2 relative"
            id="NavItem2"
            onClick={() => setSearch((prevState: boolean) => !prevState)}
          >
            <button
              onClick={() => handleCategoryClick("search")}
              className={`categoryBtn block font-medium whitespace-nowrap px-3.5  text-sm sm:px-7  capitalize ${
                activeCategory === "search"
                  ? "rounded-full bg-slate-900 text-white focus:outline-none"
                  : ""
              }`}
            >
              <div className="flex items-center justify-center space-x-1.5 sm:space-x-2.5 text-xs sm:text-sm ">
                <IconButton aria-label="search">
                  <SearchOutlinedIcon
                    className={`${
                      activeCategory === "search"
                        ? " text-white "
                        : "text-black"
                    }`}
                  />
                </IconButton>
              </div>
            </button>
          </li>
        </ul>
      </nav>
      <div>
        {search && (
          <div className="w-[40vw] mb-8 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <div className="w-full relative flex items-center">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Type your keywords here"
                autoFocus
                onChange={handleChange}
                value={searchValue}
                className="bg-blue-50 h-10 shadow-sm  block w-full sm:text-sm rounded-full  px-12 focus:outline-none "
              />
              <div className="absolute left-3">
                <SearchOutlinedIcon />
              </div>
              <div className="absolute right-2">
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
        )}
      </div>
      <div className="mt-5">
        <ProductDisplay data={data} />
      </div>
    </div>
  );
}

export default DiscoverMore;
