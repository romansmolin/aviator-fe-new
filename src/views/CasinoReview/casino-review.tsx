import React from 'react'
import { getServerQuery } from '@/lib/apollo-client'
import { GET_CASINO_BY_UUID } from '@/shared/schemas/casinos'

interface CasinoReviewProps {
    uuid: string
}

const CasinoReview: React.FC<CasinoReviewProps> = async ({ uuid }) => {
    const casinoReviewData = await getServerQuery(GET_CASINO_BY_UUID, {uuid: uuid,})
    
    return (
        <div>CasinoReview</div>
    )
}

export default CasinoReview