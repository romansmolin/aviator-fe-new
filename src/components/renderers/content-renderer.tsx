import React from 'react';
import Faq from '../faq';
import ContentSection from '../content-section';

type Content = {
    type: string;
    image: string;
    content: any;
};

interface ContentRendererProps {
    pageContent: Content[];
}

const content: Record<string, any> = {
    faq: (contentItem: any, idx: number) => <Faq key={idx} questions={contentItem.content[0].faqs} />,
    contentSection: (contentItem: any, idx: number) => <ContentSection key={idx} position={contentItem.position} text={contentItem.content} image={contentItem.image}/>
};

const ContentRenderer: React.FC<ContentRendererProps> = ({ pageContent }) => {
    return (
        <div className="flex flex-col rounded-xl py-6 gap-5 w-[100%] bg-clip-border px-5">
            {pageContent.map((contentItem, idx) => {
                const renderContent = content[contentItem.type];
                return renderContent ? renderContent(contentItem, idx) : null;
            })}
        </div>
    );
};

export default ContentRenderer;
