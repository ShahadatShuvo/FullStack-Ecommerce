"use client";

import Navbar from "@/components/HomePage/Navbar";
import MessageCard from "@/components/contact/messages/MessageCard";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalStates } from "@/app/context";
import { useRouter } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

interface MessageCardinterface {
  id: number;
  subject: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

function MessageList() {
  const router = useRouter();
  const { userProfile, catchErrorMsg } = useContext(GlobalStates);

  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/api/newsroom/contacts/search/${userProfile.email}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setMessageList(data.results);
        } else {
          const errorData = await response.json();
          console.log("Error  1:", errorData);
          router.push("/error/404");
          catchErrorMsg(JSON.stringify(errorData));
        }
      } catch (error) {
        console.error("Error 2:", error);
        router.push("/error/404");
        catchErrorMsg(JSON.stringify(error));
      }
    };
    if (userProfile.email) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile]);

  const displayMessageList = messageList.map((msg: MessageCardinterface) => {
    return (
      <MessageCard
        key={msg.id}
        id={msg.id}
        subject={msg.subject}
        email={msg.email}
        phone={msg.phone}
        message={msg.message}
        created_at={msg.created_at}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <div className="py-10 flex flex-col items-center gap-5 w-screen">
        {displayMessageList}
      </div>
    </div>
  );
}

export default MessageList;
