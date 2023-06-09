"use client";

import { GlobalStates } from "@/app/context";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import ImageUpload from "./ImageUpload";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function AccountInfo() {
  const {
    catchErrorMsg,
    isDarkTheme,
    userProfile,
    accessToken,
    updateUserprofile,
    isLoginComplete,
  } = useContext(GlobalStates);

  const router = useRouter();

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
          router.push("/error/404");
          catchErrorMsg("Error fetching user profile data");
        }
      } catch (error) {
        router.push("/error/404");
        catchErrorMsg(JSON.stringify(error));
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
    <div className="w-[75vw] flex flex-col md:flex-row gap-6 md:gap-20 justify-start items-center">
      <div className="w-full md:w-auto flex justify-start">
        <ImageUpload
          img={
            userProfile.image_url
              ? `${apiUrl}${userProfile.image_url}`
              : userProfile.gender === "male"
              ? "/img/male.svg"
              : "/img/female.svg"
          }
        />
      </div>
      <div className="w-full md:w-auto flex justify-start">
        <div className="font-semibold text-gray-600">
          <div>
            {/* Extra Details */}
            <div>
              <p
                className={
                  isDarkTheme
                    ? "text-slate-500 mb-3 md:mb-5 text-xs md:text-md"
                    : "mb-3 md:mb-5 text-sm md:text-md"
                }
              >
                Welcome to Dashboard ...{" "}
              </p>
              <p className="text-sm md:text-2xl text-gray-400">
                Hi{" "}
                {userProfile.gender === "male"
                  ? "Mr."
                  : userProfile.gender === "female"
                  ? "Mrs"
                  : ""}
              </p>
              <div className="md:mt-[-24px] flex">
                <p
                  className={
                    isDarkTheme
                      ? "md:ml-20 text-sm md:text-2xl font-medium text-slate-200"
                      : "md:ml-20 text-sm md:text-2xl font-medium"
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
          <div className="flex gap-5 md:gap-24 mt-5 text-xs md:text-base">
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
            <div className="text-blue-400 text-xm font-medium">
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
