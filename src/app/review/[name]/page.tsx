import CasinoReview from '@/views/CasinoReview/casino-review'
import React from 'react'

interface CasinoReviewPageProps {
    searchParams: {
        id: string
    }
}

const CasinoReviewPage:React.FC<CasinoReviewPageProps> = ({ searchParams }) => {
    return <CasinoReview uuid={searchParams.id}/>
}

export default CasinoReviewPage