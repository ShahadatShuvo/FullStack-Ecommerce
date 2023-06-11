import CartMenu from "../HomePage/Navbar/CartMenu";

function CheckoutPage() {
  return (
    <div className="">
      <div className="py-8 ">
        {/* Magic headline */}
        <div>
          <div className="flex justify-start">
            <div className="border-4 border-gradient w-[30vw]"></div>
          </div>
          <h1 className="text-4xl font-semibold text-center">Checkout Page</h1>
          <div className="flex justify-end">
            <div className="border-4 border-gradient w-[30vw]"></div>
          </div>
        </div>
      </div>

      {/* Checkout Data */}

      <div className="flex w-[100vw] justify-between gap-3 mx-14  ">
        {/* Left Side */}
        <div className="space-y-10 w-[50]">
          <div className="flex flex-col border border-slate-200  rounded-xl sm:flex-row items-start p-6 ">
            <span className="hidden sm:block">
              <svg
                className="w-6 h-6 text-slate-700  mt-0.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            <div className="sm:ml-8">
              <h3 className=" text-slate-700  flex ">
                <span className="uppercase tracking-tight">CONTACT INFO</span>
              </h3>
              <div className="font-semibold mt-1 text-sm">
                <span className="">Enrico Smith</span>
                <span className="ml-3 tracking-tighter">+855 - 666 - 7744</span>
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="border border-slate-200  rounded-xl ">
            <div className="p-6 flex flex-col sm:flex-row items-start">
              <span className="hidden sm:block">
                <svg
                  className="w-6 h-6 text-slate-700  mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1401 15.0701V13.11C12.1401 10.59 14.1801 8.54004 16.7101 8.54004H18.6701"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M5.62012 8.55005H7.58014C10.1001 8.55005 12.1501 10.59 12.1501 13.12V13.7701V17.25"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M7.14008 6.75L5.34009 8.55L7.14008 10.35"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16.8601 6.75L18.6601 8.55L16.8601 10.35"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              <div className="sm:ml-8">
                <h3 className=" text-slate-700  flex ">
                  <span className="uppercase">SHIPPING ADDRESS</span>
                </h3>
                <div className="font-semibold mt-1 text-sm">
                  <span className="">
                    St. Paul Road, Norris, SD 57560, Dakota, USA
                  </span>
                </div>
              </div>
            </div>
            <div className="border-t  border-slate-200  px-6 py-7 space-y-4 sm:space-y-6 block">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                <div>
                  <label
                    className="nc-Label text-base font-medium text-neutral-900 "
                    data-nc-id="Label"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    className="rounded-md border border-gray-200 bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg w-full h-10"
                    value="Cole"
                  />
                </div>
                <div>
                  <label
                    className="nc-Label text-base font-medium text-neutral-900  "
                    data-nc-id="Label"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    className="rounded-md  border border-gray-200 bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg w-full h-10"
                    value="Enrico "
                  />
                </div>
              </div>
              <div className="sm:flex space-y-4 sm:space-y-0 sm:space-x-3">
                <div className="flex-1">
                  <label
                    className="nc-Label text-base font-medium text-neutral-900  "
                    data-nc-id="Label"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="rounded-md  border border-gray-200 bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg w-full h-10"
                    placeholder=""
                    value="123, Dream Avenue, USA"
                  />
                </div>
                <div className="sm:w-1/3">
                  <label
                    className="nc-Label text-base font-medium text-neutral-900  "
                    data-nc-id="Label"
                  >
                    Apt, Suite *
                  </label>
                  <input
                    type="text"
                    className="rounded-md  border border-gray-200 bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg w-full h-10"
                    value="55U - DD5 "
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                <div>
                  <label
                    className="nc-Label text-base font-medium text-neutral-900 "
                    data-nc-id="Label"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="rounded-md  border border-gray-200 bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg w-full h-10"
                    value="Norris"
                  />
                </div>
                <div>
                  <label
                    className="nc-Label text-base font-medium text-neutral-900  "
                    data-nc-id="Label"
                  >
                    Country
                  </label>
                  <select className="rounded-md  border border-gray-200 bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg w-full h-10 ">
                    <option value="United States">United States</option>
                    <option value="United States">Canada</option>
                    <option value="United States">Mexico</option>
                    <option value="United States">Israel</option>
                    <option value="United States">France</option>
                    <option value="United States">England</option>
                    <option value="United States">Laos</option>
                    <option value="United States">China</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                <div>
                  <label
                    className="nc-Label text-base font-medium text-neutral-900  "
                    data-nc-id="Label"
                  >
                    State/Province
                  </label>
                  <input
                    type="text"
                    className="rounded-md  border border-gray-200 bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg w-full h-10"
                    value="Texas"
                  />
                </div>
                <div>
                  <label
                    className="nc-Label text-base font-medium text-neutral-900 "
                    data-nc-id="Label"
                  >
                    Postal code
                  </label>
                  <input
                    type="text"
                    className="rounded-md  border border-gray-200 bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg w-full h-10"
                    value="2500 "
                  />
                </div>
              </div>
              <div>
                <label
                  className="nc-Label text-base font-medium text-neutral-900 "
                  data-nc-id="Label"
                >
                  Address type
                </label>
                <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <div className="flex items-center text-sm sm:text-base ">
                    <input
                      id="Address-type-home"
                      type="radio"
                      className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent  focus:ring-primary-500 w-6 h-6"
                      name="Address-type"
                      value="Address-type-home"
                    />
                    <label
                      htmlFor="Address-type-home"
                      className="pl-2.5 sm:pl-3 block text-slate-900  select-none"
                    >
                      <span className="text-sm font-medium">
                        Home{" "}
                        <span className="font-light">(All Day Delivery)</span>
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center text-sm sm:text-base ">
                    <input
                      id="Address-type-office"
                      type="radio"
                      className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent  focus:ring-primary-500 w-6 h-6"
                      name="Address-type"
                      value="Address-type-office"
                    />
                    <label
                      htmlFor="Address-type-office"
                      className="pl-2.5 sm:pl-3 block text-slate-900  select-none"
                    >
                      <span className="text-sm font-medium">
                        Office{" "}
                        <span className="font-light">
                          (Delivery{" "}
                          <span className="font-medium">9 AM - 5 PM</span>)
                        </span>{" "}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row pt-6">
                <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900  hover:bg-slate-800 text-slate-50  shadow-xl   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 ">
                  Save and next to Payment
                </button>
                <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonSecondary bg-white text-slate-700  hover:bg-gray-100 mt-3 sm:mt-0 sm:ml-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 ">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[50%]">
          <CartMenu />
        </div>

        {/* End */}
      </div>
    </div>
  );
}

export default CheckoutPage;
