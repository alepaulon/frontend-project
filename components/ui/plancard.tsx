import React from "react";
import { Button } from "./button";
import Image from "next/image";
import plans from "@/public/plans.png";

type PlanCardTypes = {
  plan: string;
  hideFeature5?: boolean;
  hideFeature6?: boolean;
  price: string | number;
  isActive?: boolean;
};

const PlanCard: React.FC<PlanCardTypes> = ({
  plan,
  hideFeature5,
  hideFeature6,
  price,
  isActive,
}) => {
  return (
    <div
      className={`rounded-xl border-2 bg-white ${
        isActive ? "border-[#F53838]" : "border-[#DDDDDD]"
      } flex flex-col items-center p-16`}
    >
      <Image src={plans} alt="Pricing plans image" />
      <h4 className="m-10 text-lg font-bold">{plan}</h4>
      <div className="space-y-6">
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#2FAB73"
            className="mr-2 mt-1 h-4 w-4"
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
            className="mr-2 mt-1 h-4 w-4"
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
            className="mr-2 mt-1 h-4 w-4"
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
            className="mr-2 mt-1 h-4 w-4"
          >
            <path
              fill-rule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clip-rule="evenodd"
            />
          </svg>
          <p className=" ">Works on All Devices</p>
        </div>
        <div className={`flex flex-row ${hideFeature5 ? "invisible" : ""} `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#2FAB73"
            className="mr-2 mt-1 h-4 w-4"
          >
            <path
              fill-rule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clip-rule="evenodd"
            />
          </svg>
          <p className=" ">Connect Anyware</p>
        </div>
        <div className={`flex flex-row ${hideFeature6 ? "invisible" : ""} `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#2FAB73"
            className="mr-2 mt-1 h-4 w-4"
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
      <div className="mt-auto flex flex-col text-center">
        <h3 className="mb-4 text-2xl font-bold">{price}</h3>
        <Button variant={`${isActive ? "filled_red_round" : "outline_red"}`}>
          Select
        </Button>
      </div>
    </div>
  );
};

export { PlanCard };
