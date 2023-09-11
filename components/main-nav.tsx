"use client";

import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="lg:flex lg:items-center lg:justify-center">
      <div className="m-4 flex justify-between lg:mx-8 lg:flex-row xl:mx-24 xl:my-10">
        <Link
          href="/"
          className="flex flex-shrink-0 flex-row items-center lg:px-8"
        >
          <Image src={logo} alt="Logo from LaslesVPN" className="mr-2" />
          <h1 className="text-center text-xl font-bold">LaslesVPN</h1>
        </Link>
        <div className="block lg:hidden">
          <button onClick={() => setOpenMenu(!openMenu)} className="self-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <nav
          className={`${
            openMenu ? "block" : "hidden"
          } absolute left-0 top-0 block h-screen w-full flex-grow bg-white p-8 lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent`}
        >
          <button
            onClick={() => setOpenMenu(false)}
            className="absolute left-0 top-0 ml-2 mt-2 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="mt-4 flex flex-col pl-8 lg:mt-0 lg:flex-row xl:space-x-12">
            <Link
              href="#about"
              className="mr-4 mt-4 block underline-offset-4 hover:underline lg:mt-0 lg:inline-block"
            >
              About
            </Link>
            <Link
              href="#features"
              className="mr-4 mt-4 block underline-offset-4 hover:underline lg:mt-0 lg:inline-block"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="mr-4 mt-4 block underline-offset-4 hover:underline lg:mt-0 lg:inline-block"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="mr-4 mt-4 block underline-offset-4 hover:underline lg:mt-0 lg:inline-block"
            >
              Testimonials
            </Link>
            <Link
              href="#help"
              className="mr-4 mt-4 block underline-offset-4 hover:underline lg:mt-0 lg:inline-block"
            >
              Help
            </Link>
          </div>
          <div className="mt-8 flex justify-center lg:ml-20 lg:mt-0 lg:flex-row lg:space-x-4 lg:pt-0">
            <Button
              variant="ghost"
              className={`${
                openMenu ? "h-9 min-w-fit px-3" : ""
              }lg:h-9 whitespace-nowrap lg:px-3 xl:px-16 xl:py-6`}
            >
              Sign In
            </Button>
            <Button
              variant="outline_red"
              className={`${
                openMenu ? "h-9 min-w-fit px-3" : ""
              }lg:h-9 whitespace-nowrap lg:px-3 xl:px-16 xl:py-6`}
            >
              Sign Up
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
