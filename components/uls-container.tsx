import React from "react";
import Image from "next/image";
import users from "@/public/icons/user.png";
import location from "@/public/icons/location.png";
import servers from "@/public/icons/Server.png";

export default function UsersLocationServers() {
  return (
    <div className="max-h-150 mx-32 my-10 flex flex-row justify-around rounded-xl py-10 align-middle shadow-xl">
      <div className="flex flex-row items-center">
        <Image
          src={users}
          alt="users icon"
          height="50"
          width="50"
          className="max-h-[50px]"
        />
        <div className="ml-8 flex flex-col align-middle">
          <h1 className="text-lg font-extrabold">90+</h1>
          <p>Users</p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3"
        height="100"
        viewBox="0 0 3 129"
        fill="none"
      >
        <path
          d="M1.5 1.76257V127.336"
          stroke="#EEEFF2"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      <div className="flex flex-row items-center">
        <Image
          src={location}
          alt="location icon"
          height="50"
          width="50"
          className="max-h-[50px]"
        />
        <div className="ml-8 flex flex-col align-middle">
          <h1 className="text-lg font-extrabold">30+</h1>
          <p>Locations</p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3"
        height="100"
        viewBox="0 0 3 129"
        fill="none"
      >
        <path
          d="M1.5 1.76257V127.336"
          stroke="#EEEFF2"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      <div className="flex flex-row items-center">
        <Image
          src={servers}
          alt="servers icon"
          height="50"
          width="50"
          className="max-h-[50px] "
        />
        <div className="ml-8 flex flex-col align-middle">
          <h1 className="text-lg font-extrabold">50+</h1>
          <p>Servers</p>
        </div>
      </div>
    </div>
  );
}
