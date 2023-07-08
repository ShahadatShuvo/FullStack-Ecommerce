"use client";

import { GlobalStates } from "@/app/context";
import CloseIcon from "@mui/icons-material/Close";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge, Button } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import CartMenu from "./CartMenu";
import ExploreMenu from "./Explore";
import MenuBarIcon from "./ProfileMenu";
import AuthSuccess from "@/components/Accounts/AuthSuccess";
import Link from "next/link";
import "./toggleBtn.css";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function Navbar() {
  const router = useRouter();

  const { isDarkTheme, toggleTheme, cartData, accessToken, isLogoutComplete } =
    useContext(GlobalStates);

  const [displayNav, setDisplayNav] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/") {
      setDisplayNav(true);
    } else {
      setDisplayNav(false);
    }
  }, [pathname]);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [explore, setExplore] = useState(false);
  const [isActive, setIsActive] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openHeadline, setOpenHeadline] = useState(true);
  const [headline, setHeadline] = useState("");

  const handleCategoryClick = (category: any) => {
    setActiveCategory(category);
  };

  const handleClick = (name: string) => {
    setIsActive(name);
  };

  const handleHamburger = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const getHeadline = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/newsroom/headlines/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setHeadline(data.results[0].text);
          setOpenHeadline(true);
        } else {
          console.log("Error fetching user profile data");
          setOpenHeadline(false);
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
        setOpenHeadline(false);
      }
    };
    getHeadline();
  }, []);

  return (
    <div className={!isDarkTheme ? "bg-white" : "bg-gray-900 text-white"}>
      {isLogoutComplete && (
        <AuthSuccess msg="You have logged out!" type="warning" show={1} />
      )}

      <div>
        <Collapse in={openHeadline}>
          <Alert
            icon={
              <FeedOutlinedIcon
                fontSize="inherit"
                sx={{
                  color: isDarkTheme ? "white" : "gray",
                }}
              />
            }
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenHeadline(false);
                }}
                sx={{
                  color: isDarkTheme ? "white" : "gray",
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{
              padding: "0px 16px",
              background: isDarkTheme ? "#111827" : "white",
              marginTop: "5px",
              marginX: "5px",
              border: isDarkTheme ? "1px solid #38BDF8" : "1px solid #111827",
              ".css-1pxa9xg-MuiAlert-message": {
                padding: "3px 0px",
              },
            }}
          >
            <div className="relative">
              <p
                className={
                  isDarkTheme
                    ? "absolute hidden md:block top-1 font-semibold text-white"
                    : "absolute hidden md:block top-1 font-semibold text-gray-500"
                }
              >
                Headline
              </p>
              <div className="w-full flex justify-center">
                <div className=" w-full md:w-[85%]">
                  <div className="relative flex overflow-x-hidden text-lg">
                    <div className="animate-marquee whitespace-nowrap">
                      <span className={isDarkTheme ? "text-[#38BDF8]" : ""}>
                        {headline}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Alert>
        </Collapse>
      </div>

      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/">
            <Image
              src={isDarkTheme ? "/img/logo_dark.svg" : "/img/logo_light.svg"}
              alt=""
              width={145}
              height={80}
              className=" py-2"
            />
          </Link>

          {/* Navigation Start */}
          {displayNav && (
            <nav className="hidden md:block md:ml-auto md:mr-auto">
              <ul className="flex space-x-4 font-bold text-gray-500">
                <li
                  className={`${
                    isActive === "all"
                      ? "text-gray-900 bg-gray-200"
                      : "hover:text-gray-900 hover:bg-blue-200"
                  } px-5 py-1 rounded-full select-none cursor-pointer`}
                  onClick={() => handleClick("all")}
                >
                  <ScrollLink
                    onClick={() => handleCategoryClick("all")}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                  >
                    All
                  </ScrollLink>
                </li>
                <li
                  className={`${
                    isActive === "men"
                      ? "text-gray-900 bg-gray-200"
                      : "hover:text-gray-900 hover:bg-blue-200"
                  } px-5 py-1 rounded-full select-none cursor-pointer`}
                  onClick={() => handleClick("men")}
                >
                  <ScrollLink
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                  >
                    Men
                  </ScrollLink>
                </li>
                <li
                  className={`${
                    isActive === "women"
                      ? "text-gray-900 bg-gray-200"
                      : "hover:text-gray-900 hover:bg-blue-200"
                  } px-5 py-1 rounded-full select-none cursor-pointer`}
                  onClick={() => handleClick("women")}
                >
                  <ScrollLink
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                  >
                    Women
                  </ScrollLink>
                </li>

                <li
                  className={`${
                    isActive === "sport"
                      ? "text-gray-900 bg-gray-200"
                      : "hover:text-gray-900 hover:bg-blue-200"
                  } px-5 py-1 rounded-full select-none cursor-pointer`}
                  onClick={() => handleClick("sport")}
                >
                  <ScrollLink
                    onClick={() => handleCategoryClick("sports")}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                  >
                    Sport
                  </ScrollLink>
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
            </nav>
          )}

          {/* Navigation Ends  */}

          <div className="flex justify-center items-center">
            {accessToken || !isLogoutComplete ? (
              <MenuBarIcon
                openHeadline={openHeadline}
                setOpenHeadline={setOpenHeadline}
              />
            ) : (
              <Button
                variant="contained"
                size="small"
                className="bg-black rounded-full"
                onClick={() => router.push("/account/login")}
              >
                Login
              </Button>
            )}
            <div className="ml-3">
              <button
                type="button"
                className={
                  isDarkTheme
                    ? "btn btn-sm btn-toggle active"
                    : "btn btn-sm btn-toggle"
                }
                data-toggle="button"
                aria-pressed="false"
                onClick={toggleTheme}
              >
                <div className="handle"></div>
              </button>
            </div>
            <Badge
              badgeContent={cartData.length}
              color="primary"
              sx={{
                mt: "2px",
                ".css-106c1u2-MuiBadge-badge": {
                  borderRadius: "5px",
                },
              }}
            >
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
                        <ScrollLink
                          onClick={() => handleCategoryClick("all")}
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={-10}
                          duration={500}
                        >
                          All
                        </ScrollLink>
                      </li>
                      <li
                        className={`${
                          isActive === "men"
                            ? "text-gray-900 bg-gray-200"
                            : "hover:text-gray-900 hover:bg-blue-200"
                        } px-5 py-1 rounded-full select-none cursor-pointer text-center`}
                        onClick={() => handleClick("men")}
                      >
                        <ScrollLink
                          onClick={() => handleCategoryClick("all")}
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={-10}
                          duration={500}
                        >
                          Men
                        </ScrollLink>
                      </li>
                      <li
                        className={`${
                          isActive === "women"
                            ? "text-gray-900 bg-gray-200"
                            : "hover:text-gray-900 hover:bg-blue-200"
                        } px-5 py-1 rounded-full select-none cursor-pointer text-center`}
                        onClick={() => handleClick("women")}
                      >
                        <ScrollLink
                          onClick={() => handleCategoryClick("all")}
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={-10}
                          duration={500}
                        >
                          Woman
                        </ScrollLink>
                      </li>

                      <li
                        className={`${
                          isActive === "sport"
                            ? "text-gray-900 bg-gray-200"
                            : "hover:text-gray-900 hover:bg-blue-200"
                        } px-5 py-1 rounded-full select-none cursor-pointer text-center`}
                        onClick={() => handleClick("sport")}
                      >
                        <ScrollLink
                          onClick={() => handleCategoryClick("all")}
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={-10}
                          duration={500}
                        >
                          Sports
                        </ScrollLink>
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
    </div>
  );
}

export default Navbar;
