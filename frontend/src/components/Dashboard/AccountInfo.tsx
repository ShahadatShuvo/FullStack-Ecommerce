"use client";

import Image from "next/image";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useContext } from "react";
import { GlobalStates } from "@/app/context";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function AccountInfo() {
  const {
    isDarkTheme,
    setToken,
    userProfile,
    accessToken,
    updateUserprofile,
    isLoginComplete,
  } = useContext(GlobalStates);

  const date = userProfile.created_at
    ? userProfile.created_at.split("T")[0]
    : "null";

  // Get user Profile data
  React.useEffect(() => {
    const userProfileData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/account/profile/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("userData", JSON.stringify(data));
          updateUserprofile(data);
        } else {
          console.log("Error fetching user profile data");
          setToken("", "");
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };
    if (accessToken) {
      userProfileData();
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, isLoginComplete]);

  return (
    <div className="min-h-[60vh] w-screen flex justify-center">
      <div className="w-[60%] flex justify-between items-center">
        <div>
          <Image
            src={
              userProfile.image_url
                ? `${apiUrl}${userProfile.image_url}`
                : userProfile.gender === "male"
                ? "/img/male.svg"
                : "/img/female.svg"
            }
            alt=""
            priority={true}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 font-semibold text-gray-600">
          <div className="flex ">
            <div>
              <p
                className={
                  isDarkTheme ? "text-slate-500 mb-5 text-md" : "mb-5 text-md"
                }
              >
                Welcome to Dashboard ...{" "}
              </p>
              <p className="text-2xl text-gray-400">
                Hi{" "}
                {userProfile.gender === "male"
                  ? "Mr."
                  : userProfile.gender === "female"
                  ? "Mrs"
                  : ""}
              </p>
              <div className="mt-[-24px] flex">
                <p
                  className={
                    isDarkTheme
                      ? "ml-20 text-2xl font-medium text-slate-200"
                      : "ml-20 text-2xl font-medium"
                  }
                >{`${userProfile.first_name} ${userProfile.last_name}`}</p>
                {(userProfile.country || userProfile.city) && (
                  <p className="text-gray-400 text-xs mt-2 ml-2 font-medium">
                    <LocationOnIcon fontSize="small" />
                    {`${userProfile.city} | ${userProfile.country}`}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-16 mt-5">
            <div className={isDarkTheme ? "text-slate-400" : ""}>
              <p>First Name</p>
              <p>Last Name</p>
              <p>Email</p>
              <p>Phone</p>
              <p>Gender</p>
              <p>Country</p>
              <p>State</p>
              <p>City</p>
              <p>Zip Code</p>
              <p>Date of Birth</p>
              <p>Account Created At</p>
            </div>
            <div className="text-blue-400 font-medium">
              <p>{`${userProfile.first_name}`}</p>
              <p>{`${userProfile.last_name}`}</p>
              <p>{`${userProfile.email}`}</p>
              <p>
                {userProfile.phone_number ? userProfile.phone_number : "N/A"}
              </p>
              <p>{userProfile.gender ? userProfile.gender : "N/A"}</p>
              <p>{userProfile.country ? userProfile.country : "N/A"}</p>
              <p>{userProfile.state ? userProfile.state : "N/A"}</p>
              <p>{userProfile.city ? userProfile.city : "N/A"}</p>
              <p>{userProfile.zip_code ? userProfile.zip_code : "N/A"}</p>
              <p>
                {userProfile.date_of_birth ? userProfile.date_of_birth : "N/A"}
              </p>
              <p>{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
