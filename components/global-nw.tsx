import React from 'react'
import Image from 'next/image'
import globe from '@/public/globalmap.png'
import sponsors from '@/public/sponsors.png'

export default function Global() {
  return (
    <div className="py-10 px-32 bg-[#F8F8F8]">
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center mt-8 mb-24'>
                <h1 className="font-semibold text-4xl/normal max-w-sm text-center">Huge Global Network of Fast VPN</h1>
                <p className='mt-6 max-w-lg text-center leading-8'>See <span className='font-bold'>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
            </div>
            <Image src={globe} alt='Global Map with the spots where LaslesVPN Servers are located'/>
            <Image src={sponsors} alt='Sponsors of LaslesVPN'/>
        </div>
    </div>
  )
}