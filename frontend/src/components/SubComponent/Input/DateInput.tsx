import { TextField } from "@mui/material";
import React from "react";

const DateInput: React.FC = () => {
  return (
    <div className="flex items-center">
      <TextField
        id="date-picker"
        label="Date of Birth"
        type="date"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        className="w-[50vw]"
      />
    </div>
  );
};

export default DateInput;
