import React from "react";
import Image from "next/image";
import globe from "@/public/globalmap.png";
import sponsors from "@/public/sponsors.png";

export default function Global() {
  return (
    <div className="bg-[#F8F8F8] px-32 py-10">
      <div className="flex flex-col items-center">
        <div className="mb-24 mt-8 flex flex-col items-center">
          <h1 className="max-w-sm text-center text-4xl/normal font-semibold">
            Huge Global Network of Fast VPN
          </h1>
          <p className="mt-6 max-w-lg text-center leading-8">
            See <span className="font-bold">LaslesVPN</span> everywhere to make
            it easier for you when you move locations.
          </p>
        </div>
        <Image
          src={globe}
          alt="Global Map with the spots where LaslesVPN Servers are located"
        />
        <Image src={sponsors} alt="Sponsors of LaslesVPN" />
      </div>
    </div>
  );
}
