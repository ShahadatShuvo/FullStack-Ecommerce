"use client";

import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
import ProductDisplay from "./ProductDisplay";
import DiscoverNav from "./DiscoverNav";
import { Pagination } from "@mui/material";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function DiscoverMore() {
  const [search, setSearch] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null || "Error");

  function handleSearchChange(event: any) {
    setSearchValue((prevState) => event.target.value);
  }

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/api/products?page=${page}&search=${searchValue}`
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
  }, [searchValue, page]);

  return (
    <div>
      <div>
        <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold text-center my-8">
          Start exploring.
        </h1>
      </div>

      {/* nav start */}
      <DiscoverNav setSearch={setSearch} />
      {/* nav end */}
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
                onChange={handleSearchChange}
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
        <div className="my-5 mb-12 w-full flex justify-center items-center select-none">
          <Pagination
            count={10}
            page={page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </div>
      </div>
    </div>
  );
}

export default DiscoverMore;
