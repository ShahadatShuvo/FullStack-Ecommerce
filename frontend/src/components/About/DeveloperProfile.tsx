"use client";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DeveloperProfileProps {
  id: number;
  name: string;
  jobTitle: string;
  portfolio: string;
  emailLink: string;
  imgUrl: string;
  about: string;
  interests: string;

  // social: {
  //   facebook: string;
  //   twitter: string;
  //   instagram: string;
  //   linkedIn: string;
  // };
}

function DeveloperProfile({
  developerData,
}: {
  developerData: DeveloperProfileProps;
}) {
  const [showDetails, setshowDetails] = React.useState(false);

  const handleMouseHover = () => {
    setshowDetails(true);
  };
  const handleMouseLeave = () => {
    setshowDetails(false);
  };

  return (
    <div className="w-[25%] bg-white rounded-lg shadow-lg hover:drop-shadow-lg">
      <div onMouseOver={handleMouseHover} onMouseLeave={handleMouseLeave}>
        <span>
          <Image
            width={400}
            height={200}
            src={developerData.imgUrl}
            alt="Developer Image"
            className="w-full h-[380px] rounded-t-lg "
          />
        </span>
        <div
          className={
            showDetails
              ? `text-center text-white bg-black  pb-5 h-auto`
              : `text-center text-white bg-black rounded-b-lg pb-5`
          }
        >
          <h1 className="text-3xl font-bold mb-2 py-4">{developerData.name}</h1>

          <h3 className="text-lg text-[#f3bf99]">{developerData.jobTitle}</h3>
          <p className="text-gray-200">{developerData.portfolio}</p>
        </div>
      </div>

      {/* 2nd Div */}
      {showDetails ? (
        <div>
          <div className="bg-black">
            <div className="text-center pt-5">
              <button className="bg-[#fff] w-2/3  hover:bg-blue-300 font-bold py-2 text-lg px-4 rounded text-center">
                <div className="flex justify-center items-center">
                  <span>
                    <EmailOutlinedIcon />
                  </span>{" "}
                  <span className="flex justify-center items-center mt-1 ">
                    Email
                  </span>
                </div>
              </button>
            </div>
          </div>
          {/* about section */}
          <div className="p-5  bg-black">
            <h2 className="text-2xl font-bold mb-3 text-white">About</h2>

            <p className="text-gray-300">{developerData.about}</p>
          </div>
          {/* interests section */}
          <div className="p-5  bg-black">
            <h2 className="text-2xl font-bold mb-3 text-white">Interests</h2>

            <p className="text-gray-300">{developerData.interests}</p>
          </div>
          {/* Footer section */}
          {/* Footer section */}
          <div className="p-5 bg-black">
            <div className="flex justify-center text-black">
              <Link
                href="/"
                className="text-2xl mx-2 px-2 pb-1 rounded-md bg-gray-300"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="/"
                className="text-2xl mx-2 px-2 pb-1 rounded-md bg-gray-300"
              >
                <TwitterIcon />
              </Link>
              <Link
                href="/"
                className="text-2xl mx-2 px-2 pb-1 rounded-md bg-gray-300"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="/"
                className="text-2xl mx-2 px-2 pb-1  rounded-md bg-gray-300"
              >
                <LinkedInIcon />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DeveloperProfile;
