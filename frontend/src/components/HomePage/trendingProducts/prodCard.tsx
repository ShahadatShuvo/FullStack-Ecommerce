import React from "react";
import Image from "next/image";

function TrendingprodCard({ img }: { img: string }) {
  return (
    <div>
      <div className="w-[230px] h-[160px] flex justify-between items-center bg-blue-100 hover:bg-red-100 rounded-xl p-5 relative hover:shadow-xl ">
        <div className="w-[65%]">
          <h2 className="font-bold text-xl">Seven Zero Five</h2>
          <p className="text-gray-500 font-semibold text-sm">starting</p>
          <p className="text-red-500 font-bold text-sm mt-5">$10.00</p>
        </div>
        <Image
          src={img}
          alt=""
          style={{ width: "100%", height: "auto" }}
          width={60}
          height={60}
          className="w-[120px] h-[200px] absolute -top-14 -right-6"
        />
      </div>
    </div>
  );
}

export default TrendingprodCard;
