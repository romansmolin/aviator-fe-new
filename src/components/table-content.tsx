import React from 'react'
import Link from 'next/link'

interface TableContentProps {
	content: string[]
}

const TableContent: React.FC<TableContentProps> = ({ content }) => {
	return (
		<div className='lg:sticky lg:top-[65px] lg:max-w-96 border border-dashed rounded-xl h-fit'>
			{content.map(item => (
				<Link
					href={'#'}
					key={item}
					className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
				>
					{item}
				</Link>
			))}
		</div>
	)
}

export default TableContent