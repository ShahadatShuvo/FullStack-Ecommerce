import Image from "next/image";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useContext } from "react";
import { CartItemContext } from "@/app/context";

function AccountInfo() {
  const { userProfile } = useContext(CartItemContext);

  return (
    <div className="min-h-[60vh] w-screen flex justify-center">
      <div className="w-[60%] flex justify-between items-center">
        <div>
          <Image
            src="/img/me.jpg"
            alt=""
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 font-semibold text-gray-600">
          <div className="flex ">
            <p className="text-2xl font-medium">Shahadat Shuvo</p>
            <p className="text-gray-400 text-xs mt-2 ml-2 font-medium">
              <LocationOnIcon fontSize="small" />
              {`${userProfile.city} | ${userProfile.country}`}
            </p>
          </div>
          <div className="flex gap-16 mt-5">
            <div>
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
              <p>{`${userProfile.phone_number}`}</p>
              <p>{`${userProfile.gender}`}</p>
              <p>{`${userProfile.country}`}</p>
              <p>{`${userProfile.state}`}</p>
              <p>{`${userProfile.city}`}</p>
              <p>{`${userProfile.zip_code}`}</p>
              <p>{`${userProfile.date_of_birth}`}</p>
              <p>{`${userProfile.created_at}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
