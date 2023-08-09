"use client";

import React from "react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Form() {
  const [credentials, setCredentials] = useState({
    email: "",
    name: "",
    lastName: "",
  });

  return (
    <div className="flex justify-center bg-[#F8F8F8] p-20">
      <div className="flex max-w-full flex-row justify-center rounded-xl bg-white">
        <div className="flex flex-col px-16 py-10">
          <h2 className="max-w-md text-4xl/normal font-semibold">
            Subscribe Now To Get Special Features!
          </h2>
          <p className="mt-6 max-w-lg leading-8">
            Fill the form and we will get in touch.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(credentials.email);
            console.log(credentials.name);
          }}
          className="flex flex-col px-16 py-10 space-y-3 justify-between"
        >
          <div className="flex flex-row justify-between">
            <p className="font-semibold">Name</p>
            <input
            className="bg-[#F8F8F8] rounded-sm border border-black"
              type="text"
              value={credentials.name}
              onChange={(event) => {
                setCredentials({ ...credentials, name: event.target.value });
              }}
            />
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-semibold">Last Name</p>
            <input
            className="bg-[#F8F8F8] rounded-sm border border-black"
              type="text"
              value={credentials.lastName}
              onChange={(event) => {
                setCredentials({
                  ...credentials,
                  lastName: event.target.value,
                });
              }}
            />
          </div>
          <div className="flex flex-row justify-between space-x-5">
            <p className="font-semibold">Contact Email</p>
            <input
            className="bg-[#F8F8F8] rounded-sm border border-black mb-6"
              type="email"
              value={credentials.email}
              onChange={(event) => {
                setCredentials({ ...credentials, email: event.target.value });
              }}
            />
          </div>
          <Button className="w-56 h-12 flex self-end" variant={"filled_red"}>
            Subscribe Now
          </Button>
        </form>
      </div>
    </div>
  );
}
