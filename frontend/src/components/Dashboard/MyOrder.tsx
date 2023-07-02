import React from "react";
import PreviewOrder from "../SubComponent/PreviewOrder";

function MyOrder() {
  return (
    <div className="py-16">
      <div className="w-full flex flex-col items-center space-y-4 justify-center ">
        <PreviewOrder />
        <PreviewOrder />
      </div>
    </div>
  );
}

export default MyOrder;
