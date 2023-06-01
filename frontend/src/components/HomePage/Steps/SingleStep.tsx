import Image from "next/image";
import { SingleStepInterface } from "../../../../interfaces";

function SingleStep(props: SingleStepInterface) {
  const { image, step, title, description, extraStyle } = props.step;
  return (
    <div className=" text-center   text-black mx-auto w-72 mb-16">
      <Image src={`/${image}`} alt="" width={450} height={451} />
      <div className="space-y-5">
        <span
          className={`nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs  ${extraStyle}  `}
        >
          {step}
        </span>
        <h6 className="text-base font-semibold">{title}</h6>
        <p className="text-slate-600 leading-6">{description}</p>
      </div>
    </div>
  );
}

export default SingleStep;
