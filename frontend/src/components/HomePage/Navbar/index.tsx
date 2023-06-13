"use client";
import { CartItemContext } from "@/app/_context";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/material";
import Image from "next/image";
import { useContext, useState } from "react";
import { Link } from "react-scroll";
import CartMenu from "./CartMenu";
import ExploreMenu from "./Explore";
import MenuBarIcon from "./ProfileMenu";

function Navbar() {
  const { contextValue } = useContext(CartItemContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [explore, setExplore] = useState(false);
  const [isActive, setIsActive] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (category: any) => {
    setActiveCategory(category);
  };

  const handleClick = (name: string) => {
    setIsActive(name);
  };

  const handleHamburger = () => {
    setMobileOpen(!mobileOpen);
    console.log("Hamburger Clicked");
  };

  return (
    <header className="text-gray-600 body-font bg-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/">
          <Image
            src="/img/VMi.png"
            alt=""
            width={130}
            height={80}
            className="w-[160px] h-[80px] py-2"
          />
        </a>

        {/* Navigation Start */}
        {/* <nav className="hidden md:block md:ml-auto md:mr-auto">
          <ul className="flex space-x-4 font-bold text-gray-500">
            <li
              className={`${
                isActive === "all"
                  ? "text-gray-900 bg-gray-200"
                  : "hover:text-gray-900 hover:bg-blue-200"
              } px-5 py-1 rounded-full select-none cursor-pointer`}
              onClick={() => handleClick("all")}
            >
              <Link
                onClick={() => handleCategoryClick("all")}
                to="home"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                All
              </Link>
            </li>
            <li
              className={`${
                isActive === "men"
                  ? "text-gray-900 bg-gray-200"
                  : "hover:text-gray-900 hover:bg-blue-200"
              } px-5 py-1 rounded-full select-none cursor-pointer`}
              onClick={() => handleClick("men")}
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                Men
              </Link>
            </li>
            <li
              className={`${
                isActive === "women"
                  ? "text-gray-900 bg-gray-200"
                  : "hover:text-gray-900 hover:bg-blue-200"
              } px-5 py-1 rounded-full select-none cursor-pointer`}
              onClick={() => handleClick("women")}
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                Women
              </Link>
            </li>

            <li
              className={`${
                isActive === "sport"
                  ? "text-gray-900 bg-gray-200"
                  : "hover:text-gray-900 hover:bg-blue-200"
              } px-5 py-1 rounded-full select-none cursor-pointer`}
              onClick={() => handleClick("sport")}
            >
              <Link
                onClick={() => handleCategoryClick("sports")}
                to="home"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                Sport
              </Link>
            </li>
            <li
              className={`${
                isActive === "explore" ? "text-gray-900 bg-gray-200" : ""
              } px-5 py-1 rounded-full select-none cursor-pointer`}
              onClick={() => handleClick("explore")}
            >
              <ExploreMenu setExplore={setExplore} />
            </li>
          </ul>
        </nav> */}
        <div className="w-[50%] ">
          <div className="relative flex overflow-x-hidden text-lg">
            <div className="animate-marquee whitespace-nowrap">
              <span>
                Virtual Mart (VM). Here, You will quickly get all kinds of your
                daily Shopping, with only 1 click from your{" "}
                <span className="text-blue-400">Home or Office</span>.
                ভার্চুয়াল মার্ট (ভিএম) এখানে, আপনি আপনার বাসা বা অফিস থেকে
                মাত্র 1 ক্লিকে আপনার দৈনন্দিন সব ধরনের কেনাকাটা পেয়ে যাবেন, খুব
                সহজে।
              </span>
            </div>
          </div>
        </div>
        {/* Navigation Ends  */}

        <div className="flex justify-center items-center">
          <MenuBarIcon />

          <Badge
            badgeContent={contextValue.length}
            color="primary"
            sx={{
              mt: "2px",
              ".css-106c1u2-MuiBadge-badge": {
                borderRadius: "5px",
              },
            }}
          >
            {/* <MailIcon color="action" /> */}
            <CartMenu />
          </Badge>
          {/* Hamburger Menu */}
          <div className="md:hidden ml-5 relative">
            <input type="checkbox" id="menu-toggle" className="hidden" />
            <label
              htmlFor="menu-toggle"
              className="cursor-pointer"
              onClick={() => handleHamburger()}
            >
              <MenuIcon className="w-10 h-10" />
            </label>
            <div className="relative">
              {mobileOpen && (
                <div
                  className="absolute top-full right-2 mt-2 bg-white shadow-[rgba(0,0,0,0.24)] rounded-lg z-10"
                  id="menu"
                >
                  <ul className="flex flex-col space-y-4 p-4">
                    <li
                      className={`${
                        isActive === "all"
                          ? "text-gray-900 bg-gray-200"
                          : "hover:text-gray-900 hover:bg-blue-200"
                      } px-5 py-1 rounded-full select-none cursor-pointer text-center`}
                      onClick={() => handleClick("all")}
                    >
                      <Link
                        onClick={() => handleCategoryClick("all")}
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration={500}
                      >
                        All
                      </Link>
                    </li>
                    <li
                      className={`${
                        isActive === "men"
                          ? "text-gray-900 bg-gray-200"
                          : "hover:text-gray-900 hover:bg-blue-200"
                      } px-5 py-1 rounded-full select-none cursor-pointer text-center`}
                      onClick={() => handleClick("men")}
                    >
                      <Link
                        onClick={() => handleCategoryClick("all")}
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration={500}
                      >
                        Men
                      </Link>
                    </li>
                    <li
                      className={`${
                        isActive === "women"
                          ? "text-gray-900 bg-gray-200"
                          : "hover:text-gray-900 hover:bg-blue-200"
                      } px-5 py-1 rounded-full select-none cursor-pointer text-center`}
                      onClick={() => handleClick("women")}
                    >
                      <Link
                        onClick={() => handleCategoryClick("all")}
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration={500}
                      >
                        Woman
                      </Link>
                    </li>

                    <li
                      className={`${
                        isActive === "sport"
                          ? "text-gray-900 bg-gray-200"
                          : "hover:text-gray-900 hover:bg-blue-200"
                      } px-5 py-1 rounded-full select-none cursor-pointer text-center`}
                      onClick={() => handleClick("sport")}
                    >
                      <Link
                        onClick={() => handleCategoryClick("all")}
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration={500}
                      >
                        Sports
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/* Hamburger Menu Ends */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
