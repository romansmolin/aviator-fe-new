import React from 'react'
import { getServerQuery } from '@/shared/lib/apollo-client'
import { GET_BONUSES_BY_TYPE } from '@/shared/schemas/bonuses'
import NoDepositBonusesGrid from './blocks/no-deposit-bonus-grid'
import { HeadingTitle, PaginationControl } from '@/components'
import { GET_PAGE_CONTENT_BY_SLUG } from '@/shared/schemas/page'

interface NoDepositBonusesProps {
    page: number
    slug: string
}

const NoDepositBonuses: React.FC<NoDepositBonusesProps> = async ({ page, slug }) => {

    const { getBonusesByType } = await getServerQuery(GET_BONUSES_BY_TYPE, {
        "page": page,
        "number": 6,
        "type": "noDepositBonus"
    })

    const { getPageContentBySlug } =  await getServerQuery(GET_PAGE_CONTENT_BY_SLUG, {
        "slug": "no-deposit-bonuses"
    })

    console.log(getPageContentBySlug)

    return (
        <>
            <HeadingTitle>Best No Deposit Bonuses</HeadingTitle>
            <NoDepositBonusesGrid bonuses={getBonusesByType.bonuses} />
            <PaginationControl totalPages={getBonusesByType.totalPages} currentPage={page} />
        </>
    )
}

export default NoDepositBonuses