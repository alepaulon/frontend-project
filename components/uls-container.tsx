import React from "react";
import Image from "next/image";
import users from "@/public/icons/user.png";
import location from "@/public/icons/location.png";
import servers from "@/public/icons/Server.png";

export default function UsersLocationServers() {
  return (
    <div className="mx-4 flex flex-row justify-evenly rounded-xl align-middle shadow-xl md:mx-10 md:w-[700px] lg:mx-16 lg:w-[900px] lg:py-10 xl:mx-44 xl:w-[1140px]">
      <div className="flex flex-col items-center space-y-2 pb-6 align-middle md:flex-row lg:flex-row">
        <Image
          src={users}
          alt="users icon"
          height="50"
          width="50"
          className="max-h-[50px]"
        />
        <div className="flex flex-col text-center align-middle md:ml-8">
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
        className="hidden lg:inline"
      >
        <path
          d="M1.5 1.76257V127.336"
          stroke="#EEEFF2"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      <div className="flex flex-col items-center space-y-2 pb-6 pl-2 align-middle md:flex-row lg:flex-row">
        <Image
          src={location}
          alt="location icon"
          height="50"
          width="50"
          className="max-h-[50px]"
        />
        <div className="flex flex-col text-center align-middle md:ml-8">
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
        className="hidden lg:inline"
      >
        <path
          d="M1.5 1.76257V127.336"
          stroke="#EEEFF2"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      <div className="flex flex-col items-center space-y-2 pb-6 align-middle md:flex-row lg:flex-row">
        <Image
          src={servers}
          alt="servers icon"
          height="50"
          width="50"
          className="max-h-[50px] "
        />
        <div className="flex flex-col text-center align-middle md:ml-8">
          <h1 className="text-lg font-extrabold">50+</h1>
          <p>Servers</p>
        </div>
      </div>
    </div>
  );
}
