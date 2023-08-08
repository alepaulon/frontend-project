import React from "react";
import { PlanCard } from "./ui/plancard";


/* debería hacer un componente card */

export default function Pricing() {
  return (
    <div className="py-10 px-32 mt-20 bg-[#F8F8F8]">
      <div className="flex flex-col items-center text-center mb-6">
        <h2 className="font-semibold text-4xl/normal max-w-sm">
          Choose Your Plan
        </h2>
        <p className="mt-6 mb-6 max-w-xl leading-8">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>
      <div className="flex flex-row justify-center space-x-16 min-h-[820px] ">
        <PlanCard plan={"Free Plan"} price={"Free"} hideFeature5 hideFeature6 />
        <PlanCard plan={"Standard Plan"} price={"$9 / mo"} hideFeature6 />
        <PlanCard plan={"Premium Plan"} price={"$12 / mo"} />
      </div>
    </div>
  );
}
