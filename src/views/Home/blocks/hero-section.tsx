import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section className='grid grid-cols-8'>
            <h1 className='col-span-8 text-center lg:text-start lg:col-span-5 text-2xl leading-10 max-w-[800px] lg:text-4xl lg:leading-14 text-black dark:text-white '>
                Discover brand-new online casinos, and get lavish
                bonuses daily, with 
                <span className='text-primary font-bold m-0'> AviatorPlay</span>
            </h1>
            <div className='col-span-3 hidden lg:block rounded-2xl bg-primary'>
                <Image 
                    alt='Hero Section Image'
                    src={'/hero-section.webp'}
                    className='w-full h-full rounded-2xl'
                    width={300}
                    height={300}
                />
            </div>
        </section>
    )
}

export default HeroSection