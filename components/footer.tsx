import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import fb from "@/public/icons/facebook.png"
import twitter from "@/public/icons/twitter.png"
import insta from "@/public/icons/instagram.png"

export default function Footer() {
  return (
    <div>
      <div>
        <div className="flex flex-row items-center">
          <Image src={logo} alt="Logo from LaslesVPN" className="mr-2" />
          <h1 className="text-center text-xl font-bold">LaslesVPN</h1>
        </div>
        <p>
          <span className="font-medium">LaslesVPN</span> is a private virtual
          network that has unique features and has high security.
        </p>
        <div className="flex flex-row space-x-2">
          <a href="/">
            <Image src={fb} alt="facebook icon" className="bg-[#F53838] rounded-full"/>
          </a>
          <a href="/">
            <Image src={twitter} alt="twitter icon" className="bg-[#F53838] rounded-full"/>
          </a>
          <a href="/">
            <Image src={insta} alt="instagram icon" className="bg-[#F53838] rounded-full"/>
          </a>
        </div>
      </div>
    </div>
  );
}
