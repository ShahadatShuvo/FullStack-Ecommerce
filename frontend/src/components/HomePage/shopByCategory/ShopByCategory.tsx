"use client";

import React, { useEffect, useState } from "react";
import { GlobalStates } from "@/app/context";
import { useContext } from "react";
import AllProductsDisplay from "./AllProductsDisplay";
import InputLabel from "@mui/material/InputLabel";
import CloseIcon from "@mui/icons-material/Close";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IconButton, Pagination } from "@mui/material";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const scrollDuration = 500; // Animation duration in milliseconds

function ShopByCategory() {
  const { isDarkTheme } = useContext(GlobalStates);
  const [allCategories, setAllCategories] = useState<any>([]);

  console.log("allCategories:", allCategories);
  // pp
  const [searchValue, setSearchValue] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [data, setData] = useState<any>(null);
  const [filter, setFilter] = React.useState("");
  const [resultMap, setResultMap] = useState<any>(true); // dataMap = data["results"
  const [activeCategory, setActiveCategory] = useState("all");
  // pp

  const [category, setCategory] = React.useState("");
  const [displaySearch, setDisplaySearch] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // get all products
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (activeCategory === "all" || searchValue !== "") {
          response = await fetch(
            `${apiUrl}/api/products?ordering=${filter}&page=${page}&search=${searchValue}`
          );
          setResultMap(true);
        } else {
          response = await fetch(`${apiUrl}/api/category/${activeCategory}`);
          setResultMap(false);
        }
        if (response.ok) {
          const result = await response.json();
          setData(result.results);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        console.log("error:", error);
      }
    };

    fetchData();
  }, [searchValue, page, filter, activeCategory]);

  // get all categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`${apiUrl}/api/products/categories`);
        if (response.ok) {
          const result = await response.json();
          setAllCategories(result.results);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    if (searchValue !== "") {
      setActiveCategory("all");
    }
  }, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setCategory("");
  };
  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
    setSearchValue("");
  };
  const onhandleSearchClose = () => {
    setDisplaySearch(false);
    setSearchValue("");
  };
  return (
    <div className="md:mt-24 mx-5 md:mx-24">
      <Element name="search" className="section">
        {/* Content of Section 1 */}
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="w-[60%]">
            <h1 className="capitalize text-xl md:text-4xl font-bold md:font-semibold">
              Shop by category
            </h1>
            <p className="mt-3 md:mt-5">
              Life is hard enough already. Let us make it a little easier.
            </p>
          </div>

          <div className="w-full flex justify-center">
            {displaySearch && (
              <div className="mt-5 md:mt-0 w-full md:w-[70%] relative flex items-center">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Type your keywords here"
                  autoFocus
                  onChange={handleSearchChange}
                  value={searchValue}
                  className={
                    isDarkTheme
                      ? "bg-blue-50 h-7 md:h-10 shadow-sm  block w-full sm:text-sm rounded-full px-8 md:px-12 focus:outline-none text-sm md:text-md"
                      : "text-black bg-blue-50 h-7 md:h-10 shadow-sm  block w-full sm:text-sm rounded-full px-8 md:px-12 focus:outline-none text-sm md:text-md"
                  }
                />
                <div className="absolute left-1 md:left-3">
                  <SearchOutlinedIcon className="text-black" />
                </div>
                <div className="absolute right-0 md:right-2">
                  <IconButton aria-label="delete" onClick={onhandleSearchClose}>
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center mt-5 md:mt-0">
            {!displaySearch && (
              <div
                className={
                  isDarkTheme
                    ? "flex items-center pl-2 rounded-lg mr-1 hover:bg-blue-200"
                    : "flex items-center pl-2 rounded-lg mr-1 hover:bg-white hover:text-black"
                }
                onClick={() => setDisplaySearch(true)}
              >
                <p>search</p>
                <IconButton onClick={() => setDisplaySearch(true)}>
                  <SearchOutlinedIcon
                    sx={{
                      color: isDarkTheme ? "gray" : "black",
                    }}
                  />
                </IconButton>
              </div>
            )}
            <div className={isDarkTheme ? "bg-white" : ""}>
              <FormControl sx={{ minWidth: 188 }} size="small">
                <InputLabel
                  id="demo-select-small-label"
                  sx={{ color: isDarkTheme ? "black" : "white" }}
                >
                  Select a Category
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value="men"
                  label="Select a Category"
                  onChange={handleCategoryChange}
                  sx={{
                    color: !isDarkTheme ? "black" : "white",
                    borderColor: !isDarkTheme ? "black" : "white",
                  }}
                >
                  <MenuItem value="">
                    <em>All products</em>
                  </MenuItem>
                  {allCategories?.map((category: any) => (
                    <MenuItem key={category.id} value={category.name}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <AllProductsDisplay data={data} />
        </div>
        <div className="my-10 flex justify-center">
          <Pagination
            count={5}
            color="primary"
            page={page}
            onChange={handleChange}
            className={
              isDarkTheme ? "" : "bg-white py-2 md:px-4 rounded-xl mb-5"
            }
          />
        </div>
      </Element>
    </div>
  );
}

export default ShopByCategory;
