import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="bg-black flex flex-col justify-around sm:flex-row gap-2 sm:gap-0 py-5 items-center px-2 sm:px-0">
        <Image src={assets.logo_light} alt='logo-light' width={120} className='cursor-pointer'/>
        <p className='text-white text-sm text-center'>All right reserved.copyright @blogger developed by Mnnan Bhutta</p>
           <div className="flex">
            <Image src={assets.facebook_icon} alt='social_media-icon' width={40} className='cursor-pointer'/>
            <Image src={assets.googleplus_icon} alt='social_media-icon' width={40} className='cursor-pointer'/>
            <Image src={assets.twitter_icon} alt='social_media-icon' width={40} className='cursor-pointer'/>
           </div>
      </div>
    </div>
  )
}

export default Footer
