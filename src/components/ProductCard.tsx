import React from 'react'
import Image, { StaticImageData } from 'next/image'
function ProductCard(props: { title: string, details: string, img: string | StaticImageData }) {
    return (
        <div className='  m-4 p-1 shadow-lg border border-gray-300 bg-zinc-200'>
        <div className='flex-wrap  justify-center items-center  shadow-lg p-4 border border-gray-300 bg-stone-200'>
            <Image src={props.img} alt='img1' className='w-[160px] h-[140px] rounded ' />

            <div className=' w-[160px] h-24  flex-wrap flex overflow-hidden'>
                <h2 className='font-semibold text-sm font-sans mt-1 py-1 px-1 '>{props.title}</h2>
                <h2 className=' text-xs font-sans  py-1 px-1  '>{props.details}</h2>
                {/* <h2 className='bold text-lg mt-3'>{props.category}</h2> */}
            </div>
        </div>
        </div>
    )
}

export default ProductCard