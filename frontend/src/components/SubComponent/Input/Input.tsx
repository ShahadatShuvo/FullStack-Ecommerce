import { TextField } from "@mui/material";
import React from "react";

interface InputProps {
  labelName: string;
  type: string;
  id: string;
}

const Input: React.FC<InputProps> = ({ labelName, type, id }) => {
  return (
    <div>
      <div className="flex items-center ">
        <TextField
          id={id}
          label={labelName}
          variant="outlined"
          className="w-[50vw] font-bold"
          type={type}
        />
      </div>
    </div>
  );
};

export default Input;
