import React from 'react'
import Image from 'next/image'
import { CheckIcon } from 'lucide-react'
import { Faq } from '@/components'
import { getServerQuery } from '@/lib/apollo-client'
import { GET_BONUS_BY_UUID } from '@/shared/schemas/bonuses'
import BonusRenderer from './blocks/bonus-renderer'

interface BonusPageProps {
    uuid: string
}

const redableBonusType: {[key: string]: string} = {
    noDepositBonus: 'No Deposit Bonus'
}

const BonusPage: React.FC<BonusPageProps> = async ({ uuid }) => {
    const { getBonusById } = await getServerQuery(GET_BONUS_BY_UUID, { uuid })
    const { faqInfo, casino_logo, bonusReview, casino_name, info } = getBonusById.bonus

    console.log(getBonusById.bonus)

    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-6">
            <div className="grid grid-cols-1 gap-8 md:gap-12">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className="h-[200px] bg-primary rounded-xl flex items-center justify-center">
                        <div className="w-full md:w-[150px] flex justify-center items-center">
                            <Image src={casino_logo} alt="Bonus Image" width={150} height={150} />
                        </div>
                    </div>
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
                    <Faq questions={faqInfo} heading={`${casino_name} ${redableBonusType[info.bonus_type[0]]}`}/>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <BonusRenderer bonusData={bonusReview} />
                </div>
            </div>
        </div>
    )
}

export default BonusPage