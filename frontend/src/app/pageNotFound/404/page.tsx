import Navbar from "@/components/HomePage/Navbar";
import Image from "next/image";
import React from "react";

function Error404() {
  return (
    <div>
      <Navbar />
      <div className="w-screen h-[70vh] flex flex-col justify-center items-center">
        <Image src="/img/error/404_2.svg" alt="" width={400} height={400} />
        <div className="border border-red-400 p-3 bg-red-100 rounded-md text-center text-lg font-semibold">
          <p>Opps! there is an error!</p>
          <p>Message: </p>
        </div>
      </div>
    </div>
  );
}

export default Error404;
