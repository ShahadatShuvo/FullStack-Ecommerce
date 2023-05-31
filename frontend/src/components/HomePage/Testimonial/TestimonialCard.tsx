import React from "react";

function TestimonialCard() {
  return (
    <div className="text-black lg:grid grid-cols-4 p-4 gap-8 space-y-6 lg:space-y-0">
      <div className="shadow-lg border col-span-2 border-gray-500 rounded">
        {/* <!-- Magic Dots --> */}
        <div className="relative flex p-4 justify-between  border-b border-gray-500">
          <h3 className="text-lg font-bold">Bob Ziroll</h3>
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
          </div>
        </div>
        <p className="p-4">
          Great quality products, affordable prices, fast and friendly delivery.
          I very recommend.
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
