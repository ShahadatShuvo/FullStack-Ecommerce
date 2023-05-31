import { Chip } from "@mui/material";
import { SingleStepInterface } from "../../../../interfaces";

function SingleStep(props: SingleStepInterface) {
  const { image, step, title, description } = props.step;
  return (
    <div className="space-y-2 text-center p-8  text-black mx-auto w-72">
      <img className="w-full " src={image} alt="" />
      <div className="py-2">
        <Chip color="primary" label={step} size="small" variant="outlined" />
        <h6 className=" font-semibold">{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SingleStep;
