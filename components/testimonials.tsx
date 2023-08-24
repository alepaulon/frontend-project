"use client";

import React from "react";
import Carousel from "./ui/carousel";

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-[#F8F8F8] py-10 md:px-4 lg:px-32">
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
        <Carousel />
      </div>
    </div>
  );
}
