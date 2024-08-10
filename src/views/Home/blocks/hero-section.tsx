import React from 'react'
import Rocket from '@/shared/icons/Rocket'
import Target from '@/shared/icons/Target'

const HeroSection = () => {
    return (
        <section className='flex justify-center relative bg-transparent sm:w-full lg:max-w-7xl xl:py-10 xl:max-w-screen-xl m-auto'>
            <h1 className='text-2xl text-center leading-10 w-[65%] sm:max-w-[600px] lg:text-4xl lg:leading-14 text-black dark:text-white'>
                Discover brand-new online casinos, with
                <span className='text-primary font-bold m-0'> AviatorPlay</span>
            </h1>
            <Rocket className='-rotate-45 z-0  top-[50%] -translate-y-[50%] -right-[50px] w-[120px] absolute sm:right-[unset] sm:left-0 md:w-24 lg:w-36 lg:left-8 lg:top-[50%] lg:-translate-y-[50%] xl:w-40' />
            <Target className='z-0 absolute top-[50%] -translate-y-[50%] -left-[50px] w-[100px] sm:top-[50%] sm:left-[unset] sm:w-24 sm:right-0 lg:w-36  lg:bottom-0 lg:right-8 xl:w-40' />
        </section>
    )
}

export default HeroSection


// import React from 'react'
// import Rocket from '@/shared/icons/Rocket'
// import Target from '@/shared/icons/Target'

// const HeroSection = () => {
//     return (
//         <section className='flex justify-center relative bg-transparent w-[70%] sm:max-w-7xl m-auto'>
//             <h1 className='z-10 text-2xl text-center leading-10 max-w-[600px] lg:text-4xl lg:leading-14 text-black dark:text-white'>
//                 Discover brand-new online casinos, and get lavish
//                 bonuses daily, with
//                 <span className='text-primary font-bold m-0'> AviatorPlay</span>
//             </h1>
//             <Rocket className='z-0 -right-[75px] w-[101px] sm:w-36 absolute sm:left-8 sm:bottom-0 -rotate-45' />
//             <Target className='z-0 top-[104px] -left-[64px] w-[67px] absolute sm:w-36 sm:bottom-0 sm:right-8' />
//         </section>
//     )
// }

// export default HeroSection