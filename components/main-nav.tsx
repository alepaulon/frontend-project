"use client";

import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="flex xl:mx-32 xl:my-10 xl:flex-row xl:justify-between">
      <div className="flex xl:flex-row xl:items-center">
        <Image src={logo} alt="Logo from LaslesVPN" className="xl:mr-2" />
        <h1 className="text-center font-bold xl:text-xl">LaslesVPN</h1>
      </div>
      <div className="flex xl:mt-4 xl:flex-row xl:space-x-12">
        <a href="/">About</a>
        <a href="/">Features</a>
        <a href="/">Pricing</a>
        <a href="/">Testimonials</a>
        <a href="/">Help</a>
      </div>
      <div className="flex xl:mt-2 xl:flex-row xl:space-x-2">
        <Button variant="ghost">Sign In</Button>
        <Button variant="outline_red">Sign Up</Button>
      </div>
    </div>
  );
}
