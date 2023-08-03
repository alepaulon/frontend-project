import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import get_started from '../public/firstimg.png'


export default function GetStarted() {
  return (
    <div className='flex flex-row mt-20 mx-32 justify-between'>
      <div className='flex flex-col items-start max-w-xl'>
        <h1 className='font-semibold text-5xl/relaxed'>Want anything to be easy with <span className='font-bold'>Lasles VPN.</span></h1>
        <p className='text-base mt-6 mb-12'>Provide a network for all your needs with ease and fun using <span className='font-medium'>LaslesVPN</span> discover interesting features from us.</p>
        <Button variant="filled_red" size="lg">Get Started</Button>
      </div>
      <div>
        <Image src={get_started} alt="Image about getting started in LaslesVPN" className='max-h-[350px] '/>
      </div>
    </div>
  )
}