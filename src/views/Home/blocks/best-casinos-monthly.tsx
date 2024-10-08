import React from 'react'
import type { CasinoEntry } from '@/types'
import CasinoTopCard from '@/components/casino-top-card'
interface BestCasinosMonthlyProps {
	casinos: [CasinoEntry]
}

const BestCasinosMonthly: React.FC<BestCasinosMonthlyProps> = ({ casinos }) => {
	return (
		<div className='py-5 w-[calc(100%+21px)] md:w-[unset]'>
			<h2 className='text-xl lg:text-2xl'>Our Top 10 Casinos of July</h2>
			<div className='flex w-full overflow-x-scroll lg:overflow-auto md:flex-col gap-5 mt-5'>
				{casinos.map(casino => (
					<CasinoTopCard
						key={casino.title}
						logo={casino.logo}
						name={casino.title}
						bonus={casino.main_bonus_title}
						casinoId={casino.casino}
						rating={casino.rating}
						hasRegularOffers
						hasLiveCasino={casino.hasLiveCasino}
						hasVIPProgram={casino.hasVIPProgram}
						hasLiveChat={casino.hasLiveChat}
					/>
				))}
			</div>
		</div>
	)
}

export default BestCasinosMonthly