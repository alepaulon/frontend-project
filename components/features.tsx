import React from "react";
import Image from "next/image";
import features_img from "@/public/secondimg.png";

export default function Features() {
  return (
    <div
      id="features"
      className="flex flex-col items-center lg:mx-32 lg:my-10 lg:flex-row lg:justify-between"
    >
      <Image
        src={features_img}
        alt="Stock image about features of LaslesVPN"
        className="w-fit p-10 lg:w-[500px] xl:w-[600px] "
      />
      <div className="flex flex-col space-y-2 text-center lg:max-w-xl lg:items-start lg:pt-8 lg:text-start">
        <h2 className="text-2xl/normal font-semibold lg:max-w-sm lg:text-4xl/normal">
          We Provide Many Features You Can Use
        </h2>
        <p className="text-base lg:mb-6 lg:mt-6 lg:max-w-md">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <div className="flex flex-col items-center space-y-4 p-4 lg:items-start">
          <div className="flex lg:flex-row lg:p-3 lg:pl-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#2FAB73"
              className="h-6 w-6"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="lg:pl-3">Powerful online protection.</p>
          </div>
          <div className="flex lg:flex-row lg:p-3 lg:pl-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#2FAB73"
              className="h-6 w-6"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="lg:pl-3">Internet without borders.</p>
          </div>
          <div className="flex lg:flex-row lg:p-3 lg:pl-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#2FAB73"
              className="h-6 w-6"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="lg:pl-3">Supercharged VPN.</p>
          </div>
          <div className="flex lg:flex-row lg:p-3 lg:pl-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#2FAB73"
              className="h-6 w-6"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="lg:pl-3">No specific time limits.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
