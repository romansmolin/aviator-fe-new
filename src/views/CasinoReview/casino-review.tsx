import React from 'react'
import { getServerQuery } from '@/lib/apollo-client'
import { GET_CASINO_BY_UUID } from '@/shared/schemas/casinos'
import ReviewTopSection from './blocks/review-top-section'
import ReviewComponent from './blocks/review-component'
import { getTableContentData } from '@/hooks/getTableContentData'
import TableContent from '@/components/table-content'

interface CasinoReviewProps {
    uuid: string
}

const CasinoReview: React.FC<CasinoReviewProps> = async ({ uuid }) => {
    const casinoReviewData = await getServerQuery(GET_CASINO_BY_UUID, {uuid: uuid,})
    const { bonus_title, logoUrl, name, features, rating, review, promos } = casinoReviewData.getCasinoByUUID
    const tableContent = getTableContentData(review)

    return (
		<>
			<ReviewTopSection
				mainBonus={bonus_title}
				logo={logoUrl}
				casinoName={name}
				features={features}
				rating={rating}
			/>
			<div className='flex flex-col lg:flex-row gap-5 mt-6 relative'>
				<TableContent content={tableContent}/>
				<ReviewComponent reviewData={review} />
			</div>
		</>    
	)
}

export default CasinoReview