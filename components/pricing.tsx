import React from "react";
import { PlanCard } from "./ui/plancard";

/* debería hacer un componente card */

export default function Pricing() {
  return (
    <div className="mt-20 bg-[#F8F8F8] px-32 py-10">
      <div className="mb-6 flex flex-col items-center text-center">
        <h2 className="max-w-sm text-4xl/normal font-semibold">
          Choose Your Plan
        </h2>
        <p className="mb-6 mt-6 max-w-xl leading-8">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>
      <div className="flex min-h-[820px] flex-row justify-center space-x-16 ">
        <PlanCard plan={"Free Plan"} price={"Free"} hideFeature5 hideFeature6 />
        <PlanCard plan={"Standard Plan"} price={"$9 / mo"} hideFeature6 />
        <PlanCard plan={"Premium Plan"} price={"$12 / mo"} isActive />
      </div>
    </div>
  );
}
