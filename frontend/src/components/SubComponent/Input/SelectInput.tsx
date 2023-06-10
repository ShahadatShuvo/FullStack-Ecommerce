import { MenuItem, TextField } from "@mui/material";
import React from "react";

interface SelectInputProps {
  options: string[];
  labelName: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ options, labelName }) => {
  return (
    <div className="flex items-center">
      <TextField
        id="select-input"
        select
        label={labelName}
        variant="outlined"
        className="w-[50vw]"
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default SelectInput;
