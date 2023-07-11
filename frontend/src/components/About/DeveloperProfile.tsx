"use client";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./animate.css";
import { Button } from "@mui/material";

interface DeveloperProfileProps {
  id: number;
  name: string;
  job_title: string | null;
  portfolio_link: string | null;
  email: string | null;
  about: string;
  interests: string;
  image_url: string | null;
  facebook_link: string | null;
  twitter_link: string | null;
  linkedin_link: string | null;
  instagram_link: string | null;
  whatsapp_link: string | null;
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

  const handleEmailClick = () => {
    window.location.href = `mailto:${developerData.email}`;
  };

  return (
    <div className="w-[24%] rounded-lg" onMouseLeave={handleMouseLeave}>
      <div onMouseEnter={handleMouseHover}>
        <span>
          <Image
            width={400}
            height={200}
            src={developerData.image_url || "/img/male.svg"}
            alt="Developer Image"
            className="w-full h-[280px] rounded-t-lg object-cover"
          />
        </span>
        <div
          className={
            showDetails
              ? `text-center text-white bg-black  pb-5 h-auto`
              : `text-center text-white bg-black rounded-b-lg pb-5`
          }
        >
          <p className="text-2xl font-semibold py-4">{developerData.name}</p>
          <h3 className=" text-[#f3bf99]">{developerData.job_title}</h3>
          {developerData.portfolio_link && (
            <p className="text-gray-200 text-sm mt-1">
              <a href={developerData.portfolio_link} target="_blank">
                {developerData.portfolio_link}
              </a>
            </p>
          )}
        </div>
      </div>

      {/* 2nd Div */}
      {showDetails ? (
        <div className="animate-slide-in bg-black rounded-b-md">
          <div className="bg-black text-center">
            <Button
              onClick={handleEmailClick}
              variant="outlined"
              startIcon={<EmailOutlinedIcon />}
              sx={{ background: "white", bgcolor: "white" }}
              className="bg-white text-black w-2/3  font-semibold hover:bg-red-50  rounded text-center mb-5"
            >
              Email
            </Button>
          </div>
          {developerData.about.length ? (
            <div className="px-5 pb-5  bg-black">
              <h2 className="text-lg font-bold mb-3 text-white">About</h2>
              <p className="text-gray-300 text-sm">{developerData.about}</p>
            </div>
          ) : (
            ""
          )}
          {developerData.interests.length ? (
            <div className="p-5  bg-black">
              <h2 className="text-lg font-bold text-white">Interests</h2>
              <p className="text-gray-300 text-sm">{developerData.interests}</p>
            </div>
          ) : (
            ""
          )}
          <div className="flex justify-center text-black pb-5 mt-3">
            {developerData.facebook_link && (
              <Link
                href={developerData.facebook_link || "/"}
                className="text-2xl mx-2 px-2 pb-1 rounded-md bg-gray-300 
              hover:bg-blue-300 active:bg-red-200"
              >
                <FacebookIcon />
              </Link>
            )}
            {developerData.whatsapp_link && (
              <Link
                href={developerData.whatsapp_link || "/"}
                className="text-2xl mx-2 px-2 pb-1 rounded-md bg-gray-300 hover:bg-blue-300 active:bg-red-200"
              >
                <WhatsAppIcon />
              </Link>
            )}
            {developerData.twitter_link && (
              <Link
                href={developerData.twitter_link || "/"}
                className="text-2xl mx-2 px-2 pb-1 rounded-md bg-gray-300 hover:bg-blue-300 active:bg-red-200"
              >
                <TwitterIcon />
              </Link>
            )}
            {developerData.instagram_link && (
              <Link
                href={developerData.instagram_link || "/"}
                className="text-2xl mx-2 px-2 pb-1 rounded-md bg-gray-300 hover:bg-blue-300 active:bg-red-200"
              >
                <InstagramIcon />
              </Link>
            )}
            {developerData.linkedin_link && (
              <Link
                href={developerData.linkedin_link || "/"}
                className="text-2xl mx-2 px-2 pb-1  rounded-md bg-gray-300 hover:bg-blue-300 active:bg-red-200"
              >
                <LinkedInIcon />
              </Link>
            )}
          </div>
        </div>
      ) : (
        <div className="animate-slide-out bg-black">
          <div className="bg-black text-center">
            <Button
              onClick={handleEmailClick}
              variant="outlined"
              startIcon={<EmailOutlinedIcon />}
              sx={{ background: "white", bgcolor: "white" }}
              className="bg-white text-black w-2/3  font-semibold hover:bg-red-50  rounded text-center"
            >
              Email
            </Button>
          </div>
          <div className="p-5  bg-black">
            {developerData.about.length && (
              <h2 className="text-lg font-bold mb-3 text-white">About</h2>
            )}
            <p className="text-gray-300 text-sm">{developerData.about}</p>
          </div>
          <div className="p-5  bg-black">
            {developerData.interests.length && (
              <h2 className="text-lg font-bold mb-3 text-white">Interests</h2>
            )}
            <p className="text-gray-300 text-sm">{developerData.interests}</p>
          </div>
          <div className="flex justify-center text-black pb-5">
            {developerData.facebook_link && (
              <Link
                href={developerData.facebook_link || "/"}
                className="text-2xl mx-2 px-2 pb-1 rounded-md bg-gray-300 
              hover:bg-blue-300 active:bg-red-200"
              >
                <FacebookIcon />
              </Link>
            )}
            {developerData.whatsapp_link && (
              <Link
                href={developerData.whatsapp_link || "/"}
                className="text-2xl mx-2 px-2 pb-1 rounded-md bg-gray-300 hover:bg-blue-300 active:bg-red-200"
              >
                <WhatsAppIcon />
              </Link>
            )}
            {developerData.twitter_link && (
              <Link
                href={developerData.twitter_link || "/"}
                className="text-2xl mx-2 px-2 pb-1 rounded-md bg-gray-300 hover:bg-blue-300 active:bg-red-200"
              >
                <TwitterIcon />
              </Link>
            )}
            {developerData.instagram_link && (
              <Link
                href={developerData.instagram_link || "/"}
                className="text-2xl mx-2 px-2 pb-1 rounded-md bg-gray-300 hover:bg-blue-300 active:bg-red-200"
              >
                <InstagramIcon />
              </Link>
            )}
            {developerData.linkedin_link && (
              <Link
                href={developerData.linkedin_link || "/"}
                className="text-2xl mx-2 px-2 pb-1  rounded-md bg-gray-300 hover:bg-blue-300 active:bg-red-200"
              >
                <LinkedInIcon />
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DeveloperProfile;
