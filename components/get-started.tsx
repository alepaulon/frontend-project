import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import get_started from "../public/firstimg.png";

export default function GetStarted() {
  return (
    <div
      id="about"
      className="mx-20 my-10 flex flex-col items-center lg:flex-row xl:mx-32 xl:mt-20 xl:flex-row xl:justify-between"
    >
      <div className="flex flex-col items-center space-y-6 text-center lg:items-start lg:space-y-2 lg:text-start xl:max-w-xl xl:flex-col">
        <h1 className="w-[280px] text-3xl font-semibold md:w-[500px] xl:w-[555px] xl:text-5xl/relaxed">
          Want anything to be easy with{" "}
          <span className="font-bold">Lasles VPN.</span>
        </h1>
        <div className="md:flex md:flex-row md:space-x-6 lg:flex-col lg:space-x-0 lg:space-y-4">
          <p className="w-[280px] text-base md:w-[400px] md:text-left xl:mb-12 xl:mt-2 xl:w-[555px] xl:leading-loose">
            Provide a network for all your needs with ease and fun using{" "}
            <span className="font-medium">LaslesVPN</span> discover interesting
            features from us.
          </p>
          <Button
            variant="filled_red"
            size="lg"
            className="my-4 w-[250px] md:my-2 xl:my-0"
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="my-10">
        <Image
          src={get_started}
          alt="Image about getting started in LaslesVPN"
          className="min-w-[280px] xl:max-h-[382px]"
        />
      </div>
    </div>
  );
}
