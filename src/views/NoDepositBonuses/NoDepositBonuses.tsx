import React from 'react'
import { getServerQuery } from '@/lib/apollo-client'
import { GET_BONUSES_BY_TYPE } from '@/shared/schemas/bonuses'
import NoDepositBonusesGrid from './blocks/NoDepositBonusGrid'

const NoDepositBonuses = async () => {

    const { getBonusesByType } = await getServerQuery(GET_BONUSES_BY_TYPE, {
        page: 1,
        number: 9,
        type: "noDepositBonus"
    })

    return (
        <>
            <NoDepositBonusesGrid bonuses={getBonusesByType.bonuses} />
        </>
    )
}

export default NoDepositBonuses