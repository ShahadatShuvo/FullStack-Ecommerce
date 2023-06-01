import { Chip } from "@mui/material";
import { SingleStepInterface } from "../../../../interfaces";
import Image from "next/image";

function SingleStep(props: SingleStepInterface) {
  const { image, step, title, description } = props.step;
  return (
    <div className="space-y-2 text-center p-8  text-black mx-auto w-72">
      <Image src={`/${image}`} alt="" width={300} height={300} />
      <div className="py-2">
        <Chip color="primary" label={step} size="small" variant="outlined" />
        <h6 className=" font-semibold">{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SingleStep;
