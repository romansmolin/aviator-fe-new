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
					key={bonus.bonus_title} 
					casinoName={bonus.casino_name} 
					casinoLogo={bonus.casino_logo} 
					bonusTitle={bonus.bonus_title}				
				/>
			))}
		</Grid>
	)
}

export default NoDepositBonusesGrid