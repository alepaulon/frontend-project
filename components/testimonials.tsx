import React from "react";

import { CustomCard } from "@/components/ui/customcard";
import firstAvatar from '@/public/icons/carousel/1.png'
import secondAvatar from '@/public/icons/carousel/2.png'
import thirdAvatar from '@/public/icons/carousel/3.png'

export default function Testimonials() {
  return (
    <div className="py-10 px-32 bg-[#F8F8F8]">
      <div className="flex flex-col items-center mt-8 mb-24">
        <h1 className="font-semibold text-4xl/normal max-w-md text-center">
          Trusted by Thousands of Happy Customers
        </h1>
        <p className="mt-6 max-w-lg text-center leading-8">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>
      <div className="pl-20 flex flex-row justify-between space-x-10">
        <div>
            <CustomCard
            avatarSrc={firstAvatar}
            name="Viezh Robert"
            country="Warsaw, Poland"
            score={4.5}
            message="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.”"
            />
        </div>
        <div>
            <CustomCard
            avatarSrc={secondAvatar}
            name="Yessica Christy"
            country="Shanxi, China"
            score={4.5}
            message="“I like it because I like to travel far and still can connect with high speed.”"
            />
        </div>
        <div>
            <CustomCard
            avatarSrc={thirdAvatar}
            name="Kim Young Jou"
            country="Seoul, South Korea"
            score={4.5}
            message="“This is very unusual for my business that currently requires a virtual private network that has high security.”"
            />
        </div>
      </div>
    </div>
  );
}
