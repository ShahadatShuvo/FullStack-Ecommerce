import React from "react";

interface MessageCardinterface {
  id: number;
  subject: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

function MessageCard(props: MessageCardinterface) {
  const date = props.created_at.split("T")[0];
  const time = props.created_at.split("T")[1].split(".")[0];

  return (
    <div className="w-[60%] border rounded-md p-6 bg-white">
      <p className="text-xl font-semibold text-gray-500">
        Subject: <span className="">{props.subject}</span>
      </p>
      <div className="flex gap-5">
        <p className="text-sm">Date: {date}</p>
        <p className="text-sm">Time: {time}</p>
      </div>
      <div className="flex gap-5">
        <p className="text-sm">Email: {props.email}</p>
        <p className="text-sm">Phone: {props.phone}</p>
      </div>
      <p className="text-sm text-gray-800 font-semibold mt-2">
        Message:
        <span className="ml-1">{props.message}</span>
      </p>
    </div>
  );
}

export default MessageCard;
