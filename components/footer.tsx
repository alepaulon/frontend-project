import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import fb from "@/public/icons/facebook.png"
import twitter from "@/public/icons/twitter.png"
import insta from "@/public/icons/instagram.png"

export default function Footer() {
  return (
    <div className="bg-[#F8F8F8] py-10 px-40 pb-40 flex flex-row justify-between">
      <div className="max-w-xs">
        <div className="flex flex-row items-center">
          <Image src={logo} alt="Logo from LaslesVPN" className="mr-2" />
          <h1 className="text-center text-xl font-bold">LaslesVPN</h1>
        </div>
        <p className="py-5">
          <span className="font-medium">LaslesVPN</span> is a private virtual
          network that has unique features and has high security.
        </p>
        <div className="flex flex-row space-x-2">
          <a href="/">
            <Image src={fb} alt="facebook icon" className="bg-[#F53838] rounded-full shadow-lg shadow-gray-300"/>
          </a>
          <a href="/">
            <Image src={twitter} alt="twitter icon" className="bg-[#F53838] rounded-full shadow-lg shadow-gray-300"/>
          </a>
          <a href="/">
            <Image src={insta} alt="instagram icon" className="bg-[#F53838] rounded-full shadow-lg shadow-gray-300"/>
          </a>
        </div>
        <p className="py-5 opacity-30">©2020Lasles<span className="font-medium">VPN</span></p>
      </div>
      <div className="flex flex-row space-x-24">
        <div className="flex flex-col space-y-2">
          <a href="/" className="font-bold pb-4">Product</a>
          <a href="/">Download</a>
          <a href="/">Pricing</a>
          <a href="/">Locations</a>
          <a href="/">Server</a>
          <a href="/">Countries</a>
          <a href="/">Blog</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="/" className="font-bold pb-4">Engage</a>
          <a href="/">LaslesVPN</a>
          <a href="/">FAQ</a>
          <a href="/">Tutorials</a>
          <a href="/">About us</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="/" className="font-bold pb-4">Earn Money</a>
          <a href="/">Affiliate</a>
          <a href="/">Become partner</a>
        </div>
      </div>
    </div>
  );
}
