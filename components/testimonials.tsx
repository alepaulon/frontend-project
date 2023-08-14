"use client";

import React from "react";
import firstAvatar from "@/public/icons/carousel/1.png";
import secondAvatar from "@/public/icons/carousel/2.png";
import thirdAvatar from "@/public/icons/carousel/3.png";
import Carousel from "./ui/carousel";

const cards = [
  {
    index: 1,
    avatarSrc: firstAvatar,
    name: "Viezh Robert",
    country: "Warsaw, Poland",
    score: 4.5,
    message:
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.”",
  },
  {
    index: 2,
    avatarSrc: secondAvatar,
    name: "Yessica Christy",
    country: "Shanxi, China",
    score: 4.5,
    message:
      "“I like it because I like to travel far and still can connect with high speed.”",
  },
  {
    index: 3,
    avatarSrc: thirdAvatar,
    name: "Kim Young Jou",
    country: "Seoul, South Korea",
    score: 4.5,
    message:
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-[#F8F8F8] px-32 py-10">
      <div className="mb-24 mt-8 flex flex-col items-center">
        <h1 className="max-w-md text-center text-3xl/normal font-semibold lg:text-4xl/normal">
          Trusted by Thousands of Happy Customers
        </h1>
        <p className="mt-6 w-[300px] pb-10 text-center leading-8 lg:min-w-[555px]">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>
      <div className="py-10">
        <Carousel cards={cards} />
      </div>
    </div>
  );
}
