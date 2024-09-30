import React from 'react'
import Image from 'next/image'
import { assets } from '@/app/assets/assets'

const page = () => {
  return (
    <>
      <div className="py-5 px-5  md:px-12 lg:px-28">
        <div className="flex justify-between center">
          <Image src={assets.logo}   alt='logo-img' className='w-[130px] sm-w-auto' />
          <div className="flex items-center gap-2 py-1 px-3 sm:py-3 sm:px-3 border border-solid border-black shadow-[-7px_7px_0px_#000000]">Get started <Image alt='arrow-icon' src={assets.arrow} /></div>
        </div>
        <div className="text-center my-8">
            <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
            <p className='mt-10 max-w-[740px] text-sx m-auto sm:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nobis itaque ipsum porro maxime magni officiis vitae illo eius, ea ab, ducimus architecto, earum quae ut? Facere architecto nesciunt itaque?</p>
            <form className='shadow-[-7px_7px_0px_#000000] max-w-[500px] sm:max-w-[600px] flex justify-between border border-black scale-75 sm:scale-100 mx-auto mt-10'>
              <input type="text" className='pl-4 outline-none' placeholder='enter your text here'/>
              <button className='border-1 border-black py-4 px-4 sm:px-8 active:bg-black active:text-white'>Subscribe</button>
            </form>
          </div>
      </div>
     
          </>
  )
}

export default page
