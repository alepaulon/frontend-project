"use client";

import React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { BASE_URL } from "@/app/page";

export default function Form() {
  const [data, setData] = useState({
    email: "",
    name: "",
    lastName: "",
  });

  const handleFetch = () => {
    fetch(`${BASE_URL}/api/send-email`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="flex justify-center bg-[#F8F8F8]">
      <div className="flex flex-col rounded-xl bg-white lg:flex-row lg:justify-between lg:px-40 lg:py-4">
        <div className="flex flex-col py-10 text-center lg:text-start">
          <h2 className="px-10 text-2xl font-semibold lg:max-w-xl lg:px-0 lg:text-4xl/normal">
            Subscribe Now To Get Special Features!
          </h2>
          <p className="mt-6 max-w-lg leading-8">
            Fill the form and we will get in touch.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFetch();
            console.log(data.email);
            console.log(data.name);
            console.log(data.lastName);
          }}
          className="flex flex-col justify-between space-y-3 px-6 pb-10 pt-4 lg:px-16 lg:py-10"
        >
          <div className="flex flex-row justify-between">
            <p className="font-semibold">Name</p>
            <input
              className="w-[150px] rounded-sm border border-black bg-[#F8F8F8] md:w-[180px]"
              type="text"
              value={data.name}
              onChange={(event) => {
                setData({ ...data, name: event.target.value });
              }}
            />
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-semibold">Last Name</p>
            <input
              className="w-[150px] rounded-sm border border-black bg-[#F8F8F8] md:w-[180px]"
              type="text"
              value={data.lastName}
              onChange={(event) => {
                setData({
                  ...data,
                  lastName: event.target.value,
                });
              }}
            />
          </div>
          <div className="flex flex-row justify-between space-x-5">
            <p className="font-semibold">Contact Email</p>
            <input
              className="mb-6 w-[150px] rounded-sm border border-black bg-[#F8F8F8] md:w-[180px]"
              type="email"
              value={data.email}
              onChange={(event) => {
                setData({ ...data, email: event.target.value });
              }}
            />
          </div>
          <Button
            type="submit"
            className="flex h-12 w-56 self-end"
            variant={"filled_red"}
          >
            Subscribe Now
          </Button>
        </form>
      </div>
    </div>
  );
}
