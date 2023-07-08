"use client";

import DeveloperProfile from "@/components/About/DeveloperProfile";
import Navbar from "@/components/HomePage/Navbar";
import MagicLine from "@/components/SubComponent/MagicLine";
import { useEffect, useState } from "react";
import { GlobalStates } from "@/app/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function Team() {
  const router = useRouter();

  const { catchErrorMsg } = useContext(GlobalStates);

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getHeadline = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/newsroom/teams/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setTeams(data.results);
        } else {
          catchErrorMsg("Error fetching user profile data");
          router.push("/error/404");
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
        catchErrorMsg(JSON.stringify(error));
        router.push("/error/404");
      }
    };
    getHeadline();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <div className="about pt-10 bg-light text-dark">
        <div className="mx-10">
          <MagicLine title="Our Team" />
        </div>
        <div className="w-screen min-h-[80vh] flex justify-center  gap-5 py-16">
          {teams.map((dev: any) => (
            <DeveloperProfile developerData={dev} key={dev.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
