import React from 'react'
import BonusCard from '@/components/bonus-card'
import { BonusEntry } from '@/types'

interface BestBonusesMonthlyProps {
    bonuses: BonusEntry[]
}

const BestBonusesMonthly: React.FC<BestBonusesMonthlyProps> = ({ bonuses }) => {
    return (
        <div className='py-5 w-[calc(100%+21px)] md:w-[unset]'>
            <h2 className='text-xl lg:text-2xl'>Our Top 9 Bonuses of July</h2>
            <div className='flex w-full overflow-x-scroll lg:overflow-auto md:grid md:grid-cols-2 xl:grid-cols-3 gap-5 bg-transparent mt-5'>
                {bonuses.map(bonus => (
                    <BonusCard 
                        key={bonus.casino_name}
                        casinoName={bonus.casino_name}
                        bonusTitle={bonus.bonus_title}
                        casinoLogo={bonus.casino_logo}
                        uuid={bonus.uuid}
                        bonusType={bonus.info.bonus_type[0]}
                    />
                ))}
            </div>
        </div>
    )
}

export default BestBonusesMonthly