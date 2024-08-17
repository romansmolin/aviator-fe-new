import React from 'react'
import { Grid, BonusCard } from '@/components'
import type { BonusEntry } from '@/types'

interface NoDepositBonusGridProps {
	bonuses: BonusEntry[]
}

const NoDepositBonusesGrid: React.FC<NoDepositBonusGridProps> = ({ bonuses }) => {
	return (
		<Grid>
			{bonuses.map(bonus => (
				<BonusCard
					key={''} 
					casinoName={''} 
					casinoLogo={''} 
					bonusTitle={''}				
				/>
			))}
		</Grid>
	)
}

export default NoDepositBonusesGrid