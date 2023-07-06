import Image from "next/image";
import { SingleStepInterface } from "../../../../interfaces";
import { CartItemContext } from "@/app/context";
import { useContext } from "react";

function SingleStep(props: SingleStepInterface) {
  const { isDarkTheme } = useContext(CartItemContext);

  const { image, step, title, description, extraStyle } = props.step;
  return (
    <div className=" text-center   text-black mx-auto w-64 md:w-72 mb-16 hover:shadow-[rgba(0,_0,_0,_0.12)_0px_3px_8px] p-8 rounded-xl  ">
      <Image
        src={`/${image}`}
        alt=""
        className="-mt-16"
        width={450}
        height={451}
      />
      <div className="space-y-5">
        <span
          className={` inline-flex px-2.5 md:py-1 rounded-full font-medium text-xs  ${extraStyle}  `}
        >
          {step}
        </span>
        <h6
          className={
            isDarkTheme
              ? "text-base font-semibold text-white"
              : "text-base font-semibold"
          }
        >
          {title}
        </h6>
        <p className="text-slate-600 leading-6">{description}</p>
      </div>
    </div>
  );
}

export default SingleStep;
