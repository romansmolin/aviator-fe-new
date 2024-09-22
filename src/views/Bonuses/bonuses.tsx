import React from 'react'
import { getServerQuery } from '@/shared/lib/apollo-client'
import { GET_BONUSES_BY_TYPE } from '@/shared/schemas/bonuses'
import BonusesGrid from './blocks/bonus-grid'
import { HeadingTitle, PaginationControl } from '@/components'
import { GET_PAGE_CONTENT_BY_SLUG } from '@/shared/schemas/page'
import ContentRenderer from '@/components/renderers/content-renderer'

interface BonusesProps {
    page: number
    slug: string
}

const Bonuses: React.FC<BonusesProps> = async ({ page, slug }) => {

    const { getBonusesByType } = await getServerQuery(GET_BONUSES_BY_TYPE, {
        "page": page,
        "number": 6,
        "type": "no-deposit-bonuses"
    })

    const { getPageContentBySlug } = await getServerQuery(GET_PAGE_CONTENT_BY_SLUG, {
        "slug": "no-deposit-bonuses"
    })

    return (
        <>
            <HeadingTitle>Best No Deposit Bonuses</HeadingTitle>
            <BonusesGrid bonuses={getBonusesByType.bonuses} />
            <PaginationControl totalPages={getBonusesByType.totalPages} currentPage={page} />
            <ContentRenderer pageContent={getPageContentBySlug.pageContent}/>
        </>
    )
}

export default Bonuses