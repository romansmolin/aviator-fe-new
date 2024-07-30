import React from 'react'
import Link from 'next/link'
import { Dices } from 'lucide-react'
interface TableContentProps {
	content: string[]
}

const TableContent: React.FC<TableContentProps> = ({ content }) => {
	return (
		<ul className='lg:sticky lg:top-[65px] lg:max-w-96 border border-dashed rounded-xl h-fit py-2'>
			{content.map(item => (
				<li key={item}>
					<Link
						href={'#'}
						className="flex items-center gap-4 rounded-lg px-3 py-2 transition-all hover:text-primary"
					>
						<Dices className='w-5 h-5 flex-shrink-0' />
						<span className="flex-grow">{item}</span>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default TableContent