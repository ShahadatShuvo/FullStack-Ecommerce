import React from "react";
import Button from "@mui/material/Button";
import Input from "../SubComponent/Input/Input";

function ChangePassword() {
  return (
    <div className="min-h-[60vh] flex justify-center items-center">
      <div className="flex flex-col gap-3">
        <Input labelName="Current password" type="text" id="name-input" />
        <Input labelName="New password" type="text" id="name-input" />
        <Input labelName="Confirm password" type="text" id="name-input" />
        <Button variant="contained">Update</Button>
      </div>
    </div>
  );
}

export default ChangePassword;
