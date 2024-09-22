import React from 'react'
import { TextContentRenderer } from './renderers'
import Image from 'next/image'

type Paragraph = {
	type: string,
	children: any
}
interface ContentSectionProps {
	text: Paragraph[]
	image: {
		url: string
	}
	position?: 'rigth' | 'left'
}

const ContentSection: React.FC<ContentSectionProps> = ({ text, image, position = "left" }) => {
	return (
		<div className='flex flex-col lg:flex-row gap-5 justify-center items-center'>
			{position === 'left' && (
				<Image
					src={image.url}
					alt="Href"
					width={500}
					height={200}
					className='w-72 lg:w-auto'
				/>
			)}
			<TextContentRenderer contentData={text} className='border-none' />
			{position === 'rigth' && (
				<Image
					src={image.url}
					alt="Href"
					width={500}
					height={200}
					className='w-72 lg:w-auto'
				/>
			)}
		</div>
	)
}

export default ContentSection