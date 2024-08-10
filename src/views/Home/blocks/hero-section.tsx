import React from 'react'
// import Rocket from '@/shared/icons/Rocket'
// import Target from '@/shared/icons/Target'
import dynamic from 'next/dynamic'

const Rocket = dynamic(() => import('../../../shared/icons/Rocket'), { ssr: false })
const Target = dynamic(() => import('../../../shared/icons/Target'), { ssr: false })


const HeroSection = () => {
    return (
        <section className='flex justify-center relative sm:w-full lg:max-w-7xl xl:py-10 xl:max-w-screen-xl m-auto'>
            <h1 className='text-2xl text-center leading-10 w-[65%] sm:max-w-[600px] lg:text-4xl lg:leading-14 text-black dark:text-white'>
                Discover brand-new online casinos, with
                <span className='text-primary font-bold m-0'> AviatorPlay</span>
            </h1>
            <Rocket className='absolute -rotate-45 top-[50%] -translate-y-[50%] -right-[50px] w-[120px]  sm:right-[unset] sm:left-0 md:w-24 lg:w-36 lg:left-8 lg:top-[50%] lg:-translate-y-[50%] xl:w-40' />
            <Target className='absolute top-[50%] -translate-y-[50%] -left-[50px] w-[100px] sm:top-[50%] sm:left-[unset] sm:w-24 sm:right-0 lg:w-36  lg:bottom-0 lg:right-8 xl:w-40' />
        </section>
    )
}

export default HeroSection