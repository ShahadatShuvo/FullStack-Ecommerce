"use client";
import MagicLine from "@/components/SubComponent/MagicLine";
import CloseIcon from "@mui/icons-material/Close";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import DiscoverNav from "./DiscoverNav";
import ProductDisplay from "./ProductDisplay";
import { GlobalStates } from "@/app/context";
import { useContext } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function DiscoverMore() {
  const { isDarkTheme } = useContext(GlobalStates);

  const [search, setSearch] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [data, setData] = useState<any>(null);
  const [filter, setFilter] = React.useState("");
  const [resultMap, setResultMap] = useState<any>(true); // dataMap = data["results"
  const [activeCategory, setActiveCategory] = useState("all");

  function handleSearchChange(event: any) {
    setSearchValue(event.target.value);
  }

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const clearSearch = () => {
    setSearch(false);
    setSearchValue("");
    setPage(1);
  };

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
          setData(result);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {}
    };

    fetchData();
  }, [searchValue, page, filter, activeCategory]);

  useEffect(() => {
    if (searchValue !== "") {
      setActiveCategory("all");
    }
  }, [searchValue]);

  return (
    <div id="home">
      <div className="py-5 md:py-10 mx-5 md:mx-16">
        <div className="mb-16">
          <div className="flex justify-start">
            <div className="border-2 md:border-4 border-gradient w-[30vw]"></div>
          </div>
          <h1 className="text-xl py-2 md:py-0 md:text-4xl font-bold text-center">
            Start Exploring
          </h1>
          <div className="flex justify-end">
            <div className="border-2 md:border-4 border-gradient w-[30vw]"></div>
          </div>
        </div>
      </div>

      {/* nav start */}
      <DiscoverNav
        setSearch={setSearch}
        setFilter={setFilter}
        filter={filter}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      {/* nav end */}
      <div>
        {search && (
          <div className="w-full mb-8 flex flex-wrap items-center text-base justify-center">
            <div className="w-[40vw] relative flex items-center">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Type your keywords here"
                autoFocus
                onChange={handleSearchChange}
                value={searchValue}
                className="bg-blue-50 h-10 shadow-sm  block w-full sm:text-sm rounded-full  px-12 focus:outline-none "
              />
              <div className="absolute left-3">
                <SearchOutlinedIcon />
              </div>
              <div className="absolute right-2">
                <IconButton aria-label="delete" onClick={clearSearch}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-5">
        <ProductDisplay data={data} resultMap={resultMap} />
        <div className="my-10 flex justify-center">
          <Pagination
            count={5}
            color="primary"
            page={page}
            onChange={handlePageChange}
            className={
              !isDarkTheme ? "" : "bg-white py-2 md:px-4 rounded-xl mb-5"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default DiscoverMore;
