import Button from "./Button";

function PreviewOrder() {
  return (
    <div className=" w-[50vw] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4  rounded-lg">
      <span className="flex justify-between">
        <h1 className="text-lg font-semibold flex items-center  w-full">
          Order Id: M8698
        </h1>
        <Button btnTitle="View Order" />
      </span>

      <div className="flex py-4 sm:py-7 last:pb-0 first:pt-0">
        <div className="relative h-24 w-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div>
                <h3 className="text-base font-medium line-clamp-1">
                  Rey Nylon Backpack
                </h3>
                <p className="mt-1 text-sm text-slate-500 ">
                  <span>Natural</span>
                  <span className="mx-2 border-l border-slate-200  h-4"></span>
                  <span>XL</span>
                </p>
              </div>
              <div className="mt-0.5 ml-2">
                <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                  <span className="text-green-500 !leading-none">$33</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500  flex items-center">
              <span className="hidden sm:inline-block">Qty</span>
              <span className="inline-block sm:hidden">x</span>
              <span className="ml-2">1</span>
            </p>
            <div className="flex">
              <button
                type="button"
                className="font-medium text-[#1976d2] dark:text-primary-500 "
              >
                Leave review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewOrder;
