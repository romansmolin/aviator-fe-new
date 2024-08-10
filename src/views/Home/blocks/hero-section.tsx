import React from 'react'
import Rocket from '@/shared/icons/Rocket'
import Target from '@/shared/icons/Target'

const HeroSection = () => {
    return (
        <section className='flex justify-center relative bg-transparent w-full max-w-7xl m-auto'>
            <h1 className='z-10 text-2xl text-center leading-10 max-w-[600px] lg:text-4xl lg:leading-14 text-black dark:text-white'>
                Discover brand-new online casinos, and get lavish
                bonuses daily, with
                <span className='text-primary font-bold m-0'> AviatorPlay</span>
            </h1>
            <Rocket className='w-36 absolute left-8 bottom-0 -rotate-45 z-0' />
            <Target className='z-0 absolute w-36 bottom-0 right-8' />
        </section>
    )
}

export default HeroSection