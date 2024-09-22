import React from 'react';
import { TextContentRenderer } from './renderers';
import Image from 'next/image';
import { cn } from '@/shared/lib/cn';

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
	const isLeft = position === 'left';

	return (
		<div>
			<div className='grid grid-cols-1 justify-center items-center lg:grid-cols-3 lg:gap-5'>
				<div className={cn('flex justify-center col-span-2', isLeft ? 'order-1' : 'order-2')}>
					<TextContentRenderer contentData={text} className='border-none' />
				</div>
				<div className={cn('flex justify-center w-full', isLeft ? 'order-2' : 'order-2 lg:order-1')}>
					<Image
						src={image.url}
						alt="Href"
						width={500}
						height={200}
						className='w-full h-auto lg:w-auto lg:h-auto'
					/>
				</div>
			</div>
		</div>
	);
}

export default ContentSection;
