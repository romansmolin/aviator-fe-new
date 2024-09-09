import React from 'react'
import BonusPage from '@/views/Bonus/bonus-page'

interface BonusProps {
    searchParams: {
        id: string
    }
}

const Bonus: React.FC<BonusProps> = ({ searchParams }) => {
    const { id } = searchParams
    return <BonusPage uuid={id}/>
}

export default Bonus