import * as React from "react";
import Button from "@mui/material/Button";
import DateInput from "../SubComponent/Input/DateInput";
import Input from "../SubComponent/Input/Input";
import SelectInput from "../SubComponent/Input/SelectInput";

const options = ["Male", "Female", "Other"];

function UpdateAccount() {
  return (
    <div className="min-h-[75vh] flex justify-center items-center">
      <div className="flex flex-col gap-3 ">
        <Input labelName="Name" type="text" id="name-input" />
        <Input labelName="Email" type="email" id="email-input" />
        <DateInput />
        <Input labelName="Addess" type="text" id="address-input" />
        <SelectInput labelName="Select Gender" options={options} />
        <Input labelName="Phone No" type="number" id="phone-input" />
        <span className=" text-center"></span>
        <Button variant="contained">Update</Button>
      </div>
    </div>
  );
}

export default UpdateAccount;
