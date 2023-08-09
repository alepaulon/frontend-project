import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import get_started from "../public/firstimg.png";

export default function GetStarted() {
  return (
    <div className="mx-32 mt-20 flex flex-row justify-between">
      <div className="flex max-w-xl flex-col items-start">
        <h1 className="text-5xl/relaxed font-semibold">
          Want anything to be easy with{" "}
          <span className="font-bold">Lasles VPN.</span>
        </h1>
        <p className="mb-12 mt-6 text-base">
          Provide a network for all your needs with ease and fun using{" "}
          <span className="font-medium">LaslesVPN</span> discover interesting
          features from us.
        </p>
        <Button variant="filled_red" size="lg">
          Get Started
        </Button>
      </div>
      <div>
        <Image
          src={get_started}
          alt="Image about getting started in LaslesVPN"
          className="max-h-[350px] "
        />
      </div>
    </div>
  );
}
