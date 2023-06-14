import AllOutIcon from "@mui/icons-material/AllOut";
import FemaleIcon from "@mui/icons-material/Female";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import MaleIcon from "@mui/icons-material/Male";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import { IconButton } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
function DiscoverNav({
  setSearch,
  setFilter,
  filter,
  activeCategory,
  setActiveCategory,
}: {
  setSearch: any;
  setFilter: any;
  filter: string;
  activeCategory: string;
  setActiveCategory: any;
}) {
  const handleCategoryClick = (category: any) => {
    setActiveCategory(category);
  };
  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };
  return (
    <div>
      <nav
        className=" mb-4 lg:mb-8 relative flex justify-center w-full text-sm md:text-base"
        id="Nav"
      >
        <ul className="flex items-center  md:p-1 bg-white  rounded-full shadow-lg overflow-x-auto hiddenScrollbar">
          <li className="mx-3  relative" id="NavItem2">
            <div
              onClick={() => handleCategoryClick("all")}
              className={`
              categoryBtn block font-medium whitespace-nowrap px-3.5 py-2 text-sm sm:px-7 sm:py-3 capitalize ${
                activeCategory === "all"
                  ? "rounded-full bg-slate-900 text-slate-50 focus:outline-none"
                  : ""
              }`}
            >
              <div className="flex items-center justify-center space-x-1.5 sm:space-x-2.5 text-xs sm:text-sm ">
                <span className="inline-block">
                  <AllOutIcon />
                </span>
                <span>All Products</span>
              </div>
            </div>
          </li>
          <li className=" hidden md:block  relative" id="NavItem2">
            <div
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
                  <FemaleIcon />
                </span>
                <span>Women</span>
              </div>
            </div>
          </li>
          <li className=" hidden md:block  relative" id="NavItem2">
            <div
              onClick={() => handleCategoryClick("men")}
              className={`categoryBtn block font-medium whitespace-nowrap px-3.5 py-2 text-sm sm:px-7 sm:py-3 capitalize  ${
                activeCategory === "men"
                  ? "rounded-full bg-slate-900 text-slate-50 focus:outline-none"
                  : ""
              }`}
            >
              <div className="flex items-center justify-center space-x-1.5 sm:space-x-2.5 text-xs sm:text-sm ">
                <span className="inline-block">
                  <MaleIcon />
                </span>
                <span>Men</span>
              </div>
            </div>
          </li>

          <li className="mx-3  hidden md:block   relative" id="NavItem2">
            <div
              onClick={() => handleCategoryClick("sports")}
              className={`categoryBtn block font-medium whitespace-nowrap px-3.5 py-2 text-sm sm:px-7 sm:py-3 capitalize ${
                activeCategory === "sports"
                  ? "rounded-full bg-slate-900 text-slate-50 focus:outline-none"
                  : ""
              }`}
            >
              <div className="flex items-center justify-center space-x-1.5 sm:space-x-2.5 text-xs sm:text-sm ">
                <span className="inline-block">
                  <SportsCricketIcon />
                </span>
                <span>Sports</span>
              </div>
            </div>
          </li>

          <li className="mx-2  relative w-[150px] py-2" id="NavItem2">
            <div>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label" sx={{ p: 0, m: 0 }}>
                  Filter by
                  <FilterAltOutlinedIcon />
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter}
                  label="Filter by m"
                  onChange={handleChange}
                >
                  <MenuItem value="price">Price - Low to High</MenuItem>
                  <MenuItem value="-price">Price - High to Low</MenuItem>
                  <MenuItem value="stock">Stock - Low to High</MenuItem>
                  <MenuItem value="-stock">Stock - High to Low</MenuItem>
                </Select>
              </FormControl>
            </div>
          </li>
          <li
            className=" relative"
            id="NavItem2"
            onClick={() => setSearch((prevState: boolean) => !prevState)}
          >
            <div
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
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DiscoverNav;
