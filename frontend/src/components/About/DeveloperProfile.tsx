"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DeveloperProfileProps {
  dev: {
    name: string;
    jobTitle: string;
    portfolio: string;
    about: string;
    interests: string;
    imageUrl: string;
    social: {
      facebook: string;
      twitter: string;
      instagram: string;
      linkedIn: string;
    };
  };
}

const DeveloperProfile: React.FC<DeveloperProfileProps> = ({ dev }) => {
  return (
    <div className="flex justify-center pt-5">
      <div className="w-[45%] bg-white rounded-lg shadow-lg">
        <div className="bg-black">
          <Image
            width={400}
            height={400}
            src="/img/shahadat.jpg"
            alt=""
            className="w-full rounded-t-lg "
          />
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold mb-2">{dev.name}</h1>
            <h3 className="text-lg text-[#f3bf99]">{dev.jobTitle}</h3>
            <p className="text-gray-200">{dev.portfolio}</p>
          </div>
          <div className="text-center mt-5">
            <button className="bg-blue-500 w-2/3 hover:bg-blue-700 text-white font-bold py-2 text-lg px-4 rounded text-center">
              Email
            </button>
          </div>
        </div>
        {/* about section */}
        <div className="p-5  bg-black">
          <h2 className="text-2xl font-bold mb-3 text-white">About</h2>

          <p className="text-gray-300">{dev.about}</p>
        </div>
        {/* interests section */}
        <div className="p-5  bg-black">
          <h2 className="text-2xl font-bold mb-3 text-white">Interests</h2>

          <p className="text-gray-300">{dev.interests}</p>
        </div>
        {/* Footer section */}
        {/* Footer section */}
        <div className="p-5 bg-black">
          <div className="flex justify-center text-black">
            <Link
              href="/"
              className="text-2xl mx-2 px-2 py-1 rounded-md bg-gray-100"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="/"
              className="text-2xl mx-2 px-2 py-1 rounded-md bg-gray-100"
            >
              <TwitterIcon />
            </Link>
            <Link
              href="/"
              className="text-2xl mx-2 px-2 py-1 rounded-md bg-gray-100"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="/"
              className="text-2xl mx-2 px-2 py-1 rounded-md bg-gray-100"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
