import Navbar from "@/components/HomePage/Navbar";
import Image from "next/image";
import React from "react";

function Error() {
  return (
    <div>
      <Navbar />
      <div className="w-screen h-[70vh] flex justify-center items-center">
        <Image src="/img/error/error1.svg" alt="" width={400} height={400} />
      </div>
    </div>
  );
}

export default Error;
