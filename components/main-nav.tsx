import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";

export default function Nav() {
  return (
    <div className="mx-32 my-10 flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <Image src={logo} alt="Logo from LaslesVPN" className="mr-2" />
        <h1 className="text-center text-xl font-bold">LaslesVPN</h1>
      </div>
      <div className="mt-4 flex flex-row space-x-12">
        <a href="/">About</a>
        <a href="/">Features</a>
        <a href="/">Pricing</a>
        <a href="/">Testimonials</a>
        <a href="/">Help</a>
      </div>
      <div className="mt-2 flex flex-row space-x-2">
        <Button variant="ghost">Sign In</Button>
        <Button variant="outline_red">Sign Up</Button>
      </div>
    </div>
  );
}
