import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import fb from "@/public/icons/facebook.png";
import twitter from "@/public/icons/twitter.png";
import insta from "@/public/icons/instagram.png";

export default function Footer() {
  return (
    <div
      id="help"
      className="flex flex-col justify-between bg-[#F8F8F8] py-10 md:flex-row md:px-20 xl:pb-40"
    >
      <div className="px-6 md:max-w-sm">
        <div className="flex flex-row items-center">
          <Image src={logo} alt="Logo from LaslesVPN" className="mr-2" />
          <h1 className="text-center text-xl font-bold">LaslesVPN</h1>
        </div>
        <p className="px-12 py-5 text-center md:px-6 md:text-left">
          <span className="font-medium">LaslesVPN</span> is a private virtual
          network that has unique features and has high security.
        </p>
        <div className="flex flex-row space-x-2">
          <a href="/" className="relative inline-block">
            <Image
              src={fb}
              alt="facebook icon"
              width={38}
              height={38}
              className="relative z-10"
            />
            <div className="absolute left-1 top-1 z-0 h-7 w-7 rounded-full bg-red-500 shadow-lg shadow-gray-300"></div>
          </a>
          <a href="/" className="relative inline-block">
            <Image
              src={twitter}
              alt="twitter icon"
              width={38}
              height={38}
              className="relative z-10"
            />
            <div className="absolute left-1 top-1 z-0 h-7 w-7 rounded-full bg-red-500 shadow-lg shadow-gray-300"></div>
          </a>
          <a href="/" className="relative inline-block">
            <Image
              src={insta}
              alt="instagram icon"
              width={38}
              height={38}
              className="relative z-10"
            />
            <div className="absolute left-1 top-1 z-0 h-7 w-7 rounded-full bg-red-500 shadow-lg shadow-gray-300"></div>
          </a>
        </div>
        <p className="py-5 opacity-30">
          ©2020Lasles<span className="font-medium">VPN</span>
        </p>
      </div>
      <div className="flex flex-row justify-center space-x-6 px-6 text-center lg:space-x-24 lg:pr-10 lg:text-start">
        <div className="flex flex-col space-y-2">
          <a href="/" className="pb-4 font-bold">
            Product
          </a>
          <a href="/">Download</a>
          <a href="/">Pricing</a>
          <a href="/">Locations</a>
          <a href="/">Server</a>
          <a href="/">Countries</a>
          <a href="/">Blog</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="/" className="pb-4 font-bold">
            Engage
          </a>
          <a href="/">LaslesVPN</a>
          <a href="/">FAQ</a>
          <a href="/">Tutorials</a>
          <a href="/">About us</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="/" className="pb-4 font-bold">
            Earn Money
          </a>
          <a href="/">Affiliate</a>
          <a href="/">Become partner</a>
        </div>
      </div>
    </div>
  );
}
