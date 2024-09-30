import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/assets'

const Blogitem = ({ category, description, title, image }) => {
    
    return (
        <>
            <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] cursor-pointer hover:duration-500">
                <Image src={image} alt='blog-img' width={400} height={400} className='border border-black' />
                <p className='bg-black ml-5 mt-5 px-1 inline-block text-white text-sm'>{category}</p>
                <div className='p-5'>
                    <h5 className='mb-2 text-lg font-medium tracking-tighter fw-bold'>
                        {
                            title
                        }
                    </h5>
                    <p className='text-sm mb-3 tracking-tighter text-gray-700'>{description}</p>
                    <div className='cursor-pointer inline-flex items-center justify-center py-2 font-semibold text-center group'>
                        Read more
                        <Image
                            src={assets.arrow}
                            alt='arrow-img'
                            width={12}
                            className='ml-2 group-hover:ml-4  duration-500'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogitem
