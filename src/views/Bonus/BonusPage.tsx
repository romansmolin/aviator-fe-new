import React from 'react'
import Image from 'next/image'
import { CheckIcon } from 'lucide-react'
import { Faq } from '@/components'

const BonusPage = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="grid grid-cols-1 gap-8 md:gap-12">
                <div className='grid grid-cols-1 md:grid-cols-2 '>
                    <Image
                        src="/placeholder.svg"
                        width={1200}
                        height={800}
                        alt="Product Image"
                        className="w-full rounded-lg object-cover col-span-1"
                        style={{ aspectRatio: "1200/800", objectFit: "cover" }}
                    />
                    <div className="mt-4 grid gap-2 col-span-1 h-fit">
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-4 h-4 text-primary" />
                            <span>Premium quality materials</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-4 h-4 text-primary" />
                            <span>Backed by a 1-year warranty</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon className="w-4 h-4 text-primary" />
                            <span>Easy to clean and maintain</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <Faq />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4">Product Overview</h2>
                    <div className="space-y-4 text-black dark:text-white">
                        <p>
                            Introducing our premium product, designed to revolutionize the way you approach [product/service]. Crafted
                            with the utmost attention to detail, this [product/service] combines cutting-edge technology with
                            unparalleled functionality, delivering a seamless and efficient experience.
                        </p>
                        <p>
                            At the heart of our offering is a commitment to innovation and user-centric design.  meticulously
                            engineered every aspect of this [product/service] to ensure it exceeds your expectations, from its sleek
                            and modern aesthetic to its intuitive and responsive interface. With a focus on quality and durability,
                            you can trust that this [product/service] will stand the test of time, providing you with a reliable and
                            long-lasting solution.
                        </p>
                        <p>
                            Whether  a seasoned professional or a tech-savvy individual, our [product/service] is designed to
                            simplify your life and empower you to achieve your goals with ease. Experience the difference that our
                            commitment to excellence can make, and discover the transformative power of our premium [product/service]
                            today.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BonusPage