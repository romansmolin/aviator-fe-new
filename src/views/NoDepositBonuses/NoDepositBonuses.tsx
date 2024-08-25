import React from 'react'
import { getServerQuery } from '@/lib/apollo-client'
import { GET_BONUSES_BY_TYPE } from '@/shared/schemas/bonuses'
import NoDepositBonusesGrid from './blocks/NoDepositBonusGrid'
import { HeadingTitle, PaginationControl } from '@/components'

interface NoDepositBonusesProps {
    page: number
}

const NoDepositBonuses: React.FC<NoDepositBonusesProps> = async ({ page }) => {

    const { getBonusesByType } = await getServerQuery(GET_BONUSES_BY_TYPE, {
        "page": page,
        "number": 6,
        "type": "noDepositBonus"
    })

    return (
        <>
            <HeadingTitle>Best No Deposit Bonuses</HeadingTitle>
            <NoDepositBonusesGrid bonuses={getBonusesByType.bonuses} />
            <PaginationControl totalPages={getBonusesByType.totalPages} currentPage={page}/>
        </>
    )
}

export default NoDepositBonuses