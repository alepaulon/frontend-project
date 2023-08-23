"use client";

import React from "react";
import { Button } from "./ui/button";
import { BASE_URL } from "@/app/page";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Es necesario poner un mail válido")
      .min(5, "Mínimo 5 caracteres")
      .required(),
    name: yup.string().min(5, "Mínimo 5 caracteres").required(),
    lastName: yup.string().min(5, "Mínimo 5 caracteres").required(),
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
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-between space-y-3 px-6 pb-10 pt-4 lg:px-16 lg:py-10"
        >
          <div className="flex flex-row justify-between">
            <p className="font-semibold">Name</p>
            <input
              className="w-[150px] rounded-sm border border-black bg-[#F8F8F8] md:w-[180px]"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-semibold">Last Name</p>
            <input
              className="w-[150px] rounded-sm border border-black bg-[#F8F8F8] md:w-[180px]"
              {...register("lastName")}
            />
            <p>{errors.lastName?.message}</p>
          </div>
          <div className="flex flex-row justify-between space-x-5">
            <p className="font-semibold">Contact Email</p>
            <input
              className="mb-6 w-[150px] rounded-sm border border-black bg-[#F8F8F8] md:w-[180px]"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
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
