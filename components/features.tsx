import React from 'react'
import Image from 'next/image'
import features_img from '@/public/secondimg.png'


export default function Features() {
  return (
    <div className="flex flex-row justify-between my-10 mx-32">
      <Image
        src={features_img}
        alt="Stock image about features of LaslesVPN"
        height={350}
        width={500}
      />
      <div className="flex flex-col items-start max-w-xl pt-8">
        <h2 className="font-semibold text-4xl/normal max-w-sm">
          We Provide Many Features You Can Use
        </h2>
        <p className="text-base mt-6 mb-6 max-w-md">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <div>
          <div className='flex flex-row p-3 pl-0'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#2FAB73"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <p className='pl-3'>Powerful online protection.</p>
          </div>
          <div className='flex flex-row p-3 pl-0'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#2FAB73"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <p className='pl-3'>Internet without borders.</p>
          </div>
          <div className='flex flex-row p-3 pl-0'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#2FAB73"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <p className='pl-3'>Supercharged VPN</p>
          </div>
          <div className='flex flex-row p-3 pl-0'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#2FAB73"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <p className='pl-3'>No specific time limits.</p>
          </div>
        </div>
      </div>
    </div>
  );
}