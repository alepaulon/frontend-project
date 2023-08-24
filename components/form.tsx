"use client";

import React from "react";
import { Button } from "./ui/button";
import { BASE_URL } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email, enter a valid one")
      .min(5, "Min 5 characters required")
      .max(50, "Max 50 characters required")
      .required(),
    name: yup
      .string()
      .min(5, "Min 5 characters required")
      .max(20, "Max 20 characters required")
      .required(),
    lastName: yup
      .string()
      .min(5, "Min 5 characters required")
      .max(20, "Max 20 characters required")
      .required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    fetch(`${BASE_URL}/api/send-email`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="flex min-h-[600px] justify-center bg-[#F8F8F8]">
      <div className="mb-20 flex flex-col rounded-xl bg-white lg:flex-row lg:justify-between lg:px-40 lg:py-10 xl:min-w-[1100px] xl:space-x-36">
        <div className="flex flex-col py-10 text-center lg:text-start xl:max-w-[200px]">
          <h2 className="px-10 text-2xl font-semibold lg:px-0 lg:text-4xl/normal">
            Subscribe Now To Get Special Features!
          </h2>
          <p className="mt-6 max-w-lg leading-8">
            Fill the form and we will get in touch.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center space-y-3 pb-10 pt-4 lg:px-16 lg:py-10"
        >
          <div className="flex flex-col items-center">
            <p className="py-2 font-semibold">Name</p>
            <div className="flex flex-col items-center">
              <input
                placeholder="Your name..."
                className={`w-[150px] rounded-lg border ${
                  errors.name ? "border-red-500" : "border-black"
                } bg-[#F8F8F8] pl-2 placeholder:text-sm placeholder:font-thin placeholder:italic placeholder:text-slate-400 md:w-[180px]`}
                {...register("name")}
              />
              <p className="mt-2 text-center italic">{errors.name?.message}</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="py-2 font-semibold">Last Name</p>
            <div className="flex flex-col items-center">
              <input
                placeholder="Your lastname..."
                className={`w-[150px] rounded-lg border ${
                  errors.lastName ? "border-red-500" : "border-black"
                } bg-[#F8F8F8] pl-2 placeholder:text-sm placeholder:font-thin placeholder:italic placeholder:text-slate-400 md:w-[180px]`}
                {...register("lastName")}
              />
              <p className="mt-2 text-center italic">
                {errors.lastName?.message}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="py-2 font-semibold">Contact Email</p>
            <div className="flex flex-col items-center">
              <input
                placeholder="example@mail.com..."
                className={`w-[150px] rounded-lg border ${
                  errors.email ? "border-red-500" : "border-black"
                } bg-[#F8F8F8] pl-2 placeholder:text-sm placeholder:font-thin placeholder:italic placeholder:text-slate-400 md:w-[180px]`}
                {...register("email")}
              />
              <p className="mt-2 text-center italic">{errors.email?.message}</p>
            </div>
          </div>
          <div className="lg:pt-6">
            <Button
              type="submit"
              className="flex h-12 w-56 lg:self-end"
              variant={"filled_red"}
            >
              Subscribe Now
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
