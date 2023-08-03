import React from "react";
import Image from "next/image";
import plans from "@/public/plans.png";
import { Button } from "./ui/button";


/* debería hacer un componente card */

export default function Pricing() {
  return (
    <div className="py-10 px-32 mt-20 bg-[#F8F8F8]">
      <div className="flex flex-col items-center text-center mb-6">
        <h2 className="font-semibold text-4xl/normal max-w-sm">
          Choose Your Plan
        </h2>
        <p className="mt-6 mb-6 max-w-xl leading-8">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>
      <div className="flex flex-row justify-around min-h-[820px] ">
        <div className="bg-white rounded-xl border-2 border-[#DDDDDD] p-16 flex flex-col items-center">
          <Image src={plans} alt="Pricing plans image" />
          <h4 className="font-bold text-lg m-10">Free Plan</h4>
          <div className="space-y-6">
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2FAB73"
                className="w-4 h-4 mt-1 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" ">Unlimited Bandwitch</p>
            </div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2FAB73"
                className="w-4 h-4 mt-1 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" ">Encrypted Connection</p>
            </div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2FAB73"
                className="w-4 h-4 mt-1 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" ">No Traffic Logs</p>
            </div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2FAB73"
                className="w-4 h-4 mt-1 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" ">Works on All Devices</p>
            </div>
          </div>
          <div className="flex flex-col text-center mt-auto">
            <h3 className="text-2xl font-bold mb-4">Free</h3>
            <Button variant="outline_red">Select</Button>
          </div>
        </div>
        <div className="bg-white rounded-xl border-2 border-[#DDDDDD] p-16 flex flex-col items-center">
          <Image src={plans} alt="Pricing plans image" />
          <h4 className="font-bold text-lg m-10">Standard Plan</h4>
          <div className="space-y-6">
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2FAB73"
                className="w-4 h-4 mt-1 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" ">Unlimited Bandwitch</p>
            </div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2FAB73"
                className="w-4 h-4 mt-1 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" ">Encrypted Connection</p>
            </div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2FAB73"
                className="w-4 h-4 mt-1 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" ">No Traffic Logs</p>
            </div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2FAB73"
                className="w-4 h-4 mt-1 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" ">Works on All Devices</p>
            </div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2FAB73"
                className="w-4 h-4 mt-1 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" ">Connect Anyware</p>
            </div>
          </div>
          <div className="flex flex-col text-center mt-auto">
            <h3 className="text-2xl font-bold mb-4">$9 <span className="font-normal">/ mo</span></h3>
            <Button variant="outline_red">Select</Button>
          </div>
        </div>
        <div className="bg-white rounded-xl border-2 border-[#F53838] p-16 flex flex-col items-center">
          <Image src={plans} alt="Pricing plans image" />
          <h4 className="font-bold text-lg m-10">Premium Plan</h4>
          <div className="space-y-6">
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2FAB73"
                className="w-4 h-4 mt-1 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" ">Unlimited Bandwitch</p>
            </div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2FAB73"
                className="w-4 h-4 mt-1 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" ">Encrypted Connection</p>
            </div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2FAB73"
                className="w-4 h-4 mt-1 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" ">No Traffic Logs</p>
            </div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2FAB73"
                className="w-4 h-4 mt-1 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" ">Works on All Devices</p>
            </div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2FAB73"
                className="w-4 h-4 mt-1 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" ">Connect Anyware</p>
            </div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2FAB73"
                className="w-4 h-4 mt-1 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" ">Get New Features</p>
            </div>
          </div>
          <div className="flex flex-col text-center mt-auto">
            <h3 className="text-2xl font-bold mb-4">$12 <span className="font-normal">/ mo</span></h3>
            <Button variant="filled_red_round">Select</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
