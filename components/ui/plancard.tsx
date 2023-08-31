"use client";

import { Button } from "./button";
import Image from "next/image";
import plans from "@/public/plans.png";
import useGetData from "@/hooks/use-get-data";

type PlanCardTypes = {
  title: string;
  price: "Free" | number;
  benefits: string[];
};

const Subscription = () => {
  const {
    result: subscriptions,
    error,
    loading,
  } = useGetData<PlanCardTypes[]>({
    endpoint: "subscription",
  });

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0 xl:space-x-16">
      {subscriptions?.map((subscription) => (
        <div
          className="flex h-[860px] flex-col items-center rounded-xl border-2 border-[#DDDDDD] bg-white
              p-16 hover:border-[#F53838]"
        >
          <Image src={plans} alt="Pricing plans image" />
          <h4 className="m-10 text-lg font-bold" key={subscription.title}>
            {subscription.title}
          </h4>
          <div className="space-y-6">
            {subscription.benefits.map((benefit) => (
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#2FAB73"
                  className="mr-2 mt-1 h-4 w-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  />
                </svg>

                <p key={`${subscription.title + benefit}`}>{benefit}</p>
              </div>
            ))}
          </div>
          <div className="mt-auto flex flex-col text-center">
            {subscription.price === "Free" ? (
              <h3 className="mb-4 text-2xl font-bold">{subscription.price}</h3>
            ) : (
              <h3 className="mb-4 text-2xl font-bold">
                ${subscription.price} <span className="font-normal">/ mo</span>
              </h3>
            )}
            <Button
              variant={`${
                subscription.title === "Premium Plan"
                  ? "filled_red_round"
                  : "outline_red"
              }`}
            >
              Select
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Subscription };
